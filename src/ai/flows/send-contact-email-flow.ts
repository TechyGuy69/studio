'use server';
/**
 * @fileOverview A flow to send an email from the contact form.
 *
 * - sendContactEmail - A function that handles sending the contact form data.
 * - ContactFormInput - The input type for the sendContactEmail function.
 * - SendEmailOutput - The return type for the sendContactEmail function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const ContactFormInputSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  subject: z.string(),
  message: z.string(),
});
export type ContactFormInput = z.infer<typeof ContactFormInputSchema>;

const SendEmailOutputSchema = z.object({
  success: z.boolean(),
  error: z.string().optional(),
});
export type SendEmailOutput = z.infer<typeof SendEmailOutputSchema>;

const sendContactEmailFlow = ai.defineFlow(
  {
    name: 'sendContactEmailFlow',
    inputSchema: ContactFormInputSchema,
    outputSchema: SendEmailOutputSchema,
  },
  async (input) => {
    console.log('Received contact form submission:');
    console.log('Name:', input.name);
    console.log('Email:', input.email);
    console.log('Subject:', input.subject);
    console.log('Message:', input.message);
    
    // In a real application, you would integrate with an email sending service
    // like SendGrid, Mailgun, or AWS SES here.
    // For this example, we'll just log to the console and simulate success.
    
    const recipientEmail = 'abanerje02@gmail.com';
    console.log(`Simulating sending email to ${recipientEmail}`);

    try {
      // TODO: Replace with actual email sending logic.
      // await sendEmail({
      //   to: recipientEmail,
      //   from: 'noreply@yourdomain.com', // A verified sender email
      //   subject: `New Contact Form Submission: ${input.subject}`,
      //   html: `
      //     <h1>New Contact Form Submission</h1>
      //     <p><strong>Name:</strong> ${input.name}</p>
      //     <p><strong>Email:</strong> ${input.email}</p>
      //     <p><strong>Subject:</strong> ${input.subject}</p>
      //     <p><strong>Message:</strong></p>
      //     <p>${input.message}</p>
      //   `,
      // });

      return { success: true };
    } catch (e: any) {
      console.error('Email sending failed:', e);
      return { success: false, error: e.message || 'Failed to send email.' };
    }
  }
);


export async function sendContactEmail(input: ContactFormInput): Promise<SendEmailOutput> {
  return sendContactEmailFlow(input);
}
