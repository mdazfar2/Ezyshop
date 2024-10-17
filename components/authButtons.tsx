import Link from "next/link";
import { Button } from "./ui/button";  
import { signOut, useSession } from "next-auth/react";

const AuthButtons = () => {
  const session = useSession();

  return (
    <div className="flex items-center justify-center gap-2">
      {session.status === "unauthenticated" && (
        <Link href={"/login"}>
          <Button className="btn" size={"lg"}>
            Login / Signup
          </Button>
        </Link>
      )}
      {session.status === "authenticated" && (
        <>
          <div className="text-lg">Hi! {session.data.user?.name}</div>
          <Button className="btn btn-outline rounded-full" onClick={() => signOut()}>
            Log out
          </Button>
        </>
      )}
    </div>
  );
};

export default AuthButtons;
