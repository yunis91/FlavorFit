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

export default function ResetPasswordEmail({
  url,
  appName = "FlavorFit",
}: Props) {
  return (
    <Html>
      <Head />
      <Preview>Reset Password</Preview>
      <Body>
        <Section>
          <Text>Reset Password</Text>
          <Text>Click the link below to reset your password:</Text>
          <Button href={url}>{url}</Button>
          <Text>Best regards,</Text>
          <Text>{appName} Team</Text>
        </Section>
      </Body>
    </Html>
  );
}
