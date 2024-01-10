import { FunctionComponent } from "react";
import { Heading } from "../typography/Heading";
import { Paragraph } from "../typography/Paragraph";

type PageHeadingProps = {
  title: string;
  icon: JSX.Element;
  subtitle?: string;
};

export const PageHeading: FunctionComponent<PageHeadingProps> = ({ title, icon, subtitle }) => {
  return (
    <div className="space-y-1">
      <div className="flex items-center gap-3">
        {icon}
        <Heading as="h3">{title}</Heading>
      </div>
      <Paragraph muted>{subtitle}</Paragraph>
    </div>
  );
};
