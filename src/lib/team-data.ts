export type TeamMember = {
  id: number;
  name: string;
  role: string;
  avatarUrl: string;
  department: 'Engineering' | 'Design' | 'Product' | 'Marketing';
  tags: string[];
  bio: string;
  dataAiHint: string;
};

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Alex Rivera',
    role: 'Lead Software Engineer',
    avatarUrl: 'https://picsum.photos/id/237/400/400',
    department: 'Engineering',
    tags: ['Frontend', 'React', 'TypeScript'],
    bio: 'Alex is a seasoned software engineer with a passion for creating beautiful and performant user interfaces. With over a decade of experience, he leads the frontend team with a focus on mentorship and innovation.',
    dataAiHint: 'professional man',
  },
  {
    id: 2,
    name: 'Samantha Chen',
    role: 'UX/UI Designer',
    avatarUrl: 'https://picsum.photos/id/238/400/400',
    department: 'Design',
    tags: ['Figma', 'User Research', 'Prototyping'],
    bio: 'Samantha translates complex problems into intuitive and delightful user experiences. Her design philosophy is centered around empathy, ensuring that every product decision is user-centric.',
    dataAiHint: 'professional woman',
  },
  {
    id: 3,
    name: 'Ben Carter',
    role: 'Senior Product Manager',
    avatarUrl: 'https://picsum.photos/id/239/400/400',
    department: 'Product',
    tags: ['Roadmap', 'Strategy', 'Agile'],
    bio: 'Ben drives the product vision, aligning business goals with user needs. He excels at breaking down ambitious ideas into actionable plans, guiding teams from concept to launch.',
    dataAiHint: 'smiling person',
  },
  {
    id: 4,
    name: 'Maria Garcia',
    role: 'Backend Engineer',
    avatarUrl: 'https://picsum.photos/id/240/400/400',
    department: 'Engineering',
    tags: ['Node.js', 'Databases', 'API Design'],
    bio: 'Maria architects and maintains the robust backend systems that power our applications. She has a deep expertise in database optimization and scalable API design, ensuring our services are always reliable.',
    dataAiHint: 'woman developer',
  },
  {
    id: 5,
    name: 'David Kim',
    role: 'Marketing Lead',
    avatarUrl: 'https://picsum.photos/id/241/400/400',
    department: 'Marketing',
    tags: ['Content Strategy', 'SEO', 'Campaigns'],
    bio: 'David crafts compelling narratives that connect with our audience. He leads our marketing efforts, driving growth and building a strong brand presence through strategic content and campaigns.',
    dataAiHint: 'man office',
  },
  {
    id: 6,
    name: 'Olivia Martinez',
    role: 'Frontend Developer',
    avatarUrl: 'https://picsum.photos/id/242/400/400',
    department: 'Engineering',
    tags: ['React', 'CSS', 'Accessibility'],
    bio: 'Olivia is a frontend developer who is passionate about building accessible and inclusive web experiences. She believes that the web should be for everyone and champions best practices in accessibility.',
    dataAiHint: 'woman glasses',
  },
];

export const allDepartments = ['Engineering', 'Design', 'Product', 'Marketing'] as const;
