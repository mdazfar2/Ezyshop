import { signIn, signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { Button } from "./ui/button";

const AuthButtons = () => {
  const session = useSession();
  return (
    <div className="flex items-center justify-center gap-2">
      {session.status == "unauthenticated" && (
        <Link href={"/login"}>
        <Button size={"lg"} className={`bg-customTeal dark:bg-Green  hover:border rounded-xl`}>
          Login / Signup
        </Button>
      </Link>
      )}
      {session.status == "authenticated" && (
        <>
          <div>Hi! {session.data.user?.name}</div>
          <Button className="rounded-full" variant={"outline"} onClick={() => signOut()}>Log out</Button>
        </>
      )}
    </div>
  );
};

export default AuthButtons;
