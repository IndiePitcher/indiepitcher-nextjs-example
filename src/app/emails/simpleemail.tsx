import * as React from "react";
import { Html, Button } from "@react-email/components";

export function SimpleEmail(props: { url: any; }) {
  const { url } = props;

  return (
    <Html lang="en">
      Hi there, <Button href={url}>Click me</Button>
    </Html>
  );
}

export default SimpleEmail;