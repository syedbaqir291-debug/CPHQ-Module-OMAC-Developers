/* ============================================================
   CPHQ Session 1 Portal — app logic
   ============================================================ */

// ---------------- View switching ----------------
function showView(id){
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  document.querySelectorAll('.topbar nav button').forEach(b => b.classList.remove('active'));
  window.scrollTo({top:0, behavior:'smooth'});
}

function goHome(){
  showView('view-home');
  document.getElementById('nav-home').classList.add('active');
}

function goNotes(){
  showView('view-notes');
  document.getElementById('nav-notes').classList.add('active');
  if (notesState.moduleIndex === null){
    selectModule(0);
  } else {
    renderModuleList();
    renderNoteCard();
  }
}

function goQuizHome(){
  showView('view-quiz-home');
  document.getElementById('nav-quiz').classList.add('active');
  renderCategoryGrid();
}

function goExamHome(){
  showView('view-exam-home');
  document.getElementById('nav-exam').classList.add('active');
  renderExamModuleGrid();
}

// ================================================================
// PROGRESS TRACKING (per module, in-memory for this session)
// ================================================================
const progress = {};
NOTES_MODULES.forEach(mod => {
  progress[mod.id] = { notesDone: false, examPassed: false, examBestPct: null };
});

// ================================================================
// STUDY NOTES
// ================================================================
const notesState = {
  moduleIndex: null,
  cardIndex: 0
};

function renderModuleList(){
  const list = document.getElementById('module-list');
  list.innerHTML = '';
  NOTES_MODULES.forEach((mod, idx) => {
    const div = document.createElement('div');
    div.className = 'module-item' + (idx === notesState.moduleIndex ? ' active' : '');
    const progressPct = idx === notesState.moduleIndex
      ? Math.round(((notesState.cardIndex + 1) / mod.cards.length) * 100)
      : (progress[mod.id].notesDone ? 100 : 0);
    const p = progress[mod.id];
    let badge = '';
    if (p.examPassed) badge = '<span class="mod-badge pass">&#10003; Exam passed</span>';
    else if (p.notesDone && EXAM_BANKS[mod.id]) badge = '<span class="mod-badge ready">Exam ready</span>';
    else if (p.notesDone) badge = '<span class="mod-badge done">Notes complete</span>';
    div.innerHTML = `
      <div class="num">MODULE ${idx + 1} OF ${NOTES_MODULES.length}</div>
      <h4>${mod.title}</h4>
      <p>${mod.blurb}</p>
      ${badge}
      <div class="progress-track"><div class="progress-fill" style="width:${progressPct}%"></div></div>
    `;
    div.onclick = () => selectModule(idx);
    list.appendChild(div);
  });
}

function selectModule(idx){
  notesState.moduleIndex = idx;
  notesState.cardIndex = 0;
  renderModuleList();
  renderNoteCard();
}

function renderRunChart(total, currentIdx){
  // Build an SVG "run chart" style progress strip: dots connected by a line,
  // trending toward the target (last point), with completed points filled.
  const width = 700, height = 54, pad = 24;
  const usableW = width - pad * 2;
  const step = total > 1 ? usableW / (total - 1) : 0;
  const baseY = 38;
  const topY = 14;

  let points = [];
  for (let i = 0; i < total; i++){
    const x = pad + step * i;
    // gentle wave trending down (toward "target") to evoke a run chart
    const progressFrac = total > 1 ? i / (total - 1) : 0;
    const y = baseY - progressFrac * (baseY - topY);
    points.push([x, y]);
  }

  const linePath = points.map((p,i) => (i===0?'M':'L') + p[0].toFixed(1) + ',' + p[1].toFixed(1)).join(' ');

  let dots = points.map((p,i) => {
    let cls = 'pt';
    if (i < currentIdx) cls += ' done';
    if (i === currentIdx) cls += ' current';
    const r = i === currentIdx ? 6 : 4.5;
    return `<circle class="${cls}" cx="${p[0].toFixed(1)}" cy="${p[1].toFixed(1)}" r="${r}"></circle>`;
  }).join('');

  return `
    <svg class="runchart" viewBox="0 0 ${width} ${height}" preserveAspectRatio="none">
      <line class="target-line" x1="${pad}" y1="${topY}" x2="${width-pad}" y2="${topY}"></line>
      <path class="run-line" d="${linePath}"></path>
      ${dots}
    </svg>
  `;
}

