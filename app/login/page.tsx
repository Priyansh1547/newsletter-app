"use client";
import { ArrowLeft } from "lucide-react";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { toast } from "sonner";

export default function LoginPage() {
  const session = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push("/dashboard");
    }
  }, [session, router]);

  return (
    <div className="flex flex-col h-screen p-6 md:p-10 justify-center items-center">
      <div className="absolute top-6 left-6">
        <Button
          onClick={() => router.push("/")}
          className="flex items-center gap-2 font-medium"
          variant="ghost"
        >
          <ArrowLeft /> Back
        </Button>
      </div>
      <div className="text-center min-w-80">
        <h1 className="text-3xl font-bold mb-6">Continue to Stack Mail</h1>
        <Button
          variant="outline"
          className="w-full duration-300 hover:-translate-y-2 hover:cursor-pointer h-10 bg-gray-100"
          onClick={async () => {
            toast.loading("Redirecting");
            signIn("google");
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
              fill="currentColor"
            />
          </svg>
          Login with Google
        </Button>
      </div>
    </div>
  );
}
