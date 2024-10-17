import * as React from 'react';

interface EmailTemplateProps {
  firstName: string,
  lastName: string,
  email : string,
  phoneNumber : string,
  message: string
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName, lastName, email, phoneNumber, message
}) => (
  <div>
    <p>Lead Name: {firstName} {lastName}</p>
    <p>Phone Number: {phoneNumber}</p>
    <p>Email: {email}</p>
    <p>Message: {message}</p>
  </div>
);