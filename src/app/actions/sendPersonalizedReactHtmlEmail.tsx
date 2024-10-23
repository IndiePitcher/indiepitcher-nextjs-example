"use server";

import { render } from "@react-email/components";
import { IndiePitcher } from "indiepitcher";
import PersonalizedEmail from "../emails/personalizedemail";

export async function sendPersonalizedReactHtmlEmail(): Promise<
  string | Error
> {
  if (!process.env.INDIEPITCHER_API_KEY) {
    return new Error(
      "Create .env.local file containing INDIEPITCHER_API_KEY. You can get the key by signing up at https://indiepitcher"
    );
  }

  /*
  This example demonstrates how to send a personalized email to a contact in your contact list using a React component as the email body.
  */

  try {
    const indiePitcher = new IndiePitcher(process.env.INDIEPITCHER_API_KEY!);
    const emailHtml = await render(
      <PersonalizedEmail url="https://indiepitcher.com" />
    );
    await indiePitcher.addContact({
      email: "petr@indiepitcher.com",
      name: "Petr Pavlik",
      updateIfExists: true,
      ignoreListSubscriptionsWhenUpdating: true,
      subscribedToLists: ["test_list_1", "test_list_2"],
    });
    await indiePitcher.sendEmailToContact({
      contactEmail: "petr@indiepitcher.com",
      subject: "Hello react email!",
      body: emailHtml,
      bodyFormat: "html",
      list: "test_list_1",
    });
    return "Email sent!";
  } catch (error) {
    return error as Error;
  }
}
