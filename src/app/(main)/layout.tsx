import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";
import { RightSide } from "@/components/RightSide";

interface Props {
  children: React.ReactNode;
}

export default async (props: Props) => {
  const session = await getServerSession(authOptions);
  if (!session?.user) redirect("/signin");

  return (
    <div className="m-0 flex min-h-screen flex-col bg-white p-0 dark:bg-black">
      {/* <Navbar /> */}
      <div className="mx-auto flex w-full max-w-full grow gap-5 p-5">
       

        <div className="flex-grow">{props.children}</div>

        <RightSide />
      </div>
    </div>
  );
};
