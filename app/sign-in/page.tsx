import { Button } from "@/components/ui/button";
import { SignIn } from "@stackframe/stack";
import Link from "next/link";

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="p-10 rounded-3xl shadow-2xl border border-border max-w-md w-full">
        <SignIn />
        <Button asChild className="w-full mt-4 cursor-pointer">
          <Link href="/">Go Back Home</Link>
        </Button>
      </div>
    </div>
  );
}
