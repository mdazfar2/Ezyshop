import { Button } from "@/components/ui/button";
import Link from "next/link";
import { order } from "./columns";
import {
  Package,
  Truck,
  Clock,
  CheckCircle2,
  AlertCircle,
  ChevronRight,
  Receipt,
} from "lucide-react";

interface OrderCardProps {
  orderItem: order;
}

const OrderCard = (props: OrderCardProps) => {
  const { orderItem } = props;

  let statusConfig = {
    badge: "bg-gray-100 text-gray-700 dark:bg-zinc-800 dark:text-gray-300 border-gray-200 dark:border-zinc-700",
    icon: <Clock className="h-3.5 w-3.5" />,
    iconBg: "bg-gray-100 text-gray-600 dark:bg-zinc-800 dark:text-gray-300",
  };

  switch (orderItem.status.toLowerCase()) {
    case "out for delivery":
      statusConfig = {
        badge: "bg-amber-50 text-amber-700 dark:bg-amber-950/60 dark:text-amber-400 border-amber-200 dark:border-amber-800/60",
        icon: <Truck className="h-3.5 w-3.5" />,
        iconBg: "bg-amber-50 text-amber-600 dark:bg-amber-950/60 dark:text-amber-400",
      };
      break;
    case "processing":
      statusConfig = {
        badge: "bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-400 border-blue-200 dark:border-blue-800/60",
        icon: <Clock className="h-3.5 w-3.5" />,
        iconBg: "bg-blue-50 text-blue-600 dark:bg-blue-950/60 dark:text-blue-400",
      };
      break;
    case "delivered":
      statusConfig = {
        badge: "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800/60",
        icon: <CheckCircle2 className="h-3.5 w-3.5" />,
        iconBg: "bg-emerald-50 text-customTeal dark:bg-emerald-950/60 dark:text-Green",
      };
      break;
    case "failed":
      statusConfig = {
        badge: "bg-rose-50 text-rose-700 dark:bg-rose-950/60 dark:text-rose-400 border-rose-200 dark:border-rose-800/60",
        icon: <AlertCircle className="h-3.5 w-3.5" />,
        iconBg: "bg-rose-50 text-rose-600 dark:bg-rose-950/60 dark:text-rose-400",
      };
      break;
  }

  return (
    <div className="w-full rounded-2xl bg-white dark:bg-zinc-900 border border-gray-200/80 dark:border-zinc-800 p-5 shadow-sm hover:shadow-md hover:border-customTeal/40 dark:hover:border-Green/40 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      {/* Left: Icon & Order Info */}
      <div className="flex items-start gap-4">
        <div
          className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm ${statusConfig.iconBg}`}
        >
          {statusConfig.icon}
        </div>

        <div>
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <span className="text-sm sm:text-base font-bold font-mono text-gray-900 dark:text-white">
              {orderItem.orderId}
            </span>
            <span
              className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold border capitalize ${statusConfig.badge}`}
            >
              {orderItem.status}
            </span>
          </div>

          <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-2">
            <span>Ordered on {orderItem.date}</span>
          </p>
        </div>
      </div>

      {/* Right: Amount & Actions */}
      <div className="flex items-center justify-between sm:justify-end gap-5 border-t sm:border-t-0 pt-3 sm:pt-0">
        <div className="text-left sm:text-right">
          <span className="text-xs text-gray-400 block">Total Amount</span>
          <span className="text-base sm:text-lg font-black font-nunito text-gray-900 dark:text-white">
            ₹{orderItem.amount}
          </span>
        </div>

        <Link href={`/MyOrders/${orderItem.id || "1"}`}>
          <Button
            size="sm"
            className="rounded-xl bg-customTeal hover:bg-customTeal/90 text-white font-medium text-xs h-9 px-4 flex items-center gap-1 shadow-sm"
          >
            <span>Track Order</span>
            <ChevronRight className="h-3.5 w-3.5" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default OrderCard;