function renderNoteCard(){
  const mod = NOTES_MODULES[notesState.moduleIndex];
  const card = mod.cards[notesState.cardIndex];
  const panel = document.getElementById('note-panel');
  const isLastCardOfModule = notesState.cardIndex === mod.cards.length - 1;
  const isVeryLastCard = isLastCardOfModule && notesState.moduleIndex === NOTES_MODULES.length - 1;
  const hasExam = !!EXAM_BANKS[mod.id];

  let nextLabel = 'Next \u2192';
  if (isLastCardOfModule && hasExam) nextLabel = 'Finish module \u2192';
  else if (isVeryLastCard) nextLabel = 'Finish module \u2192';

  panel.innerHTML = `
    <div class="module-title">Module ${notesState.moduleIndex + 1} &middot; ${mod.title}</div>
    <h3>${card.heading}</h3>
    ${renderRunChart(mod.cards.length, notesState.cardIndex)}
    <div class="note-content">${card.html}</div>
    <div class="note-nav">
      <button class="btn btn-ghost" id="prev-card-btn" ${ (notesState.cardIndex===0 && notesState.moduleIndex===0) ? 'disabled' : '' }>&larr; Back</button>
      <div class="step-indicator">Topic ${notesState.cardIndex + 1} of ${mod.cards.length}</div>
      <button class="btn btn-primary" id="next-card-btn">${nextLabel}</button>
    </div>
  `;

  document.getElementById('prev-card-btn').onclick = prevCard;
  document.getElementById('next-card-btn').onclick = () => {
    if (isLastCardOfModule){
      const wasAlreadyDone = progress[mod.id].notesDone;
      progress[mod.id].notesDone = true;
      if (hasExam && !wasAlreadyDone){
        showModuleFinishedPrompt(mod);
        return;
      }
    }
    nextCard();
  };

  renderModuleList();
}

function showModuleFinishedPrompt(mod){
  const panel = document.getElementById('note-panel');
  panel.innerHTML = `
    <div class="module-finished">
      <div class="icon">&#127881;</div>
      <h3>Module ${NOTES_MODULES.indexOf(mod) + 1} notes complete</h3>
      <p>You've worked through every topic in &ldquo;${mod.title}.&rdquo; Take the Exam Quiz for this module now to lock in what you've learned, or keep browsing the notes.</p>
      <div class="module-finished-actions">
        <button class="btn btn-primary" id="goto-exam-btn">Take the Exam Quiz &rarr;</button>
        <button class="btn btn-ghost" id="keep-reading-btn">Keep reading notes</button>
      </div>
    </div>
  `;
  document.getElementById('goto-exam-btn').onclick = () => startExam(mod.id);
  document.getElementById('keep-reading-btn').onclick = () => { nextCard(); };
  renderModuleList();
}

function nextCard(){
  const mod = NOTES_MODULES[notesState.moduleIndex];
  if (notesState.cardIndex < mod.cards.length - 1){
    notesState.cardIndex++;
  } else if (notesState.moduleIndex < NOTES_MODULES.length - 1){
    notesState.moduleIndex++;
    notesState.cardIndex = 0;
  }
  renderNoteCard();
}

function prevCard(){
  if (notesState.cardIndex > 0){
    notesState.cardIndex--;
  } else if (notesState.moduleIndex > 0){
    notesState.moduleIndex--;
    notesState.cardIndex = NOTES_MODULES[notesState.moduleIndex].cards.length - 1;
  }
  renderNoteCard();
}

// ================================================================
// QUIZ
// ================================================================
const quizState = {
  categoryName: null,   // null = full exam
  questions: [],
  index: 0,
  score: 0,
  answers: [],          // {selected: idx, correct: bool}
};

