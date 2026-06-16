const NOTES_MODULES = [
{
  id: 'm1',
  title: 'CPHQ Certification \u2014 Program Overview',
  blurb: 'What the credential represents, the exam blueprint, and how to use it.',
  cards: [
    {
      heading: 'What CPHQ Truly Represents',
      html: `
        <p>The CPHQ credential is not just an exam to pass &mdash; it represents a mindset, a leadership orientation, and a sense of responsibility. The goal of this training is to equip you to actually <strong>improve systems</strong>, not just clear an exam.</p>
        <h4>Adopt the concepts &mdash; live by the concepts</h4>
        <p><em>Worked example: Non-Punitive Culture</em></p>
        <ul>
          <li>Learn not to punish the first mistake.</li>
          <li>Start observing patterns before passing judgment.</li>
          <li>Apply the concept both professionally and personally.</li>
          <li>Helps improve teamwork and emotional intelligence.</li>
        </ul>
        <h4>Change management lessons (introductory)</h4>
        <ul>
          <li>One size does not fit all when leading people through change.</li>
          <li>Some people respond to motivation; others need structure or authority.</li>
          <li>Great leaders adapt their approach based on the individual.</li>
          <li>Change begins with empathy and understanding.</li>
        </ul>
        <h4>Why you shouldn't just "pass" CPHQ</h4>
        <ul>
          <li>Passing the exam is not the same as becoming a quality professional.</li>
          <li>The real value lies in applying the knowledge in daily work and behaviour.</li>
          <li>Focus on clarity, consistency, and impact.</li>
          <li>Use authentic study materials &mdash; avoid shortcuts.</li>
        </ul>
      `
    },
    {
      heading: 'Benefits & the Business Case',
      html: `
        <ul>
          <li>CPHQ-certified professionals report earning roughly <strong>$10,000&ndash;$15,000 more annually</strong> than non-certified peers.</li>
          <li><strong>70%+</strong> of organizations prefer or require CPHQ for quality-department roles.</li>
          <li>Higher chances of leadership and consultancy opportunities.</li>
          <li>Maintains quality standards and supports risk management, performance improvement, and patient-safety improvement.</li>
          <li>Boosts professional credibility and supports career advancement.</li>
          <li>Improves the overall practice of healthcare quality management.</li>
        </ul>
        <h4>Post-COVID relevance</h4>
        <ul>
          <li>Patient safety and quality control are now considered non-negotiable.</li>
          <li>Organizations need professionals with demonstrable, real knowledge and skill.</li>
          <li>CPHQ signals readiness to lead in a changed healthcare environment.</li>
        </ul>
      `
    },
    {
      heading: 'What Is the CPHQ Credential?',
      html: `
        <p>The Certified Professional in Healthcare Quality (CPHQ) is the only accredited certification in healthcare quality, administered through the Healthcare Quality Certification Commission (HQCC) under NAHQ. It validates a candidate's knowledge of healthcare quality practices and competencies.</p>
        <h4>Objectives of CPHQ certification</h4>
        <ol>
          <li>Promote professional standards and improve the practice of quality management.</li>
          <li>Recognize professionals who demonstrate an acquired body of knowledge and expertise through successful completion of the examination.</li>
          <li>Help employers, the public, and allied professionals identify individuals with acceptable knowledge of healthcare quality management principles and practice.</li>
          <li>Foster continuing competence and maintain professional standards through the recertification program.</li>
        </ol>
        <h4>Eligibility</h4>
        <ul>
          <li>All candidates have complete access to the examination process &mdash; there are <strong>no minimum education or experience prerequisites</strong>.</li>
          <li>The exam itself differentiates between candidates who can demonstrate competence and those who cannot.</li>
          <li>This removes barriers that aren't objectively linked to exam success or to effectiveness as a healthcare quality professional.</li>
        </ul>
      `
    },
    {
      heading: 'Exam Content Outline & Scoring',
      html: `
        <p>The exam consists of <strong>140 multiple-choice questions</strong> delivered in a 3-hour computerized session: <strong>125 scored</strong> items plus <strong>15 unscored (pretest)</strong> items distributed throughout the exam without identification.</p>
        <table>
          <thead><tr><th>Content Category</th><th>Total Qs</th><th>Recall (23%)</th><th>Application (57%)</th><th>Analysis (20%)</th></tr></thead>
          <tbody>
            <tr><td>Organizational Leadership</td><td>35</td><td>8</td><td>20</td><td>7</td></tr>
            <tr><td>Health Data Analytics</td><td>30</td><td>7</td><td>17</td><td>6</td></tr>
            <tr><td>Performance &amp; Process Improvement</td><td>40</td><td>9</td><td>23</td><td>8</td></tr>
            <tr><td>Patient Safety</td><td>20</td><td>5</td><td>11</td><td>4</td></tr>
            <tr><td><strong>Total</strong></td><td><strong>125</strong></td><td><strong>29</strong></td><td><strong>71</strong></td><td><strong>25</strong></td></tr>
          </tbody>
        </table>
        <ul>
          <li><strong>Recall (23%)</strong> &mdash; tests knowledge of specific facts and concepts.</li>
          <li><strong>Application (57%)</strong> &mdash; requires interpreting or applying information to a situation.</li>
          <li><strong>Analysis (20%)</strong> &mdash; tests the ability to evaluate, problem-solve, or integrate information into a meaningful whole.</li>
        </ul>
      `
    },
    {
      heading: 'Exam Logistics, Pass Rates & Fees',
      html: `
        <ul>
          <li>140 total questions (125 scored + 15 unscored pretest), computerized-only format.</li>
          <li><strong>Passing score:</strong> at least 92 out of 125 scored questions (&asymp; 73%).</li>
          <li><strong>Average pass rate:</strong> roughly 30% on the first attempt; about 45% for retakes.</li>
        </ul>
        <h4>For international candidates</h4>
        <ul>
          <li>Check availability of computer-based testing centers via the AMP candidate portal (online.goamp.com).</li>
          <li>Submit a completed application form plus the application fee &mdash; same rules as domestic candidates.</li>
          <li>No instant score reports; results are mailed within 3&ndash;5 business days.</li>
        </ul>
        <h4>Exam fees</h4>
        <table>
          <thead><tr><th>Category</th><th>Fee (USD)</th></tr></thead>
          <tbody>
            <tr><td>NAHQ Member</td><td>$479</td></tr>
            <tr><td>Non-Member</td><td>$599</td></tr>
          </tbody>
        </table>
      `
    },
    {
      heading: 'Study Resources',
      html: `
        <ul>
          <li>HQ Solutions: Resource for the Healthcare Quality Professional (4th &amp; 5th editions)</li>
          <li>Q Solutions: Essential Resources for the Healthcare Quality Professional (3rd ed.)</li>
          <li>NAHQ CPHQ Practice Exam &amp; Review Course &mdash; www.nahq.org</li>
          <li>Journal of Healthcare Quality (CEU activities)</li>
          <li>The Janet A. Brown Healthcare Quality Handbook (various editions)</li>
          <li>Essentials of Managed Health Care, 6th ed. (Kongstvedt)</li>
          <li>Facilitating with Ease; Preventing Medication Errors (IOM); Understanding Patient Safety (Wachter)</li>
          <li>Storytelling with Data; The Quality Toolbox; Lean Six Sigma Pocket Toolbook; The Memory Jogger&trade; 2</li>
          <li>The Healthcare Quality Book: Vision, Strategy, and Tools (Joshi &amp; Ransom)</li>
          <li>Quality Chasm Series: Patient Safety &mdash; Achieving a New Standard for Care (IOM)</li>
          <li>Key websites: AHRQ (ahrq.gov), IHI (ihi.org), ISMP (ismp.org)</li>
        </ul>
      `
    }
  ]
},
{
  id: 'm2',
  title: 'Mapping the CPHQ Syllabus',
  blurb: 'How the older CH I\u2013VIII outline lines up with HQ Solutions, 5th Edition.',
  cards: [
    {
      heading: 'CH I\u2013VIII Outline vs. HQ Solutions 5th Edition',
      html: `
        <p>Older study guides present a chapter-based syllabus ("CH-I to CH-VIII") drawn from an earlier edition of the Janet A. Brown Healthcare Quality Handbook (21st annual edition, 2006/07). HQ Solutions, 5th Edition (2024) instead organizes the same body of knowledge into <strong>7 numbered sections</strong>. The table below maps the old chapter structure to the current book sections and to the 2022 CPHQ Exam Content Outline domains.</p>
        <table>
          <thead><tr><th>Older CH-I\u2013VIII Outline</th><th>HQ Solutions 5th Ed. \u2014 Closest Section(s)</th><th>CPHQ Outline Domain</th></tr></thead>
          <tbody>
            <tr><td>CH I: Healthcare Quality Concepts</td><td>Sec 1 (p.1\u201349); Sec 5 \u2013 Evolution of PI (p.228\u2013234)</td><td>Organizational Leadership</td></tr>
            <tr><td>CH II: Strategic Leadership</td><td>Sec 1 \u2013 Strategic Planning (p.11\u201318, 38\u201344)</td><td>Organizational Leadership</td></tr>
            <tr><td>CH III: Quality Functions Management</td><td>Sec 2 (p.51\u2013110); Sec 4 \u2013 Patient Safety (p.149\u2013226)</td><td>Org. Leadership / Patient Safety</td></tr>
            <tr><td>CH IV: Performance Improvement Processes</td><td>Sec 5 (p.227\u2013308)</td><td>Performance &amp; Process Improvement</td></tr>
            <tr><td>CH V: Information Management</td><td>Sec 6 \u2013 Health Data Analytics (p.309\u2013374)</td><td>Health Data Analytics</td></tr>
            <tr><td>CH VI: People Management</td><td>Sec 1 \u2013 Change Mgmt (p.20\u201337); Sec 5 (p.277\u2013291)</td><td>Organizational Leadership</td></tr>
            <tr><td>CH VII: Standards and Surveys</td><td>Sec 3 \u2013 Regulatory &amp; Accreditation (p.111\u2013148)</td><td>Organizational Leadership</td></tr>
            <tr><td>CH VIII: U.S. Federal Programs</td><td>Sec 3 (p.112\u2013122); Sec 2 (p.60\u201365)</td><td>Org. Leadership / Health Data Analytics</td></tr>
          </tbody>
        </table>
        <p>Session 1 (this portal) corresponds primarily to <strong>CH I &mdash; Healthcare Quality Concepts</strong>, with supporting examples from across the other chapters. Modules 3&ndash;8 follow that CH-I content, with HQ Solutions 5th-edition cross-references drawn mainly from Sections 1 and 5.</p>
      `
    }
  ]
},
{
  id: 'm3',
  title: 'Healthcare Quality Concepts: Foundations',
  blurb: 'QI definitions, STEEEP, research vs. audit, the quality pioneers, and the four eras of the quality movement.',
  cards: [
    {
      heading: 'What Is Quality Improvement?',
      html: `
        <p><strong>Quality Improvement (QI)</strong> is a systematic process for closing the gap between the actual ("real") state of performance and the expected (desired) state of outcomes.</p>
        <p>Think of Einstein's observation that repeating the same actions while expecting a different result is a form of insanity &mdash; if current performance isn't meeting the desired state, the <em>process itself</em> must change, not just effort or willpower.</p>
        <div class="practice-box"><strong>Practice insight:</strong> A quality professional asked to support strategic planning should give primary weight to the results of a <strong>gap analysis</strong> (comparing actual vs. desired performance) &mdash; not competitor reports, staff-needs assessments, or financial statements alone.</div>
      `
    },
    {
      heading: 'What Is Quality? STEEEP & the Six Dimensions',
      html: `
        <p>Two complementary definitions of healthcare quality:</p>
        <ul>
          <li><strong>Institute of Medicine (IOM):</strong> "The degree to which health care services for individuals and populations increase the likelihood of desired health outcomes and are consistent with current professional knowledge."</li>
          <li><strong>AHRQ:</strong> Quality care is accessible, effective, safe, accountable, and fair.</li>
        </ul>
        <p>Juran's view of quality has two components: (1) freedom from deficiencies, and (2) the presence of features that satisfy customer needs.</p>
        <h4>Six dimensions of healthcare quality (STEEEP)</h4>
        <table>
          <thead><tr><th>Dimension</th><th>What it means</th></tr></thead>
          <tbody>
            <tr><td><strong>S</strong>afe</td><td>Causes no unnecessary harm to patients.</td></tr>
            <tr><td><strong>T</strong>imely</td><td>Eliminates harmful delays for both those who receive and those who give care.</td></tr>
            <tr><td><strong>E</strong>ffective</td><td>Meets the client's clinical needs based on scientific knowledge.</td></tr>
            <tr><td><strong>E</strong>fficient</td><td>Uses resources optimally, avoiding waste.</td></tr>
            <tr><td><strong>E</strong>quitable</td><td>Care does not vary in quality due to a patient's personal characteristics.</td></tr>
            <tr><td><strong>P</strong>atient-centered</td><td>Responsive to individual patient needs, values, and preferences.</td></tr>
          </tbody>
        </table>
        <p><strong>Healthcare Quality Goal:</strong> deliver the safest, most effective, and most compassionate care to every patient &mdash; <em>Quality = Better Outcomes + Better Patient Experience + Better Access</em>, while reducing harm, deaths, and waste.</p>
        <div class="nahq-box">
          <div class="nahq-title">\ud83d\udcd8 NAHQ HQ Solutions (5th ed.) \u2014 p.2, "Healthcare Quality Leadership and Complex Systems"</div>
          <p>The book opens Section 1 with the same IOM/NAM definition of healthcare quality and defines <em>quality management</em> as derived from total quality management &mdash; a strategic, integrated management system involving all managers and employees, using quantitative methods to continuously improve processes to meet and exceed customer needs. It lists the IOM's six aims for healthcare improvement in the same STEEEP order: Safety, Effectiveness, Patient-centeredness, Timeliness, Efficiency, and Equity.</p>
        </div>
      `
    },
    {
      heading: 'Research vs. Quality Improvement vs. Clinical Audit',
      html: `
        <table>
          <thead><tr><th>Aspect</th><th>Research</th><th>Quality Improvement</th><th>Clinical Audit</th></tr></thead>
          <tbody>
            <tr><td>Purpose</td><td>Generate new knowledge; define best practice</td><td>Promptly improve a process/program/system</td><td>Find gaps in current performance</td></tr>
            <tr><td>Approach</td><td>May involve a new treatment</td><td>Compares &amp; simplifies a process using PDSA</td><td>Monitors current vs. best practice</td></tr>
            <tr><td>Scale</td><td>Large scale, prolonged period</td><td>Small area first, then spread &amp; scale up</td><td>Small population, short time span</td></tr>
          </tbody>
        </table>
        <h4>Worked example &mdash; hand hygiene compliance is 60%</h4>
        <ul>
          <li><strong>Clinical Audit:</strong> Are staff following the policy? Compare current compliance (60%) to the target (e.g., 90%) &rarr; identifies the gap.</li>
          <li><strong>Quality Improvement:</strong> How can we increase compliance from 60% to 90%? Test interventions (reminders, sanitizers, education) via PDSA &rarr; improves performance.</li>
          <li><strong>Research:</strong> Which intervention is most effective? Compare interventions scientifically &rarr; generates new knowledge for many organizations.</li>
        </ul>
      `
    },
    {
      heading: 'Quality Pioneers I \u2014 Shewhart, PDCA/PDSA, Deming',
      html: `
        <h4>Walter A. Shewhart (1891\u20131967)</h4>
        <ul>
          <li>American physicist, engineer, and statistician &mdash; "Father of Statistical Quality Control."</li>
          <li>Developed Statistical Process Control (SPC) charts in the 1920s.</li>
          <li>Associated with the "Shewhart Cycle" &mdash; the original Plan-Do-Check-Act (PDCA).</li>
        </ul>
        <h4>PDCA &rarr; PDSA</h4>
        <ul>
          <li><strong>Plan</strong> &rarr; Identify the problem and plan the change.</li>
          <li><strong>Do</strong> &rarr; Test the change.</li>
          <li><strong>Check</strong> &rarr; Evaluate results.</li>
          <li><strong>Act</strong> &rarr; Standardize or modify.</li>
        </ul>
        <p>Deming argued "Check" was too passive (mere inspection of results) and replaced it with <strong>Study</strong> &mdash; analyzing data, understanding <em>why</em> results occurred, learning from findings, and building knowledge. Hence <strong>PDSA</strong> (Plan-Do-Study-Act).</p>
        <h4>W. Edwards Deming (1900\u20131993)</h4>
        <ul>
          <li>American engineer, statistician, professor, author, and management consultant.</li>
          <li>Championed Shewhart's work (SPC, operational definitions, the Shewhart Cycle); reintroduced it as PDSA in 1986.</li>
          <li>His philosophy is summarized in his <strong>14 Points</strong> for businesses to become competitive.</li>
        </ul>
        <div class="nahq-box">
          <div class="nahq-title">\ud83d\udcd8 NAHQ HQ Solutions (5th ed.) \u2014 p.228\u2013229, "Evolution of Performance Improvement"</div>
          <p>Covers Shewhart's 1920s Bell Labs PDCA cycle and SPC work, and adds <strong>Ohno</strong> (Toyota Production System &mdash; seven wastes, Kanban, JIT/autonomation) as an additional pioneer. For Deming, explains the <strong>Hawthorne effect</strong> and the <strong>"85/15 theory"</strong> &mdash; roughly 85% of problems are process/system-related and only 15% traceable to individuals (useful anchor for "drive out fear / non-punitive culture").</p>
        </div>
      `
    },
    {
      heading: "Deming's 14 Points \u2014 with Healthcare Examples",
      html: `
        <table>
          <thead><tr><th>Deming Point</th><th>Healthcare Example</th></tr></thead>
          <tbody>
            <tr><td>1. Adopt a new leadership philosophy</td><td>Shift from blaming staff for errors to promoting a patient-safety culture.</td></tr>
            <tr><td>2. Create constancy of purpose</td><td>Commit to reducing medication errors over several years, not just during accreditation.</td></tr>
            <tr><td>3. Cease dependence on inspection</td><td>EMR mandatory fields prevent incomplete documentation rather than catching it later.</td></tr>
            <tr><td>4. Continuously improve systems</td><td>Monthly review and redesign of appointment workflows to reduce waiting times.</td></tr>
            <tr><td>5. Partner with suppliers</td><td>Pharmacy works with IV fluid suppliers on quality rather than switching vendors after every issue.</td></tr>
            <tr><td>6. Institute on-the-job training</td><td>New nurses receive competency-based medication training and annual refreshers.</td></tr>
            <tr><td>7. Focus leadership on helping people improve</td><td>Nurse managers coach staff on safe practice instead of only monitoring.</td></tr>
            <tr><td>8. Drive out fear</td><td>Staff are encouraged to report near misses without fear of punishment.</td></tr>
            <tr><td>9. Break down barriers and silos</td><td>Doctors, nurses, pharmacists, and lab staff jointly discuss safety plans.</td></tr>
            <tr><td>10. Eliminate slogans without a method</td><td>Beyond posters: training, sanitizer stations, audits, feedback.</td></tr>
            <tr><td>11. Eliminate quotas/targets alone</td><td>Focus on safe, quality consultations, not just "see 80 patients/day."</td></tr>
            <tr><td>12. Foster pride in work</td><td>Remove unnecessary paperwork so nurses spend more time on care.</td></tr>
            <tr><td>13. Institute training for everyone</td><td>Train all staff in RCA, FMEA, Lean, and patient-safety principles.</td></tr>
            <tr><td>14. Engage everyone in continuous improvement</td><td>All roles submit improvement ideas and join quality projects.</td></tr>
          </tbody>
        </table>
        <div class="practice-box"><strong>Practice insight:</strong> The best method to reduce medical errors is to <strong>encourage patients, families, and staff to report actual and potential errors</strong> &mdash; a system focus, not blame &mdash; consistent with Deming's philosophy of reducing errors through process redesign.</div>
      `
    },
    {
      heading: 'Quality Pioneers II \u2014 Juran, Crosby, Ishikawa',
      html: `
        <h4>Joseph Juran</h4>
        <ul>
          <li>Engineering and law background; followed Deming to Japan after WWII.</li>
          <li>Quality = "fitness for use" &mdash; product performance resulting in customer satisfaction, freedom from deficiencies that cause dissatisfaction.</li>
          <li><strong>Juran Trilogy:</strong> Plan, Improve, and Control &mdash; analogous to budgeting, cost control, and cost reduction in finance.</li>
        </ul>
        <h4>Philip Crosby (1926\u20132001)</h4>
        <ul>
          <li>Initiated the <strong>Zero Defects</strong> program at the Martin Company; as QC manager of the Pershing missile program, achieved a 25% reduction in rejection rate and a 30% reduction in scrap costs.</li>
          <li>Best known for the "Cost of Poor Quality" and "Do It Right The First Time."</li>
          <li>Identified 14 steps to improve quality and move toward zero-defects performance.</li>
        </ul>
        <h4>Kaoru Ishikawa (1915\u20131989)</h4>
        <ul>
          <li>"Father of Japanese quality control."</li>
          <li>Developed the Ishikawa (cause-and-effect / fishbone) diagram in 1982 for root-cause analysis.</li>
          <li>Associated with the principle that roughly 80% of outcomes arise from 20% of causes.</li>
        </ul>
        <div class="nahq-box">
          <div class="nahq-title">\ud83d\udcd8 NAHQ HQ Solutions (5th ed.) \u2014 p.230\u2013231</div>
          <p>For Juran, explains the Trilogy and "fitness for use." For Crosby, lists the <em>five stages of management maturity</em> (uncertainty &rarr; awakening &rarr; enlightenment &rarr; wisdom &rarr; certainty) and the 14 steps to quality improvement. For Ishikawa, confirms the fishbone diagram and credits him with coining "total quality control" &mdash; the precursor to "total quality management."</p>
        </div>
      `
    },
    {
      heading: 'IOM Reports & the Four Eras of the Quality Movement',
      html: `
        <h4>To Err Is Human (IOM, 1999)</h4>
        <ul>
          <li>An estimated 44,000&ndash;98,000 Americans die in hospitals each year due to medical errors.</li>
          <li>Roughly one death for every 343 to 764 admissions &mdash; vs. aviation's ~1 death per 8 million flights.</li>
          <li>Equivalent to approximately <strong>275 lives lost daily</strong> from preventable medical errors.</li>
        </ul>
        <div class="nahq-box">
          <div class="nahq-title">\ud83d\udcd8 NAHQ HQ Solutions (5th ed.) \u2014 p.231\u2013234, "Healthcare Quality Movement into the 21st Century"</div>
          <p>A year-by-year timeline (Figure 5.3) including the 1999 <em>To Err Is Human</em> and 2001 <em>Crossing the Quality Chasm</em> reports, framed as four eras:</p>
          <ol>
            <li><strong>Nightingale, Codman &amp; ACS</strong> &mdash; Nightingale (1863) called for systematic review of patient care; Codman's outcome tracking led to the 1913 founding of the American College of Surgeons and the 1917/18 Hospital Standardization Program (earliest roots of accreditation).</li>
            <li><strong>Legal decisions, Donabedian &amp; The Joint Commission</strong> &mdash; landmark cases (Bing v. Thunig, 1957; Darling v. Charleston, 1965) plus Donabedian's 1950s structure-process-outcomes framework and the 1951 founding of The Joint Commission.</li>
            <li><strong>Berwick, Batalden, Deming, Juran &amp; "Japan, Inc."</strong> &mdash; Japanese industrial quality methods applied to healthcare; Berwick founded IHI (1991) and embedded the Triple Aim into health policy. This is also where STEEEP (the six aims) is introduced as the IHI's organizing framework.</li>
            <li><strong>Patient front and center</strong> &mdash; growth of advocacy, engagement, activation: patients' bills of rights, informed consent, shared decision-making, and patient-reported outcome measures (PROMs).</li>
          </ol>
        </div>
      `
    }
  ]
},
{
  id: 'm4',
  title: 'Systems Thinking & Change Management',
  blurb: 'Non-punitive culture, two worked case studies, and the Lewin & Kotter change models.',
  cards: [
    {
      heading: 'Systems Thinking & Non-Punitive Culture',
      html: `
        <p>"Non-Punitive Culture" is the worked example for living the CPHQ concepts: learn not to punish first mistakes, observe patterns before judging, and apply the lesson both professionally and personally to improve teamwork and emotional intelligence.</p>
        <div class="nahq-box">
          <div class="nahq-title">\ud83d\udcd8 NAHQ HQ Solutions (5th ed.) \u2014 p.150\u2013151, "The Patient Safety Imperative" & "Systems Thinking"</div>
          <p>Human error is inevitable even among the most conscientious professionals &mdash; an error occurs when an individual should have done something different, but conduct inadvertently caused (or could cause) an undesirable outcome. Leaders have a duty to recognize that inevitability, design systems that make errors less likely, and avoid purely punitive reactions to honest mistakes. Box 4.1 key points: adopt systems thinking to think beyond the person and beyond blame; build systems of safety, safety culture, reliability, and continuous learning; understanding errors without fear of blame increases reporting of errors, near misses, and close calls.</p>
        </div>
      `
    },
    {
      heading: 'Case Studies: Medication Errors & Oceanview Health System',
      html: `
        <h4>Medication administration delays</h4>
        <p>Scenario: repeated delays in first-dose antibiotic administration. Leadership's first instinct might be to counsel the nurses involved. But a deeper review finds multiple contributing factors &mdash; late physician orders, unclear pharmacy verification workflow, high workload at shift change, poor nurse&ndash;pharmacy communication, and no clear escalation process.</p>
        <div class="practice-box"><strong>Best reflects systems thinking:</strong> analyze the full medication-use process, identify interdependent workflow gaps, and redesign the process &mdash; treat it as a system issue with multiple interacting causes, not an individual performance issue.</div>
        <h4>Oceanview Health System (OHS)</h4>
        <p>OHS adopts "systems thinking" rather than analyzing isolated components (bylaws, org charts, budgets). Leaders study how departments influence one another, how decisions are made and communicated, and how staff attitudes/mental models shape outcomes.</p>
        <div class="practice-box"><strong>Example &mdash; reducing readmissions:</strong> instead of looking only at the discharge checklist, explore the interrelationship between hospital, home health, and long-term care; how discharge-timing decisions are made; and staff attitudes toward follow-up and accountability. Combining trend data (e.g., a 12-month run chart of satisfaction scores) with storytelling (staff explaining that two senior nurses retired and a new documentation system caused delays) links data with context for root-cause understanding.</div>
      `
    },
    {
      heading: "Change Management: Lewin's Model",
      html: `
        <p>Change is driven by a <strong>force field</strong> of driving forces (push toward change) and restraining forces (resist change); change happens fastest by <em>reducing restraining forces</em> rather than just adding driving force.</p>
        <table>
          <thead><tr><th>Current State</th><th>Transition State</th><th>Future State</th></tr></thead>
          <tbody><tr><td>Unfreeze old behaviour</td><td>Intervening change</td><td>Refreeze new behaviour</td></tr></tbody>
        </table>
        <ul>
          <li><strong>Motivation for change:</strong> some level of frustration or dissatisfaction with the current state creates the anxiety/creative tension needed to spur change.</li>
          <li><strong>Force field analysis:</strong> a two-column tool (driving forces vs. restraining forces) used to analyze a situation targeted for change; brainstorming or brainwriting can surface the forces.</li>
        </ul>
      `
    },
    {
      heading: "Change Management: Kotter's 8-Step Model",
      html: `
        <p>Kotter's model uses a "see-feel-change" (humanistic) approach. The first four steps "defrost" the status quo, the next three introduce new practices, and the last step anchors the change in the culture.</p>
        <ol>
          <li>Increase urgency &mdash; create a felt need for action.</li>
          <li>Build the guiding team &mdash; influential, committed leaders with the right skills and credibility.</li>
          <li>Get the vision right &mdash; develop a clear vision and strategy.</li>
          <li>Communicate for buy-in &mdash; clearly, simply, and repeatedly.</li>
          <li>Empower action &mdash; remove obstacles so people can act on the vision.</li>
          <li>Create short-term wins &mdash; build belief and momentum.</li>
          <li>Do not let up &mdash; sustain urgency until change is fully realized.</li>
          <li>Anchor the change &mdash; ground new practices in the corporate culture so they endure.</li>
        </ol>
        <h4>Common errors in organizational change (per Kotter)</h4>
        <ul>
          <li>Allowing too much complacency.</li>
          <li>Failing to create a sufficiently powerful guiding coalition.</li>
          <li>Underestimating the power of vision.</li>
          <li>Under-communicating the vision.</li>
          <li>Permitting obstacles to block the new vision.</li>
          <li>Failing to create short-term wins.</li>
          <li>Declaring victory too soon.</li>
          <li>Neglecting to anchor changes firmly in the corporate culture.</li>
        </ul>
        <div class="nahq-box">
          <div class="nahq-title">\ud83d\udcd8 NAHQ HQ Solutions (5th ed.) \u2014 p.20\u201321 (Lewin) & p.27 (Kotter)</div>
          <p>A "change agent" is a person who helps an organization adapt to or create organizational change. Quality professionals need a repertoire of models because no single model fits every situation &mdash; matching the "one size doesn't fit all" theme. The models share common elements (movement from current state to future state, driven by dissatisfaction with the current state) but differ in scope &mdash; some address whole-organization change, others focus on individual behaviour change.</p>
        </div>
      `
    }
  ]
},
{
  id: 'm5',
  title: 'Delivery Systems, TQM & Payment Models',
  blurb: 'IDS types, TQM principles, Medicare/Medicaid, value-based payment, and DRGs.',
  cards: [
    {
      heading: 'Appropriateness, Potential & Integrated Delivery Systems',
      html: `
        <ul>
          <li><strong>Appropriateness:</strong> the quality of being suitable or right for a particular situation or occasion &mdash; what counts as "right" depends on context.</li>
          <li><strong>Potential:</strong> having the capacity to develop into something in the future.</li>
        </ul>
        <h4>Integrated Delivery Systems (IDS)</h4>
        <p>A network of organizations that provides (or arranges to provide) a coordinated continuum of services to a defined population, and is held accountable for outcomes and health status.</p>
        <ul>
          <li><strong>Vertical IDS:</strong> integration across different levels of care &mdash; hospitals, clinics, labs, rehab, home care &mdash; all under one system for coordinated, continuous care. <em>Example: Kaiser Permanente.</em></li>
          <li><strong>Horizontal IDS:</strong> integration among similar organizations at the same level of care &mdash; e.g., several hospitals/clinics joining for resource sharing. <em>Example: HCA Healthcare, Mayo Clinic Network.</em></li>
        </ul>
        <h4>Benefits of IDS &mdash; quality improvement & cost reduction</h4>
        <ul>
          <li>Reducing administrative/overhead costs (e.g., Apollo Hospitals Group integrating hospitals, clinics, pharmacies, diagnostics).</li>
          <li>Sharing risk (e.g., Narayana Health partnering with government insurance for low-cost cardiac surgery).</li>
          <li>Outcomes management &amp; continuous QI (e.g., Tata Memorial Centre integrating care, research, and trials).</li>
          <li>Reducing unnecessary resource use (e.g., Manipal Hospitals' standardized clinical pathways).</li>
          <li>Efficient use of capital &amp; technology (e.g., AIIMS using telemedicine &amp; robotic surgery for rural access).</li>
        </ul>
      `
    },
    {
      heading: 'Total Quality Management (TQM)',
      html: `
        <p>TQM is a management approach to long-term organizational success through customer satisfaction. All members of an organization participate in improving processes, products, services, and culture &mdash; using strategy, data, and effective communication.</p>
        <h4>8 principles of TQM</h4>
        <ol>
          <li>Customer-focused</li>
          <li>Total employee involvement</li>
          <li>Process-centered</li>
          <li>Integrated system</li>
          <li>Strategic and systematic approach</li>
          <li>Continual improvement</li>
          <li>Fact-based decision-making</li>
          <li>Communications</li>
        </ol>
        <p><strong>TQM vs. traditional monitoring &amp; evaluation:</strong> traditional M&amp;E tends to be retrospective, focused on individual performance, and reactive. TQM is proactive, system-focused, data-driven, and oriented toward continual improvement involving every employee.</p>
      `
    },
    {
      heading: 'High-Value Care & Medicare vs. Medicaid',
      html: `
        <h4>High-value care</h4>
        <p>Scenario: a patient presents with fever and sore throat. Proper assessment &amp; explanation (quality) &rarr; patient improves (outcome) &rarr; no unnecessary medicines or tests (cost). Good quality + good outcome + contained cost = <strong>high-value care</strong>.</p>
        <h4>Medicare vs. Medicaid</h4>
        <table>
          <thead><tr><th>Aspect</th><th>Medicare</th><th>Medicaid</th></tr></thead>
          <tbody>
            <tr><td>Main beneficiaries</td><td>Mainly people 65+, plus some younger people with disabilities or ESRD</td><td>People &amp; families with low income / limited resources</td></tr>
            <tr><td>Main function</td><td>Health insurance for elderly &amp; certain disabled people</td><td>Healthcare support for those who cannot afford care</td></tr>
            <tr><td>Basis</td><td>Mostly age/disability &mdash; national insurance program</td><td>Mostly low income &mdash; government assistance program</td></tr>
          </tbody>
        </table>
      `
    },
    {
      heading: 'Value-Based Healthcare: VBP, MCO & Capitation',
      html: `
        <p>The overall shift is from "more services delivered" (fee-for-service) to "better patient outcomes achieved" (value-based healthcare).</p>
        <h4>1. Value-Based Purchasing (VBP)</h4>
        <p>Payment is linked to quality and outcomes, not just volume of services. <em>Example:</em> Hospital A has fewer infections, fewer readmissions, and better satisfaction than Hospital B for the same number of surgeries &mdash; Hospital A receives a bonus, Hospital B may receive reduced payments.</p>
        <h4>2. Medicare & value-based payment</h4>
        <p>Under traditional Medicare, doctors are paid per visit/test/procedure. Under Medicare Advantage (value-based), a doctor may receive a set monthly amount per patient plus bonuses for keeping them healthy.</p>
        <h4>3. Medicaid via Managed Care Organizations (MCOs)</h4>
        <p>States often deliver Medicaid through MCOs, which then pay providers &mdash; usually under capitation or value-based contracts (analogy: the government hires a supermarket with a fixed monthly budget to provide "groceries").</p>
        <h4>4. Managed Care Organizations (MCOs)</h4>
        <p>Insurance companies/health systems that manage care under a budget, negotiating with providers to control costs while maintaining quality. If members stay healthy, the MCO saves money; if costs are higher, the MCO may lose money.</p>
        <h4>5. Capitation</h4>
        <p>A provider receives a fixed amount per patient per month, regardless of how many services that patient uses &mdash; encouraging preventive care and efficiency (analogy: an "all-you-can-eat" buffet for a flat fee).</p>
      `
    },
    {
      heading: 'Organizational Change Strategies & DRG',
      html: `
        <h4>Organizational change strategies</h4>
        <ul>
          <li><strong>Reengineering</strong> &mdash; fundamental change. <em>Example:</em> a fully digital EHR replacing paper records.</li>
          <li><strong>Downsizing</strong> &mdash; <em>Example:</em> reducing nursing staff due to budget constraints (cost savings, possible quality impact).</li>
          <li><strong>Restructuring</strong> (right-sizing) &mdash; <em>Example:</em> merging radiology and imaging departments under one management team.</li>
          <li><strong>Paradigm shift</strong> &mdash; <em>Example:</em> transitioning from fee-for-service to value-based care.</li>
        </ul>
        <h4>Diagnosis-Related Groups (DRG)</h4>
        <p>A DRG groups hospital patients based on diagnosis, treatment, age, complications, and discharge status &mdash; used to determine how much the hospital is paid for treating that type of patient (a fixed payment package for a hospital case).</p>
        <p><em>Example:</em> two patients both have pneumonia. One is young with no complications and a 2-day stay; the other is elderly with diabetes, complications, and a 7-day stay. The second (more resource-intensive) case falls into a different, higher-paying DRG group.</p>
        <ul>
          <li><strong>ICD-10</strong> &mdash; assigns a code to the patient's disease or diagnosis.</li>
          <li><strong>DRG</strong> &mdash; groups the full hospital case (age, complications, procedures, discharge status) to decide payment.</li>
        </ul>
        <p>In short: ICD-10 tells you <em>what</em> disease the patient has; DRG tells you <em>how resource-intensive</em> the case was for payment purposes.</p>
      `
    }
  ]
},
{
  id: 'm6',
  title: 'Donabedian Model & Measurement Concepts',
  blurb: 'Structure, process, outcome \u2014 plus leading vs. lagging measures.',
  cards: [
    {
      heading: "Donabedian's Structure-Process-Outcome Framework",
      html: `
        <p>Donabedian's three-component approach for evaluating quality of care underpins measurement for improvement: structure, process, and outcomes (measurement for improvement adds a fourth &mdash; <em>balancing measures</em>, see Module 7).</p>
        <table>
          <thead><tr><th>Component</th><th>Definition</th><th>Quick rule</th><th>Examples</th></tr></thead>
          <tbody>
            <tr><td><strong>Structure</strong></td><td>What we have: staff, equipment, policies, facilities, systems</td><td>Resource = Structure</td><td>Staff-to-patient ratio; crash cart availability; written med-reconciliation policy; functioning ventilators</td></tr>
            <tr><td><strong>Process</strong></td><td>What we do: care steps, documentation, compliance, timeliness</td><td>Action = Process</td><td>Hand hygiene compliance; medication given on time; checklist completed; door-to-needle time</td></tr>
            <tr><td><strong>Outcome</strong></td><td>What happened: results, complications, harm, recovery, satisfaction</td><td>Result = Outcome</td><td>Mortality rate; infection rate; 30-day readmission rate; patient satisfaction</td></tr>
          </tbody>
        </table>
        <p>One topic can have measures at all three levels &mdash; e.g., a fall-prevention <em>policy</em> is structure, the fall-risk <em>assessment</em> is process, and the fall-injury <em>rate</em> is outcome.</p>
        <div class="nahq-box">
          <div class="nahq-title">\ud83d\udcd8 NAHQ HQ Solutions (5th ed.) \u2014 p.5, "Donabedian Model"</div>
          <p>Donabedian is credited as the founder of the quality-assurance field. Beyond the three-part framework, the book lists <strong>seven elements of the quality of medical care</strong>: Efficacy (care under optimal conditions), Effectiveness (outcome of interventions), Efficiency (cost reduction without compromising effects), Equity (fairness across populations), Optimality (balancing costs and benefits), Acceptability (accessibility &amp; interpersonal interaction), and Legitimacy (social acceptability of how care is delivered).</p>
        </div>
      `
    },
    {
      heading: 'SPO Quiz Examples',
      html: `
        <table>
          <thead><tr><th>Example</th><th>Answer</th><th>Why</th></tr></thead>
          <tbody>
            <tr><td>Availability of trained ICU nurses per shift</td><td>Structure</td><td>Staffing resource</td></tr>
            <tr><td>% of surgical patients receiving prophylactic antibiotics on time</td><td>Process</td><td>Was a care action done correctly?</td></tr>
            <tr><td>Post-operative wound infection rate</td><td>Outcome</td><td>Patient result after care</td></tr>
            <tr><td>Written policy for medication reconciliation</td><td>Structure</td><td>System resource/support</td></tr>
            <tr><td>Compliance with hand hygiene before patient contact</td><td>Process</td><td>Staff action during care</td></tr>
            <tr><td>Patient satisfaction score after discharge</td><td>Outcome</td><td>Result/experience of care</td></tr>
            <tr><td>Door-to-needle time for thrombolysis</td><td>Process</td><td>How quickly a care step is performed</td></tr>
            <tr><td>Number of functioning ventilators in ICU</td><td>Structure</td><td>Equipment availability</td></tr>
            <tr><td>Readmission rate within 30 days</td><td>Outcome</td><td>What happened after care</td></tr>
            <tr><td>% of charts with complete nursing assessment</td><td>Process</td><td>Documentation action completed</td></tr>
            <tr><td>Availability of electronic incident-reporting system</td><td>Structure</td><td>System/infrastructure resource</td></tr>
            <tr><td>Fall-related injury rate among inpatients</td><td>Outcome</td><td>Harm or patient result</td></tr>
          </tbody>
        </table>
      `
    },
    {
      heading: 'Leading vs. Lagging Measures',
      html: `
        <ul>
          <li><strong>Leading measure</strong> &mdash; checking something before the final result happens, so problems can be prevented.</li>
          <li><strong>Lagging measure</strong> &mdash; checking the final result after everything has already happened.</li>
        </ul>
        <p><strong>Weight-loss analogy:</strong> "Did I walk 30 minutes today? Did I avoid sugary drinks? Did I eat healthy meals?" are leading measures &mdash; actions that happen before the result and help create it. "How many kg did I lose this month?" is a lagging measure &mdash; the final result, known only after the fact.</p>
        <ul>
          <li><strong>Healthcare leading measure:</strong> percentage of staff trained on patient identification.</li>
          <li><strong>Healthcare lagging measure:</strong> number of patient identification errors reported.</li>
        </ul>
        <div class="practice-box"><strong>Practice insight:</strong> if a clinical outcome measure has deteriorated, the initial action should be to <strong>analyze related process-measure performance</strong> (the upstream leading indicators) &mdash; not immediately re-educate staff, review best practices generally, or check only data-entry errors.</div>
      `
    }
  ]
},
{
  id: 'm7',
  title: 'Model for Improvement, PDSA & SMART Aims',
  blurb: 'The IHI Model, SMART aim statements, family of measures, change concepts, and PDSA ramps.',
  cards: [
    {
      heading: 'Five Principles & the IHI Model for Improvement',
      html: `
        <h4>Five key principles for improvement</h4>
        <ol>
          <li>Knowing why you need to improve.</li>
          <li>Having a feedback mechanism to know if improvement is happening.</li>
          <li>Developing an effective change that will result in improvement.</li>
          <li>Testing a change before attempting to implement it.</li>
          <li>Knowing when and how to make the change permanent.</li>
        </ol>
        <h4>The IHI Model for Improvement &mdash; three fundamental questions</h4>
        <ol>
          <li>What are we trying to accomplish? <em>(Aim)</em></li>
          <li>How will we know that a change is an improvement? <em>(Measures)</em></li>
          <li>What changes can we make that will result in improvement? <em>(Change concepts/ideas)</em></li>
        </ol>
        <p>These three questions are combined with the PDSA cycle (Shewhart/Deming Cycle) &mdash; a learning-and-improvement cycle. Source: <em>The Improvement Guide</em> (Langley, Moen, Nolan et al.), IHI.</p>
        <h4>Worked example &mdash; reducing ED wait times</h4>
        <ul>
          <li><strong>Plan:</strong> analyze patient-flow data, identify bottlenecks, set a goal to reduce wait times by 20% in 6 months.</li>
          <li><strong>Do:</strong> implement a new triage process directing lower-acuity cases to urgent care.</li>
          <li><strong>Study:</strong> measure wait times before/after to assess whether delays were reduced.</li>
          <li><strong>Act:</strong> if successful, expand hospital-wide; if not, refine and test further.</li>
        </ul>
        <div class="nahq-box">
          <div class="nahq-title">\ud83d\udcd8 NAHQ HQ Solutions (5th ed.) \u2014 p.274, "Plan-Do-Study-Act"</div>
          <p>Presents the same PDSA model (Figure 5.32) from <em>The Improvement Guide</em>, framed around the same three questions. Strategies for using PDSA effectively: plan for multiple cycles in advance; scale tests small (a few patients, one provider, one day); choose people who want to work on the change; capitalize on existing resources/best practice; pick "low-hanging fruit" first; don't delay for lack of technology; collect meaningful measures and review after every cycle; test under varied conditions; be prepared to stop a change if no improvement is seen.</p>
        </div>
      `
    },
    {
      heading: 'Building a SMART Aim Statement',
      html: `
        <p>An <strong>aim statement</strong> is an explicit statement of the team's desired outcomes. A <strong>SMART</strong> aim describes what a successful project is expected to achieve.</p>
        <ul>
          <li><strong>S &mdash; Specific:</strong> well-defined, clear, unambiguous &mdash; covers the 5 Ws (Who, What, When, Where, Why). <em>Example start: "Reduce medication administration error in ED."</em></li>
          <li><strong>M &mdash; Measurable:</strong> defined baseline and target. <em>"...from 20% to 0%."</em></li>
          <li><strong>A &mdash; Achievable:</strong> attainable &mdash; ask "will you be able to achieve this target?" <em>Refined: "...from 20% to 10%."</em></li>
          <li><strong>R &mdash; Realistic:</strong> within reach and relevant to the overall reason for the project.</li>
          <li><strong>T &mdash; Time-bound:</strong> a clearly defined timeline, creating urgency. <em>Final: "We aim to reduce medication administration error in the ED of WCH from 20% to 10% between February and December 2022."</em></li>
        </ul>
      `
    },
    {
      heading: 'SMART Aim Practice Examples',
      html: `
        <p>Each statement is evaluated against all five SMART criteria:</p>
        <ul>
          <li>"Reduce mortality" &mdash; <strong>not SMART</strong> (no specific target, baseline, or timeline).</li>
          <li>"Self-Weight 20% by July 2022" &mdash; not fully SMART (unclear baseline/specific quantity).</li>
          <li>"I will reduce my body weight from a baseline of 70 kg to 65 kg, starting January 2022 to July 2022" &mdash; <strong>SMART</strong> (specific, measurable, time-bound, with baseline and target).</li>
          <li>"We will reduce the incidence of pressure ulcers in the WCH long-term care unit from 40% to 10% by December 2022" &mdash; <strong>SMART</strong>.</li>
          <li>"We will reduce all types of nosocomial infections from current 95% to 0% in a group of 7 WC hospitals from 1&ndash;31 March 2022" &mdash; illustrates checking whether the target/timeline is <em>realistic and achievable</em>.</li>
          <li>"To increase compliance with the Sepsis Six Care Bundle at the Valley Hospital Inpatient Ward from 60% to 75% by June 2022, and from 76% to 95% by December 2022" &mdash; <strong>SMART</strong>, with phased targets.</li>
        </ul>
        <h4>Final exercise set</h4>
        <ul>
          <li>"Improve physician compliance with medication-reconciliation at the OPD Clinic from 60% to 95% by end of October 2023" &mdash; <strong>Yes (SMART)</strong>.</li>
          <li>"Reduce Patient No-Shows at the Diabetes Clinic by end of October 2023" &mdash; <strong>No</strong> (missing a measurable target/baseline).</li>
          <li>"Reduce food wastage by 50%" &mdash; <strong>No</strong> (missing a timeline and specific context).</li>
          <li>"Reduce waiting time in the West Lake Hospital Pharmacy from 72 minutes to 30 minutes from January 2023 to December 2023" &mdash; <strong>Yes (SMART)</strong>.</li>
        </ul>
      `
    },
    {
      heading: 'Family of Measures & Change Concepts',
      html: `
        <h4>Family of measures</h4>
        <ul>
          <li><strong>Outcome measures</strong> &mdash; "Where are we going?" relates directly to the aim of the project.</li>
          <li><strong>Process measures</strong> &mdash; "What are we doing?" measures whether an activity has been accomplished; typically shows improvement before the outcome measure does.</li>
          <li><strong>Balancing measures</strong> &mdash; "What else is happening?" ensures an improvement in one part of the system isn't degrading another part.</li>
        </ul>
        <h4>Change concepts & change ideas</h4>
        <ul>
          <li><strong>Change concept</strong> &mdash; a general notion useful in developing more specific ideas for improvement; stimulates critical &amp; creative thinking.</li>
          <li><strong>Change idea</strong> &mdash; an actionable, specific idea (originating from a change concept) that is tested to see whether it improves things.</li>
        </ul>
        <h4>Nine groupings of change concepts</h4>
        <table>
          <thead><tr><th>Category</th><th>Examples</th></tr></thead>
          <tbody>
            <tr><td>A. Eliminate Waste</td><td>Eliminate unused items/duplicate data entry; reduce overkill/controls; recycle/reuse; substitute; reduce classifications; use sampling.</td></tr>
            <tr><td>B. Improve Workflow</td><td>Synchronize; minimize handoffs; find/remove bottlenecks; automate; smooth workflow; parallel tasks.</td></tr>
            <tr><td>C. Optimize Inventory</td><td>(category referenced; specific items not detailed in source slides)</td></tr>
            <tr><td>D. Change the Work Environment</td><td>Give access to information; proper measurements; cross-train; share risks; build cooperative alliances.</td></tr>
            <tr><td>E. Enhance Producer/Customer Relationship</td><td>Listen to customers; coach customers; agree on expectations; work with suppliers.</td></tr>
            <tr><td>F. Manage Time</td><td>Reduce setup/startup time; optimize maintenance; reduce wait time.</td></tr>
            <tr><td>G. Manage Variation</td><td>Standardize; stop tampering; develop operational definitions; contingency plans.</td></tr>
            <tr><td>H. Design Systems to Avoid Mistakes</td><td>Use reminders; differentiation; constraints; affordances.</td></tr>
            <tr><td>I. Focus on a Product/Service</td><td>Mass-customize; emphasize intangibles; reduce number of components.</td></tr>
          </tbody>
        </table>
        <h4>From concept to idea &mdash; ICU oral care example</h4>
        <ul>
          <li><strong>Improve workflow &rarr;</strong> keep mouth-cleaning supplies ready-to-go.</li>
          <li><strong>Optimize inventory &rarr;</strong> ensure toothbrushes/mouthwash are consistently available.</li>
          <li><strong>Change work environment &rarr;</strong> train staff on proper technique and importance.</li>
          <li><strong>Manage variation &rarr;</strong> update oral-care policy to match CDC guidelines.</li>
          <li><strong>Design systems to prevent errors &rarr;</strong> post the oral-care protocol visibly.</li>
        </ul>
      `
    },
    {
      heading: 'PDSA Cycles, Ramps & a Documentation Example',
      html: `
        <p><strong>PDSA</strong> = test an idea by trialling a change on a small scale, building on learning from previous cycles, before full implementation: Plan (the test), Do (carry it out), Study (observe &amp; learn), Act (decide modifications).</p>
        <h4>Why test changes?</h4>
        <ul>
          <li>Increases the degree of belief that the change will result in improvement.</li>
          <li>Aids decision-making.</li>
          <li>Helps evaluate and minimize resistance upon implementation.</li>
        </ul>
        <h4>Principles of testing</h4>
        <ul>
          <li>Trials and learning are recommended; start at small scale to minimize risk.</li>
          <li>Collect data over time; include different conditions as the scale expands.</li>
          <li>Observe how the system reacts over time (modify if needed); plan how data will be collected.</li>
        </ul>
        <h4>Cycle vs. ramp &mdash; reception waiting-time data form</h4>
        <ol>
          <li>Develop a form to collect baseline waiting-time data; test version 1 (V1) with 2 patients over 1 day.</li>
          <li>Modify and test form V2 with 5 patients over 3 days.</li>
          <li>Test form V2 with 5 patients each in both reception areas over 5 days.</li>
          <li>Implement form V2 for all patients in both reception areas.</li>
        </ol>
        <p><strong>Sequence of improvement:</strong> theory and prediction &rarr; develop a change &rarr; test under varied conditions &rarr; implement (make routine) &rarr; sustain &amp; spread to other locations.</p>
        <h4>Full PDSA documentation example &mdash; automated referral tool</h4>
        <p><strong>Question for this cycle:</strong> use of the newly automated referral tool and the time taken to complete it.</p>
        <p><strong>Plan:</strong> one physician (Dr. Ann) tests the tool during appointments. Data: ease of use? time to complete?</p>
        <p><strong>Predictions:</strong> ease of use = Yes; time = under 5 minutes.</p>
        <p><strong>Do:</strong> Dr. Ann completed the referral with ease, but it took 7 minutes (longer than predicted).</p>
        <p><strong>Study:</strong> the tool took more time than predicted, although usability matched the prediction.</p>
        <p><strong>Act:</strong> test with two more physicians to gather more data before broader rollout.</p>
      `
    }
  ]
},
{
  id: 'm8',
  title: 'Applied Practice: Case Studies & Review',
  blurb: 'Process reliability math, culture-mission alignment, and customer mapping.',
  cards: [
    {
      heading: 'Process vs. Outcome \u2014 Another Worked Example',
      html: `
        <p><strong>Question:</strong> review of the timeliness of high-risk diabetes screening addresses which focus?</p>
        <div class="practice-box"><strong>Answer:</strong> <em>Process of care</em> &mdash; "timeliness of screening" asks whether the correct care activity (screening high-risk patients) was done within the recommended time. This differs from asking "did the patient's diabetes improve?" which would be an <em>outcome</em> question.</div>
        <h4>IDS recap</h4>
        <ul>
          <li><strong>Vertical IDS</strong> &mdash; integration across different levels of care under one system (e.g., Kaiser Permanente).</li>
          <li><strong>Horizontal IDS</strong> &mdash; integration among similar organizations at the same level of care for resource sharing (e.g., HCA Healthcare, Mayo Clinic Network).</li>
        </ul>
      `
    },
    {
      heading: 'Process Reliability \u2014 Multiplicative Risk Across Steps',
      html: `
        <p>Scenario: a patient must pass through 5 steps to receive an injection safely:</p>
        <ul>
          <li>Patient registration correct: 99% reliable</li>
          <li>Doctor orders the medicine correctly: 95% reliable</li>
          <li>Pharmacy dispenses the correct medicine: 95% reliable</li>
          <li>Nurse verifies patient and medicine: 90% reliable</li>
          <li>Documentation completed correctly: 93% reliable</li>
        </ul>
        <p>Overall process reliability = multiply the step reliabilities: 0.99 &times; 0.95 &times; 0.95 &times; 0.90 &times; 0.93 &asymp; <strong>0.75 (75%)</strong>.</p>
        <p>Meaning: even though each step looks "mostly reliable" (80&ndash;100%), the overall process works perfectly end-to-end for only about 75 of 100 patients &mdash; the remaining ~25 may experience some error, delay, or process failure. When multiple steps are linked, overall reliability drops sharply because small step-level errors multiply across the process.</p>
        <h4>Key takeaway</h4>
        <ul>
          <li>Each step may look good individually, but for the patient, the process is reliable only if <em>every</em> step works correctly.</li>
          <li>"All measures met" (end-to-end reliability) is the meaningful metric, not individual step performance.</li>
          <li><strong>Chain analogy:</strong> even if 4 of 5 links are strong, if 1 breaks, the whole chain fails &mdash; a process is only as reliable as its weakest step. Tools to strengthen each step: checklists, double verification, standard workflows, barcode scanning, audits.</li>
        </ul>
      `
    },
    {
      heading: 'Organizational Culture & Mission/Vision Alignment',
      html: `
        <p>When assessing organizational culture and its impact on quality, the focus should be on whether <strong>daily practices, behaviors, and decisions align with the organization's mission and vision</strong>.</p>
        <ul>
          <li><strong>Mission statement</strong> &mdash; why the organization exists: its purpose and core values (e.g., commitment to patient safety, compassion, quality care).</li>
          <li><strong>Vision statement</strong> &mdash; what the organization aspires to achieve (e.g., being the most trusted provider, or achieving zero harm).</li>
        </ul>
        <p>If staff attitudes, leadership actions, and operational behaviours match these principles, that indicates a strong culture of quality. If not, there's a cultural gap leading to inconsistent performance and poor quality outcomes.</p>
        <h4>Example &mdash; hospital mission alignment</h4>
        <p>Mission: "To provide safe, compassionate, patient-centered care through teamwork and continuous improvement." The quality professional evaluates:</p>
        <ul>
          <li>Are staff behaviors consistent with teamwork and compassion?</li>
          <li>Are leaders supporting continuous improvement and safety initiatives?</li>
          <li>Do processes (e.g., handoff communication, error reporting) encourage learning rather than blame?</li>
        </ul>
        <p>If employees fear reporting errors, or departments work in silos, the culture is not aligned with the mission &mdash; even if the right policies exist on paper.</p>
      `
    },
    {
      heading: 'Internal & External Customer Mapping',
      html: `
        <p>In process mapping / customer-supplier analysis, the goal is to understand the flow of services and value between departments and individuals.</p>
        <ul>
          <li><strong>External customers</strong> &mdash; outside the organization (e.g., patients, families, insurance companies).</li>
          <li><strong>Internal customers</strong> &mdash; staff or departments that receive work or information from other staff/departments within the same organization.</li>
        </ul>
        <p>Key question: <em>"Who in your workday do you serve?"</em> &mdash; this uncovers internal-customer relationships and service pathways.</p>
        <h4>Example 1 &mdash; Medical Records Department</h4>
        <ul>
          <li>Serves doctors and nurses who need patient charts.</li>
          <li>Serves patients who request copies of records.</li>
          <li>Serves the billing department by providing discharge summaries.</li>
        </ul>
        <h4>Example 2 &mdash; Laboratory Department</h4>
        <ul>
          <li>Serves physicians by providing diagnostic results.</li>
          <li>Serves nurses who collect and send samples.</li>
          <li>Serves patients by ensuring accurate and timely test reports.</li>
        </ul>
        <p>This step supports mapping process relationships (who provides and who receives), identifying bottlenecks and handoffs, and understanding customer expectations and opportunities for service improvement.</p>
      `
    }
  ]
}
];
const QUIZ_CATEGORIES = [
  { name: "Strategic planning, leadership, culture and QI alignment", short: "Strategy & Culture", icon: "\ud83c\udfaf", count: 7 },
  { name: "Quality, QI, value, Donabedian measures and STEEEP", short: "Quality, Value & STEEEP", icon: "\ud83d\udcca", count: 14 },
  { name: "Patient safety, non-punitive culture and systems thinking", short: "Patient Safety", icon: "\ud83d\udee1\ufe0f", count: 14 },
  { name: "QI education, teamwork, change management and staff involvement", short: "Teamwork & Change", icon: "\ud83d\udc65", count: 26 },
  { name: "QI tools, pioneers, variation, PDSA and IHI Model for Improvement", short: "QI Tools & PDSA", icon: "\ud83d\udd27", count: 17 },
  { name: "IDS, value-based care, managed care and access", short: "IDS & Value-Based Care", icon: "\ud83c\udfe5", count: 4 },
];

