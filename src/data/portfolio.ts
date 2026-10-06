export const personalInfo = {
  name: 'Nomthandazo Michelle Mahlaba',
  title: 'Grade 12 Graduate | Aspiring Professional',
  tagline: 'A motivated, dependable, and enthusiastic young professional ready to learn, grow, and contribute.',
  email: 'nomthandazomahlaba8@gmail.com',
  phone: '0752693498',
  location: 'Katlehong South, South Africa',
  github: '',
  linkedin: '',
  website: '',
  resumeUrl: '/cv.html',
  presentationUrl: '/Nomthandazo_Mahlaba_Portfolio_Presentation.pptx',
  bio: `I am a Grade 12 graduate from Leondale Secondary School with a positive attitude, strong work ethic, and a genuine willingness to learn. I enjoy working with people, communicating clearly, and taking on new challenges with confidence. I am currently seeking an opportunity where I can develop my skills and make a meaningful contribution.`,
  about: [
    `I completed Grade 12 at Leondale Secondary School in 2025. My subjects included English First Additional Language, isiZulu Home Language, Physical Sciences, Life Sciences, Mathematics, Geography, and Life Orientation.`,
    `I am a determined and hard-working person who enjoys collaborating with new people. My strengths include communication, interpersonal skills, writing, conflict resolution, negotiation, analytical thinking, and creativity.`,
    `Outside of school and professional development, I enjoy reading and playing netball. I speak English and isiZulu, and I bring energy, enthusiasm, and confidence to everything I do.`,
  ],
};

export const stats = [
  { value: '2025', label: 'Grade 12 Completed' },
  { value: '2', label: 'Languages' },
  { value: '8', label: 'Subjects Passed' },
  { value: '100%', label: 'Ready to Learn' },
];

export interface Skill {
  name: string;
  level: number;
}

export const technicalSkills: Skill[] = [
  { name: 'Communication', level: 90 },
  { name: 'Interpersonal Skills', level: 88 },
  { name: 'Writing', level: 84 },
  { name: 'Conflict Resolution', level: 82 },
  { name: 'Negotiation', level: 78 },
  { name: 'Analytical Thinking', level: 80 },
  { name: 'Creativity', level: 86 },
  { name: 'Teamwork', level: 92 },
];

export const softSkills: Skill[] = [
  { name: 'Hard Working', level: 95 },
  { name: 'Determination', level: 94 },
  { name: 'Confidence', level: 86 },
  { name: 'Adaptability', level: 88 },
  { name: 'Enthusiasm', level: 95 },
  { name: 'Positive Attitude', level: 94 },
];

export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  image: string;
  liveUrl: string;
  repoUrl: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Personal Portfolio Website',
    description: 'A responsive personal profile presenting my education, strengths, interests, and contact details.',
    longDescription:
      'This portfolio brings together my CV information in a professional, easy-to-navigate online profile. It is designed to help employers learn about my background, personal attributes, education, and readiness for new opportunities.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    image: 'portfolio',
    liveUrl: '#home',
    repoUrl: '#contact',
    featured: true,
  },
];

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
}

export const experience: ExperienceItem[] = [];

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  location: string;
  details: string;
  gpa: string;
}

export const education: EducationItem[] = [
  {
    degree: 'Grade 12',
    institution: 'Leondale Secondary School',
    period: 'Completed 2025',
    location: 'South Africa',
    details:
      'Subjects passed: English First Additional Language, isiZulu Home Language, Physical Sciences, Life Sciences, Mathematics, Geography, and Life Orientation.',
    gpa: 'Grade 12 completed',
  },
];

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialId: string;
  url: string;
}

export const certifications: Certification[] = [];

export const highlights = [
  'Energetic, optimistic, and friendly',
  'Determined and hard working',
  'Enjoys collaborating with new people',
  'Zealous and enthusiastic',
  'Confident in my abilities',
];

export const languages = ['English', 'isiZulu'];

export const interests = ['Reading', 'Netball'];