function renderCategoryGrid(){
  const grid = document.getElementById('category-grid');
  grid.innerHTML = '';

  const allCard = document.createElement('div');
  allCard.className = 'cat-card all';
  allCard.innerHTML = `
    <div>
      <h4>&#127919; Full Practice Exam</h4>
      <div class="count">${QUIZ_QUESTIONS.length} questions &middot; all categories, in order</div>
    </div>
    <div class="icon">&#9656;</div>
  `;
  allCard.onclick = () => startQuiz(null);
  grid.appendChild(allCard);

  QUIZ_CATEGORIES.forEach(cat => {
    const card = document.createElement('div');
    card.className = 'cat-card';
    card.innerHTML = `
      <span class="icon">${cat.icon}</span>
      <h4>${cat.short}</h4>
      <div class="count">${cat.count} questions</div>
    `;
    card.onclick = () => startQuiz(cat.name);
    grid.appendChild(card);
  });
}

function startQuiz(categoryName){
  quizState.categoryName = categoryName;
  quizState.questions = categoryName
    ? QUIZ_QUESTIONS.filter(q => q.category === categoryName)
    : QUIZ_QUESTIONS.slice();
  quizState.index = 0;
  quizState.score = 0;
  quizState.answers = [];
  showView('view-quiz-play');
  document.getElementById('nav-quiz').classList.add('active');
  renderQuestion();
}

function currentCategoryLabel(){
  if (!quizState.categoryName) return 'Full Practice Exam';
  const cat = QUIZ_CATEGORIES.find(c => c.name === quizState.categoryName);
  return cat ? cat.short : quizState.categoryName;
}

function renderQuestion(){
  const q = quizState.questions[quizState.index];
  const total = quizState.questions.length;

  document.getElementById('quiz-cat-label').textContent = currentCategoryLabel();
  document.getElementById('quiz-bar').style.width = (((quizState.index) / total) * 100) + '%';
  document.getElementById('quiz-score-pill').textContent = `Score: ${quizState.score} / ${quizState.index}`;

  const letters = ['A','B','C','D'];
  const card = document.getElementById('question-card');
  card.innerHTML = `
    <div style="font-family:var(--mono); font-size:0.78rem; color:var(--ink-soft); margin-bottom:10px;">Question ${quizState.index + 1} of ${total}</div>
    <h3>${q.question}</h3>
    <div class="options" id="options-wrap">
      ${q.options.map((opt,i) => `
        <button class="option" data-idx="${i}">
          <span class="opt-letter">${letters[i]}</span>
          <span>${opt}</span>
        </button>
      `).join('')}
    </div>
    <div id="feedback-wrap"></div>
  `;

  document.querySelectorAll('#options-wrap .option').forEach(btn => {
    btn.onclick = () => selectOption(parseInt(btn.dataset.idx, 10));
  });

  document.getElementById('quiz-next-btn').disabled = true;
  document.getElementById('quiz-next-btn').textContent =
    (quizState.index === total - 1) ? 'See results \u2192' : 'Next Question \u2192';
}

function selectOption(selectedIdx){
  const q = quizState.questions[quizState.index];
  if (quizState.answers[quizState.index] !== undefined) return; // already answered

  const isCorrect = selectedIdx === q.correct;
  quizState.answers[quizState.index] = { selected: selectedIdx, correct: isCorrect };
  if (isCorrect) quizState.score++;

  document.querySelectorAll('#options-wrap .option').forEach((btn, i) => {
    btn.classList.add('locked');
    if (i === q.correct) btn.classList.add('correct');
    if (i === selectedIdx && !isCorrect) btn.classList.add('incorrect');
  });

  const letters = ['A','B','C','D'];
  const feedback = document.getElementById('feedback-wrap');
  feedback.innerHTML = `
    <div class="feedback ${isCorrect ? 'correct' : 'incorrect'}">
      <div class="verdict">${isCorrect ? '\u2713 Correct' : '\u2717 Not quite \u2014 correct answer: ' + letters[q.correct]}</div>
      <div class="explain"><strong>Why:</strong> ${q.explanation}</div>
    </div>
  `;

  document.getElementById('quiz-score-pill').textContent = `Score: ${quizState.score} / ${quizState.index + 1}`;
  document.getElementById('quiz-next-btn').disabled = false;
}

