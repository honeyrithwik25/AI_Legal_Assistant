// Legal categories
const categories = [
  { id: 'all', name: 'All Categories', icon: '📋' },
  { id: 'employment', name: 'Employment & Labour', icon: '💼' },
  { id: 'family', name: 'Family Law', icon: '👨‍👩‍👧‍👦' },
  { id: 'civil', name: 'Civil', icon: '⚖️' },
  { id: 'criminal', name: 'Criminal', icon: '🔐' },
  { id: 'banking', name: 'Banking', icon: '🏦' },
  { id: 'property', name: 'Property', icon: '🏠' },
  { id: 'cyber', name: 'Cyber Crime', icon: '💻' },
  { id: 'consumer', name: 'Consumer Protection', icon: '🛡️' },
  { id: 'tax', name: 'Tax', icon: '📊' }
];

// Sample lawyers
const lawyers = [
  { id: 1, name: 'Gourab Das', category: 'employment', avatar: 'GD' },
  { id: 2, name: 'Simi Paul', category: 'employment', avatar: 'SP' },
  { id: 3, name: 'Abhimanyu Shandilya', category: 'civil', avatar: 'AS' },
  { id: 4, name: 'Kishan Dutt Kalaskar', category: 'family', avatar: 'KD' },
  { id: 5, name: 'S. K. Dutta', category: 'banking', avatar: 'SK' }
];

