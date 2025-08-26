'use client';

import { useEffect, useState } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { Bot, Loader2, Sparkles } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { generateBioAction } from '@/app/actions/generate-bio.action';
import type { TeamMember } from '@/lib/team-data';
import { Label } from '../ui/label';
import { Alert, AlertDescription, AlertTitle } from '../ui/alert';

const initialState = {
  bio: null,
  error: null,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full sm:w-auto">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Generating...
        </>
      ) : (
        <>
          <Sparkles className="mr-2 h-4 w-4" />
          Generate Bio
        </>
      )}
    </Button>
  );
}

type BioGeneratorProps = {
    member: TeamMember;
    onBioUpdate: (memberId: number, newBio: string) => void;
};

export function BioGenerator({ member, onBioUpdate }: BioGeneratorProps) {
  const [state, formAction] = useFormState(generateBioAction, initialState);
  const [open, setOpen] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    if (state.error) {
      toast({
        variant: 'destructive',
        title: 'Generation Failed',
        description: state.error,
      });
    }
  }, [state.error, toast]);
  
  useEffect(() => {
    if (state.bio) {
        toast({
            title: 'Bio Generated!',
            description: 'A new bio has been successfully generated.',
        });
    }
  }, [state.bio, toast]);

  const handleApplyBio = () => {
    if (state.bio) {
        onBioUpdate(member.id, state.bio);
        setOpen(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="w-full">
          <Bot className="mr-2 h-4 w-4" />
          Generate AI Bio
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Generate Bio for {member.name}</DialogTitle>
          <DialogDescription>
            Enter some details, resume points, or a brief description, and our AI will craft a professional bio.
          </DialogDescription>
        </DialogHeader>
        <form action={formAction}>
          <div className="grid gap-4 py-4">
            <div className="grid w-full gap-1.5">
              <Label htmlFor="content">Content</Label>
              <Textarea
                id="content"
                name="content"
                placeholder="e.g., '10 years of experience in React...'"
                rows={8}
                required
              />
            </div>
          </div>
          <DialogFooter>
            <SubmitButton />
          </DialogFooter>
        </form>
        {state.bio && (
            <div className="mt-4">
                <Alert>
                    <Sparkles className="h-4 w-4" />
                    <AlertTitle>Generated Bio</AlertTitle>
                    <AlertDescription className="mt-2 text-foreground">
                        {state.bio}
                    </AlertDescription>
                </Alert>
                <Button onClick={handleApplyBio} className="w-full mt-4">Apply this bio</Button>
            </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
