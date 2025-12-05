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

const emailSender = ai.defineTool(
  {
    name: 'emailSender',
    description: 'Send an email',
    inputSchema: z.object({
      to: z.string(),
      subject: z.string(),
      html: z.string(),
    }),
    outputSchema: z.void(),
  },
  async (input) => {
    // This is a placeholder. In a real environment, you would use a service
    // like Nodemailer, SendGrid, etc. to send the email.
    // The Genkit environment will simulate this for demonstration.
    console.log('--- Simulating Email Sending ---');
    console.log(`To: ${input.to}`);
    console.log(`Subject: ${input.subject}`);
    console.log('Body (HTML):');
    console.log(input.html);
    console.log('-----------------------------');
  }
);

const sendContactEmailFlow = ai.defineFlow(
  {
    name: 'sendContactEmailFlow',
    inputSchema: ContactFormInputSchema,
    outputSchema: SendEmailOutputSchema,
    tools: [emailSender],
  },
  async (input) => {
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
      await emailSender({
        to: recipientEmail,
        subject: `New Contact Form Submission: ${input.subject}`,
        html: emailHtml,
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
