
import { signOut, useSession } from "next-auth/react";
import { useState } from "react";
import { Button } from "../ui/button";
import { AuthModal } from "../modals/authModal";

const AuthButtons = () => {

  
  const [open, setOpen] = useState(false);
  const [loading] = useState(false);

  const session=useSession()
  return (
    <div className="flex items-center justify-center gap-2">
      {session.status == "unauthenticated" && (
        // <Link href={"/login"}>
        <Button size={"lg"} className={`bg-customTeal dark:bg-Green dark:text-[#fff] dark:hover:opacity-80  rounded-xl`}
        onClick={() => setOpen(true)}
        >
          Login / Signup
        </Button>
      // </Link>
      )}
      {session.status == "authenticated" && (
        <>
          <div>Hi! {session.data.user?.name}</div>
          <Button className="rounded-full" variant={"outline"} onClick={() => signOut()}>Log out</Button>
        </>
      )}
      <AuthModal
          isOpen={open}
          onClose={() => setOpen(false)}
          loading={loading}
        />
    </div>
  );
};

export default AuthButtons;
