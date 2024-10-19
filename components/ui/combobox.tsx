"use client";

import * as React from "react";
import { Check, Search } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";



const frameworks = [
  {
    value: "Online Shopping Tips",
    label: "Online Shopping Tips",
    count: "10",
  },
  {
    value: "Grocery Savings Hacks",
    label: "Grocery Savings Hacks",
    count: "10",
  },
  {
    value: "Local Store Discoveries",
    label: "Local Store Discoveries",
    count: "10",
  },
  {
    value: "Health & Organic Products",
    label: "Health & Organic Products",
    count: "10",
  },
  {
    value: "Shopping Trends & Innovations",
    label: "Shopping Trends & Innovations",
    count: "10",
  },
];

export function ComboboxDemo() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full dark:text-gray-200 justify-between"
        >
          {value
            ? frameworks.find((framework) => framework.value === value)?.label
            : "Select Keywords..."}
          <Search className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <Command>
          <CommandInput placeholder="Search Categories..." />
          <CommandList className="w-full">
            <CommandEmpty>No Category found.</CommandEmpty>
            <CommandGroup>
              {frameworks.map((framework) => (
                <CommandItem
                  key={framework.value}
                  value={framework.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === framework.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {framework.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
