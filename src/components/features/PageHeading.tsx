import { FunctionComponent } from "react";
import { Heading } from "../typography/Heading";
import { Lead } from "../typography/Lead";

type PageHeadingProps = {
  title: string;
  subtitle: string;
};

export const PageHeading: FunctionComponent<PageHeadingProps> = ({ title, subtitle }) => {
  return (
    <div>
      <Heading as="h2">{title}</Heading>
      <Lead>{subtitle}</Lead>
    </div>
  );
};
