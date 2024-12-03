import emailjs from '@emailjs/browser';

const sendEmail = (
  name: string,
  surname: string,
  message: string,
  email: string,
  telephone: string
) => {
  return emailjs.send(
    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
    {
      user_name: name,
      from_name: surname,
      message: message,
      user_email: email,
      user_phone: telephone,
    },
    process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
  );
};

export default sendEmail;