function nextQuestion(){
  if (quizState.index < quizState.questions.length - 1){
    quizState.index++;
    renderQuestion();
  } else {
    showResults();
  }
}

function showResults(){
  showView('view-quiz-results');
  document.getElementById('nav-quiz').classList.add('active');

  const total = quizState.questions.length;
  const score = quizState.score;
  const pct = Math.round((score / total) * 100);

  document.getElementById('gauge-wrap').innerHTML = renderGauge(pct);
  document.getElementById('results-heading').textContent = `${score} / ${total} correct`;

  let verdict;
  if (pct >= 85) verdict = "Excellent \u2014 you're exam-ready on this set.";
  else if (pct >= 70) verdict = "Solid grasp \u2014 review the missed items below and try again.";
  else if (pct >= 50) verdict = "Getting there \u2014 revisit the related study-note modules before retaking.";
  else verdict = "This set needs more review \u2014 work through the study notes, then retake.";
  document.getElementById('results-verdict').textContent = verdict;

  // Breakdown by category (only meaningful for full exam, but show for any set)
  const breakdown = document.getElementById('results-breakdown');
  const byCat = {};
  quizState.questions.forEach((q, i) => {
    byCat[q.category] = byCat[q.category] || { correct: 0, total: 0 };
    byCat[q.category].total++;
    if (quizState.answers[i] && quizState.answers[i].correct) byCat[q.category].correct++;
  });
  breakdown.innerHTML = Object.keys(byCat).map(catName => {
    const meta = QUIZ_CATEGORIES.find(c => c.name === catName) || { icon: '\ud83d\udcdd', short: catName };
    const b = byCat[catName];
    return `
      <div class="row">
        <span class="icon">${meta.icon}</span>
        <span class="label">${meta.short}</span>
        <span class="frac">${b.correct} / ${b.total}</span>
      </div>
    `;
  }).join('');

  // Review list — missed questions
  const reviewList = document.getElementById('review-list');
  const letters = ['A','B','C','D'];
  const missed = quizState.questions
    .map((q, i) => ({ q, ans: quizState.answers[i] }))
    .filter(item => item.ans && !item.ans.correct);

  if (missed.length === 0){
    reviewList.innerHTML = `<h3>Review</h3><div class="review-item hit"><div class="rq">Every question in this set was answered correctly. Nicely done.</div></div>`;
  } else {
    reviewList.innerHTML = `<h3>Review &mdash; ${missed.length} question${missed.length>1?'s':''} to revisit</h3>` +
      missed.map(item => `
        <div class="review-item miss">
          <div class="rq">${item.q.question}</div>
          <div class="ra">You chose <strong>${letters[item.ans.selected]}. ${item.q.options[item.ans.selected]}</strong> &mdash;
          correct answer is <strong>${letters[item.q.correct]}. ${item.q.options[item.q.correct]}</strong>.<br>${item.q.explanation}</div>
        </div>
      `).join('');
  }

  document.getElementById('retake-btn').onclick = () => startQuiz(quizState.categoryName);
}

function renderGauge(pct){
  const r = 70, cx = 90, cy = 90;
  const circumference = 2 * Math.PI * r;
  const offset = circumference * (1 - pct / 100);
  let color = 'var(--bad)';
  if (pct >= 70) color = 'var(--good)';
  else if (pct >= 50) color = 'var(--amber)';

  return `
    <svg width="180" height="180" viewBox="0 0 180 180">
      <circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="var(--line)" stroke-width="14"></circle>
      <circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${color}" stroke-width="14"
        stroke-dasharray="${circumference.toFixed(1)}" stroke-dashoffset="${offset.toFixed(1)}"
        stroke-linecap="round" transform="rotate(-90 ${cx} ${cy})"></circle>
      <text x="${cx}" y="${cy - 4}" text-anchor="middle" class="gauge-score">${pct}%</text>
      <text x="${cx}" y="${cy + 20}" text-anchor="middle" class="gauge-label">SCORE</text>
    </svg>
  `;
}

// ================================================================
// EXAM QUIZ — one gated, scored sitting per module
// ================================================================
const examState = {
  moduleId: null,
  questions: [],
  index: 0,
  score: 0,
  answers: [],
};

