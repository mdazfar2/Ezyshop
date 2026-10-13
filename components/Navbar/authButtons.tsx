import { signOut, useSession } from "next-auth/react";
import { Button } from "../ui/button";
import Link from "next/link";
import { User } from "lucide-react";
// {toggleMenu}: {toggleMenu:() => void}
const AuthButtons = ({ toggleMenu }: { toggleMenu: () => void }) => {
  // const [open, setOpen] = useState(false);
  // const [loading] = useState(false);

  const session = useSession();
  return (
    <div className="flex items-center justify-center gap-2">
      {session.status == "unauthenticated" && (
        <Link href={"/auth/role"}>
          <Button
            className={`bg-customTeal dark:bg-Green dark:text-[#fff] dark:hover:opacity-80 hover:border rounded-xl h-9 px-3.5 xl:px-5 text-xs xl:text-sm font-semibold whitespace-nowrap`}
            onClick={() => toggleMenu()}
          >
            Login / Signup
          </Button>
        </Link>
      )}
      {session.status == "authenticated" && (
        <>
          <Link href={`/user/${session.data.user.id}/dashboard`}>
            <Button size="sm" className="rounded-full text-xs xl:text-sm" variant={"outline"}>Dashboard</Button>
          </Link>
          <Button size="icon" className="h-9 w-9 rounded-full"><User className="h-4 w-4" /></Button>
          <Button
            size="sm"
            className="rounded-full text-xs xl:text-sm"
            variant={"outline"}
            onClick={() => {
              // toggleMenu();
              signOut();
            }}
          >
            Log out
          </Button>
        </>
      )}
      {/* <AuthModal
          isOpen={open}
          onClose={() => setOpen(false)}
          loading={loading}
        /> */}
    </div>
  );
};

export default AuthButtons;
