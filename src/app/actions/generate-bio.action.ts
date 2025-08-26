'use server';

import { generateTeamMemberBio } from '@/ai/flows/generate-team-member-bio';
import { z } from 'zod';

const schema = z.object({
  content: z.string({
    required_error: "Content is required.",
  }).min(20, 'Please provide at least 20 characters of content.'),
});

type FormState = {
  bio: string | null;
  error: string | null;
};

export async function generateBioAction(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const validatedFields = schema.safeParse({
    content: formData.get('content'),
  });

  if (!validatedFields.success) {
    return {
      bio: null,
      error: validatedFields.error.flatten().fieldErrors.content?.[0] ?? "Invalid input.",
    };
  }

  try {
    const result = await generateTeamMemberBio({ content: validatedFields.data.content });
    if (!result.bio) {
        throw new Error("The AI failed to generate a bio. Please try again.");
    }
    return { 
        bio: result.bio, 
        error: null 
    };
  } catch (error) {
    console.error('Error generating bio:', error);
    return {
      bio: null,
      error: 'An unexpected error occurred while generating the bio. Please try again later.',
    };
  }
}