const QUIZ_QUESTIONS = [
 {
  "num": 1,
  "category": "Strategic planning, leadership, culture and QI alignment",
  "question": "A quality professional was asked to assist with strategic planning. Which of the following should have the primary impact on the quality and performance improvement goals?",
  "options": [
   "report of major competitors' performance",
   "findings from a staff needs assessment",
   "financial statement of the organization",
   "results of gap analysis"
  ],
  "answer_text": "D. results of gap analysis",
  "explanation": "The PPT defines QI as closing the gap between current performance and desired outcomes. Gap analysis should therefore drive QI goals.",
  "correct": 3
 },
 {
  "num": 2,
  "category": "Strategic planning, leadership, culture and QI alignment",
  "question": "A CEO has directed a quality improvement council to develop objectives to meet an identified goal. When developing objectives, the council must remember to",
  "options": [
   "keep the objectives specific to the short term.",
   "tie the objectives to the organization's financial performance.",
   "use the Plan-Do-Study-Act cycle of continuous improvement.",
   "state the end result or desired outcome."
  ],
  "answer_text": "D. state the end result or desired outcome.",
  "explanation": "A proper objective should state the desired end result. This connects with the PPT\u2019s SMART aim and improvement goal discussion.",
  "correct": 3
 },
 {
  "num": 3,
  "category": "Strategic planning, leadership, culture and QI alignment",
  "question": "A healthcare quality professional has identified a gap in practice from regulatory requirements. The quality professional should",
  "options": [
   "meet with staff to determine the barriers to compliance.",
   "provide educational training to the manager on the regulatory requirements.",
   "inform the staff that the current practice is not compliant with regulatory requirements.",
   "Initiate an audit collection tool to determine the rate of noncompliance."
  ],
  "answer_text": "A. meet with staff to determine the barriers to compliance.",
  "explanation": "After finding a practice gap, the quality professional should understand barriers first. This fits the PPT\u2019s gap analysis and systems-thinking approach.",
  "correct": 0
 },
 {
  "num": 4,
  "category": "Strategic planning, leadership, culture and QI alignment",
  "question": "An organization's culture is best assessed by examining the",
  "options": [
   "behavioral alignment with the core values.",
   "collaboration of medical staff and administration.",
   "number of performance improvement activities.",
   "involvement of each patient care department in strategic planning."
  ],
  "answer_text": "A. behavioral alignment with the core values.",
  "explanation": "The PPT explains that culture is reflected in whether daily behaviors align with mission and vision, not just written statements.",
  "correct": 0
 },
 {
  "num": 5,
  "category": "Strategic planning, leadership, culture and QI alignment",
  "question": "A national health plan has recently acquired a local health plan. At the year anniversary of the merger, the -local health plan staff still struggles with the transition to the new organizational values. Which of the following is the most likely explanation for the difficulty?",
  "options": [
   "Incomplete data integration.",
   "Staff transition program training Incomplete.",
   "Lack of buy-In of the new mission and vision.",
   "Continued support of both mission statements."
  ],
  "answer_text": "C. Lack of buy-In of the new mission and vision.",
  "explanation": "The PPT includes this exact change-management idea. Staff struggle when they do not buy into the new mission and vision.",
  "correct": 2
 },
 {
  "num": 6,
  "category": "Strategic planning, leadership, culture and QI alignment",
  "question": "When allocating limited resources to meet strategic objectives, management decisions should be driven by",
  "options": [
   "accreditation standards.",
   "local competition.",
   "consultant recommendations.",
   "outcome data."
  ],
  "answer_text": "D. outcome data.",
  "explanation": "Strategic priorities should drive resource allocation, which aligns QI work with organizational goals.",
  "correct": 3
 },
 {
  "num": 7,
  "category": "Strategic planning, leadership, culture and QI alignment",
  "question": "Performance Improvement plans are most successful when linked first with",
  "options": [
   "strategic goals.",
   "organizational structure.",
   "core values.",
   "bylaws."
  ],
  "answer_text": "A. strategic goals.",
  "explanation": "PI plans are most successful when linked to the organization\u2019s strategic plan and quality priorities.",
  "correct": 0
 },
 {
  "num": 8,
  "category": "Quality, QI, value, Donabedian measures and STEEEP",
  "question": "An organization's 30-day readmission rate for heart failure patients is at the upper limit of the acceptable CMS range. What is the most appropriate step for evaluating this rate?",
  "options": [
   "Encourage nursing staff to improve communication with patients and families",
   "Monitor the rate for six months and begin analysis only if it exceeds the limit",
   "Convene an interdisciplinary group to review current activities to ensure sustainability",
   "Have case management review all readmissions and report patterns to medical staff"
  ],
  "answer_text": "D. Have case management review all readmissions and report patterns to medical staff",
  "explanation": "Readmission rate is an outcome measure and a value-based performance concern. Reviewing readmissions helps identify patterns before the rate becomes unacceptable.",
  "correct": 3
 },
 {
  "num": 9,
  "category": "Quality, QI, value, Donabedian measures and STEEEP",
  "question": "A healthcare organization implemented an initiative to decrease hospital admissions for patients with chronic heart failure. The baseline rate was 16%, and the current rate is 12%. Based on this performance, which of the following is most applicable?",
  "options": [
   "Discontinue the initiative to eliminate waste",
   "Monitor the performance to ensure sustained improvement",
   "Expand the initiative to other diseases",
   "Shift resources to start another initiative"
  ],
  "answer_text": "B. Monitor the performance to ensure sustained improvement",
  "explanation": "The initiative improved performance. The next step is to monitor for sustained improvement, matching the PPT sequence of testing, implementing and sustaining.",
  "correct": 1
 },
 {
  "num": 10,
  "category": "Quality, QI, value, Donabedian measures and STEEEP",
  "question": "An acute care facility has established an outpatient heart failure clinic. Which of the following will best define the success of the program?",
  "options": [
   "Decreased readmission rate",
   "Increased patient satisfaction",
   "Increased compliance with post-discharge plan",
   "Decreased serious adverse events"
  ],
  "answer_text": "A. Decreased readmission rate",
  "explanation": "Readmission rate is an outcome measure, so it best reflects whether the heart failure clinic is successful.",
  "correct": 0
 },
 {
  "num": 11,
  "category": "Quality, QI, value, Donabedian measures and STEEEP",
  "question": "Which of the following are the three primary quality management activities?",
  "options": [
   "define goals, assessment, and review results",
   "measurement, assessment, and Improvement of outcomes",
   "assessment, improvement, and strategic planning",
   "review trends, assessment, and stakeholder accountability"
  ],
  "answer_text": "B. measurement, assessment, and Improvement of outcomes",
  "explanation": "Quality management involves measuring, assessing and improving outcomes, which reflects the PPT\u2019s QI cycle and Juran-style thinking.",
  "correct": 1
 },
 {
  "num": 12,
  "category": "Quality, QI, value, Donabedian measures and STEEEP",
  "question": "Which of the following is an outcome indicator for a radiology unit?",
  "options": [
   "Utilization of CT scan for low back pain",
   "Contrast-induced complications",
   "Mammography result turnaround time",
   "\" Time-out \" performed for interventional cases"
  ],
  "answer_text": "B. Contrast-induced complications",
  "explanation": "Contrast-induced complications are outcomes because they describe the result or harm after radiology care.",
  "correct": 1
 },
 {
  "num": 13,
  "category": "Quality, QI, value, Donabedian measures and STEEEP",
  "question": "The purpose of patient safety goals is to",
  "options": [
   "Evaluate safety-related near misses",
   "Assist surveyors during the accreditation process",
   "Aggregate safety data to improve performance",
   "Promote specific improvements in safety"
  ],
  "answer_text": "D. Promote specific improvements in safety",
  "explanation": "Patient safety goals exist to promote specific improvements in safety, aligning with the PPT\u2019s safety and harm-reduction focus.",
  "correct": 3
 },
 {
  "num": 14,
  "category": "Quality, QI, value, Donabedian measures and STEEEP",
  "question": "What is the initial step an organization should take when the strategic goal of improving patient satisfaction has not been met?",
  "options": [
   "Implement benchmarking",
   "Review department-specific data",
   "Perform a needs assessment",
   "Conduct a root cause analysis"
  ],
  "answer_text": "B. Review department-specific data",
  "explanation": "When a strategic patient satisfaction goal is missed, department-level data helps locate the gap before action.",
  "correct": 1
 },
 {
  "num": 15,
  "category": "Quality, QI, value, Donabedian measures and STEEEP",
  "question": "Care that does not vary in quality because of gender, ethnicity, geographic location, or socioeconomic status is said to be",
  "options": [
   "Efficient",
   "Effective",
   "Equitable",
   "Evidence-based"
  ],
  "answer_text": "C. Equitable",
  "explanation": "Equitable care means quality does not vary by gender, ethnicity, geography or socioeconomic status. This is one of the STEEEP dimensions.",
  "correct": 2
 },
 {
  "num": 16,
  "category": "Quality, QI, value, Donabedian measures and STEEEP",
  "question": "Patient-centered care is best measured by the percentage of patients:",
  "options": [
   "With timely access to care.",
   "Who participated in patient satisfaction surveys.",
   "Who perceived they were actively involved.",
   "With a readmission within 30 days."
  ],
  "answer_text": "C. Who perceived they were actively involved.",
  "explanation": "Patient-centered care is best reflected by whether patients feel actively involved in decisions about their care.",
  "correct": 2
 },
 {
  "num": 17,
  "category": "Quality, QI, value, Donabedian measures and STEEEP",
  "question": "Which of the following are the most important characteristics of quality metrics?",
  "options": [
   "Random, unbiased, and reactive",
   "Statistical, random, and feasible",
   "Repeatable, reliable, and reactive",
   "Valid, reliable, and feasible"
  ],
  "answer_text": "D. Valid, reliable, and feasible",
  "explanation": "Good quality metrics should be valid, reliable and feasible, so the measure truly reflects performance and can be collected consistently.",
  "correct": 3
 },
 {
  "num": 18,
  "category": "Quality, QI, value, Donabedian measures and STEEEP",
  "question": "A facility's performance on a clinical outcome measure has deteriorated. The healthcare quality professional's initial action should be to",
  "options": [
   "Analyze related process measure performance",
   "Re-educate staff on appropriate clinical outcomes",
   "Review current best practices on areas of deterioration",
   "Assess data entry errors in areas of deficiency"
  ],
  "answer_text": "A. Analyze related process measure performance",
  "explanation": "The PPT includes this exact idea. If an outcome worsens, first analyze related process measures to find where the care process may be failing.",
  "correct": 0
 },
 {
  "num": 19,
  "category": "Quality, QI, value, Donabedian measures and STEEEP",
  "question": "An organization has established an ambulatory diabetic management program. Which of the following will best define a successful outcome of the program?",
  "options": [
   "decreased frequency of missed appointments",
   "increased patient satisfaction",
   "increased compliance with follow-up visits",
   "decreased hospital admission rates"
  ],
  "answer_text": "D. decreased hospital admission rates",
  "explanation": "A successful diabetic management program should be judged by patient outcomes, not only by activity or process completion.",
  "correct": 3
 },
 {
  "num": 20,
  "category": "Quality, QI, value, Donabedian measures and STEEEP",
  "question": "The study of clinic waiting times measures which of the following types of quality indicators?",
  "options": [
   "Satisfaction",
   "Process",
   "Outcome",
   "Structural"
  ],
  "answer_text": "B. Process",
  "explanation": "This option best matches the PPT concept tested here: Process.",
  "correct": 1
 },
 {
  "num": 21,
  "category": "Quality, QI, value, Donabedian measures and STEEEP",
  "question": "The quality manager needs to identify a set of process measures to improve wound care outcomes. The firststep should be to",
  "options": [
   "search for evidence-based guidelines for wound care.",
   "conduct clinical record review of wound care sentinel events.",
   "perform literature search for clinical trials relating to wound care",
   "review prior three years on wound outcome best practices."
  ],
  "answer_text": "A. search for evidence-based guidelines for wound care.",
  "explanation": "To identify process measures, first understand the evidence-based care steps that affect the desired wound-care outcome.",
  "correct": 0
 },
 {
  "num": 22,
  "category": "Patient safety, non-punitive culture and systems thinking",
  "question": "An organization conducts daily briefing sessions. Which of the following questions demonstrates a culture of safety?",
  "options": [
   "\" Do we have available beds in the ICU? \"",
   "\" Did anything happen last night that could lead to a central line infection? \"",
   "\" Who is the last person that committed a medication error? \"",
   "\" What was the patient's intake and output? \""
  ],
  "answer_text": "B. \" Did anything happen last night that could lead to a central line infection? \"",
  "explanation": "A culture of safety looks for risks and near misses before harm occurs, rather than asking who made a mistake.",
  "correct": 1
 },
 {
  "num": 23,
  "category": "Patient safety, non-punitive culture and systems thinking",
  "question": "Which of the following is the best method to achieve a reduction in medical errors?",
  "options": [
   "Establish disciplinary measures for clinical practitioners who commit errors",
   "Encourage patients, families, and staff to report actual and potential errors",
   "Counsel employees to be more careful when providing care",
   "Change the process for reporting medical errors within the organization"
  ],
  "answer_text": "B. Encourage patients, families, and staff to report actual and potential errors",
  "explanation": "The PPT stresses non-punitive culture and learning from errors. Encouraging reporting by staff, patients and families helps identify actual and potential harm.",
  "correct": 1
 },
 {
  "num": 24,
  "category": "Patient safety, non-punitive culture and systems thinking",
  "question": "A manager can build psychological safety among their team by:",
  "options": [
   "Making a change to the employees' schedule without the input of the unit scheduler.",
   "Conducting a collaborative debrief with the team after a medication error is detected.",
   "Allowing employees to discuss items on the agenda that is created by the management team.",
   "Posting the unit goals in the breakroom after they are developed by the management team."
  ],
  "answer_text": "B. Conducting a collaborative debrief with the team after a medication error is detected.",
  "explanation": "Psychological safety is built through collaborative learning after an error, which supports the PPT\u2019s non-punitive culture message.",
  "correct": 1
 },
 {
  "num": 25,
  "category": "Patient safety, non-punitive culture and systems thinking",
  "question": "The organization's recent patient safety culture survey revealed the following composite scores (Organization % Positive vs. National Average): Communication openness 81% vs 80%; Handoffs and transitions 64% vs 74%; Feedback and communication about errors 75% vs 76%; Non-punitive response to errors 68% vs 72%; Unit teamwork 83% vs 81%; Teamwork between units 63% vs 70%. Which of the following interventions should the healthcare quality professional initiate next?",
  "options": [
   "Create an employee reward system for safety reporting",
   "Explore relationships among categories",
   "Form a steering committee to establish scope and prioritization",
   "Create a Pareto chart to identify highest areas of risk"
  ],
  "answer_text": "B. Explore relationships among categories",
  "explanation": "Safety culture results should be understood as a system. Looking at relationships among weak categories helps avoid a narrow or rushed intervention.",
  "correct": 1
 },
 {
  "num": 26,
  "category": "Patient safety, non-punitive culture and systems thinking",
  "question": "A healthcare quality professional has been asked to assess a facility's patient safety culture. Which of the following should be surveyed?",
  "options": [
   "A stratified sample of physicians and nurses",
   "All patients and their families",
   "All staff and physicians",
   "A random sample of leaders and staff"
  ],
  "answer_text": "C. All staff and physicians",
  "explanation": "To assess safety culture, the organization should survey all staff and physicians because culture is shared across the whole system.",
  "correct": 2
 },
 {
  "num": 27,
  "category": "Patient safety, non-punitive culture and systems thinking",
  "question": "Even when appropriate processes are in place, errors can occur. Understanding this, leaders coordinating a patient safety program should focus on",
  "options": [
   "staff complaints.",
   "human factors.",
   "time constraints.",
   "patient satisfaction."
  ],
  "answer_text": "B. human factors.",
  "explanation": "Systems thinking and patient safety focus on how humans interact with processes and equipment, not only on individual caution.",
  "correct": 1
 },
 {
  "num": 28,
  "category": "Patient safety, non-punitive culture and systems thinking",
  "question": "Quality measures must be relevant, scientifically sound, and",
  "options": [
   "Confidential",
   "Inexpensive",
   "Feasible",
   "Flexible"
  ],
  "answer_text": "C. Feasible",
  "explanation": "A useful quality measure should be relevant, scientifically sound and feasible to collect.",
  "correct": 2
 },
 {
  "num": 29,
  "category": "Patient safety, non-punitive culture and systems thinking",
  "question": "Over the past 2 months, a trend has been detected in medication errors. The preferred method of presenting data to the nursing Quality Council will identify the nurse by:",
  "options": [
   "Initials",
   "Name",
   "A confidential coding system",
   "A coding system with the key attached to the report"
  ],
  "answer_text": "C. A confidential coding system",
  "explanation": "Using a confidential coding system protects individuals while still allowing the trend to be reviewed for improvement.",
  "correct": 2
 },
 {
  "num": 30,
  "category": "Patient safety, non-punitive culture and systems thinking",
  "question": "A patient was found unresponsive on a medical-surgical floor. Upon review of the patient's medical record, it was found that the patient had accidentally been given two doses of a sedating agent that had not been ordered. Which of the following would have helped prevent this error?",
  "options": [
   "Automated dispensing machine (ADM)",
   "Radio frequency identification (RFID)",
   "Barcode medication administration (BCMA)",
   "Computerized provider order entry (CPOE)"
  ],
  "answer_text": "C. Barcode medication administration (BCMA)",
  "explanation": "A medication error with system factors should be treated as a system failure requiring process review, not only individual blame.",
  "correct": 2
 },
 {
  "num": 31,
  "category": "Patient safety, non-punitive culture and systems thinking",
  "question": "To best achieve a low rate of harm in spite of inherent risks in healthcare, an organization must:",
  "options": [
   "Meet at least 95% of accreditation standards.",
   "Employ effective physician leaders.",
   "Apply principles of high reliability.",
   "Adopt a zero-tolerance for defect policy."
  ],
  "answer_text": "C. Apply principles of high reliability.",
  "explanation": "Low harm despite risk requires a high-reliability culture, strong systems and consistent safety practices.",
  "correct": 2
 },
 {
  "num": 32,
  "category": "Patient safety, non-punitive culture and systems thinking",
  "question": "A healthcare quality professional is assisting an organization with evaluating patient safety actions that will prevent errors of omission. Which of the following systems will most likely be effective?",
  "options": [
   "a reminder system that is in close proximity to the task and provides sufficient information about what needs to be done",
   "a warning system that is contiguous to the task and cues that the individual is about to initiate the wrong intervention",
   "a proactive risk assessment system that integrates with the task and automatically notifies the risk manager",
   "a detection system that notifies the team when an error has occurred and provides a checklist for mitigation measures"
  ],
  "answer_text": "A. a reminder system that Is in close proximity to the task and provides sufficient information about what needs to be done",
  "explanation": "Reminders, forcing functions and system supports help prevent errors of omission, matching the PPT change concept \u201cdesign systems to avoid mistakes.\u201d",
  "correct": 0
 },
 {
  "num": 33,
  "category": "Patient safety, non-punitive culture and systems thinking",
  "question": "A nurse inadvertently hung an IV medication on the wrong patient's IV pump, but discovered the error prior to initiating the infusion. Patient harm was averted, and the nurse disclosed the error to a healthcare quality professional. The quality professional should",
  "options": [
   "encourage the nurse to report the near-miss error through the adverse event reporting system.",
   "recommend that the nurse undergo additional medication safety training.",
   "perform no additional action since the error did not affect the patient, and the nurse disclosed the near-miss.",
   "report the nurse to the manager for not performing safety checks prior to medication administration."
  ],
  "answer_text": "A. encourage the nurse to report the near-miss error through the adverse event reporting system.",
  "explanation": "A near miss should be reported and used for learning. This supports a non-punitive safety culture.",
  "correct": 0
 },
 {
  "num": 34,
  "category": "Patient safety, non-punitive culture and systems thinking",
  "question": "A healthcare organization has experienced a recent increase in the number of falls with injury. A response by leadership that best demonstrates a safety culture is in place within the organization is to",
  "options": [
   "Acknowledge the injuries as systems errors",
   "Hold the unit manager responsible for the increase",
   "Require training of involved staff",
   "Place involved staff on a corrective action plan"
  ],
  "answer_text": "A. Acknowledge the injuries as systems errors",
  "explanation": "A safety-culture response looks at systems, supports reporting and learns from events instead of blaming individuals.",
  "correct": 0
 },
 {
  "num": 35,
  "category": "Patient safety, non-punitive culture and systems thinking",
  "question": "To best achieve a low rate of harm in spite of inherent risks in healthcare, an organization must",
  "options": [
   "adopt a zero tolerance for defect policy.",
   "employ effective physician leaders.",
   "meet at least 95% of accreditation standards.",
   "apply principles of high reliability."
  ],
  "answer_text": "D. apply principles of high reliability.",
  "explanation": "High reliability means designing systems so safe care occurs consistently despite healthcare risk.",
  "correct": 3
 },
 {
  "num": 36,
  "category": "QI education, teamwork, change management and staff involvement",
  "question": "Which of the following is most important to include in a project to reduce post-operative infections?",
  "options": [
   "evidence-based literature",
   "a multidisciplinary team",
   "staff education",
   "data collection tools"
  ],
  "answer_text": "B. a multidisciplinary team",
  "explanation": "The PPT repeatedly links improvement with teamwork and breaking silos. Infection reduction needs input from the disciplines involved in the process.",
  "correct": 1
 },
 {
  "num": 37,
  "category": "QI education, teamwork, change management and staff involvement",
  "question": "In developing educational training in quality improvement, what components should be included?",
  "options": [
   "individual focus of activities",
   "Performance appraisal results",
   "Quality definitions and principles",
   "Discussion of incidents"
  ],
  "answer_text": "C. Quality definitions and principles",
  "explanation": "The PPT asks this exact concept: QI education should start with common quality definitions and principles, not individual blame or appraisal.",
  "correct": 2
 },
 {
  "num": 38,
  "category": "QI education, teamwork, change management and staff involvement",
  "question": "Quality teams can be an important component in an organization's quality/performance improvement program by providing an avenue for",
  "options": [
   "Credentialing and re-appointment",
   "Staff involvement",
   "Reporting to the governing body",
   "Administrative support"
  ],
  "answer_text": "B. Staff involvement",
  "explanation": "Quality teams support staff involvement, which matches TQM and Deming\u2019s point of engaging everyone in improvement.",
  "correct": 1
 },
 {
  "num": 39,
  "category": "QI education, teamwork, change management and staff involvement",
  "question": "An organization identified the need to improve the flow of admitted patients from the emergency department (ED) to the inpatient unit. The following individuals have been selected to be a part of the team:",
  "options": [
   "Housekeeping supervisor as process owner and quality professional as team leader",
   "Inpatient unit manager as team facilitator and ED manager as project sponsor",
   "Staff nurse ED as champion and CNO as project sponsor",
   "Staff nurse inpatient unit as facilitator and quality professional as champion"
  ],
  "answer_text": "C. Staff nurse ED as champion and CNO as project sponsor",
  "explanation": "The PPT includes this concept: a frontline ED nurse can champion the change, while the CNO provides executive sponsorship and resources.",
  "correct": 2
 },
 {
  "num": 40,
  "category": "QI education, teamwork, change management and staff involvement",
  "question": "Which team role is responsible for maintaining improvements after the implementation of a quality initiative?",
  "options": [
   "Champion",
   "Process Owner",
   "Sponsor",
   "Facilitator"
  ],
  "answer_text": "B. Process Owner",
  "explanation": "The process owner is responsible for maintaining the improved process after the project is implemented.",
  "correct": 1
 },
 {
  "num": 41,
  "category": "QI education, teamwork, change management and staff involvement",
  "question": "A healthcare quality professional is planning to discuss a problem related to delays in home-care visits with the home-care team. Which of the following is the most effective approach?",
  "options": [
   "Share personal knowledge of home care",
   "Present the problem and ask for feedback",
   "Communicate the quality assessment committee's action plan",
   "State the cause of the problem and suggest a solution"
  ],
  "answer_text": "B. Present the problem and ask for feedback",
  "explanation": "The PPT includes this collaborative approach. Presenting the problem and asking for feedback uses frontline knowledge and builds ownership.",
  "correct": 1
 },
 {
  "num": 42,
  "category": "QI education, teamwork, change management and staff involvement",
  "question": "A CEO and chief nursing officer have requested a new quality initiative to reduce patient falls. One of the first steps in starting this new quality Improvement Initiative should include",
  "options": [
   "training the staff on the proper falls screening protocol.",
   "evaluating baseline data to determine the cause of falls.",
   "researching evidence-based guidelines.",
   "implementing post-fall huddles on all units."
  ],
  "answer_text": "B. evaluating baseline data to determine the cause of falls.",
  "explanation": "Before choosing solutions, the team should review baseline data and understand causes. This aligns with the PPT\u2019s \u201cknow why\u201d and measurement principles.",
  "correct": 1
 },
 {
  "num": 43,
  "category": "QI education, teamwork, change management and staff involvement",
  "question": "A quality improvement coordinator is asked to develop a training session on team facilitation based onadult learning principles. Which of the following would be the best approach to include?",
  "options": [
   "Ask participants to practice facilitation with the group during class.",
   "Ask participants to study facilitation techniques after class.",
   "Teach all the concepts and test participants at the end of class.",
   "Teach the basic concepts and handout printed slides for participants to refer to after class."
  ],
  "answer_text": "A. Ask participants to practice facilitation with the group during class.",
  "explanation": "Adult learning is strongest when learners actively practice the skill, which supports QI education and team facilitation.",
  "correct": 0
 },
 {
  "num": 44,
  "category": "QI education, teamwork, change management and staff involvement",
  "question": "A consistent and effective communication plan for a process improvement initiative facilitates",
  "options": [
   "Project success",
   "Clinical relevance",
   "Buy-in from leadership",
   "Decreased costs"
  ],
  "answer_text": "A. Project success",
  "explanation": "A communication plan supports project success by creating awareness, coordination and buy-in.",
  "correct": 0
 },
 {
  "num": 45,
  "category": "QI education, teamwork, change management and staff involvement",
  "question": "A healthcare organization wishes to develop an education plan for quality and patient safety. Based on adult learning principles, the plannededucation is most likely to be effective when",
  "options": [
   "training is provided by a subject matter expert, attendees have opportunities to ask questions, and written materials are provided.",
   "the content is designed to meet accreditation standards, the training is highly encouraged, and learners are allowed to obtain on-demand training.",
   "the program is designed for delivery at the department level, staff are recognized for attendance, and written competency tests are administered.",
   "there is opportunity for active participation, staff members recognize a need to learn, and the material is presented in a logical progression."
  ],
  "answer_text": "D. there is opportunity for active participation, staff members recognize a need to learn, and the material is presented in a logical progression.",
  "explanation": "Adult learning works best when learners actively participate, see the need to learn and receive content in a logical sequence.",
  "correct": 3
 },
 {
  "num": 46,
  "category": "QI education, teamwork, change management and staff involvement",
  "question": "Which of the following is the primary benefit of the initial phase brainstorming?",
  "options": [
   "Fosters discussion of ideas",
   "Defines problem-solving roles and responsibilities",
   "Allows input from all team members",
   "Focuses on identifying the best solutions"
  ],
  "answer_text": "C. Allows input from all team members",
  "explanation": "Brainstorming is useful because it allows input from all team members before narrowing down ideas.",
  "correct": 2
 },
 {
  "num": 47,
  "category": "QI education, teamwork, change management and staff involvement",
  "question": "A department manager wants to improve customer service. in order to gain employee support, the manager should first",
  "options": [
   "Include customer service in performance reviews",
   "Demonstrate the need for change",
   "Seek authorization of the governing body",
   "Empower the employees"
  ],
  "answer_text": "B. Demonstrate the need for change",
  "explanation": "For change management, the first step is to show the need for change so people understand why the change matters.",
  "correct": 1
 },
 {
  "num": 48,
  "category": "QI education, teamwork, change management and staff involvement",
  "question": "The success of performance improvement in an organization depends most on:",
  "options": [
   "Attaining organizational accreditation",
   "Increasing frontline employee satisfaction",
   "Maximizing reimbursement sources",
   "Educating senior and middle management on performance improvement"
  ],
  "answer_text": "D. Educating senior and middle management on performance improvement",
  "explanation": "Performance improvement depends on management understanding PI principles because leaders create the structure and culture for improvement.",
  "correct": 3
 },
 {
  "num": 49,
  "category": "QI education, teamwork, change management and staff involvement",
  "question": "An important responsibility of each team member working on a team project is to",
  "options": [
   "complete assignments between meetings.",
   "investigate the existing data on the project.",
   "review team progress periodically.",
   "teach skills to the team during meetings."
  ],
  "answer_text": "A. complete assignments between meetings.",
  "explanation": "Team members must participate actively and complete agreed responsibilities for improvement work to succeed.",
  "correct": 0
 },
 {
  "num": 50,
  "category": "QI education, teamwork, change management and staff involvement",
  "question": "An organization is implementing significant change that affects how staff perform their jobs. Staff members are exhibiting varying levels of acceptance and resistance. Which of the following is the best approach?",
  "options": [
   "Immediately institute the progressive discipline process with resistant staff members.",
   "Hold a meeting to communicate compliance expectations with an emphasis on consequences for non-compliance.",
   "Invest energy in staff who are positioned to positively influence their peers.",
   "Delay the change until everyone is agreeable with the implementation plan."
  ],
  "answer_text": "C. Invest energy in staff who are positioned to positively influence their peers.",
  "explanation": "The PPT says change must be adapted to people because some respond to motivation while others need structure or authority.",
  "correct": 2
 },
 {
  "num": 51,
  "category": "QI education, teamwork, change management and staff involvement",
  "question": "Which of the following is the best example of effective learning in a learning organization?",
  "options": [
   "management team taking a posttest after reading a bulletin on a regulatory standard",
   "management team auditing staff performance after a training program",
   "staff watching a video on how to complete a patient admission assessment",
   "staff using the results of a root cause analysis to change processes and improve patient safety"
  ],
  "answer_text": "D. staff using the results of a root cause analysis to change processes and improve patient safety",
  "explanation": "A learning organization uses mistakes and data to improve the system, rather than hiding problems or blaming people.",
  "correct": 3
 },
 {
  "num": 52,
  "category": "QI education, teamwork, change management and staff involvement",
  "question": "A continuous quality improvement team has proposed a major change in the billing process for home health service. Staff acceptance of the change is best facilitated by:",
  "options": [
   "Immediate implementation",
   "Medical staff education",
   "Long-range planning",
   "A pilot project"
  ],
  "answer_text": "D. A pilot project",
  "explanation": "Staff acceptance improves when people affected by the change are involved and understand why the change is needed.",
  "correct": 3
 },
 {
  "num": 53,
  "category": "QI education, teamwork, change management and staff involvement",
  "question": "A quality coordinator was asked to evaluate team effectiveness for a struggling quality improvement team. When interviewed about the team, members say they are frustrated because they do not know what the team is supposed to accomplish. Which of the following should be explored first?",
  "options": [
   "Effectiveness of the team leader",
   "Clarity of team goals",
   "Clarity of team roles",
   "Effectiveness of the facilitator"
  ],
  "answer_text": "B. Clarity of team goals",
  "explanation": "Team frustration about unclear roles means the team needs clarification of roles, purpose and expectations.",
  "correct": 1
 },
 {
  "num": 54,
  "category": "QI education, teamwork, change management and staff involvement",
  "question": "A team has completed several tests of change and has arrived at a recommendation. in order to facilitate change, which of the following should occur first?",
  "options": [
   "Present action plan to leadership.",
   "Verify data for accuracy.",
   "Conduct a cost analysis.",
   "Initiate the Shewhart cycle."
  ],
  "answer_text": "A. Present action plan to leadership.",
  "explanation": "After tests of change, communication and stakeholder engagement help move the recommendation toward implementation.",
  "correct": 0
 },
 {
  "num": 55,
  "category": "QI education, teamwork, change management and staff involvement",
  "question": "A healthcare quality professional is preparing a presentation related to incomplete documentation. According to principles of adult learning, the first step in preparing is to",
  "options": [
   "Determine the audience's knowledge and expectations",
   "Develop an evaluation tool for the presentation",
   "Present an inservice for the staff",
   "Obtain administrative support for the presentation"
  ],
  "answer_text": "A. Determine the audience ' s knowledge and expectations",
  "explanation": "Adult-learning preparation begins by understanding learner needs and relevance to their work.",
  "correct": 0
 },
 {
  "num": 56,
  "category": "QI education, teamwork, change management and staff involvement",
  "question": "A healthcare organization has decided that the healthcare quality professional will provide performance improvement training to all supervisors. The first step is to",
  "options": [
   "determine current knowledge of the supervisors.",
   "develop the content outline.",
   "assess the past performance of the group.",
   "provide a pretraining reading list."
  ],
  "answer_text": "A. determine current knowledge of the supervisors.",
  "explanation": "Before creating PI training, the quality professional should identify learning needs so the training fits the audience.",
  "correct": 0
 },
 {
  "num": 57,
  "category": "QI education, teamwork, change management and staff involvement",
  "question": "An organization is shifting paradigms from top-down leadership to participatory management. The process of moving forward includes the four identified phases below: gathering baseline data evaluating effectiveness and improvement making the commitment implementing the program Which of the following is the most logical sequence for these phases?",
  "options": [
   "1, 2, 4, 3",
   "1, 3, 2, 4",
   "3, 1, 4, 2",
   "3, 4, 1, 2"
  ],
  "answer_text": "C. 3, 1, 4, 2",
  "explanation": "The logical improvement sequence is commitment, baseline data, implementation and evaluation.",
  "correct": 2
 },
 {
  "num": 58,
  "category": "QI education, teamwork, change management and staff involvement",
  "question": "A primary care office manager notes that one provider did not consistently complete depression screenings in the previous month. What is the next appropriate action?",
  "options": [
   "Talk to the provider privately about the result",
   "Encourage medical assistants to complete screenings",
   "Discuss findings in the next staff meeting",
   "Review the previous three to four months of provider performance"
  ],
  "answer_text": "D. Review the previous three to four months of provider performance",
  "explanation": "When one provider has low screening completion, first understand the barrier or reason rather than immediately blaming.",
  "correct": 3
 },
 {
  "num": 59,
  "category": "QI education, teamwork, change management and staff involvement",
  "question": "Which of the following characteristics are most appropriate for a physician champion of healthcare quality?",
  "options": [
   "Credible member of medical staff and autocratic leadership style",
   "Popular member of medical staff and transactional leadership style",
   "Senior member of medical staff and democratic leadership style",
   "Respected member of medical staff and participatory leadership style"
  ],
  "answer_text": "D. Respected member of medical staff and participatory leadership style",
  "explanation": "A physician champion should be respected by peers and committed to quality, helping create buy-in.",
  "correct": 3
 },
 {
  "num": 60,
  "category": "QI education, teamwork, change management and staff involvement",
  "question": "A healthcare quality professional is facilitating the establishment of a Quality Council for an outpatient surgery center. The following positions have been selected for membership: medical director, CEO. and CFO. Which of the following is the most appropriate individual to add?",
  "options": [
   "human resources director",
   "medical records director",
   "environmental safety officer",
   "nursing director"
  ],
  "answer_text": "D. nursing director",
  "explanation": "A Quality Council should include key stakeholders from the care process, including patient/customer perspective where appropriate.",
  "correct": 3
 },
 {
  "num": 61,
  "category": "QI education, teamwork, change management and staff involvement",
  "question": "Recognition of the formal and informal structure of an organization is necessary when implementing a quality improvement program because",
  "options": [
   "teams need to be self-directing.",
   "informal leaders can be influential.",
   "quality improvement programs must consult all levels before recommending policies.",
   "organizational structure should have low variability."
  ],
  "answer_text": "B. informal leaders can be influential.",
  "explanation": "Understanding formal and informal structures helps improvement leaders know how decisions and influence really happen.",
  "correct": 1
 },
 {
  "num": 62,
  "category": "QI tools, pioneers, variation, PDSA and IHI Model for Improvement",
  "question": "To determine how much variability in a process is due to random variation and how much is due to unique events, the most appropriate tool would be a",
  "options": [
   "control chart.",
   "Pareto chart.",
   "scatter diagram.",
   "cause and effect diagram."
  ],
  "answer_text": "A. control chart.",
  "explanation": "Shewhart and statistical process control are covered in the PPT. A control chart separates common-cause/random variation from special-cause variation.",
  "correct": 0
 },
 {
  "num": 63,
  "category": "QI tools, pioneers, variation, PDSA and IHI Model for Improvement",
  "question": "Which of the following should be used to determine how data changes over time?",
  "options": [
   "Frequency plot",
   "Histogram",
   "Stratification chart",
   "Control chart"
  ],
  "answer_text": "D. Control chart",
  "explanation": "The PPT emphasizes data over time in improvement. A control chart shows change over time and expected variation.",
  "correct": 3
 },
 {
  "num": 64,
  "category": "QI tools, pioneers, variation, PDSA and IHI Model for Improvement",
  "question": "Each department in a hospital self-monitors and reports hand hygiene data each quarter. Results typically fall within the 58-72% range, with the exception of Respiratory Therapy, which consistently reports 100% compliance. Which of the following steps should a healthcare quality professional take next?",
  "options": [
   "Require departments not achieving at least 95% compliance to develop corrective action plans.",
   "Validate that the Respiratory Therapy results are accurate.",
   "Recognize the Respiratory Therapy department for its outstanding compliance.",
   "Provide remedial hand hygiene training for the lowest scoring departments."
  ],
  "answer_text": "B. Validate that the Respiratory Therapy results are accurate.",
  "explanation": "The PPT uses hand hygiene as an audit/QI example. A perfect self-reported result should be validated before accepting it as true performance.",
  "correct": 1
 },
 {
  "num": 65,
  "category": "QI tools, pioneers, variation, PDSA and IHI Model for Improvement",
  "question": "Which of the following quality improvement tools can best demonstrate length-of-stay data?",
  "options": [
   "Run chart",
   "Pareto chart",
   "Flowchart",
   "Gantt chart"
  ],
  "answer_text": "A. Run chart",
  "explanation": "Length of stay is a performance measure mentioned in the PPT. A run chart is suitable for showing performance over time.",
  "correct": 0
 },
 {
  "num": 66,
  "category": "QI tools, pioneers, variation, PDSA and IHI Model for Improvement",
  "question": "A chart used to display the expected range of variation in a stable process is called a",
  "options": [
   "Scattergram",
   "Histogram",
   "Run chart",
   "Control chart"
  ],
  "answer_text": "D. Control chart",
  "explanation": "A control chart displays the expected range of variation in a stable process, matching Shewhart/SPC content in the PPT.",
  "correct": 3
 },
 {
  "num": 67,
  "category": "QI tools, pioneers, variation, PDSA and IHI Model for Improvement",
  "question": "Which of the following tools should be used to determine the root cause of variations in a process?",
  "options": [
   "histogram",
   "Ishikawa diagram",
   "Shewhart chart",
   "scatter plot"
  ],
  "answer_text": "B. Ishikawa diagram",
  "explanation": "Ishikawa/fishbone diagrams are covered in the PPT as tools for identifying causes of quality problems.",
  "correct": 1
 },
 {
  "num": 68,
  "category": "QI tools, pioneers, variation, PDSA and IHI Model for Improvement",
  "question": "Key stakeholders for process improvement are selected during which phase of the Plan-Do-Study-Act (PDSA) model?",
  "options": [
   "Plan",
   "Do",
   "Study",
   "Act"
  ],
  "answer_text": "A. Plan",
  "explanation": "In PDSA, stakeholders are identified in the Plan phase before testing the change.",
  "correct": 0
 },
 {
  "num": 69,
  "category": "QI tools, pioneers, variation, PDSA and IHI Model for Improvement",
  "question": "A patient safety manager provided training on hand hygiene guidelines. The clinical manager is confident that staff are following the guidelines. Which of the following is the best method to evaluate the current compliance with the guidelines?",
  "options": [
   "collection of bacterial hand cultures",
   "direct observation of staff",
   "calculation of Infection rates compared to a baseline",
   "a test with a passing score of 98%"
  ],
  "answer_text": "B. direct observation of staff",
  "explanation": "Direct observation is the best way to evaluate whether staff are actually following hand hygiene practice.",
  "correct": 1
 },
 {
  "num": 70,
  "category": "QI tools, pioneers, variation, PDSA and IHI Model for Improvement",
  "question": "Which of the following tools depicts a sequence of events in a process?",
  "options": [
   "Pareto diagram",
   "Flowchart",
   "Run chart",
   "Scatter diagram"
  ],
  "answer_text": "B. Flowchart",
  "explanation": "A flowchart shows the sequence of steps or events in a process, useful for understanding workflow.",
  "correct": 1
 },
 {
  "num": 71,
  "category": "QI tools, pioneers, variation, PDSA and IHI Model for Improvement",
  "question": "Which of the following performance improvement models is at the core of the Institute for Healthcare Improvement (IHI) collaborative approach?",
  "options": [
   "DMAIC",
   "PDSA",
   "Lean",
   "Six Sigma"
  ],
  "answer_text": "B. PDSA",
  "explanation": "The IHI collaborative approach is built around the Model for Improvement and PDSA testing.",
  "correct": 1
 },
 {
  "num": 72,
  "category": "QI tools, pioneers, variation, PDSA and IHI Model for Improvement",
  "question": "Analysis has shown that there is a significant delay in receiving laboratory results in the emergency room. A cross-functional team is assigned the task of Improving laboratory reporting time. Which of the following is the next step the team should take?",
  "options": [
   "Identify the responsible individual.",
   "Complete a fishbone diagram.",
   "Plot a scatter diagram.",
   "Develop action plans."
  ],
  "answer_text": "B. Complete a fishbone diagram.",
  "explanation": "A cross-functional team should first understand the current process and collect/analyze data before choosing solutions.",
  "correct": 1
 },
 {
  "num": 73,
  "category": "QI tools, pioneers, variation, PDSA and IHI Model for Improvement",
  "question": "Once pilot testing is complete and the actions are determined to be effective, which of the following is the next step using a rapid cycle methodology?",
  "options": [
   "Benchmarking",
   "Defining scope",
   "Setting aims",
   "Spreading change"
  ],
  "answer_text": "D. Spreading change",
  "explanation": "After effective pilot testing, the next rapid-cycle step is implementation or broader spread.",
  "correct": 3
 },
 {
  "num": 74,
  "category": "QI tools, pioneers, variation, PDSA and IHI Model for Improvement",
  "question": "A healthcare quality professional has been hired to assist a quality improvement team with data analysis. in an attempt to enhance the team's analysis of the data, the quality professional should",
  "options": [
   "Use visual, graphical methods to present the data",
   "Collect and present all the completed data collection tools",
   "Publish and disseminate raw data in tables",
   "Direct the team to collect as much data as possible"
  ],
  "answer_text": "A. Use visual, graphical methods to present the data",
  "explanation": "The quality professional helps teams interpret data and select the right display or analysis method.",
  "correct": 0
 },
 {
  "num": 75,
  "category": "QI tools, pioneers, variation, PDSA and IHI Model for Improvement",
  "question": "A performance improvement team has been examining delays in getting admissions from the emergency department (ED) to the coronary care unit. The team has collected data and determined that a significant number of delays are occurring because cardiologists are not consulting on their patients in the ED in a timely manner. The best way to communicate this information to the cardiologists is to:",
  "options": [
   "Prepare a letter for the Chief Administrator's signature to all cardiologists, requesting their assistance.",
   "Attend the next cardiologists' meeting to solicit their input.",
   "Forward all delays from the ED to the cardiology peer review committee.",
   "Ask the team leader to e-mail all the cardiologists and describe the problem."
  ],
  "answer_text": "B. Attend the next cardiologists ' meeting to solicit their input.",
  "explanation": "For ED admission delays, the team should understand the current workflow before redesigning it.",
  "correct": 1
 },
 {
  "num": 76,
  "category": "QI tools, pioneers, variation, PDSA and IHI Model for Improvement",
  "question": "A physician complains about delays in receiving laboratory results, while the laboratory chief states response times are adequate. What should the quality manager do first?",
  "options": [
   "Facilitate a meeting between the laboratory chief and staff",
   "Revise the process to improve reporting timeliness",
   "Review data related to laboratory result reporting time",
   "Ask the physician about other laboratory concerns"
  ],
  "answer_text": "C. Review data related to laboratory result reporting time",
  "explanation": "When stakeholders disagree about turnaround time, the quality manager should collect objective data before deciding.",
  "correct": 2
 },
 {
  "num": 77,
  "category": "QI tools, pioneers, variation, PDSA and IHI Model for Improvement",
  "question": "A multidisciplinary team has been convened to review delays in laboratory turnaround time between the medicine clinic and the laboratory. The team's first step in evaluating the issue is to",
  "options": [
   "create a flow chart to study the process.",
   "conduct a failure mode and effects analysis (FMEA).",
   "see if the surgery clinic is also experiencing delays.",
   "observe how the medical assistants prepare the specimens."
  ],
  "answer_text": "A. create a flow chart to study the process.",
  "explanation": "A multidisciplinary team should first map or understand the laboratory turnaround process before testing fixes.",
  "correct": 0
 },
 {
  "num": 78,
  "category": "QI tools, pioneers, variation, PDSA and IHI Model for Improvement",
  "question": "A performance improvement project was initiated at the beginning of the flu season to increase the influenza vaccinations given in a pediatric clinic. The organization implemented a template to document patient influenza vaccine status and to offer the vaccine to any patients identified as not having been vaccinated. To evaluate and document the process improvement results over time, the quality professional should use which of the following?",
  "options": [
   "Control chart",
   "Matrix diagram",
   "Process decision program chart",
   "Force field analysis"
  ],
  "answer_text": "A. Control chart",
  "explanation": "After an improvement intervention, monitoring the results shows whether the change produced improvement and is sustained.",
  "correct": 0
 },
 {
  "num": 79,
  "category": "IDS, value-based care, managed care and access",
  "question": "Which of the following population health strategies is most likely to improve rural patient access to mental healthcare services?",
  "options": [
   "Apply a patient-centered medical home model to support care coordination.",
   "Educate about health insurance exchanges to increase patient knowledge.",
   "Partner with a health system to implement a telemedicine program.",
   "Develop a health coaching service to promote behavior modification."
  ],
  "answer_text": "C. Partner with a health system to implement a telemedicine program.",
  "explanation": "Telemedicine improves rural access, and access is one of the quality goals discussed in the PPT.",
  "correct": 2
 },
 {
  "num": 80,
  "category": "IDS, value-based care, managed care and access",
  "question": "Which of the following represents an unintended consequence of payer-driven quality initiatives?",
  "options": [
   "Increased use of healthcare services",
   "Improved population health",
   "Improved patient care",
   "Increased use of performance data by stakeholders"
  ],
  "answer_text": "A. Increased use of healthcare services",
  "explanation": "Payer-driven quality initiatives can unintentionally increase service use if incentives are poorly designed.",
  "correct": 0
 },
 {
  "num": 81,
  "category": "IDS, value-based care, managed care and access",
  "question": "Which of the following is most important for healthcare organizations to improve population health by reducing readmission rates?",
  "options": [
   "Creation of disease registries",
   "Local resource directory",
   "Transition of care programs",
   "Health information exchange"
  ],
  "answer_text": "C. Transition of care programs",
  "explanation": "Reducing readmissions requires coordinated care across the patient journey, which connects with IDS and value-based care concepts.",
  "correct": 2
 },
 {
  "num": 82,
  "category": "IDS, value-based care, managed care and access",
  "question": "To assist a primary care physician to improve their performance on a pay-for-performance program, the quality professional should begin with",
  "options": [
   "Obtaining a copy of the current measures for the physician",
   "Suggesting the physician take a course on measurement",
   "Writing a plan to improve processes in the office",
   "Researching benchmarking data for practices in the area"
  ],
  "answer_text": "A. Obtaining a copy of the current measures for the physician",
  "explanation": "To improve pay-for-performance, the first step is to review the provider\u2019s current performance data and gaps.",
  "correct": 0
 }
];// Exam Quiz question bank, keyed by NOTES_MODULES id.
// Completing the exam for a module (score >= pass threshold) unlocks the next module in the sidebar.
const EXAM_BANKS = {
  m1: [
  {
    "num": 1,
    "category": "Strategic planning, leadership, culture and QI alignment",
    "question": "When a CEO directs a quality improvement council to develop objectives for a goal, the council must ensure that they:",
    "options": [
      "State the end result or desired outcome.",
      "Tie the objectives to the organization's financial performance.",
      "Use the Plan-Do-Study-Act cycle of continuous improvement.",
      "Keep the objectives specific to the short term."
    ],
    "correct": 0,
    "explanation": "Effective objectives must be outcome-oriented, clearly stating the desired end result to ensure measurement and accountability."
  },
  {
    "num": 2,
    "category": "Strategic planning, leadership, culture and QI alignment",
    "question": "Staff struggling with a transition to new values after a merger most likely indicates a:",
    "options": [
      "Incomplete data integration.",
      "Staff transition program training incomplete.",
      "Lack of buy-in of the new mission and vision.",
      "Continued support of both mission statements."
    ],
    "correct": 2,
    "explanation": "Successful cultural transitions require belief and 'buy-in' from the staff regarding the new mission and vision of the merged entity."
  },
  {
    "num": 3,
    "category": "Quality, QI, value, Donabedian measures and STEEEP",
    "question": "Care that does not vary in quality because of personal characteristics such as gender or ethnicity is defined as:",
    "options": [
      "Efficient",
      "Equitable",
      "Effective",
      "Evidence-based"
    ],
    "correct": 1,
    "explanation": "Equity is one of the six domains of quality defined by the IOM (STEEEP), referring to the delivery of fair and impartial care."
  },
  {
    "num": 4,
    "category": "Patient safety, non-punitive culture and systems thinking",
    "question": "Which question demonstrates a culture of safety during a daily briefing?",
    "options": [
      "'Do we have available beds in the ICU?'",
      "'Did anything happen last night that could lead to a central line infection?'",
      "'Who is the last person that committed a medication error?'",
      "'What was the patient's intake and output?'"
    ],
    "correct": 1,
    "explanation": "Focusing on potential risks and systems (proactive) rather than blaming individuals (punitive) characterizes a safety culture."
  },
  {
    "num": 5,
    "category": "Patient safety, non-punitive culture and systems thinking",
    "question": "To assess a facility's patient safety culture, who should be surveyed?",
    "options": [
      "All staff and physicians",
      "All patients and their families",
      "A stratified sample of physicians and nurses",
      "A random sample of leaders and staff"
    ],
    "correct": 0,
    "explanation": "Safety culture involves every individual in the organization, so surveying all staff and physicians provides the most comprehensive view."
  },
  {
    "num": 6,
    "category": "Patient safety, non-punitive culture and systems thinking",
    "question": "When errors occur despite appropriate processes, leaders should focus on:",
    "options": [
      "Staff complaints.",
      "Patient satisfaction.",
      "Time constraints.",
      "Human factors."
    ],
    "correct": 3,
    "explanation": "Human factors engineering looks at how humans interact with systems and how to design those systems to minimize human error."
  },
  {
    "num": 7,
    "category": "Patient safety, non-punitive culture and systems thinking",
    "question": "A patient was accidentally given two doses of a sedating agent that had not been ordered. Which technology would have best helped prevent this specific error?",
    "options": [
      "Automated dispensing machine (ADM)",
      "Radio frequency identification (RFID)",
      "Barcode medication administration (BCMA)",
      "Computerized provider order entry (CPOE)"
    ],
    "correct": 2,
    "explanation": "Barcode medication administration (BCMA) ensures the 'five rights' at the bedside, preventing the administration of medications that are not ordered or have already been given."
  },
  {
    "num": 8,
    "category": "Patient safety, non-punitive culture and systems thinking",
    "question": "A nurse discovers an IV error before starting the infusion. The quality professional should:",
    "options": [
      "Encourage the nurse to report the near-miss.",
      "Recommend additional safety training.",
      "Perform no action as no harm occurred.",
      "Report the nurse to the manager."
    ],
    "correct": 0,
    "explanation": "Near-miss reporting is vital for identifying system vulnerabilities before they reach a patient and cause harm."
  },
  {
    "num": 9,
    "category": "Patient safety, non-punitive culture and systems thinking",
    "question": "Which response by leadership best demonstrates a safety culture regarding a rise in patient falls?",
    "options": [
      "Acknowledge the injuries as systems errors.",
      "Hold the unit manager responsible.",
      "Require training of involved staff.",
      "Place involved staff on a corrective plan."
    ],
    "correct": 0,
    "explanation": "A safety culture prioritizes systems thinking over individual blame, recognizing that most errors are caused by flawed system designs."
  },
  {
    "num": 10,
    "category": "QI education, teamwork, change management and staff involvement",
    "question": "Based on adult learning principles, a facilitation training session is most effective when:",
    "options": [
      "Participants study techniques after class.",
      "Participants practice facilitation during class.",
      "Concepts are taught and tested at the end.",
      "Handouts are provided for later reference."
    ],
    "correct": 1,
    "explanation": "Adults learn best through active participation and the immediate application of new skills."
  },
  {
    "num": 11,
    "category": "QI education, teamwork, change management and staff involvement",
    "question": "To gain employee support for a customer service change, a manager should first:",
    "options": [
      "Include service in performance reviews.",
      "Demonstrate the need for change.",
      "Seek authorization from the board.",
      "Empower the employees."
    ],
    "correct": 1,
    "explanation": "According to change management models (like Kotter's), establishing a sense of urgency or 'need for change' is the necessary first step."
  },
  {
    "num": 12,
    "category": "QI education, teamwork, change management and staff involvement",
    "question": "Effective learning in a 'learning organization' is best exemplified by:",
    "options": [
      "Taking a posttest after reading a bulletin.",
      "Auditing staff performance after training.",
      "Watching a video on patient admission.",
      "Using root cause analysis results to change processes."
    ],
    "correct": 3,
    "explanation": "A learning organization uses information from failures and analysis to actively transform processes and improve safety."
  },
  {
    "num": 13,
    "category": "QI education, teamwork, change management and staff involvement",
    "question": "Which approach is best for facilitating acceptance of a major change in a billing process?",
    "options": [
      "Immediate implementation",
      "Medical staff education",
      "A pilot project",
      "Long-range planning"
    ],
    "correct": 2,
    "explanation": "Piloting allows for testing a change on a small scale, reducing risk and allowing staff to see the benefits before a full rollout."
  },
  {
    "num": 14,
    "category": "QI education, teamwork, change management and staff involvement",
    "question": "When a team is frustrated because they don't know what they are supposed to accomplish, what should be explored first?",
    "options": [
      "Clarity of team goals",
      "Effectiveness of the team leader",
      "Clarity of team roles",
      "Effectiveness of the facilitator"
    ],
    "correct": 0,
    "explanation": "A team cannot function without a clear aim or charter; goal clarity is the foundation of team effectiveness."
  },
  {
    "num": 15,
    "category": "QI education, teamwork, change management and staff involvement",
    "question": "According to adult learning principles, what is the first step in preparing a presentation on documentation?",
    "options": [
      "Determine the audience's knowledge and expectations",
      "Develop an evaluation tool",
      "Present an inservice for the staff",
      "Obtain administrative support"
    ],
    "correct": 0,
    "explanation": "Understanding the baseline knowledge and needs of the audience ensures the training is relevant and effective."
  },
  {
    "num": 16,
    "category": "QI tools, pioneers, variation, PDSA and IHI Model for Improvement",
    "question": "Which tool best demonstrates length-of-stay (LOS) data over a period?",
    "options": [
      "Gantt chart",
      "Pareto chart",
      "Flowchart",
      "Run chart"
    ],
    "correct": 3,
    "explanation": "A run chart is ideal for showing continuous data like LOS over time to identify trends or shifts."
  },
  {
    "num": 17,
    "category": "QI education, teamwork, change management and staff involvement",
    "question": "A quality professional assisting a team with data analysis should enhance the team's understanding by:",
    "options": [
      "Directing the team to collect as much data as possible.",
      "Collecting all raw data collection tools.",
      "Publishing raw data in tables.",
      "Using visual, graphical methods to present the data."
    ],
    "correct": 3,
    "explanation": "Visualizations like charts and graphs make patterns and trends easier for team members to understand compared to raw data tables."
  },
  {
    "num": 18,
    "category": "IDS, value-based care, managed care and access",
    "question": "To improve population health by reducing readmission rates, which is most important?",
    "options": [
      "Transition of care programs",
      "Local resource directory",
      "Creation of disease registries",
      "Health information exchange"
    ],
    "correct": 0,
    "explanation": "Effective transition of care (discharge planning, follow-up) is the primary mechanism for preventing avoidable hospital readmissions."
  },
  {
    "num": 19,
    "category": "QI education, teamwork, change management and staff involvement",
    "question": "Which phase of the change process involves the most energy and is critical for influencing peers?",
    "options": [
      "Investing in staff who can influence peers",
      "Progressive discipline",
      "Delayed implementation",
      "Emphasizing non-compliance consequences"
    ],
    "correct": 0,
    "explanation": "In change management, leveraging early adopters and 'opinion leaders' is the most effective way to diffuse change through an organization."
  },
  {
    "num": 20,
    "category": "Strategic planning, leadership, culture and QI alignment",
    "question": "A local health plan staff continues to struggle with the transition to new organizational values one year after being acquired. What is the most likely explanation?",
    "options": [
      "Incomplete data integration.",
      "Staff transition program training is incomplete.",
      "Continued support of both mission statements.",
      "Lack of buy-in of the new mission and vision."
    ],
    "correct": 3,
    "explanation": "Cultural shifts and the adoption of new values require staff buy-in. Without commitment to the new mission and vision, the transition will be met with resistance or confusion."
  },
  {
    "num": 21,
    "category": "Quality, QI, value, Donabedian measures and STEEEP",
    "question": "A healthcare organization's heart failure admission rate dropped from 16% to 12% following an initiative. What is the most applicable action based on this performance?",
    "options": [
      "Monitor the performance to ensure sustained improvement.",
      "Discontinue the initiative to eliminate waste.",
      "Expand the initiative to other diseases.",
      "Shift resources to start another initiative."
    ],
    "correct": 0,
    "explanation": "Achieving a target is not enough; the quality professional must ensure that the improvements are sustained through ongoing monitoring before considering the project 'finished'."
  },
  {
    "num": 22,
    "category": "Patient safety, non-punitive culture and systems thinking",
    "question": "What is the best method to achieve a significant reduction in medical errors within a healthcare organization?",
    "options": [
      "Establish disciplinary measures for clinical practitioners who commit errors",
      "Encourage patients, families, and staff to report actual and potential errors",
      "Counsel employees to be more careful when providing care",
      "Change the process for reporting medical errors within the organization"
    ],
    "correct": 1,
    "explanation": "Reporting near-misses and actual errors provides the data necessary to identify system failures. A culture of reporting is essential for systemic safety improvements."
  },
  {
    "num": 23,
    "category": "Patient safety, non-punitive culture and systems thinking",
    "question": "A hospital leadership's initial reaction to medication errors is to counsel nurses, but the quality team finds systemic contributing factors. Which action best reflects systems thinking?",
    "options": [
      "Ask pharmacy staff to work faster during peak hours to reduce delays.",
      "Provide disciplinary action to nurses who failed to administer antibiotics on time.",
      "Send a reminder memo to all nursing staff about timely administration.",
      "Analyze the full medication-use process and identify interdependent workflow gaps."
    ],
    "correct": 3,
    "explanation": "Systems thinking involves evaluating how different parts of the organization interact and redesigning processes to prevent errors rather than focusing on individual blame."
  },
  {
    "num": 24,
    "category": "QI education, teamwork, change management and staff involvement",
    "question": "Which team composition provides the best mix of high-level support and frontline engagement for an ED-to-inpatient flow project?",
    "options": [
      "Housekeeping supervisor as process owner and quality professional as team leader",
      "Inpatient unit manager as team facilitator and ED manager as project sponsor",
      "Staff nurse ED as champion and CNO as project sponsor",
      "Staff nurse inpatient unit as facilitator and quality professional as champion"
    ],
    "correct": 2,
    "explanation": "The CNO (Chief Nursing Officer) provides executive sponsorship while a staff nurse champion ensures buy-in from those performing the work."
  },
  {
    "num": 25,
    "category": "Quality, QI, value, Donabedian measures and STEEEP",
    "question": "What is the primary purpose of a Diagnosis-Related Group (DRG)?",
    "options": [
      "To identify the specific ICD-10 code for a disease",
      "To track the number of outpatient visits per month",
      "To determine hospital payment packages based on case complexity",
      "To provide a medical diagnosis for individual patients"
    ],
    "correct": 2,
    "explanation": "DRGs are used to group hospital cases into payment categories based on diagnosis, complexity, and resource use."
  },
  {
    "num": 26,
    "category": "QI tools, pioneers, variation, PDSA and IHI Model for Improvement",
    "question": "According to the IHI Model for Improvement, what are the three fundamental questions?",
    "options": [
      "Who is involved? What is the cost? When will it end?",
      "Is it Specific? Is it Measurable? Is it Achievable?",
      "What are we trying to accomplish? How will we know that a change is an improvement? What change can we make that will result in improvement?",
      "What is the plan? How do we do it? When do we study it?"
    ],
    "correct": 2,
    "explanation": "These are the three foundational questions of the IHI Model for Improvement, used before starting the PDSA cycles."
  },
  {
    "num": 27,
    "category": "QI education, teamwork, change management and staff involvement",
    "question": "Which measure is used to ensure that improving one part of a system does not cause a negative impact in another part?",
    "options": [
      "Balancing measure",
      "Outcome measure",
      "Structural measure",
      "Process measure"
    ],
    "correct": 0,
    "explanation": "Balancing measures look at the system as a whole to ensure that improvements in one area (e.g., reducing length of stay) don't degrade another (e.g., increasing readmission rates)."
  },
  {
    "num": 28,
    "category": "Quality, QI, value, Donabedian measures and STEEEP",
    "question": "A review of the timeliness of high-risk screening for diabetes addresses which of the following focuses?",
    "options": [
      "Outcome of care",
      "Balancing measures",
      "Structural capacity",
      "Process of care"
    ],
    "correct": 3,
    "explanation": "According to slide 60, timeliness of screening is a process of care focus because it evaluates whether a care activity was performed correctly at the right time rather than evaluating the clinical result (outcome)."
  },
  {
    "num": 29,
    "category": "Quality, QI, value, Donabedian measures and STEEEP",
    "question": "If a healthcare process consists of five steps with individual reliabilities of 99%, 95%, 95%, 90%, and 93%, what is the approximate reliability of the entire process?",
    "options": [
      "95%",
      "90%",
      "75%",
      "85%"
    ],
    "correct": 2,
    "explanation": "Based on slides 62 and 63, the overall reliability is calculated by multiplying the reliability of each step (0.99 x 0.95 x 0.95 x 0.90 x 0.93), which results in approximately 75%."
  },
  {
    "num": 30,
    "category": "Strategic planning, leadership, culture and QI alignment",
    "question": "When assessing organizational culture and its impact on quality, the primary focus should be on:",
    "options": [
      "The annual budget allocated to quality departments",
      "The hierarchy shown on the organizational chart",
      "The number of policies written in the last year",
      "Compliance with the mission and vision statements"
    ],
    "correct": 3,
    "explanation": "Culture is reflected in whether daily behaviors and decisions align with the organization's mission and vision."
  },
  {
    "num": 31,
    "category": "Patient safety, non-punitive culture and systems thinking",
    "question": "In systems thinking, leaders study patterns of behavior by examining:",
    "options": [
      "Isolated components and individual errors",
      "Equipment maintenance logs only",
      "Departmental silos and hierarchy charts",
      "Interrelationships, decision patterns, and staff attitudes"
    ],
    "correct": 3,
    "explanation": "Slide 148 notes that systems thinking focuses on interrelationships and how mental models or attitudes drive system behavior."
  },
  {
    "num": 32,
    "category": "QI education, teamwork, change management and staff involvement",
    "question": "A quality professional wants to map internal customer relationships. Which question is most effective to ask employees?",
    "options": [
      "What is your job title?",
      "Who is your direct supervisor?",
      "Who in your workday do you serve?",
      "How many patients do you see per day?"
    ],
    "correct": 2,
    "explanation": "Asking 'Who do you serve?' identifies internal customers\u2014those who rely on an individual's work output within the organization."
  },
  {
    "num": 33,
    "category": "Quality, QI, value, Donabedian measures and STEEEP",
    "question": "Which of the following describes a 'Leading Measure'?",
    "options": [
      "The final outcome after a month is over",
      "A check performed before the result happens to prevent problems",
      "The total number of errors reported last year",
      "The mortality rate for the previous quarter"
    ],
    "correct": 1,
    "explanation": "A leading measure tracks actions or indicators that happen before the final result, allowing for intervention to ensure success."
  },
  {
    "num": 34,
    "category": "Quality, QI, value, Donabedian measures and STEEEP",
    "question": "What does the 'E' in STEEEP stand for when it refers to care that does not vary in quality because of personal characteristics?",
    "options": [
      "Effective",
      "Efficient",
      "Equitable",
      "Evidence-based"
    ],
    "correct": 2,
    "explanation": "Equitable care is one of the six dimensions of quality from the IOM, meaning care is provided regardless of gender, ethnicity, or socioeconomic status."
  },
  {
    "num": 35,
    "category": "QI tools, pioneers, variation, PDSA and IHI Model for Improvement",
    "question": "In the PDSA cycle, what occurs during the 'Study' phase?",
    "options": [
      "Identify the problem and plan the change",
      "Compare data to predictions and summarize learning",
      "Implement the change hospital-wide",
      "Carry out the test on a small scale"
    ],
    "correct": 1,
    "explanation": "The 'Study' phase involves analyzing the results of the test and comparing them against the original predictions to see what was learned."
  },
  {
    "num": 36,
    "category": "QI tools, pioneers, variation, PDSA and IHI Model for Improvement",
    "question": "Philip Crosby is best known for which quality philosophy?",
    "options": [
      "The Juran Trilogy",
      "Zero Defects and 'Do it right the first time'",
      "14 points for management",
      "Statistical Process Control charts"
    ],
    "correct": 1,
    "explanation": "Crosby championed 'Zero Defects' and the idea that quality is 'free' because doing things right the first time prevents scrap and rework costs."
  },
  {
    "num": 37,
    "category": "QI tools, pioneers, variation, PDSA and IHI Model for Improvement",
    "question": "Which tool is used to visualize the root causes of a specific quality event?",
    "options": [
      "Run Chart",
      "Control Chart",
      "Histogram",
      "Ishikawa Diagram"
    ],
    "correct": 3,
    "explanation": "The Ishikawa (Fishbone) diagram is the standard tool for identifying and organizing potential root causes."
  },
  {
    "num": 38,
    "category": "QI tools, pioneers, variation, PDSA and IHI Model for Improvement",
    "question": "A SMART Aim must be 'Time-bound.' What is the primary purpose of this?",
    "options": [
      "To ensure the project never ends",
      "To reduce the cost of the project",
      "To limit the number of staff involved",
      "To create a sense of urgency and a defined timeline for evaluation"
    ],
    "correct": 3,
    "explanation": "Being time-bound ensures there is a clear deadline to create urgency and a point at which the team evaluates success."
  },
  {
    "num": 39,
    "category": "Quality, QI, value, Donabedian measures and STEEEP",
    "question": "What is the key difference between a Clinical Audit and Quality Improvement (QI)?",
    "options": [
      "Audit generates new knowledge, while QI compares to targets.",
      "QI is only for research purposes, while Audit is for practice.",
      "Audit identifies gaps against a target, while QI tests interventions to close gaps.",
      "There is no difference between the two."
    ],
    "correct": 2,
    "explanation": "As shown in the slide examples, Clinical Audit identifies if a gap exists, whereas QI focuses on testing changes to improve performance."
  },
  {
    "num": 40,
    "category": "Quality, QI, value, Donabedian measures and STEEEP",
    "question": "Which type of Integrated Delivery System (IDS) integrates organizations at the same care level, such as multiple hospitals joining for resource sharing?",
    "options": [
      "Vertical IDS",
      "Diagonal IDS",
      "Horizontal IDS",
      "Circular IDS"
    ],
    "correct": 2,
    "explanation": "Horizontal integration occurs between similar organizations at the same level of care (e.g., a hospital chain)."
  },
  {
    "num": 41,
    "category": "Strategic planning, leadership, culture and QI alignment",
    "question": "In the context of redesigning an organization, 'Paradigm Shift' refers to:",
    "options": [
      "Reducing the number of staff to save money",
      "A fundamental change in how healthcare is delivered, such as moving from fee-for-service to value-based care",
      "Merging two departments under one manager",
      "Implementing a new electronic record system"
    ],
    "correct": 1,
    "explanation": "A paradigm shift is a fundamental change in approach or underlying assumptions, as exemplified by the move to value-based care."
  },
  {
    "num": 42,
    "category": "Quality, QI, value, Donabedian measures and STEEEP",
    "question": "Which Donabedian measure is 'Percentage of surgical patients receiving prophylactic antibiotics on time'?",
    "options": [
      "Structure",
      "Outcome",
      "Process",
      "Balancing"
    ],
    "correct": 2,
    "explanation": "This measures whether a specific care action (giving antibiotics) was performed correctly according to protocol."
  },
  {
    "num": 43,
    "category": "QI tools, pioneers, variation, PDSA and IHI Model for Improvement",
    "question": "The 'IHI Model for Improvement' emphasizes 'Iterative learning.' This is best represented by:",
    "options": [
      "One large-scale implementation",
      "Writing a long project report at the end",
      "Sequential PDSA cycles (ramps) building on each other",
      "Conducting a single annual audit"
    ],
    "correct": 2,
    "explanation": "Iterative learning means testing, studying, modifying, and testing again through sequential PDSA cycles."
  },
  {
    "num": 44,
    "category": "Strategic planning, leadership, culture and QI alignment",
    "question": "According to the slide on 'Transition to Value-Based Healthcare,' the focus shifts from volume of services to:",
    "options": [
      "Number of billing codes used",
      "Total revenue per admission",
      "Patient outcomes and experience",
      "Number of diagnostic tests performed"
    ],
    "correct": 2,
    "explanation": "Value-based healthcare prioritizes patient outcomes, safety, and efficiency over the sheer number of procedures or visits."
  },
  {
    "num": 45,
    "category": "QI tools, pioneers, variation, PDSA and IHI Model for Improvement",
    "question": "Which quality pioneer is known as the 'Father of Statistical Quality Control' and developed the PDCA cycle?",
    "options": [
      "Kaoru Ishikawa",
      "W. Edwards Deming",
      "Joseph Juran",
      "Walter A. Shewhart"
    ],
    "correct": 3,
    "explanation": "Shewhart developed Statistical Process Control and the original Plan-Do-Check-Act cycle in the 1920s."
  },
  {
    "num": 46,
    "category": "Quality, QI, value, Donabedian measures and STEEEP",
    "question": "Which type of Integrated Delivery System (IDS) involves integration across different levels of care, such as hospitals, clinics, labs, and home care?",
    "options": [
      "Horizontal IDS",
      "Diagonal IDS",
      "Parallel IDS",
      "Vertical IDS"
    ],
    "correct": 3,
    "explanation": "Slide 61 defines Vertical IDS as integration across different levels of care (e.g., hospital to home care), while Horizontal IDS is integration among similar organizations at the same care level."
  },
  {
    "num": 47,
    "category": "Quality, QI, value, Donabedian measures and STEEEP",
    "question": "In quality improvement, what does measuring 'all measures met' for a specific patient reflect?",
    "options": [
      "Step-level accuracy",
      "Structural readiness",
      "Individual staff performance",
      "End-to-end reliability"
    ],
    "correct": 3,
    "explanation": "Slide 64 states that measuring patients who had all measures met reflects end-to-end reliability, meaning the full process worked perfectly for that patient."
  },
  {
    "num": 48,
    "category": "Strategic planning, leadership, culture and QI alignment",
    "question": "When assessing organizational culture and its impact on quality, a professional should primarily focus on whether daily practices are aligned with:",
    "options": [
      "The annual budget",
      "Departmental silos",
      "The mission and vision",
      "Individual job descriptions"
    ],
    "correct": 2,
    "explanation": "Slide 66 explains that if staff attitudes and behaviors match the mission (purpose) and vision (aspirations), it indicates a strong culture of quality."
  },
  {
    "num": 49,
    "category": "Patient safety, non-punitive culture and systems thinking",
    "question": "Under the 'systems thinking' approach, which of the following should leaders study to understand system behavior and outcomes?",
    "options": [
      "Interrelationships and decision patterns",
      "Isolated departmental budgets",
      "Structural organization charts only",
      "Bylaws and rules in isolation"
    ],
    "correct": 0,
    "explanation": "Slide 67 notes that systems thinking involves studying how different parts interact, including interrelationships, decision patterns, and staff attitudes."
  },
  {
    "num": 50,
    "category": "Patient safety, non-punitive culture and systems thinking",
    "question": "Which combination of tools is most effective for analyzing patterns of behavior over time and linking data with real-world context?",
    "options": [
      "Line graphs and storytelling",
      "Pie charts and financial audits",
      "Bar graphs and disciplinary records",
      "Histograms and staff surveys"
    ],
    "correct": 0,
    "explanation": "Slide 68 mentions that line graphs help visualize trends, while storytelling helps explain the 'why' behind those patterns."
  },
  {
    "num": 51,
    "category": "QI education, teamwork, change management and staff involvement",
    "question": "To uncover internal customer relationships and service pathways, which question should a quality professional ask employees?",
    "options": [
      "Who is your direct supervisor?",
      "Who in your workday do you serve?",
      "What is your hourly rate?",
      "When do you take your break?"
    ],
    "correct": 1,
    "explanation": "Slide 69 explains that asking 'Who in your workday do you serve?' helps identify internal customer relationships and map service flows."
  },
  {
    "num": 52,
    "category": "Quality, QI, value, Donabedian measures and STEEEP",
    "question": "According to the analogy used in the training materials, a care process is similar to a chain in that:",
    "options": [
      "Each link is independent of the others",
      "The first link determines the quality of the last",
      "Adding more links increases the overall strength",
      "The chain is only as reliable as its weakest step"
    ],
    "correct": 3,
    "explanation": "Slide 65 uses the chain analogy to illustrate that even if most steps are strong, one failing step causes the entire process to fail."
  },
  {
    "num": 53,
    "category": "Quality, QI, value, Donabedian measures and STEEEP",
    "question": "Why does overall process reliability typically drop below the reliability level of any single step in a multi-step healthcare process?",
    "options": [
      "Because step-level errors multiply across the process",
      "Because the first step is always the most accurate",
      "Because staff focus less on the final steps",
      "Because documentation errors are not counted"
    ],
    "correct": 0,
    "explanation": "Slide 62 explains that when multiple steps are linked, overall reliability drops because small weaknesses in each step multiply."
  }
],
};

const EXAM_PASS_PCT = 70;
