/* ============================================================
   OMAC CPHQ Preparation Module -- app logic
   Hierarchy: Home (module list) -> Module Home (3 tabs) ->
              Study Notes / Practice Quiz / Exam Quiz, all scoped
              to the currently active course module.
   ============================================================ */

// ---------------- View switching ----------------
function showView(id){
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  document.querySelectorAll('#module-tabs button').forEach(b => b.classList.remove('active'));
  window.scrollTo({top:0, behavior:'smooth'});
}

let activeModuleId = null;

function activeModule(){
  return COURSE_MODULES.find(m => m.id === activeModuleId) || COURSE_MODULES[0];
}

function goHome(){
  activeModuleId = null;
  document.getElementById('module-tabs').style.display = 'none';
  document.getElementById('topbar-subtitle').textContent = 'CPHQ Exam Preparation';
  showView('view-home');
  renderModuleCardGrid();
}

function goModuleHome(moduleId){
  if (moduleId) activeModuleId = moduleId;
  const cm = activeModule();
  document.getElementById('module-tabs').style.display = 'flex';
  document.getElementById('topbar-subtitle').textContent = courseModuleLabel(cm) + ' \u00b7 ' + cm.blurb;
  showView('view-module-home');
  renderModuleHomeView(cm);
}

function goModuleNotes(){
  const cm = activeModule();
  showView('view-notes');
  document.getElementById('tab-notes').classList.add('active');
  document.getElementById('notes-section-label').textContent = courseModuleLabel(cm) + ' \u00b7 Study Notes';
  if (notesState.chapterIndex === null || notesState.scopeModuleId !== cm.id){
    selectChapter(cm, 0);
  } else {
    renderModuleList(cm);
    renderNoteCard(cm);
  }
}

function goModulePractice(){
  const cm = activeModule();
  showView('view-quiz-home');
  document.getElementById('tab-quiz').classList.add('active');
  document.getElementById('quiz-section-label').textContent = courseModuleLabel(cm) + ' \u00b7 Practice Quiz';
  renderCategoryGrid(cm);
}

function goModuleExam(){
  const cm = activeModule();
  document.getElementById('tab-exam').classList.add('active');
  startExam(cm);
}

// ================================================================
// HOME -- module card grid
// ================================================================
function renderModuleCardGrid(){
  const grid = document.getElementById('module-card-grid');
  grid.innerHTML = '';
  COURSE_MODULES.forEach(cm => {
    const p = getProgress(cm.id);
    const chapters = chaptersFor(cm);
    const examBank = EXAM_BANKS[cm.examBankKey] || [];

    let statusBadge = '';
    if (p.examPassed) statusBadge = '<span class="mod-badge pass">&#10003; Exam passed</span>';
    else if (p.notesDone) statusBadge = '<span class="mod-badge ready">Notes complete</span>';

    const card = document.createElement('div');
    card.className = 'module-card';
    card.innerHTML = `
      <div class="module-card-eyebrow">${cm.title}</div>
      <h3>${cm.name || 'Name coming soon'}</h3>
      <p>${cm.blurb}</p>
      <div class="module-card-meta">${chapters.length} note chapters &middot; ${practiceQuestionsFor(cm).length} practice Qs &middot; ${examBank.length} exam Qs</div>
      ${statusBadge}
      <div class="cta">Open module <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></div>
    `;
    card.onclick = () => goModuleHome(cm.id);
    grid.appendChild(card);
  });
}

