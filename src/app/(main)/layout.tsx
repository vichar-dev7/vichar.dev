import { Navbar } from '@/components/Navbar';
import { Sidebar } from '@/components/Sidebar';
import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import React from 'react';
import { RightSide } from '@/components/RightSide';

interface Props {
  children: React.ReactNode;
}

export default async (props: Props) => {
  const session = await getServerSession(authOptions);

  if (!session?.user) redirect("/signin");

  return (
<div className="flex min-h-screen bg-white dark:bg-black  flex-col m-0 p-0">
        <Navbar />
      <div className="mx-auto flex w-full max-w-7xl grow gap-5 p-5">
        <Sidebar />

        <div className="flex-grow">
          {props.children}
        </div>

        <RightSide />
      </div>
    </div>
  );
};
