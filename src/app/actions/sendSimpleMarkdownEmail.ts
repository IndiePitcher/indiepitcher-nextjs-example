'use server'

import { IndiePitcher } from "indiepitcher";

export async function sendSimpleMarkdownEmail(): Promise<string | Error> {
  if (!process.env.INDIEPITCHER_API_KEY) {
    return new Error("Create .env.local file containing INDIEPITCHER_API_KEY. You can get the key by signing up at https://indiepitcher");
  }

  /*
  This example demonstrates how to send a simple markdown email.
  */

  try {
    const indiePitcher = new IndiePitcher(process.env.INDIEPITCHER_API_KEY!);
    await indiePitcher.sendEmail({ to: "petr@indiepitcher.com", subject: "Hello", body: "Hello, World!", bodyFormat: "markdown" });
    return "Email sent!";
  } catch (error) {
    return error as Error;
  }
}
