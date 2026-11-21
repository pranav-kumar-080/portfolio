export const personal = {
  name: 'Chikoti Pranav Kumar',
  initials: 'CPK',
  role: 'Software Developer | Java Programmer | Full-Stack Developer',
  location: 'Hyderabad, Telangana, India',
  introduction: 'I enjoy building practical applications, developing responsive web interfaces, designing backend systems, and solving challenging algorithmic problems. I focus on efficient code, understanding problems deeply, and making software that addresses real needs.',
  biography: 'I am pursuing a B.Tech in Computer Science and Engineering at Gokaraju Rangaraju Institute of Engineering and Technology (GRIET), Hyderabad. My primary interests are software development, Java programming, data structures and algorithms, and full-stack web development. I have built web applications with React.js, Node.js, Express.js, and MongoDB, and explored Python, NLP, and computer vision in academic and personal projects. I also mentor students at Smart Interviews and practice competitive programming; I have solved 600+ algorithmic problems on LeetCode using Java.',
  email: 'chikotipranavkumar@gmail.com',
  phone: '+91 7093563004',
  resumeUrl: '',
  avatarUrl: '',
  socials: {
    github: 'https://github.com/pranav-kumar-080',
    linkedin: 'https://www.linkedin.com/in/chikoti-pranav-kumar-bb04a4335/',
    leetcode: 'https://leetcode.com/u/Pranav0818/',
    codechef: 'https://www.codechef.com/users/pranav_0818',
  },
}

export const roles = ['Software Developer', 'Java Programmer', 'Full-Stack Developer', 'Competitive Programmer', 'Problem Solver']

export const statistics = [
  { value: '600+', label: 'Coding problems solved' },
  { value: '1800+', label: 'LeetCode rating' },
  { value: '8.89', label: 'CGPA / 10' },
  { value: '2nd', label: 'Mazecode contest' },
]

export const interests = ['Java programming', 'Data structures & algorithms', 'Competitive programming', 'Full-stack web development', 'Backend development', 'Database management', 'Software engineering', 'Application development']

export const skillGroups = [
  { title: 'Programming languages', items: ['Java', 'Python', 'C', 'JavaScript'] },
  { title: 'Frontend development', items: ['HTML5', 'CSS3', 'JavaScript', 'React.js'] },
  { title: 'Backend development', items: ['Node.js', 'Express.js', 'REST APIs', 'JWT authentication'] },
  { title: 'Databases', items: ['MongoDB', 'SQLite'] },
  { title: 'Tools & platforms', items: ['Git', 'GitHub', 'Visual Studio Code', 'Postman', 'Vercel'] },
  { title: 'Additional technical exposure', items: ['Natural language processing', 'Computer vision', 'Machine learning', 'Speech recognition', 'AI API integration'] },
  { title: 'Computer science foundations', items: ['Data structures & algorithms', 'OOP', 'DBMS', 'Operating systems', 'Computer networks', 'Software engineering'] },
]

