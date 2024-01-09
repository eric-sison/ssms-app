import { FunctionComponent } from "react";
import { Heading } from "../typography/Heading";
import { Lead } from "../typography/Lead";
import { Paragraph } from "../typography/Paragraph";

type PageHeadingProps = {
  title: string;
  subtitle?: string;
};

export const PageHeading: FunctionComponent<PageHeadingProps> = ({ title, subtitle }) => {
  return (
    <div className="space-y-1">
      <Heading as="h3">{title}</Heading>
      <Paragraph muted>{subtitle}</Paragraph>
    </div>
  );
};
