// app/actions.ts
'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(prevState: any, formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const subject = formData.get('subject') as string;
  const message = formData.get('message') as string;

  if (!name || !email || !subject || !message) {
    return { success: false, error: 'Please complete all fields.' };
  }

  try {
    await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>', // Use your verified domain later
      to: 'abdulmanan222111@gmail.com', // Where you want to receive messages
      subject: `New Message: ${subject}`,
      html: `
        <h3>New Project Discussion</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return { success: true, error: null };
  } catch (error) {
    return { success: false, error: 'Failed to send email. Please try again.' };
  }
}