export const projects = [
  {
    id: 'careerforge', title: 'CareerForge', category: 'Software Development', categories: ['GenAI'], type: 'AI-powered career development',
    description: 'A personalized career preparation platform combining technical interview practice, answer evaluation, resume analysis, and progress tracking.',
    detail: 'CareerForge helps students identify knowledge gaps, improve technical understanding, and prepare for placements through mastery-based practice. I worked on the technical interview evaluation module: semantic similarity, key-point coverage, rubric-based scoring across correctness, completeness, depth, and clarity, and performance tracking. I also contributed to resume analysis, subject-based question generation, and gamification.',
    stack: ['Python', 'JavaScript', 'React.js', 'NLP', 'Sentence Transformers', 'LLM evaluation', 'RAG', 'LangGraph'],
    features: ['Subject-based technical question generation', 'Semantic similarity and key-point coverage', 'Rubric-based automated scoring', 'Resume and ATS analysis', 'Speech-based interview practice', 'Progress, streaks, and rankings'],
    accent: 'violet', visual: 'career', github: '', demo: '',
  },
  {
    id: 'food-ordering', title: 'Food Ordering Web Application', category: 'Web Development', categories: ['Software Development'], type: 'Full-stack food ordering platform',
    description: 'A full-stack ordering platform with a responsive customer experience, food catalog, cart, order management, and admin tools.',
    detail: 'The application covers the food ordering flow from customer accounts and catalog browsing through cart operations, order processing, and online payments. It includes a separate administrative dashboard and REST APIs backed by MongoDB.',
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'Stripe', 'JWT', 'bcrypt'],
    features: ['Responsive customer interface', 'JWT authentication and bcrypt password hashing', 'Food catalog and cart operations', 'Order management and admin dashboard', 'Stripe payment integration', 'MongoDB-backed REST API'],
    accent: 'coral', visual: 'food', github: '', demo: '',
  },
  {
    id: 'voice-verse', title: 'Voice Verse', category: 'AI/ML', type: 'Conversational virtual tutor',
    description: 'A conversational academic tutor with contextual follow-ups, structured explanations, and voice interaction.',
    detail: 'Voice Verse combines conversational learning with speech interfaces. A fine-tuned DistilT5 model generates structured explanations, Whisper converts spoken questions to text, and Coqui TTS reads responses aloud. Students can ask academic questions and continue with contextual follow-ups.',
    stack: ['Python', 'NLP', 'DistilT5', 'Whisper', 'Coqui TTS'],
    features: ['Context-aware academic assistance', 'Structured step-by-step explanations', 'Speech-to-text with Whisper', 'Text-to-speech with Coqui', 'Follow-up question support'],
    accent: 'blue', visual: 'voice', github: '', demo: '',
  },
  {
    id: 'air-drawing', title: 'AI Air Drawing & Learning System', category: 'AI/ML', type: 'Gesture-based math learning',
    description: 'Draw mathematical expressions in the air with hand gestures, then get AI-generated solutions and explanations.',
    detail: 'OpenCV and MediaPipe provide real-time hand tracking and gesture recognition to capture finger movements on a virtual canvas. The recognized mathematical expression is sent to Gemini API for a solution with step-by-step explanations.',
    stack: ['Python', 'OpenCV', 'MediaPipe', 'Gemini API'],
    features: ['Real-time hand tracking', 'Air drawing without a physical input device', 'Virtual drawing canvas', 'Mathematical expression solving', 'Step-by-step AI explanations'],
    accent: 'lime', visual: 'drawing', github: '', demo: '',
  },
]

export const education = [
  { period: 'Aug 2023 – Jul 2027', title: 'Bachelor of Technology', organization: 'Gokaraju Rangaraju Institute of Engineering & Technology (GRIET)', description: 'Computer Science and Engineering · CGPA: 8.89 / 10 · Hyderabad, Telangana, India', highlights: ['Data Structures and Algorithms', 'Object-Oriented Programming', 'Database Management Systems', 'Operating Systems', 'Computer Networks', 'Software Engineering'] },
]

export const experience = [
  { period: 'Aug 2026 – Present', title: 'Mentor', organization: 'Smart Interviews', description: 'Supporting students as they strengthen programming fundamentals and problem-solving ability.', highlights: ['Mentor students in Data Structures and Algorithms', 'Clarify programming doubts and explain algorithmic concepts', 'Help students develop problem-solving approaches and optimize code', 'Manage queries and provide personalized technical guidance', 'Build logical reasoning and coding proficiency'], skills: ['Technical communication', 'Mentoring', 'Collaboration', 'Analytical thinking'] },
]

export const achievements = [
  { title: '600+', detail: 'LeetCode problems solved · Java' },
  { title: '1800+', detail: 'LeetCode rating · Knight Badge' },
  { title: '1400+', detail: 'CodeChef rating' },
  { title: '2nd Place', detail: 'Mazecode Coding Contest' },
  { title: 'Rank 1132', detail: 'Smart Coder · 2025 · of 52,621 participants' },
]

export const certifications = [
  { name: 'Python Training', issuer: 'Spoken Tutorial Project, IIT Bombay' },
  { name: 'CSS (Basics)', issuer: 'HackerRank' },
  { name: 'Java (Basics)', issuer: 'HackerRank' },
  { name: 'Data Science for Engineers', issuer: 'NPTEL' },
]

export const codingProfiles = {
  leetcode: { solved: '600+', rating: '1800+', badge: 'Knight Badge' },
  codechef: { rating: '1400+' },
}
