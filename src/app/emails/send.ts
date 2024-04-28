'use server';

import { Resend } from 'resend';
import { EmailTemplate } from './emailTemplate';

export const sendEmail = async (email: string, name: string) => {
  // const resend = new Resend('re_dffgqEU2_Asg6cqVdQPhDcq88TwSLvvyH');
  const resend = new Resend(process.env.RESEND_API_KEY);

  console.log('sent to server!');
  console.log('name', name);
  console.log('email', email);

  const data = await resend.emails.send({
    from: 'Acme <hello@shawnstringfield.com>',
    to: ['hello@shawnstringfield.com'],
    subject: 'Hello world',
    react: EmailTemplate({ firstName: 'John' }),
    text: 'Hello world',
  });

  return { data: data };
};
