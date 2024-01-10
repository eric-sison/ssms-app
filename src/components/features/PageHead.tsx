import { FunctionComponent, ReactNode } from "react";
import { BreadCrumbs, BreadCrumbsLink } from "../ui/BreadCrumbs";
import { Heading } from "../typography/Heading";
import { Paragraph } from "../typography/Paragraph";

type PageHeadProps = {
  breadCrumbsLinks?: BreadCrumbsLink[];
  title: string;
  icon: JSX.Element;
  subtitle?: string;
  children?: ReactNode | ReactNode[];
};

export const PageHead: FunctionComponent<PageHeadProps> = ({
  breadCrumbsLinks,
  title,
  icon,
  subtitle,
  children,
}) => {
  return (
    <div className="space-y-7">
      {breadCrumbsLinks !== undefined ? <BreadCrumbs links={breadCrumbsLinks} /> : null}

      <section className="flex justify-between">
        <PageTitle title={title} icon={icon} subtitle={subtitle} />
        {children}
      </section>
    </div>
  );
};

const PageTitle: FunctionComponent<Pick<PageHeadProps, "icon" | "title" | "subtitle">> = ({
  title,
  icon,
  subtitle,
}) => {
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
