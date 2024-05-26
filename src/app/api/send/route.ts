import { Resend } from "resend";
const resend = new Resend("re_V697c5jZ_6sE457E2qrpZqr4YUvt3Qbr8");

export async function POST(request: any) {
  try {
    const { contactInfo, quizAnswers } = await request.json();

    const emailContent = `
  <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Contact Form Submission</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
          background-color: #f4f4f4;
        }
        .container {
          max-width: 600px;
          margin: 20px auto;
          background-color: #fff;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        h1, h2, p {
          margin: 0;
        }
        table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 20px;
        }
        table, th, td {
          border: 1px solid #ddd;
        }
        th, td {
          padding: 10px;
        }
        th {
          background-color: #f2f2f2;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h2>New Contact Form Submission</h2>
        <p>Dear Admin,</p>
        <p>A new inquiry has been received. Here are the details:</p>
        <table>
          <tr>
            <th>Field</th>
            <th>Details</th>
          </tr>
          <tr>
            <td>Name</td>
            <td>${contactInfo.name}</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>${contactInfo.email}</td>
          </tr>
          <tr>
            <td>Phone</td>
            <td>${contactInfo.phone}</td>
          </tr>
          <tr>
            <td>Company</td>
            <td>${contactInfo.company}</td>
          </tr>
          <tr>
            <td>Message</td>
            <td>${contactInfo.message}</td>
          </tr>
        </table>
        <p>Here are the quiz answers:</p>
        <table>
          <tr>
            <th>Question</th>
            <th>Answer</th>
          </tr>
          ${quizAnswers
            .map(
              (answer: any) => `
            <tr>
              <td>${answer.question}</td>
              <td>${answer.answer}</td>
            </tr>
          `
            )
            .join("")}
        </table>
        <p>We will get back to the contact person shortly.</p>
        <p>Best regards,<br>Your Company</p>
      </div>
    </body>
    </html>
    `;

    const { data, error } = await resend.emails.send({
      from: "Ampire <onboarding@resend.dev>",
      to: ["gokulakrishnanr812@gmail.com"],
      subject: "New Contact Form Submission",
      html: emailContent,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