// ================================================================
// MODULE HOME -- overview + 3 entry cards (Notes / Practice / Exam)
// ================================================================
function renderModuleHomeView(cm){
  document.getElementById('module-home-eyebrow').textContent = cm.title;
  document.getElementById('module-home-title').textContent = cm.name || 'Name coming soon';
  document.getElementById('module-home-blurb').textContent = cm.blurb;

  const p = getProgress(cm.id);
  const chapters = chaptersFor(cm);
  const practiceQs = practiceQuestionsFor(cm);
  const examBank = EXAM_BANKS[cm.examBankKey] || [];

  const grid = document.getElementById('module-home-grid');
  grid.innerHTML = `
    <div class="home-card notes" onclick="goModuleNotes()">
      <div class="icon">&#128218;</div>
      <h3>Study Notes</h3>
      <p>${chapters.length} chapters covering this module's material heading-by-heading.</p>
      <div class="cta">Start reading <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></div>
    </div>
    <div class="home-card quiz" onclick="goModulePractice()">
      <div class="icon">&#128221;</div>
      <h3>Practice Quiz</h3>
      <p>${practiceQs.length} scenario-based MCQs for this module, by category, with instant feedback.</p>
      <div class="cta">Start quiz <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></div>
    </div>
    <div class="home-card exam" onclick="goModuleExam()">
      <div class="icon">&#127919;</div>
      <h3>Exam Quiz</h3>
      <p>${examBank.length} questions &middot; one scored sitting, pass at ${EXAM_PASS_PCT}%. ${p.examPassed ? 'Passed \u2014 best score ' + p.examBestPct + '%.' : (p.notesDone ? 'Ready when you are.' : 'Best after finishing the notes.')}</p>
      <div class="cta">${p.examPassed ? 'Retake exam' : 'Take exam'} <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></div>
    </div>
  `;
}

// ================================================================
// PROGRESS TRACKING (per course module, in-memory for this session)
// ================================================================
const progressStore = {};
function getProgress(courseModuleId){
  if (!progressStore[courseModuleId]){
    progressStore[courseModuleId] = { notesDone: false, examPassed: false, examBestPct: null };
  }
  return progressStore[courseModuleId];
}

// ================================================================
// Helpers scoping shared data arrays to a course module
// ================================================================
function chaptersFor(cm){
  return NOTES_MODULES.filter(ch => cm.noteChapterIds.includes(ch.id));
}
function practiceQuestionsFor(cm){
  if (!cm.quizCategories) return QUIZ_QUESTIONS.slice();
  return QUIZ_QUESTIONS.filter(q => cm.quizCategories.includes(q.category));
}
function practiceCategoriesFor(cm){
  if (!cm.quizCategories) return QUIZ_CATEGORIES.slice();
  return QUIZ_CATEGORIES.filter(c => cm.quizCategories.includes(c.name));
}

// ================================================================
// STUDY NOTES
// ================================================================
const notesState = {
  scopeModuleId: null,  // course module id this state belongs to
  chapterIndex: null,
  cardIndex: 0
};

function renderModuleList(cm){
  const chapters = chaptersFor(cm);
  const list = document.getElementById('module-list');
  list.innerHTML = '';
  chapters.forEach((chapter, idx) => {
    const div = document.createElement('div');
    div.className = 'module-item' + (idx === notesState.chapterIndex ? ' active' : '');
    const progressPct = idx === notesState.chapterIndex
      ? Math.round(((notesState.cardIndex + 1) / chapter.cards.length) * 100)
      : (idx < notesState.chapterIndex ? 100 : 0);
    div.innerHTML = `
      <div class="num">CHAPTER ${idx + 1} OF ${chapters.length}</div>
      <h4>${chapter.title}</h4>
      <p>${chapter.blurb}</p>
      <div class="progress-track"><div class="progress-fill" style="width:${progressPct}%"></div></div>
    `;
    div.onclick = () => selectChapter(cm, idx);
    list.appendChild(div);
  });
}

