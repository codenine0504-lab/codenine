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

export const teamMembers: TeamMember[] = [];

export const allDepartments = ['Engineering', 'Design', 'Product', 'Marketing'] as const;
