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
    const adminEmail = 'abanerje02@gmail.com';

    // Email to the administrator
    const adminEmailHtml = `
      <h1>New Contact Form Submission</h1>
      <p><strong>Name:</strong> ${input.name}</p>
      <p><strong>Email:</strong> ${input.email}</p>
      <p><strong>Subject:</strong> ${input.subject}</p>
      <p><strong>Message:</strong></p>
      <p>${input.message.replace(/\n/g, '<br>')}</p>
    `;

    // Confirmation email to the user
    const userEmailHtml = `
      <h1>Thank You For Your Inquiry!</h1>
      <p>Dear ${input.name},</p>
      <p>We have successfully received your message and appreciate you reaching out to BioMyDream Academy.</p>
      <p>We will review your inquiry and get back to you as soon as possible.</p>
      <br/>
      <p><strong>Here is a copy of your submission:</strong></p>
      <hr/>
      <p><strong>Subject:</strong> ${input.subject}</p>
      <p><strong>Message:</strong></p>
      <p>${input.message.replace(/\n/g, '<br>')}</p>
      <hr/>
      <br/>
      <p>Best regards,</p>
      <p>The BioMyDream Academy Team</p>
    `;

    try {
      await Promise.all([
        // Send email to admin
        resend.emails.send({
          from: 'BioMyDream <onboarding@resend.dev>',
          to: adminEmail,
          subject: `New Contact Form Submission: ${input.subject}`,
          html: adminEmailHtml,
          reply_to: input.email,
        }),
        // Send confirmation email to user
        resend.emails.send({
          from: 'BioMyDream <onboarding@resend.dev>',
          to: input.email,
          subject: 'Thank You for Your Inquiry with BioMyDream Academy',
          html: userEmailHtml,
        }),
      ]);

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
