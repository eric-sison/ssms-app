import { PageHead } from "@/components/features/PageHead";
import { BreadCrumbsLink } from "@/components/ui/BreadCrumbs";
import { UserCog } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile",
};

const links: BreadCrumbsLink[] = [
  { path: "/", label: "Home" },
  { path: "/profile", label: "My Profile" },
];

export default function Profile() {
  return (
    <>
      <PageHead
        breadCrumbsLinks={links}
        title="My Profile"
        subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        icon={<UserCog />}
      />
    </>
  );
}
