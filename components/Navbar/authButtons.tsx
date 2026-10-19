import { signOut, useSession } from "next-auth/react";
import { Button } from "../ui/button";
import Link from "next/link";
import { User, LogOut, LayoutDashboard } from "lucide-react";

const AuthButtons = ({ toggleMenu }: { toggleMenu: () => void }) => {
  const session = useSession();

  return (
    <div className="flex items-center justify-center gap-2">
      {session.status === "unauthenticated" && (
        <Link href={"/auth/role"}>
          <Button
            size="sm"
            className="h-9 px-4 text-sm font-semibold rounded-full bg-customTeal hover:bg-customTeal/90 dark:bg-Green dark:hover:bg-Green/90 text-white shadow-sm hover:shadow transition-all duration-200"
            onClick={() => toggleMenu?.()}
          >
            Login / Signup
          </Button>
        </Link>
      )}
      {session.status === "authenticated" && (
        <div className="flex items-center gap-2">
          <Link href={`/user/${session.data?.user?.id}/dashboard`}>
            <Button
              size="sm"
              className="h-9 px-3 rounded-full text-xs sm:text-sm font-medium border-gray-300 dark:border-zinc-700 hover:border-customTeal dark:hover:border-Green"
              variant="outline"
              onClick={() => toggleMenu?.()}
            >
              <LayoutDashboard className="h-3.5 w-3.5 mr-1.5" />
              Dashboard
            </Button>
          </Link>
          <Link href={`/user/${session.data?.user?.id}/dashboard`}>
            <Button
              size="icon"
              className="h-9 w-9 rounded-full text-gray-700 dark:text-gray-300 hover:text-customTeal dark:hover:text-Green hover:bg-gray-100 dark:hover:bg-zinc-800"
              variant="ghost"
              title="Profile"
            >
              <User className="h-4 w-4" />
            </Button>
          </Link>
          <Button
            size="sm"
            className="h-9 px-3 rounded-full text-xs sm:text-sm font-medium text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/30 border-red-200 dark:border-red-900/50"
            variant="outline"
            onClick={() => {
              toggleMenu?.();
              signOut();
            }}
          >
            <LogOut className="h-3.5 w-3.5 mr-1" />
            Log out
          </Button>
        </div>
      )}
    </div>
  );
};

export default AuthButtons;

