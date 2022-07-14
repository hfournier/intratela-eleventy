import { Handler } from "@netlify/functions";
import dotenv from "dotenv";
const sgMail = require("@sendgrid/mail");

dotenv.config();

const handler: Handler = async (event, context) => {
  // Only allow POST
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: "Method not allowed",
    };
  }

  try {
    const data = JSON.parse(event.body);
    if (data) {
      sgMail.setApiKey(process.env.SENDGRID_API_KEY);
      const msg = {
        to: {
          name: process.env.MAIL_TO_NAME,
          email: process.env.MAIL_TO_ADDRESS,
        },
        from: {
          name: process.env.MAIL_FROM_NAME,
          email: process.env.MAIL_FROM_ADDRESS,
        }, // Use the email address or domain you verified above
        replyTo: {
          name: data.name,
          email: data.email,
        },
        subject: data.subject,
        text: data.message,
        html: data.message,
      };

      await sgMail.send(msg);
    } else {
      return {
        statusCode: 404,
        body: "No data provided",
      };
    }
  } catch (error) {
    console.error(error);

    if (error.response) {
      console.error(error.response.body);
    }

    return {
      statusCode: 500,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(error),
    };
  }

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message: "Your message was sent successfully! Thank you.",
    }),
  };
};

export { handler };
