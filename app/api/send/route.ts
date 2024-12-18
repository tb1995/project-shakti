import { NextRequest } from 'next/server';
import { EmailTemplate } from '../../../app/components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const EMAIL_TO = ['tb1995@gmail.com', 'seanetilson@gmail.com'];

export async function POST(req: NextRequest) {
  try {
    // Parse the request body
    const body = await req.json();

    const { firstName, emailAddress } = body;

    console.log(`name: ${firstName}`);
    console.log(`email: ${emailAddress}`);

    // Validate the input
    if (!firstName || !emailAddress) {
      return Response.json(
        { error: 'firstName and emailAddress are required' },
        { status: 400 }
      );
    }

    // Send the email
    const { data, error } = await resend.emails.send({
      from: 'Shakti <talha@projectshakti.co.uk>',
      to: EMAIL_TO,
      subject: 'SIGN UP 🥳',
      react: EmailTemplate({
        firstName,
        email: emailAddress,
      }),
    });

    // Handle potential errors from the email service
    if (error) {
      console.log(error);
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data, { status: 200 });
  } catch (error) {
    // Handle unexpected errors
    return Response.json(
      { error: error || 'Something went wrong' },
      { status: 500 }
    );
  }
}
