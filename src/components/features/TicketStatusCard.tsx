import { FunctionComponent } from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/Card";

type TicketStatusCardProps = {
  title: string;
  count: number;
  description: string;
  icon: JSX.Element;
};

export const TicketStatusCard: FunctionComponent<TicketStatusCardProps> = ({
  title,
  count,
  description,
  icon,
}) => {
  return (
    <Card className="w-full bg-primary text-white dark:bg-secondary/40 shadow-xl shadow-gray-300/70 dark:shadow-none group">
      <CardHeader>
        <section className="mb-4 flex items-center gap-2">
          {icon}
          <p className="text-lg font-medium">{title}</p>
        </section>
        <CardTitle className="text-5xl">{count}</CardTitle>
        <CardDescription className="font-medium">{description}</CardDescription>
      </CardHeader>
    </Card>
  );
};
