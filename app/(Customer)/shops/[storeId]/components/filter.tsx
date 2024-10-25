"use client";

import { Button } from "@/components/ui/button";
import { Category } from "@prisma/client";
import { useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";

const Filter = ({ category ,currentId}: { category: Category, currentId?:string }) => {
  const searchParams = useSearchParams();
  const router = useRouter();

    
  async function handleCategoryChange(Id: string) {
    const current = qs.parse(searchParams.toString());

    const query: Record<string, string | null> = {
      ...current,
      categoryId: current["categoryId"] === Id ? null : Id, // Toggle category
    };

    query.isfeatured=null;

    console.log(query)
    const url = qs.stringifyUrl(
      {
        url: window.location.origin + window.location.pathname,
        query,
      },
      { skipNull: true }
    );
    console.log(window.location.origin+"Fsefe"+window.location.pathname)
    router.push(url);
  }

  return (
    <Button
      onClick={() => handleCategoryChange(category.id)}
    //   disabled={category.id === currentId}
      className={`bg-customTeal rounded-full dark:bg-Green ${
        category.id === currentId ? "opacity-50" : "opacity-100"
      }`
        
      }
    >
      {category.name}
    </Button>
  );
};

export default Filter;
