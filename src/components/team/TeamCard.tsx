import type { TeamMember } from '@/lib/team-data';
import Image from 'next/image';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BioGenerator } from './BioGenerator';

type TeamCardProps = {
  member: TeamMember;
  onBioUpdate: (memberId: number, newBio: string) => void;
};

export function TeamCard({ member, onBioUpdate }: TeamCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <CardHeader className="p-0">
        <div className="relative h-56 w-full">
          <Image
            src={member.avatarUrl}
            alt={`Profile picture of ${member.name}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            data-ai-hint={member.dataAiHint}
          />
        </div>
      </CardHeader>
      <CardContent className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-semibold text-primary">{member.name}</h3>
        <p className="text-muted-foreground font-medium">{member.role}</p>
        <div className="flex flex-wrap gap-2 my-4">
          <Badge variant="secondary">{member.department}</Badge>
          {member.tags.map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
        <p className="text-sm text-foreground/80 flex-1">{member.bio}</p>
        <div className="mt-6">
          <BioGenerator member={member} onBioUpdate={onBioUpdate} />
        </div>
      </CardContent>
    </Card>
  );
}
