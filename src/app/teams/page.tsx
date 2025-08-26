'use client';

import { useState, useMemo } from 'react';
import type { TeamMember } from '@/lib/team-data';
import { teamMembers, allDepartments } from '@/lib/team-data';
import { TeamCard } from '@/components/team/TeamCard';
import { TeamFilters } from '@/components/team/TeamFilters';

export default function TeamsPage() {
  const [members, setMembers] = useState<TeamMember[]>(teamMembers);
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const handleFilterChange = (department: string) => {
    setActiveFilters((prev) =>
      prev.includes(department)
        ? prev.filter((d) => d !== department)
        : [...prev, department]
    );
  };

  const filteredMembers = useMemo(() => {
    if (activeFilters.length === 0) {
      return members;
    }
    return members.filter((member) => activeFilters.includes(member.department));
  }, [members, activeFilters]);

  const updateMemberBio = (memberId: number, newBio: string) => {
    setMembers((prevMembers) =>
      prevMembers.map((member) =>
        member.id === memberId ? { ...member, bio: newBio } : member
      )
    );
  };

  return (
    <div className="container mx-auto px-4 py-12 sm:py-16">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">Meet Our Team</h1>
        <p className="mt-4 text-lg text-foreground/80">
          We are a diverse group of engineers, designers, and product managers united by a passion for building exceptional products.
        </p>
      </div>

      <TeamFilters
        departments={allDepartments}
        activeFilters={activeFilters}
        onFilterChange={handleFilterChange}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {filteredMembers.map((member) => (
          <TeamCard key={member.id} member={member} onBioUpdate={updateMemberBio} />
        ))}
      </div>
    </div>
  );
}
