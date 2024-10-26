"use client";

import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, useMemo, ChangeEvent } from "react";

const debounce = <T extends unknown[]>(fn: (...args: T) => void, delay: number) => {
  let timeoutId: NodeJS.Timeout;
  return (...args: T) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
};

interface ClientSearchBarProps {
  initialSearch: string;
}

const ClientSearchBar: React.FC<ClientSearchBarProps> = ({ initialSearch }) => {
  const [query, setQuery] = useState(initialSearch);
  const router = useRouter();

  const debouncedSearch = useMemo(
    () =>
      debounce((searchTerm: string) => {
        const params = new URLSearchParams(window.location.search);
        if (searchTerm) {
          params.set("productName", searchTerm);
        } else {
          params.delete("productName");
        }
        router.push(`?${params.toString()}`);
      }, 300),
    [router] // Properly memoized dependency
  );

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    debouncedSearch(value); // Use memoized debounce function
  };

  return (
    <div className="bg-customTeal dark:bg-Green p-1 flex items-center justify-center rounded-full w-full lg:w-2/6">
      <Input
        placeholder="Search Products..."
        value={query}
        onChange={onChange}
        className="rounded-full bg-white"
      />
      <button className="bg-customTeal dark:bg-Green hover:shadow-slate-500 rounded-full">
        <Search className="h-7 w-7" />
      </button>
    </div>
  );
};

export default ClientSearchBar;
