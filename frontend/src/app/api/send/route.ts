import { EmailTemplate } from '../../components/EmailTemplate';
import { Resend } from 'resend';
import * as React from 'react';
import { NextRequest } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);
type Payload = {
  firstName: string,
  lastName: string,
  email : string,
  phone : string,
  message: string,
  pomskyName: string
}

export  async function POST(req : NextRequest) {
  const formData: Payload = await req.json();;
  try {
    const { data, error } = await resend.emails.send({
      from: `${process.env.RESEND_API_FROM_EMAIL}`,
      to: [`${process.env.RESEND_API_DELIVERY_EMAIL}`],
      subject: "Contact Submission",
      react: EmailTemplate({ firstName: formData.firstName,
         lastName : formData.lastName, 
         email : formData.email, 
         phone : formData.phone,
         message : formData.message,
         pomskyName: formData.pomskyName
      }) as React.ReactElement,
    });

    if (error) {
      console.log(error.message)
      return Response.json({ error }, { status: 500 });
    }
    return Response.json({ data });
  } catch (error) {
    console.log(error)
    return Response.json({ error }, { status: 500 });
  }
}