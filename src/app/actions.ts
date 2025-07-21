'use server';

import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Please enter a valid email address.'),
  message: z.string().min(10, 'Message must be at least 10 characters.'),
});

type FormState = {
    success: boolean;
    message: string;
}

export async function submitContactForm(
  values: z.infer<typeof contactSchema>
): Promise<FormState> {
  const validated = contactSchema.safeParse(values);
  if (!validated.success) {
    return {
      success: false,
      message: 'Invalid form data.',
    };
  }

  try {
    // In a real application, you would send an email, save to a database, etc.
    console.log('Form submitted successfully:', validated.data);

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return {
      success: true,
      message: "Thank you for your message! I'll get back to you soon.",
    };
  } catch (error) {
    console.error('Error submitting form: ', error);
    return {
      success: false,
      message: 'An error occurred while submitting the form.',
    };
  }
}