function renderExamModuleGrid(){
  const grid = document.getElementById('exam-module-grid');
  grid.innerHTML = '';

  NOTES_MODULES.forEach((mod, idx) => {
    const bank = EXAM_BANKS[mod.id];
    const card = document.createElement('div');
    const p = progress[mod.id];

    if (!bank){
      card.className = 'cat-card disabled';
      card.innerHTML = `
        <span class="icon">&#128274;</span>
        <h4>Module ${idx + 1}: ${mod.title}</h4>
        <div class="count">Exam quiz coming soon</div>
      `;
      grid.appendChild(card);
      return;
    }

    let statusLine = `${bank.length} questions &middot; pass at ${EXAM_PASS_PCT}%`;
    let icon = '&#127919;';
    if (p.examPassed){
      statusLine = `Passed &middot; best score ${p.examBestPct}%`;
      icon = '&#9989;';
    } else if (!p.notesDone){
      statusLine = `Finish the study notes first &middot; ${bank.length} questions`;
      icon = '&#128214;';
    }

    card.className = 'cat-card' + (p.examPassed ? ' passed' : '');
    card.innerHTML = `
      <span class="icon">${icon}</span>
      <h4>Module ${idx + 1}: ${mod.title}</h4>
      <div class="count">${statusLine}</div>
    `;
    card.onclick = () => startExam(mod.id);
    grid.appendChild(card);
  });
}

function startExam(moduleId){
  const bank = EXAM_BANKS[moduleId];
  if (!bank) return;
  examState.moduleId = moduleId;
  examState.questions = bank.slice();
  examState.index = 0;
  examState.score = 0;
  examState.answers = [];
  showView('view-exam-play');
  document.getElementById('nav-exam').classList.add('active');
  renderExamQuestion();
}

function currentExamModuleTitle(){
  const mod = NOTES_MODULES.find(m => m.id === examState.moduleId);
  return mod ? `Module ${NOTES_MODULES.indexOf(mod) + 1} Exam &middot; ${mod.title}` : 'Exam Quiz';
}

function renderExamQuestion(){
  const q = examState.questions[examState.index];
  const total = examState.questions.length;

  document.getElementById('exam-cat-label').textContent = currentExamModuleTitle();
  document.getElementById('exam-bar').style.width = (((examState.index) / total) * 100) + '%';
  document.getElementById('exam-score-pill').textContent = `Score: ${examState.score} / ${examState.index}`;

  const letters = ['A','B','C','D'];
  const card = document.getElementById('exam-question-card');
  card.innerHTML = `
    <div style="font-family:var(--mono); font-size:0.78rem; color:var(--ink-soft); margin-bottom:10px;">Question ${examState.index + 1} of ${total}</div>
    <h3>${q.question}</h3>
    <div class="options" id="exam-options-wrap">
      ${q.options.map((opt,i) => `
        <button class="option" data-idx="${i}">
          <span class="opt-letter">${letters[i]}</span>
          <span>${opt}</span>
        </button>
      `).join('')}
    </div>
    <div id="exam-feedback-wrap"></div>
  `;

  document.querySelectorAll('#exam-options-wrap .option').forEach(btn => {
    btn.onclick = () => selectExamOption(parseInt(btn.dataset.idx, 10));
  });

  document.getElementById('exam-next-btn').disabled = true;
  document.getElementById('exam-next-btn').textContent =
    (examState.index === total - 1) ? 'See results \u2192' : 'Next Question \u2192';
}

function selectExamOption(selectedIdx){
  const q = examState.questions[examState.index];
  if (examState.answers[examState.index] !== undefined) return;

  const isCorrect = selectedIdx === q.correct;
  examState.answers[examState.index] = { selected: selectedIdx, correct: isCorrect };
  if (isCorrect) examState.score++;

  document.querySelectorAll('#exam-options-wrap .option').forEach((btn, i) => {
    btn.classList.add('locked');
    if (i === q.correct) btn.classList.add('correct');
    if (i === selectedIdx && !isCorrect) btn.classList.add('incorrect');
  });

  const letters = ['A','B','C','D'];
  const feedback = document.getElementById('exam-feedback-wrap');
  feedback.innerHTML = `
    <div class="feedback ${isCorrect ? 'correct' : 'incorrect'}">
      <div class="verdict">${isCorrect ? '\u2713 Correct' : '\u2717 Not quite \u2014 correct answer: ' + letters[q.correct]}</div>
      <div class="explain"><strong>Why:</strong> ${q.explanation}</div>
    </div>
  `;

  document.getElementById('exam-score-pill').textContent = `Score: ${examState.score} / ${examState.index + 1}`;
  document.getElementById('exam-next-btn').disabled = false;
}

