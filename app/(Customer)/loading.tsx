import { Spinner } from "@/components/ui/spinner";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="h-screen flex items-center justify-center">
      <Spinner />
    </div>
  );
}
