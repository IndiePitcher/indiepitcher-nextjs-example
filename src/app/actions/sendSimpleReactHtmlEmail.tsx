"use server";

import { render } from "@react-email/components";
import { IndiePitcher } from "indiepitcher";
import { SimpleEmail } from "../emails/simpleemail";

export async function sendSimpleReactHtmlEmail(): Promise<string | Error> {
  if (!process.env.INDIEPITCHER_API_KEY) {
    return new Error(
      "Create .env.local file containing INDIEPITCHER_API_KEY. You can get the key by signing up at https://indiepitcher"
    );
  }

  /*
  This example demonstrates how to send a simple React email.
  */

  try {
    const indiePitcher = new IndiePitcher(process.env.INDIEPITCHER_API_KEY!);
    const emailHtml = await render(
      <SimpleEmail url="https://indiepitcher.com" />
    );
    await indiePitcher.sendEmail({
      to: "petr@indiepitcher.com",
      subject: "Hello react email!",
      body: emailHtml,
      bodyFormat: "html",
    });
    return "Email sent!";
  } catch (error) {
    return error as Error;
  }
}
