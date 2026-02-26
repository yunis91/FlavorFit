import {
  Body,
  Button,
  Head,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface Props {
  url: string;
  appName?: string;
}

export default function VerificationEmail({
  url,
  appName = "FlavorFit",
}: Props) {
  return (
    <Html>
      <Head />
      <Preview>Verification Email</Preview>
      <Body>
        <Section>
          <Text>Verification Email</Text>
          <Text>Thank you for registering with {appName}!</Text>
          <Text>Please click the link below to verify your email:</Text>
          <Button href={url}>{url}</Button>
          <Text>Best regards,</Text>
          <Text>{appName} Team</Text>
        </Section>
      </Body>
    </Html>
  );
}
