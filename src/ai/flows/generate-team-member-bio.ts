'use server';
/**
 * @fileOverview Bio generation flow for team members.
 *
 * - generateTeamMemberBio - Generates a professional bio for a team member.
 * - GenerateTeamMemberBioInput - The input type for the bio generation function.
 * - GenerateTeamMemberBioOutput - The return type for the bio generation function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import wav from 'wav';

const GenerateTeamMemberBioInputSchema = z.object({
  content: z
    .string()
    .describe(
      'Resume content or a short description of the team member. Limit 1000 words.'
    ),
});
export type GenerateTeamMemberBioInput = z.infer<typeof GenerateTeamMemberBioInputSchema>;

const GenerateTeamMemberBioOutputSchema = z.object({
  bio: z.string().describe('The generated professional bio for the team member.'),
});
export type GenerateTeamMemberBioOutput = z.infer<typeof GenerateTeamMemberBioOutputSchema>;

export async function generateTeamMemberBio(input: GenerateTeamMemberBioInput): Promise<GenerateTeamMemberBioOutput> {
  return generateTeamMemberBioFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateTeamMemberBioPrompt',
  input: {schema: GenerateTeamMemberBioInputSchema},
  output: {schema: GenerateTeamMemberBioOutputSchema},
  prompt: `You are a professional bio writer. Generate a professional-sounding bio for a team member based on the following content:\n\nContent: {{{content}}}\n\nBio:`, // Added Bio: to the prompt
});

const generateTeamMemberBioFlow = ai.defineFlow(
  {
    name: 'generateTeamMemberBioFlow',
    inputSchema: GenerateTeamMemberBioInputSchema,
    outputSchema: GenerateTeamMemberBioOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
