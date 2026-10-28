"use client";

import { order } from "./components/columns";
import OrderCard from "./components/orderCard";
import { useState, useRef, useMemo } from "react";
import { Package, Search, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const options: Intl.DateTimeFormatOptions = {
  weekday: "short",
  year: "numeric",
  month: "short",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  hour12: true,
};

const orders: order[] = [
  {
    id: "1",
    avatar: "https://github.com/shadcn.png",
    orderId: "EZYSHOP1001",
    amount: 599,
    date: new Date("2024-10-01T10:30:00").toLocaleString("en-IN", options),
    status: "delivered",
  },
  {
    id: "2",
    avatar: "https://github.com/shadcn.png",
    orderId: "EZYSHOP1002",
    amount: 249,
    date: new Date("2024-10-02T14:00:00").toLocaleString("en-IN", options),
    status: "out for delivery",
  },
  {
    id: "3",
    avatar: "https://github.com/shadcn.png",
    orderId: "EZYSHOP1003",
    amount: 799,
    date: new Date("2024-10-03T18:45:00").toLocaleString("en-IN", options),
    status: "processing",
  },
  {
    id: "4",
    avatar: "https://github.com/shadcn.png",
    orderId: "EZYSHOP1004",
    amount: 999,
    date: new Date("2024-10-04T11:20:00").toLocaleString("en-IN", options),
    status: "failed",
  },
  {
    id: "5",
    avatar: "https://github.com/shadcn.png",
    orderId: "EZYSHOP1005",
    amount: 459,
    date: new Date("2024-10-05T08:10:00").toLocaleString("en-IN", options),
    status: "delivered",
  },
  {
    id: "6",
    avatar: "https://github.com/shadcn.png",
    orderId: "EZYSHOP1006",
    amount: 350,
    date: new Date("2024-10-06T12:45:00").toLocaleString("en-IN", options),
    status: "processing",
  },
  {
    id: "7",
    avatar: "https://github.com/shadcn.png",
    orderId: "EZYSHOP1007",
    amount: 1299,
    date: new Date("2024-10-07T15:00:00").toLocaleString("en-IN", options),
    status: "out for delivery",
  },
  {
    id: "8",
    avatar: "https://github.com/shadcn.png",
    orderId: "EZYSHOP1008",
    amount: 699,
    date: new Date("2024-10-08T09:30:00").toLocaleString("en-IN", options),
    status: "delivered",
  },
  {
    id: "9",
    avatar: "https://github.com/shadcn.png",
    orderId: "EZYSHOP1009",
    amount: 199,
    date: new Date("2024-10-09T13:20:00").toLocaleString("en-IN", options),
    status: "failed",
  },
  {
    id: "10",
    avatar: "https://github.com/shadcn.png",
    orderId: "EZYSHOP1010",
    amount: 799,
    date: new Date("2024-10-10T11:50:00").toLocaleString("en-IN", options),
    status: "out for delivery",
  },
];

const statusFilters = [
  "All Orders",
  "Delivered",
  "Out for Delivery",
  "Processing",
  "Failed",
];

const Orders = () => {
  const ordersContainerRef = useRef<HTMLDivElement>(null);
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const [activeFilter, setActiveFilter] = useState("All Orders");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredOrders = useMemo(() => {
    return orders.filter((order) => {
      const matchesSearch =
        order.orderId.toLowerCase().includes(searchQuery.toLowerCase()) ||
        order.amount.toString().includes(searchQuery);

      if (!matchesSearch) return false;

      if (activeFilter === "All Orders") return true;
      return order.status.toLowerCase() === activeFilter.toLowerCase();
    });
  }, [searchQuery, activeFilter]);

  const totalPages = Math.max(1, Math.ceil(filteredOrders.length / itemsPerPage));
  const currentOrders = filteredOrders.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePreviousPage = () => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev));
  };

  return (
    <div className="min-h-screen dark:bg-DarkGray pb-20">
      {/* Modern Refined Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-12 sm:pt-16 sm:pb-16 border-b border-gray-200/80 dark:border-zinc-800/80 mb-10">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-emerald-500/10 dark:bg-emerald-500/5 rounded-full blur-3xl pointer-events-none -z-10 transform-gpu will-change-transform" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-500/10 dark:bg-yellow-500/5 rounded-full blur-3xl pointer-events-none -z-10 transform-gpu will-change-transform" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-emerald-50 dark:bg-emerald-950/60 text-customTeal dark:text-Green border border-emerald-200/80 dark:border-emerald-800/60 mb-5 shadow-sm">
            <Package className="h-4 w-4 text-Yellow" />
            <span>Order History & Real-Time Tracking</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-nunito tracking-tight text-gray-900 dark:text-white leading-tight mb-4">
            Your Orders &{" "}
            <span className="bg-gradient-to-r from-customTeal via-emerald-600 to-Yellow dark:from-Green dark:via-emerald-400 dark:to-Yellow bg-clip-text text-transparent">
              Deliveries
            </span>
          </h1>

          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8">
            Review your purchase history, check real-time courier statuses, and quickly reorder essentials from your favorite local shops.
          </p>

          {/* Search bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search by Order ID (e.g. EZYSHOP1001)..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full h-11 pl-11 pr-4 rounded-full bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 shadow-sm text-xs sm:text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-customTeal/40"
            />
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8" ref={ordersContainerRef}>
        {/* Filter Pills */}
        <div className="flex items-center justify-between gap-4 flex-wrap mb-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
            {statusFilters.map((filter) => {
              const isActive = activeFilter === filter;
              return (
                <button
                  key={filter}
                  onClick={() => {
                    setActiveFilter(filter);
                    setCurrentPage(1);
                  }}
                  className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                    isActive
                      ? "bg-customTeal text-white shadow-md shadow-emerald-600/20"
                      : "bg-white dark:bg-zinc-900 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-zinc-800 hover:bg-gray-100 dark:hover:bg-zinc-800"
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>

          <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-medium">
            Showing <strong className="text-gray-900 dark:text-white">{filteredOrders.length}</strong> orders
          </div>
        </div>

        {/* Orders List */}
        {currentOrders.length > 0 ? (
          <div className="space-y-4">
            {currentOrders.map((order) => (
              <OrderCard key={order.id} orderItem={order} />
            ))}

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-3 pt-8 pb-4">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={handlePreviousPage}
                  disabled={currentPage === 1}
                  className="rounded-full text-xs h-9 px-4 disabled:opacity-50"
                >
                  <ChevronLeft className="h-4 w-4 mr-1" />
                  <span>Previous</span>
                </Button>

                <span className="text-xs font-semibold text-gray-600 dark:text-gray-400 px-3">
                  Page {currentPage} of {totalPages}
                </span>

                <Button
                  size="sm"
                  variant="outline"
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                  className="rounded-full text-xs h-9 px-4 disabled:opacity-50"
                >
                  <span>Next</span>
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
            )}
          </div>
        ) : (
          <div className="rounded-3xl bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 p-12 text-center max-w-md mx-auto">
            <Package className="h-10 w-10 text-gray-400 mx-auto mb-3" />
            <h4 className="text-base font-bold text-gray-900 dark:text-white mb-1">
              No orders found
            </h4>
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
              We couldn&apos;t find any orders matching &quot;{searchQuery || activeFilter}&quot;.
            </p>
            <Button
              size="sm"
              variant="outline"
              onClick={() => {
                setSearchQuery("");
                setActiveFilter("All Orders");
                setCurrentPage(1);
              }}
              className="rounded-full text-xs"
            >
              Reset Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;
