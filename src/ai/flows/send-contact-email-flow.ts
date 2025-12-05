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
import { Resend } from 'resend';

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
    const resend = new Resend(process.env.RESEND_API_KEY);
    const recipientEmail = 'abanerje02@gmail.com';
    const emailHtml = `
      <h1>New Contact Form Submission</h1>
      <p><strong>Name:</strong> ${input.name}</p>
      <p><strong>Email:</strong> ${input.email}</p>
      <p><strong>Subject:</strong> ${input.subject}</p>
      <p><strong>Message:</strong></p>
      <p>${input.message.replace(/\n/g, '<br>')}</p>
    `;

    try {
      await resend.emails.send({
        from: 'BioMyDream <onboarding@resend.dev>',
        to: recipientEmail,
        subject: `New Contact Form Submission: ${input.subject}`,
        html: emailHtml,
        reply_to: input.email,
      });

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