function selectChapter(cm, idx){
  notesState.scopeModuleId = cm.id;
  notesState.chapterIndex = idx;
  notesState.cardIndex = 0;
  renderModuleList(cm);
  renderNoteCard(cm);
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

function renderNoteCard(cm){
  const chapters = chaptersFor(cm);
  const chapter = chapters[notesState.chapterIndex];
  const card = chapter.cards[notesState.cardIndex];
  const panel = document.getElementById('note-panel');
  const isLastCardOfChapter = notesState.cardIndex === chapter.cards.length - 1;
  const isVeryLastCard = isLastCardOfChapter && notesState.chapterIndex === chapters.length - 1;
  const hasExam = !!EXAM_BANKS[cm.examBankKey];

  let nextLabel = 'Next \u2192';
  if (isVeryLastCard) nextLabel = 'Finish module \u2192';

  panel.innerHTML = `
    <div class="module-title">${courseModuleLabel(cm)} &middot; Chapter ${notesState.chapterIndex + 1} &middot; ${chapter.title}</div>
    <h3>${card.heading}</h3>
    ${renderRunChart(chapter.cards.length, notesState.cardIndex)}
    <div class="note-content">${card.html}</div>
    <div class="note-nav">
      <button class="btn btn-ghost" id="prev-card-btn" ${ (notesState.cardIndex===0 && notesState.chapterIndex===0) ? 'disabled' : '' }>&larr; Back</button>
      <div class="step-indicator">Topic ${notesState.cardIndex + 1} of ${chapter.cards.length}</div>
      <button class="btn btn-primary" id="next-card-btn">${nextLabel}</button>
    </div>
  `;

  document.getElementById('prev-card-btn').onclick = () => prevCard(cm);
  document.getElementById('next-card-btn').onclick = () => {
    if (isVeryLastCard){
      const wasAlreadyDone = getProgress(cm.id).notesDone;
      getProgress(cm.id).notesDone = true;
      if (hasExam && !wasAlreadyDone){
        showModuleFinishedPrompt(cm);
        return;
      }
    }
    nextCard(cm);
  };

  renderModuleList(cm);
}

function showModuleFinishedPrompt(cm){
  const panel = document.getElementById('note-panel');
  panel.innerHTML = `
    <div class="module-finished">
      <div class="icon">&#127881;</div>
      <h3>${courseModuleLabel(cm)} notes complete</h3>
      <p>You've worked through every chapter in this module. Take the Exam Quiz now to lock in what you've learned, or keep browsing the notes.</p>
      <div class="module-finished-actions">
        <button class="btn btn-primary" id="goto-exam-btn">Take the Exam Quiz &rarr;</button>
        <button class="btn btn-ghost" id="keep-reading-btn">Keep reading notes</button>
      </div>
    </div>
  `;
  document.getElementById('goto-exam-btn').onclick = () => startExam(cm);
  document.getElementById('keep-reading-btn').onclick = () => { renderNoteCard(cm); };
  renderModuleList(cm);
}

function nextCard(cm){
  const chapters = chaptersFor(cm);
  const chapter = chapters[notesState.chapterIndex];
  if (notesState.cardIndex < chapter.cards.length - 1){
    notesState.cardIndex++;
  } else if (notesState.chapterIndex < chapters.length - 1){
    notesState.chapterIndex++;
    notesState.cardIndex = 0;
  }
  renderNoteCard(cm);
}

function prevCard(cm){
  const chapters = chaptersFor(cm);
  if (notesState.cardIndex > 0){
    notesState.cardIndex--;
  } else if (notesState.chapterIndex > 0){
    notesState.chapterIndex--;
    notesState.cardIndex = chapters[notesState.chapterIndex].cards.length - 1;
  }
  renderNoteCard(cm);
}

// ================================================================
// PRACTICE QUIZ
// ================================================================
const quizState = {
  categoryName: null,   // null = full module set
  questions: [],
  index: 0,
  score: 0,
  answers: [],          // {selected: idx, correct: bool}
};

function renderCategoryGrid(cm){
  const grid = document.getElementById('category-grid');
  grid.innerHTML = '';
  const allQs = practiceQuestionsFor(cm);
  const cats = practiceCategoriesFor(cm);

  const allCard = document.createElement('div');
  allCard.className = 'cat-card all';
  allCard.innerHTML = `
    <div>
      <h4>&#127919; ${courseModuleLabel(cm)} Practice Question Set</h4>
      <div class="count">${allQs.length} questions &middot; all categories, in order</div>
    </div>
    <div class="icon">&#9656;</div>
  `;
  allCard.onclick = () => startQuiz(cm, null);
  grid.appendChild(allCard);

  cats.forEach(cat => {
    const card = document.createElement('div');
    card.className = 'cat-card';
    card.innerHTML = `
      <span class="icon">${cat.icon}</span>
      <h4>${cat.short}</h4>
      <div class="count">${cat.count} questions</div>
    `;
    card.onclick = () => startQuiz(cm, cat.name);
    grid.appendChild(card);
  });
}

function startQuiz(cm, categoryName){
  quizState.scopeModuleId = cm.id;
  quizState.categoryName = categoryName;
  const pool = practiceQuestionsFor(cm);
  quizState.questions = categoryName
    ? pool.filter(q => q.category === categoryName)
    : pool;
  quizState.index = 0;
  quizState.score = 0;
  quizState.answers = [];
  showView('view-quiz-play');
  document.getElementById('tab-quiz').classList.add('active');
  renderQuestion();
}

function currentCategoryLabel(){
  const cm = activeModule();
  if (!quizState.categoryName) return courseModuleLabel(cm) + ' \u2014 Full Set';
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
  document.getElementById('tab-quiz').classList.add('active');

  const total = quizState.questions.length;
  const score = quizState.score;
  const pct = Math.round((score / total) * 100);

  document.getElementById('gauge-wrap').innerHTML = renderGauge(pct);
  document.getElementById('results-heading').textContent = `${score} / ${total} correct`;

  let verdict;
  if (pct >= 85) verdict = "Excellent \u2014 you're exam-ready on this set.";
  else if (pct >= 70) verdict = "Solid grasp \u2014 review the missed items below and try again.";
  else if (pct >= 50) verdict = "Getting there \u2014 revisit the related study-note chapters before retaking.";
  else verdict = "This set needs more review \u2014 work through the study notes, then retake.";
  document.getElementById('results-verdict').textContent = verdict;

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

  document.getElementById('retake-btn').onclick = () => startQuiz(activeModule(), quizState.categoryName);
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
// EXAM QUIZ -- one gated, scored sitting per course module
// ================================================================
const examState = {
  courseModuleId: null,
  questions: [],
  index: 0,
  score: 0,
  answers: [],
};

function startExam(cm){
  const bank = EXAM_BANKS[cm.examBankKey];
  if (!bank){
    return;
  }
  examState.courseModuleId = cm.id;
  examState.questions = bank.slice();
  examState.index = 0;
  examState.score = 0;
  examState.answers = [];
  showView('view-exam-play');
  document.getElementById('tab-exam').classList.add('active');
  renderExamQuestion();
}

function renderExamQuestion(){
  const cm = COURSE_MODULES.find(m => m.id === examState.courseModuleId);
  const q = examState.questions[examState.index];
  const total = examState.questions.length;

  document.getElementById('exam-cat-label').textContent = courseModuleLabel(cm) + ' Exam';
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
  document.getElementById('tab-exam').classList.add('active');

  const cm = COURSE_MODULES.find(m => m.id === examState.courseModuleId);
  const total = examState.questions.length;
  const score = examState.score;
  const pct = Math.round((score / total) * 100);
  const passed = pct >= EXAM_PASS_PCT;

  const p = getProgress(cm.id);
  if (p.examBestPct === null || pct > p.examBestPct) p.examBestPct = pct;
  if (passed) p.examPassed = true;

  document.getElementById('exam-gauge-wrap').innerHTML = renderGauge(pct);
  document.getElementById('exam-results-heading').textContent = `${score} / ${total} correct`;
  document.getElementById('exam-pass-badge').innerHTML = passed
    ? `<div class="pass-badge pass">&#9989; Passed &mdash; ${courseModuleLabel(cm)} complete</div>`
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

  document.getElementById('exam-retake-btn').onclick = () => startExam(cm);
}

// ---------------- Init ----------------
goHome();
