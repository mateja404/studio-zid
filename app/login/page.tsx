import React from "react";
import { LoginForm } from "@/components/LoginForm";

const Page = async (props: { searchParams: Promise<{ callbackUrl?: string }> }) => {
  const searchParams = await props.searchParams;
  const callbackUrl = searchParams.callbackUrl || "/?login=success";

  return (
    <main className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <LoginForm callbackUrl={callbackUrl} />
      </div>
    </main>
  );
};

export default Page;