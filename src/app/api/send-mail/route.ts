import sgMail from '@sendgrid/mail';
import { NextResponse } from 'next/server';
import { type MailDataRequired } from '@sendgrid/helpers/classes/mail';

export async function POST(request: Request) {
  const params = await request.json();

  // Test params exist
  if (!params.name || !params.email || !params.message) {
    return NextResponse.json(
      { message: 'Parameters are not valid' },
      { status: 400 }
    );
  }

  // Test email
  const pattern =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!pattern.test(params.email)) {
    return NextResponse.json(
      { message: 'Please check your email syntax' },
      { status: 400 }
    );
  }

  const messageSendGrid = params.message
    .replace(/\n/g, '<br>')
    .replace(/\r/g, '<br>')
    .replace(/\t/g, '<br>')
    .replace(/<(?!br\s*\/?)[^>]+>/g, '');

  sgMail.setApiKey(String(process.env.SENDGRID_API_KEY));

  // @ts-expect-error
  const sendGridMail: MailDataRequired = {
    to: 'alexis@staaack.io',
    from: 'alexis@staaack.io',
    templateId: process.env.SENDGRID_TEMPLATE_ID,
    dynamicTemplateData: {
      name: params.name,
      email: params.email,
      message: messageSendGrid,
    },
  };
  // send email with SendGrid
  try {
    await sgMail.send(sendGridMail);
    return NextResponse.json({ message: 'EMAIL_SENT' }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: 'Error with our mail provider, please try again.' },
      { status: 500 }
    );
  }
}
