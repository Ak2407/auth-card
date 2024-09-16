import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";
import { Button } from "./ui/button";

export default function SocialButtons() {
  const [isPending, setIsPending] = useState(false);

  const handleSignIn = async (provider: "google" | "github") => {
    setIsPending(true);
    setTimeout(() => {
      console.log(
        "Signing in with",
        provider,
        "in",
        new Date().toLocaleTimeString(),
      );
      setIsPending(false);
    }, 2000);
  };

  return (
    <div className="flex flex-row items-center justify-center gap-x-4 w-full">
      <div className="w-full">
        <Button
          type="submit"
          disabled={isPending}
          variant="outline"
          size="lg"
          className="rounded-[12px] w-full drop-shadow-sm shadow-sky-200 blur-0 py-6 border-gray-100"
          onClick={() => handleSignIn("google")}
        >
          <FcGoogle className="h-7 w-7" />
        </Button>
      </div>
      <div className="w-full">
        <Button
          type="submit"
          variant="outline"
          disabled={isPending}
          size="lg"
          className="rounded-[12px] w-full drop-shadow-sm shadow-sky-200 blur-0 py-6 border-gray-100"
          onClick={() => handleSignIn("github")}
        >
          <FaGithub className="h-7 w-7" />
        </Button>
      </div>
    </div>
  );
}
