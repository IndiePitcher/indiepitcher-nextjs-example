import * as React from "react";
import { Html, Button } from "@react-email/components";

export function PersonalizedEmail(props: { url: any; }) {
  const { url } = props;

  return (
    <Html lang="en">
      Hi {'{{firstName|default: "there"}}'}, <Button href={url}>Click me</Button> or <Button href={'{{unsubscribeURL}}'}>Unsubscribe</Button>
    </Html>
  );
}

export default PersonalizedEmail;