function nextExamQuestion(){
  if (examState.index < examState.questions.length - 1){
    examState.index++;
    renderExamQuestion();
  } else {
    showExamResults();
  }
}

function showExamResults(){
  showView('view-exam-results');
  document.getElementById('nav-exam').classList.add('active');

  const total = examState.questions.length;
  const score = examState.score;
  const pct = Math.round((score / total) * 100);
  const passed = pct >= EXAM_PASS_PCT;
  const mod = NOTES_MODULES.find(m => m.id === examState.moduleId);

  const p = progress[examState.moduleId];
  if (p.examBestPct === null || pct > p.examBestPct) p.examBestPct = pct;
  if (passed) p.examPassed = true;

  document.getElementById('exam-gauge-wrap').innerHTML = renderGauge(pct);
  document.getElementById('exam-results-heading').textContent = `${score} / ${total} correct`;
  document.getElementById('exam-pass-badge').innerHTML = passed
    ? `<div class="pass-badge pass">&#9989; Passed &mdash; Module ${NOTES_MODULES.indexOf(mod)+1} complete</div>`
    : `<div class="pass-badge fail">Not yet at ${EXAM_PASS_PCT}% &mdash; give it another pass</div>`;

  let verdict;
  if (pct >= 90) verdict = "Excellent command of this module's material.";
  else if (passed) verdict = "Passed \u2014 review the missed items below to fully lock it in.";
  else verdict = "Revisit the study notes for this module, then retake the exam when ready.";
  document.getElementById('exam-results-verdict').textContent = verdict;

  const breakdown = document.getElementById('exam-results-breakdown');
  const byCat = {};
  examState.questions.forEach((q, i) => {
    byCat[q.category] = byCat[q.category] || { correct: 0, total: 0 };
    byCat[q.category].total++;
    if (examState.answers[i] && examState.answers[i].correct) byCat[q.category].correct++;
  });
  breakdown.innerHTML = Object.keys(byCat).map(catName => {
    const meta = QUIZ_CATEGORIES.find(c => c.name === catName) || { icon: '\ud83d\udcdd', short: catName };
    const b = byCat[catName];
    return `
      <div class="row">
        <span class="icon">${meta.icon}</span>
        <span class="label">${meta.short}</span>
        <span class="frac">${b.correct} / ${b.total}</span>
      </div>
    `;
  }).join('');

  const reviewList = document.getElementById('exam-review-list');
  const letters = ['A','B','C','D'];
  const missed = examState.questions
    .map((q, i) => ({ q, ans: examState.answers[i] }))
    .filter(item => item.ans && !item.ans.correct);

  if (missed.length === 0){
    reviewList.innerHTML = `<h3>Review</h3><div class="review-item hit"><div class="rq">Every question in this exam was answered correctly. Nicely done.</div></div>`;
  } else {
    reviewList.innerHTML = `<h3>Review &mdash; ${missed.length} question${missed.length>1?'s':''} to revisit</h3>` +
      missed.map(item => `
        <div class="review-item miss">
          <div class="rq">${item.q.question}</div>
          <div class="ra">You chose <strong>${letters[item.ans.selected]}. ${item.q.options[item.ans.selected]}</strong> &mdash;
          correct answer is <strong>${letters[item.q.correct]}. ${item.q.options[item.q.correct]}</strong>.<br>${item.q.explanation}</div>
        </div>
      `).join('');
  }

  document.getElementById('exam-retake-btn').onclick = () => startExam(examState.moduleId);
}

// ---------------- Init ----------------
goHome();
