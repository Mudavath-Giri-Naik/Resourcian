'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
export default function HigherStudiesPage() {
  const [selectedOption, setSelectedOption] = useState<'India' | 'Outside India'>('India');

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 mt-10 sm:p-4">
      <motion.h1 
        className="text-5xl  font-bold mb-4 text-gray-800 "
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Want to Study Masters ?
      </motion.h1>
      
      <motion.p 
        className="text-lg sm:text-base text-gray-600  mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        Choose your preferred location to see details.
      </motion.p>
      
      <div className="flex space-x-4 mb-8">
        <motion.button
          className={`px-6 py-3 rounded-lg text-lg font-medium transition-all duration-300 ease-in-out ${selectedOption === 'India' ? 'bg-blue-600 text-white shadow-lg' : 'bg-gray-300 text-gray-700 hover:bg-gray-400'}`}
          onClick={() => setSelectedOption('India')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Outside India
        </motion.button>
        
        <motion.button
          className={`px-6 py-3 rounded-lg text-lg font-medium transition-all duration-300 ease-in-out ${selectedOption === 'Outside India' ? 'bg-blue-600 text-white shadow-lg' : 'bg-gray-300 text-gray-700 hover:bg-gray-400'}`}
          onClick={() => setSelectedOption('Outside India')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          In India
        </motion.button>
      </div>
      {/* Step 1 */}
            <div className="w-full max-w-2xl p-4 border rounded shadow">
                {selectedOption === 'India' ? (
                <div>
                <div className="max-w-3xl mx-auto p-6 text-gray-800">
            <h2 className="text-3xl font-bold text-blue-600 mb-4">📌 Step 1: Research & Plan</h2>
            
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">✅ Choose Your Country & Course</h3>
            <p className="mb-2">Decide which country you want to study in:</p>
            <ul className="list-disc pl-5 mb-3 text-gray-700">
                <li>USA, Canada, UK, Germany, Australia, Singapore, Ireland, Netherlands, Sweden, etc.</li>
            </ul>
            
            <p className="mb-2">Choose a specialization within Computer Science:</p>
            <ul className="list-disc pl-5 mb-3 text-gray-700">
                <li>Artificial Intelligence, Data Science, Cybersecurity, Software Engineering, Blockchain, etc.</li>
            </ul>
            
            <p className="mb-2">Research universities based on:</p>
            <ul className="list-disc pl-5 mb-6 text-gray-700">
                <li>Course curriculum</li>
                <li>Tuition fees & scholarships</li>
                <li>Job prospects & work permits after graduation</li>
                <li>Language & cultural preferences</li>
            </ul>
            
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">✅ Eligibility Requirements</h3>
            <p className="mb-2">Bachelor's degree (B.Tech/B.E.) in a relevant field.</p>
            
            <p className="mb-2">Minimum CGPA requirement:</p>
            <ul className="list-disc pl-5 mb-3 text-gray-700">
                <li><strong>Top universities:</strong> 8.5+ (on a 10-scale)</li>
                <li><strong>Mid-tier universities:</strong> 7.0–8.5</li>
                <li><strong>Safe universities:</strong> 6.5+</li>
            </ul>
            
            <p className="mb-2">Additional requirements:</p>
            <ul className="list-disc pl-5 text-gray-700">
                <li>GRE/GMAT Scores (Required in USA, optional in other countries).</li>
                <li>English Proficiency (TOEFL/IELTS/PTE/Duolingo).</li>
                <li>Some universities require work experience (MIT, Stanford prefer 1-2 years).</li>
            </ul>
            </div>
                    {/* Step 2 */}
                    <div className="max-w-3xl mx-auto p-6 text-gray-800">
            <h2 className="text-2xl font-bold text-blue-600">📌 Step 2: Prepare & Take Standardized Tests</h2>

            <div className="mt-4">
                <h3 className="text-xl font-semibold text-green-600">✅ Register & Take GRE (Graduate Record Examination)</h3>
                <ul className="list-disc pl-6">
                <li><strong>Where required?</strong> USA, some Canadian & European universities.</li>
                <li><strong>When to take it?</strong> 12–14 months before intake.</li>
                <li><strong>GRE Sections:</strong> Verbal, Quantitative, Analytical Writing.</li>
                <li><strong>Scoring:</strong> 260-340 (320+ for top universities).</li>
                <li><strong>Exam Fee:</strong> ₹22,550 (~$205 USD).</li>
                <li><strong>Official Registration Link:</strong> <a href="https://www.ets.org/gre" target="_blank" className="text-blue-500 hover:underline">ETS GRE</a></li>
                </ul>
            </div>

            <div className="mt-6">
                <h3 className="text-xl font-semibold text-green-600">✅ Register & Take English Proficiency Test</h3>
                <ul className="list-disc pl-6">
                <li><strong>TOEFL:</strong> ₹16,900 (~$185 USD) | <a href="https://www.ets.org/toefl" target="_blank" className="text-blue-500 hover:underline">Register Here</a></li>
                <li><strong>IELTS:</strong> ₹17,000 (~$200 USD) | <a href="https://www.ielts.org/" target="_blank" className="text-blue-500 hover:underline">Register Here</a></li>
                <li><strong>PTE:</strong> ₹15,900 (~$180 USD) | <a href="https://www.pearsonpte.com/" target="_blank" className="text-blue-500 hover:underline">Register Here</a></li>
                <li><strong>Duolingo (if accepted):</strong> ₹4,200 (~$49 USD) | <a href="https://englishtest.duolingo.com/" target="_blank" className="text-blue-500 hover:underline">Register Here</a></li>
                </ul>
            </div>

            <div className="mt-6 bg-gray-100 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-yellow-600">💡 Tip:</h3>
                <p>Best time to take GRE/IELTS: At least 12 months before application deadlines.</p>
                <p>GRE scores valid for 5 years, TOEFL/IELTS valid for 2 years.</p>
            </div>
            </div>
                {/* Step 3 */}
                <div className="max-w-3xl mx-auto p-6 text-gray-800">
            <h2 className="text-2xl font-bold text-blue-600">📌 Step 3: Shortlist Universities & Programs</h2>

            <div className="mt-4">
                <h3 className="text-xl font-semibold text-green-600">✅ Use These Platforms to Shortlist Universities</h3>
                <ul className="list-disc pl-6">
                <li><a href="https://www.yocket.com" target="_blank" className="text-blue-500 hover:underline">Yocket</a> (Filters based on GRE & CGPA).</li>
                <li><a href="https://www.usnews.com" target="_blank" className="text-blue-500 hover:underline">US News Rankings</a></li>
                <li><a href="https://www.studyabroad.shiksha.com" target="_blank" className="text-blue-500 hover:underline">Shiksha Study Abroad</a></li>
                <li><a href="https://www.topuniversities.com" target="_blank" className="text-blue-500 hover:underline">QS World Rankings</a></li>
                </ul>
            </div>

            <div className="mt-6">
                <h3 className="text-xl font-semibold text-green-600">✅ Categorize Universities</h3>
                <ul className="list-disc pl-6">
                <li><strong>Ambitious:</strong> Hard to get in, but dream universities.</li>
                <li><strong>Moderate:</strong> You have a good chance of getting in.</li>
                <li><strong>Safe:</strong> You will most likely get admitted.</li>
                </ul>
            </div>

            <div className="mt-6">
                <h3 className="text-xl font-semibold text-green-600">✅ Check University Requirements</h3>
                <ul className="list-disc pl-6">
                <li>GRE cutoffs, IELTS/TOEFL requirements, SOP/LOR format.</li>
                <li><strong>Application fees:</strong> ₹3,000–₹10,000 per university.</li>
                <li><strong>Application portals:</strong></li>
                <ul className="list-disc pl-10">
                    <li><strong>USA:</strong> Common App, ApplyTexas, UCAS.</li>
                    <li><strong>Germany:</strong> UniAssist.</li>
                    <li><strong>Canada:</strong> University-specific portals.</li>
                </ul>
                </ul>
            </div>
            </div>
            {/* Step 4 */}
            <div className="max-w-3xl mx-auto p-6 text-gray-800">
  <h2 className="text-2xl font-bold text-blue-600">📌 Step 4: Prepare Application Documents</h2>

  <div className="mt-4">
    <h3 className="text-xl font-semibold text-green-600">✅ 1. Statement of Purpose (SOP)</h3>
    <p className="mt-2">Length: <strong>800–1,000 words</strong>.</p>
    <p className="mt-2">Includes:</p>
    <ul className="list-disc pl-6">
      <li>Why this university?</li>
      <li>Your skills, projects, and research.</li>
      <li>Future career goals.</li>
      <li>Why should they admit you?</li>
    </ul>
    <p className="mt-2"><span className="font-semibold text-gray-700">💡 Tip:</span> Get your SOP reviewed by mentors, professors, or AI-based tools like <a href="https://www.grammarly.com" target="_blank" className="text-blue-500 hover:underline">Grammarly</a>.</p>
  </div>

  <div className="mt-6">
    <h3 className="text-xl font-semibold text-green-600">✅ 2. Letters of Recommendation (LORs)</h3>
    <p className="mt-2"><strong>Required:</strong> 2-3 LORs from professors/employers.</p>
    <p className="mt-2"><strong>Should highlight:</strong> Technical skills, leadership, research work.</p>
  </div>

  <div className="mt-6">
    <h3 className="text-xl font-semibold text-green-600">✅ 3. Resume (CV)</h3>
    <p className="mt-2"><strong>Length:</strong> 1–2 pages.</p>
    <p className="mt-2"><strong>Includes:</strong> Education, projects, internships, research, publications.</p>
  </div>

  <div className="mt-6">
    <h3 className="text-xl font-semibold text-green-600">✅ 4. Academic Transcripts</h3>
    <p className="mt-2">Official marksheets & certificates from <strong>B.Tech/B.E.</strong></p>
  </div>

  <div className="mt-6">
    <h3 className="text-xl font-semibold text-green-600">✅ 5. Financial Documents</h3>
    <ul className="list-disc pl-6">
      <li><strong>Proof of funds:</strong> Bank statements, loan sanction letters.</li>
      <li><strong>Affidavit of sponsorship:</strong> If funded by family/sponsor.</li>
    </ul>
  </div>
</div>

            {/* Step 5 */}
            <div className="max-w-3xl mx-auto p-6 text-gray-800">
  <h2 className="text-2xl font-bold text-blue-600">📌 Step 5: Apply to Universities</h2>

  <div className="mt-4">
    <h3 className="text-xl font-semibold text-green-600">✅ Application Process</h3>
    <ul className="list-disc pl-6 mt-2">
      <li>Apply directly on university websites or centralized portals.</li>
      <li>Pay application fees (<strong>₹3,000–₹10,000</strong> per university).</li>
      <li>Submit SOP, LORs, transcripts, and test scores.</li>
      <li>Track your application status.</li>
    </ul>
    <p className="mt-2"><span className="font-semibold text-gray-700">💡 Tip:</span> Apply to <strong>5-10 universities</strong> (Mix of ambitious, moderate, and safe options).</p>
  </div>
</div>

            {/* Step 6 */}
            <div className="max-w-3xl mx-auto p-6 text-gray-800">
  <h2 className="text-2xl font-bold text-blue-600">📌 Step 6: Receive Admission Decisions</h2>

  <p className="mt-4">Universities respond in <strong>1-3 months</strong>.</p>

  <div className="mt-4">
    <h3 className="text-xl font-semibold text-green-600">You may get:</h3>
    <ul className="list-disc pl-6 mt-2">
      <li><strong className="text-green-600">Acceptance Letter 🎉</strong></li>
      <li><strong className="text-yellow-600">Waitlist</strong> – You’re on hold.</li>
      <li><strong className="text-red-600">Rejection</strong> – Apply for backup options.</li>
    </ul>
  </div>

  <div className="mt-4">
    <h3 className="text-xl font-semibold text-green-600">✅ Finalize Your University</h3>
    <p className="mt-2">
      Pay non-refundable deposit (<strong>₹50,000–₹2,00,000</strong>) to confirm your seat.
    </p>
  </div>
</div>

            {/* Step 7 */}
            <div className="max-w-3xl mx-auto p-6 text-gray-800">
  <h2 className="text-2xl font-bold text-blue-600">📌 Step 7: Apply for Education Loan & Scholarships</h2>

  <div className="mt-4">
    <h3 className="text-xl font-semibold text-green-600">✅ Scholarships</h3>
    <ul className="list-disc pl-6 mt-2">
      <li><strong>Fulbright</strong>, <strong>Chevening</strong>, <strong>DAAD</strong>, <strong>Erasmus Mundus</strong> (Merit-based).</li>
      <li>University-Specific Scholarships.</li>
    </ul>
  </div>

  <div className="mt-4">
    <h3 className="text-xl font-semibold text-green-600">✅ Education Loans</h3>
    <p className="mt-2"><strong>Banks:</strong> SBI, HDFC Credila, ICICI.</p>
    <p className="mt-2"><strong>NBFCs:</strong> Prodigy Finance, Leap Finance.</p>
  </div>
</div>

            {/* Step 8 */}
            <div className="max-w-3xl mx-auto p-6 text-gray-800">
  <h2 className="text-2xl font-bold text-blue-600">📌 Step 8: Apply for Student Visa (2–4 Months Before Intake)</h2>

  <div className="mt-4">
    <h3 className="text-xl font-semibold text-green-600">Student Visa Types</h3>
    <ul className="list-disc pl-6 mt-2">
      <li><strong>USA:</strong> F-1 Visa</li>
      <li><strong>Canada:</strong> Study Permit</li>
      <li><strong>UK:</strong> Tier 4 Visa</li>
      <li><strong>Germany:</strong> National Visa (D)</li>
    </ul>
  </div>

  <div className="mt-4">
    <h3 className="text-xl font-semibold text-green-600">✅ Visa Process</h3>
    <ul className="list-disc pl-6 mt-2">
      <li>Pay Visa Fees (~₹12,000–₹35,000 depending on the country).</li>
      <li>Attend Visa Interview (USA, UK, Canada).</li>
      <li>Receive Visa Approval.</li>
    </ul>
  </div>
</div>

            {/* Step 9 */}
            <div className="max-w-3xl mx-auto p-6 text-gray-800">
  <h2 className="text-2xl font-bold text-blue-600">📌 Step 9: Book Flights & Accommodation (1–3 Months Before Intake)</h2>

  <div className="mt-4">
    <h3 className="text-xl font-semibold text-green-600">✈️ Flight Booking</h3>
    <p className="mt-2">Book flights early to save <strong>₹20,000–₹50,000</strong>.</p>
  </div>

  <div className="mt-4">
    <h3 className="text-xl font-semibold text-green-600">📢 Connect with Other Students</h3>
    <p className="mt-2">Join <strong>WhatsApp/Facebook groups</strong> for student networking.</p>
  </div>

  <div className="mt-4">
    <h3 className="text-xl font-semibold text-green-600">🏠 Accommodation</h3>
    <p className="mt-2">Arrange accommodation (On-campus or off-campus housing).</p>
  </div>
</div>

            {/* Step 10 */}
            <div className="max-w-3xl mx-auto p-6 text-gray-800">
  <h2 className="text-2xl font-bold text-blue-600">📌 Step 10: Fly & Start Your MS Journey! 🚀</h2>

  <div className="mt-4">
    <h3 className="text-xl font-semibold text-green-600">🎓 Pre-Departure Preparation</h3>
    <p className="mt-2">✔ Attend <strong>Pre-Departure Orientation (PDO)</strong>.</p>
  </div>

  <div className="mt-4">
    <h3 className="text-xl font-semibold text-green-600">📜 Essential Documents</h3>
    <p className="mt-2">✔ Carry your <strong>passport, I-20 (USA), admission letter, and visa</strong>.</p>
  </div>

  <div className="mt-4">
    <h3 className="text-xl font-semibold text-green-600">✈ Arrival Timeline</h3>
    <p className="mt-2">✔ Arrive <strong>1-2 weeks before classes begin</strong> to settle in.</p>
  </div>
</div>


          </div>
        ) : (
            
          <div>
            {/* Step 1 */}
            <div className="max-w-3xl mx-auto p-6 text-gray-800">
  <h2 className="text-2xl font-bold text-blue-600">📌 Step 1: Choose Your Course and College</h2>
  <p className="mt-2 text-gray-700">Before starting the application process, research and decide:</p>

  <ul className="list-disc list-inside mt-3 space-y-2 text-gray-800">
    <li> Which course you want to pursue (e.g., <strong>M.Tech, MBA, M.Sc, MCA</strong>).</li>
    <li> Which universities/colleges offer your preferred program.</li>
    <li> The admission process for each college (<strong>exam, interview, direct admission</strong>).</li>
    <li> Check the eligibility criteria (minimum percentage, work experience, etc.).</li>
    <li> Look at placement records, faculty, and infrastructure.</li>
  </ul>

  <div className="mt-6">
    <h3 className="text-xl font-semibold text-green-600">🔹 Examples of Top Colleges & Their Exams:</h3>
    <div className="overflow-x-auto mt-4">
      <table className="w-full border border-gray-300 rounded-lg text-left">
        <thead className="bg-gray-100 text-gray-800">
          <tr>
            <th className="py-2 px-4 border">Course</th>
            <th className="py-2 px-4 border">Top Colleges</th>
            <th className="py-2 px-4 border">Entrance Exam Required</th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          <tr>
            <td className="py-2 px-4 border">M.Tech</td>
            <td className="py-2 px-4 border">IITs, NITs, IIITs, IISc, BITS</td>
            <td className="py-2 px-4 border">GATE</td>
          </tr>
          <tr>
            <td className="py-2 px-4 border">MBA</td>
            <td className="py-2 px-4 border">IIMs, XLRI, FMS, ISB, SPJIMR</td>
            <td className="py-2 px-4 border">CAT, XAT, GMAT, CMAT</td>
          </tr>
          <tr>
            <td className="py-2 px-4 border">M.Sc</td>
            <td className="py-2 px-4 border">IITs, IISc, DU, BHU, JNU</td>
            <td className="py-2 px-4 border">IIT JAM, CUET-PG, JNUEE</td>
          </tr>
          <tr>
            <td className="py-2 px-4 border">MCA</td>
            <td className="py-2 px-4 border">NITs, JNU, DU, BHU</td>
            <td className="py-2 px-4 border">NIMCET, CUET-PG</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <p className="mt-4 text-blue-600 font-medium">📌 Tip: Make a list of 5-10 colleges based on your preferences.</p>
</div>

            {/* Step 2 */}
            <div className="max-w-3xl mx-auto p-6 text-gray-800">
  <h2 className="text-2xl font-bold text-blue-600">📌 Step 2: Register for Entrance Exam</h2>
  <p className="mt-2 text-gray-700">Most master’s programs require an entrance exam.</p>

  <ul className="list-disc list-inside mt-3 space-y-2 text-gray-800">
    <li>Visit the official website of the entrance exam.</li>
    <li>Register with your details (<strong>name, phone number, email</strong>).</li>
    <li>Upload documents (<strong>photo, signature, certificates</strong>).</li>
    <li>Pay the application fee online.</li>
    <li>Download the admit card when available.</li>
  </ul>

  <div className="mt-6">
    <h3 className="text-xl font-semibold text-green-600">📅 Common Exam Application Periods:</h3>
    <div className="overflow-x-auto mt-4">
      <table className="w-full border border-gray-300 rounded-lg text-left">
        <thead className="bg-gray-100 text-gray-800">
          <tr>
            <th className="py-2 px-4 border">Exam</th>
            <th className="py-2 px-4 border">Application Period</th>
            <th className="py-2 px-4 border">Exam Month</th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          <tr>
            <td className="py-2 px-4 border">GATE</td>
            <td className="py-2 px-4 border">Aug-Sep</td>
            <td className="py-2 px-4 border">Feb</td>
          </tr>
          <tr>
            <td className="py-2 px-4 border">CAT</td>
            <td className="py-2 px-4 border">Aug-Sep</td>
            <td className="py-2 px-4 border">Nov</td>
          </tr>
          <tr>
            <td className="py-2 px-4 border">XAT</td>
            <td className="py-2 px-4 border">Oct-Nov</td>
            <td className="py-2 px-4 border">Jan</td>
          </tr>
          <tr>
            <td className="py-2 px-4 border">IIT JAM</td>
            <td className="py-2 px-4 border">Sep-Oct</td>
            <td className="py-2 px-4 border">Feb</td>
          </tr>
          <tr>
            <td className="py-2 px-4 border">CUET-PG</td>
            <td className="py-2 px-4 border">March-April</td>
            <td className="py-2 px-4 border">June</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <p className="mt-4 text-blue-600 font-medium">📌 Tip: Set reminders so you don’t miss deadlines!</p>
</div>

            {/* Step 3 */}
            <div className="max-w-3xl mx-auto p-6 text-gray-800">
  <h2 className="text-2xl font-bold text-blue-600">📌 Step 3: Prepare & Appear for the Entrance Exam</h2>
  <p className="mt-2 text-gray-700">Timeframe: <strong>4-6 Months Before Admission</strong></p>

  <ul className="list-disc list-inside mt-4 space-y-2 text-gray-800">
    <li>Create a study plan based on the syllabus.</li>
    <li>Solve previous year question papers and mock tests.</li>
    <li>Revise important topics before the exam.</li>
    <li>Appear for the exam on the scheduled date.</li>
  </ul>

  <p className="mt-6 text-blue-600 font-medium">
    📌 Tip: Some colleges have their own entrance exams (e.g., <strong>BITS HD</strong> for M.Tech, <strong>DUET</strong> for PG courses), so check accordingly.
  </p>
</div>

            {/* Step 4 */}
            <div className="max-w-3xl mx-auto p-6 text-gray-800">
  <h2 className="text-2xl font-bold text-blue-600">📌 Step 4: Check Results & Apply for Counseling</h2>
  <p className="mt-2 text-gray-700">Timeframe: <strong>2-4 Months Before Admission</strong></p>

  <p className="mt-4 font-medium">Once the results are announced:</p>
  <ul className="list-disc list-inside mt-2 space-y-2 text-gray-800">
    <li>Download your scorecard from the exam’s official website.</li>
    <li>Check the cutoff scores for different colleges.</li>
    <li>Apply for counseling if required (e.g., <strong>CCMT</strong> for M.Tech admissions in NITs).</li>
    <li>Fill in your college preferences.</li>
  </ul>

  <div className="mt-6">
    <h3 className="text-lg font-semibold text-blue-600">Common Counseling Processes:</h3>
    <table className="w-full mt-2 border border-gray-300">
      <thead className="bg-blue-100">
        <tr>
          <th className="border p-2">Exam</th>
          <th className="border p-2">Counseling Process</th>
        </tr>
      </thead>
      <tbody className="text-gray-800">
        <tr>
          <td className="border p-2">GATE (M.Tech)</td>
          <td className="border p-2">CCMT (for NITs, IIITs), COAP (for IITs)</td>
        </tr>
        <tr>
          <td className="border p-2">CAT (MBA)</td>
          <td className="border p-2">IIM Admission Process, GD & PI rounds</td>
        </tr>
        <tr>
          <td className="border p-2">NIMCET (MCA)</td>
          <td className="border p-2">NIT MCA Counseling</td>
        </tr>
        <tr>
          <td className="border p-2">IIT JAM (M.Sc)</td>
          <td className="border p-2">CCMN Counseling</td>
        </tr>
      </tbody>
    </table>
  </div>

  <p className="mt-6 text-blue-600 font-medium">
    📌 Tip: Keep an eye on deadlines, as missing counseling means losing your seat!
  </p>
</div>


            {/* Step 5 */}
            <div className="max-w-3xl mx-auto p-6 text-gray-800">
  <h2 className="text-2xl font-bold text-blue-600">📌 Step 5: Attend Interview/Group Discussion (If Required)</h2>
  <p className="mt-2 text-gray-700">Timeframe: <strong>1-3 Months Before Admission</strong></p>

  <p className="mt-4">For MBA and some other programs, colleges conduct:</p>
  <ul className="list-disc list-inside mt-2 space-y-2 text-gray-800">
    <li><strong>Group Discussions (GD)</strong> – Discuss a given topic in a group setting.</li>
    <li><strong>Personal Interviews (PI)</strong> – One-on-one interview to assess your skills and goals.</li>
    <li><strong>Written Ability Tests (WAT)</strong> – Short essay or case study writing.</li>
  </ul>

  <div className="mt-6">
    <h3 className="text-lg font-semibold text-blue-600">✅ How to Prepare:</h3>
    <ul className="list-disc list-inside mt-2 space-y-2 text-gray-800">
      <li>Research and practice <strong>common interview questions</strong> related to your field.</li>
      <li>Stay updated on <strong>current affairs</strong> and industry trends.</li>
      <li>Improve your <strong>communication skills</strong> by practicing mock interviews.</li>
      <li>Attend the interview/GD <strong>on the scheduled date</strong> (online or offline).</li>
    </ul>
  </div>

  <p className="mt-6 text-blue-600 font-medium">
    📌 Tip: Some colleges may also conduct interviews online, so ensure you have a good internet connection and a professional setup.
  </p>
</div>

            {/* Step 6 */}
            <div className="max-w-3xl mx-auto p-6 text-gray-800">
  <h2 className="text-2xl font-bold text-green-600">📌 Step 6: Receive Admission Offer & Pay Fees</h2>
  <p className="mt-2 text-gray-700">Timeframe: <strong>1-2 Months Before Admission</strong></p>

  <p className="mt-4">Once the admission results are out, follow these steps:</p>
  <ul className="list-disc list-inside mt-2 space-y-2 text-gray-800">
    <li><strong>Check if you are selected</strong> in the merit list or allotted a seat.</li>
    <li><strong>Accept the admission offer</strong> before the given deadline.</li>
    <li><strong>Pay the admission/first semester fee</strong> online or via demand draft.</li>
  </ul>

  <div className="mt-6">
    <h3 className="text-lg font-semibold text-green-600">💡 Important Notes:</h3>
    <ul className="list-disc list-inside mt-2 space-y-2 text-gray-800">
      <li>Colleges may have <strong>non-refundable deposits</strong>, so check the terms before paying.</li>
      <li>If you are on a <strong>waiting list</strong>, monitor updates regularly.</li>
      <li>Save and print your <strong>payment receipt</strong> for future reference.</li>
    </ul>
  </div>

  <p className="mt-6 text-green-600 font-medium">
    📌 Tip: Some institutes send admission offers in multiple rounds. Keep an eye on emails and portals!
  </p>
</div>

            {/* Step 7 */}
            <div className="max-w-3xl mx-auto p-6 text-gray-800">
  <h2 className="text-2xl font-bold text-blue-600">📌 Step 7: Arrange for Accommodation</h2>
  <p className="mt-2 text-gray-700">Timeframe: <strong>1 Month Before Admission</strong></p>

  <p className="mt-4">Once your admission is confirmed, make arrangements for your stay:</p>
  <ul className="list-disc list-inside mt-2 space-y-2 text-gray-800">
    <li><strong>Apply for a hostel seat</strong> if available on campus.</li>
    <li>If no hostel, explore <strong>PGs or rental flats</strong> near the college.</li>
    <li><strong>Arrange essentials</strong> like bedding, cooking items, and a laptop.</li>
  </ul>

  <div className="mt-6">
    <h3 className="text-lg font-semibold text-blue-600">💡 Important Notes:</h3>
    <ul className="list-disc list-inside mt-2 space-y-2 text-gray-800">
      <li>Book your accommodation early to avoid last-minute rush.</li>
      <li>Check rental agreements and amenities before finalizing.</li>
      <li>Ensure safety and proximity to campus while choosing PGs/flats.</li>
    </ul>
  </div>

  <p className="mt-6 text-blue-600 font-medium">
    📌 Tip: Join college WhatsApp/Telegram groups to connect with seniors for hostel/PG recommendations.
  </p>
</div>

            {/* Step 8 */}
            <div className="max-w-3xl mx-auto p-6 text-gray-800">
  <h2 className="text-2xl font-bold text-blue-600">📌 Step 8: Document Verification & Final Admission</h2>
  <p className="mt-2 text-gray-700">Timeframe: <strong>Few Weeks Before College Starts</strong></p>

  <p className="mt-4">Complete the final admission process by verifying your documents:</p>
  <ul className="list-disc list-inside mt-2 space-y-2 text-gray-800">
    <li><strong>Visit the college</strong> for in-person document verification.</li>
    <li><strong>Carry both original and photocopies</strong> of required documents.</li>
  </ul>

  <div className="mt-6">
    <h3 className="text-lg font-semibold text-blue-600">📑 Required Documents:</h3>
    <ul className="list-disc list-inside mt-2 space-y-2 text-gray-800">
      <li>Entrance exam <strong>scorecard & admit card</strong></li>
      <li><strong>Bachelor’s degree certificate</strong> & all mark sheets</li>
      <li><strong>Caste/Category certificate</strong> (if applicable)</li>
      <li><strong>Aadhar card</strong> or other government ID proof</li>
      <li><strong>Passport-size photos</strong></li>
    </ul>
  </div>

  <p className="mt-6 text-blue-600 font-medium">
    📌 Tip: Some colleges allow <strong>online document verification</strong>. Check their website for details.
  </p>
</div>

            {/* Step 9 */}
            <div className="max-w-3xl mx-auto p-6 text-gray-800">
  <h2 className="text-2xl font-bold text-green-600">📌 Step 9: Attend Orientation & Start Your Master’s Degree! 🎉</h2>
  <p className="mt-2 text-gray-700"><strong>Timeframe:</strong> First Week of College</p>

  <p className="mt-4">Kickstart your master's journey by attending the orientation and settling in:</p>
  <ul className="list-disc list-inside mt-2 space-y-2 text-gray-800">
    <li><strong>Join the college orientation</strong> to understand academic guidelines and campus culture.</li>
    <li><strong>Meet professors and classmates</strong> to build your academic network.</li>
    <li><strong>Explore resources</strong> like the library, research labs, and student facilities.</li>
    <li><strong>Begin coursework and research</strong> (if applicable).</li>
  </ul>

  <p className="mt-6 text-green-600 font-medium">
    📌 Tip: Engage in <strong>networking, internships, and research</strong> from the first semester to maximize opportunities!
  </p>
</div>

          </div>
        )}
      </div>

      
    </div>
  );
}