// Sample questions & answers (inspired by Vidhikarya)
const questions = [
  {
    id: 1,
    title: 'Termination in 2000 – Acquittal in 2018',
    excerpt: 'I was terminated in 2000 from a cooperative bank on alleged confession, without any departmental enquiry. A criminal case on the same facts continued for 18 years and I was honourably acquitted in 2018.',
    fullQuestion: 'I was terminated in 2000 from a cooperative bank on alleged confession, without any departmental enquiry. A criminal case on the same facts continued for 18 years and I was honourably acquitted in 2018. Can my termination be quashed now?',
    category: 'employment',
    date: '28-Jan-2026',
    responses: 2,
    lawyerId: 1,
    answer: 'Dear Client, Yes, your termination can potentially be quashed based on the acquittal in the criminal case on identical facts, particularly since no departmental enquiry was held violating principles of natural justice. The acquittal creates a fresh cause of action for representations/writs post-2018, allowing courts to overlook some delay if satisfactorily explained, though 22-year laches from 2000 remains a hurdle — argue no prejudice to bank and fundamental rights violation. Cooperative banks are governed by applicable cooperative society laws and service rules.'
  },
  {
    id: 2,
    title: 'Lien Status – Railway & AIIMS',
    excerpt: 'Mera lien AIIMS me h, ek mahine pahle railway join kiya. Mujhe wapas AIIMS me join karna hai. Railway bolta hai AIIMS letter dega tb hm apko lien ka paper aage badhega. AIIMS bolta hai railway written...',
    fullQuestion: 'Mera lien AIIMS me h ek mahine pahle railway join kiya hu mujhe wapas aiims me join karna hai Railway bolta hai aiims letter dega tb hm apko lien ka paper aage badhega AIIMS bolta hai railway written confirmation chahiye.',
    category: 'employment',
    date: '28-Jan-2026',
    responses: 1,
    lawyerId: 1,
    answer: 'Dear Client, Railway aur AIIMS ke beech lien issue ko resolve karne ke liye pehle aap AIIMS ke HR/Medical Superintendent office mein written application submit karein, clearly stating ki aap railway job join kar chuke hain lekin lien maintain karna chahte hain aur wapas AIIMS join karne ke liye ready hain — isme railway joining letter ki copy attach karein. Saath hi railway ke Medical Directorate ko bhi application bhejein jisme AIIMS se lien confirmation pending hone ka zikr karein.'
  },
  {
    id: 3,
    title: 'Not Paid Labour Bill – 6 Months Pending',
    excerpt: 'How can I get my six-month-old bill? Without an agreement I took this work, I have more than 10 nos of labour which they don\'t paid.',
    fullQuestion: 'How can I get my six-month-old bill. without an agreement i took this work, i have more than 10 nos of labour which they don\'t paid.',
    category: 'employment',
    date: '23-Jan-2026',
    responses: 2,
    lawyerId: 1,
    answer: 'Dear Client, If you have not been paid for labour work done six months ago without a written agreement, you should first gather all proof such as WhatsApp messages, invoices, attendance records, photos of work, witness details, and any payment receipts, then send a legal notice through an advocate demanding immediate payment within a specified period (usually 15 days). If payment is still not made, you can file a civil suit for recovery of the unpaid amount in the appropriate court.'
  },
  {
    id: 4,
    title: 'Technical Resignation in Tamil Nadu Government',
    excerpt: 'Whether a Tamil Nadu Government Servant when applied for a job on other Tamil Nadu government department after getting proper NOC from the parent department and got selected in the...',
    fullQuestion: 'Whether a Tamil Nadu Government Servant when applied for a job on other Tamilnadu government department after getting proper No Objection Certificate from the parent department and got selected in the new department — can he give technical resignation?',
    category: 'employment',
    date: '22-Jan-2026',
    responses: 1,
    lawyerId: 2,
    answer: 'Dear client, In Tamil Nadu Government service, the concept of Technical Resignation is recognized and permitted, broadly in line with Central Government principles, but it is governed by Tamil Nadu State Service Rules, Tamil Nadu Pension Rules, Fundamental Rules (FRs), and Finance Department clarifications. A Tamil Nadu Government servant who applies for another post within the government and gets selected with proper NOC can give technical resignation.'
  },
  {
    id: 5,
    title: 'Employer Pause Resignation – No Show Cause for 55 Days',
    excerpt: 'Employer pause resignation due to internal enquiry. Employer suspends me and do not issue show cause till 55 days.',
    fullQuestion: 'Employer pause resignation due to internal enquiry. Employer suspends me and do not issue show cause till 55 days. What can I do?',
    category: 'employment',
    date: '19-Jan-2026',
    responses: 1,
    lawyerId: 2,
    answer: 'Dear client, An employer may place an employee under suspension and pause acceptance of resignation if an internal enquiry is contemplated or pending. However, such action must strictly follow principles of natural justice and applicable service rules. Suspension cannot be used as a punitive measure by itself. An employer is required to communicate the allegations clearly and issue a show cause notice or charge memo within a reasonable time. An unexplained delay of several weeks without issuing show cause may be challenged.'
  },
  {
    id: 6,
    title: 'Not Payment of Salary – Infinite Wait',
    excerpt: 'Hi sir can you please tell me what will be the punishment in the court if the employer doesn\'t give my salary saying I may have to wait for infinite time for it?',
    fullQuestion: 'Hi sir can you please tell me what will be the punishment in the court if the employer doesn\'t give my salary saying I may have to wait for infinite time for it?',
    category: 'employment',
    date: '20-Jan-2026',
    responses: 1,
    lawyerId: 2,
    answer: 'Dear client, Non-payment of salary is a violation of labour and employment laws. An employer cannot withhold wages indefinitely. Depending on the facts, the court or labour authority may direct the employer to pay the pending salary with interest and penalties. In serious or repeated cases, the employer may also face fines, prosecution, or other statutory consequences under applicable labour laws.'
  },
  {
    id: 7,
    title: 'Relieving Letter – Company Served 4 Years Back',
    excerpt: 'I have worked in a company as third party contract employee in 2020 for 6 months during corona second wave. I left the job without serving notice period. He has considered me as absconding...',
    fullQuestion: 'I have worked in a company as third party contract employee in 2020 for 6 months during corona second wave i left the job without serving notice period. He has considered me as absconding and holding relieving letter. Can I get it now?',
    category: 'employment',
    date: '16-Jan-2026',
    responses: 2,
    lawyerId: 4,
    answer: 'Dear Sir, Yes — you can take legal action. Send a formal legal notice through an advocate demanding: Acceptance of settlement, Issuance of Experience / Service Certificate (not "Relieving Letter" wording), Closure of employment record. The nature and strength of your remedy depends on your employment status (third-party contractual) and the documents you have.'
  },
  {
    id: 8,
    title: 'Consumer Rights – Defective Product Refund',
    excerpt: 'I purchased a smartphone 3 months ago. It has multiple hardware defects. The company is refusing refund. What are my rights under consumer protection?',
    fullQuestion: 'I purchased a smartphone 3 months ago. It has multiple hardware defects. The company is refusing refund and only offering repair. What are my rights under consumer protection law?',
    category: 'consumer',
    date: '25-Jan-2026',
    responses: 1,
    lawyerId: 3,
    answer: 'Dear Client, Under the Consumer Protection Act 2019, you have the right to seek replacement or refund for defective goods. Since the product has multiple hardware defects, you may approach the Consumer Disputes Redressal Commission. Document all defects, warranty, invoices, and communication with the company. The Commission can direct refund, replacement, or compensation.'
  },
  {
    id: 9,
    title: 'Property Dispute – Neighbour Encroachment',
    excerpt: 'My neighbour has constructed a wall 2 feet onto my land. I have the sale deed. He refuses to remove it. What legal steps can I take?',
    fullQuestion: 'My neighbour has constructed a wall 2 feet onto my land. I have the sale deed proving my boundary. He refuses to remove it. What legal steps can I take?',
    category: 'property',
    date: '24-Jan-2026',
    responses: 1,
    lawyerId: 3,
    answer: 'Dear Client, You can file a civil suit for declaration of title and mandatory injunction for removal of encroachment. Get a survey done by a licensed surveyor to establish the boundary. You may also send a legal notice before filing the suit. In urgent cases, you can seek interim relief from the court to restrain further construction.'
  },
  {
    id: 10,
    title: 'Cheque Bounce – Recovery Options',
    excerpt: 'A client issued a cheque for ₹2 lakh which bounced. He is now avoiding my calls. How do I recover the amount?',
    fullQuestion: 'A client issued a cheque for ₹2 lakh which bounced due to insufficient funds. He is now avoiding my calls. How do I recover the amount legally?',
    category: 'banking',
    date: '21-Jan-2026',
    responses: 1,
    lawyerId: 5,
    answer: 'Dear Client, Under Section 138 of the Negotiable Instruments Act, you can initiate criminal proceedings for cheque bounce. Send a legal notice within 30 days of receiving the bounce memo, demanding payment within 15 days. If payment is not received, file a complaint before the competent court. You can also file a civil suit for recovery of the amount.'
  }
];

// FAQ data
const faqs = [
  { q: 'What is this Free Legal Advice service?', a: 'This service allows you to post legal queries for free and receive answers from qualified lawyers. It is an open forum where experts respond based on their availability.' },
  { q: 'Who answers my queries?', a: 'All questions are answered by our panel of experienced lawyers and legal experts who specialize in various fields of law.' },
  { q: 'Is Free Legal Advice available 24×7?', a: 'Yes, you can post questions anytime through our platform. Lawyers respond based on their availability, usually within a reasonable timeframe.' },
  { q: 'How can I post a question?', a: 'Simply click "Ask Your Question", fill in the title, description, category, along with your city, state, and email, then submit. Your post will appear in the open forum.' },
  { q: 'Is lawyer consultation included in free advice?', a: 'Advice via the online forum is free. Any individual consultation (phone, video, or meeting) with a lawyer may come with a fee, agreed upon upfront.' },
  { q: 'How is my privacy protected?', a: 'Lawyers are bound by professional ethics. Your question is visible in the forum, but your personal identity is protected. We do not share your contact details without consent.' }
];
