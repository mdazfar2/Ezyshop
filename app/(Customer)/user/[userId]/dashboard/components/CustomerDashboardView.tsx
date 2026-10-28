"use client";

import { useState, useEffect, useMemo } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Package,
  Heart,
  ShoppingCart,
  Store as StoreIcon,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Edit3,
  Plus,
  MessageSquare,
  Search,
  Sparkles,
  ChevronRight,
  Truck,
  Save,
  X,
  ExternalLink,
  Camera,
  RotateCcw,
  Upload,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import toast, { Toaster } from "react-hot-toast";

interface StoreItem {
  id: string;
  storeName: string;
  email: string;
  Products?: any[];
  role?: string;
}

interface Address {
  id: string;
  type: "Home" | "Work" | "Other";
  street: string;
  city: string;
  state: string;
  pincode: string;
  instructions?: string;
  isDefault: boolean;
}

const defaultAddresses: Address[] = [
  {
    id: "addr-1",
    type: "Home",
    street: "Flat 402, Green Glen Heights, Vaishali Nagar",
    city: "Jaipur",
    state: "Rajasthan",
    pincode: "302021",
    instructions: "Leave at door if not available. Ring doorbell.",
    isDefault: true,
  },
  {
    id: "addr-2",
    type: "Work",
    street: "Tech Park, Tower B, 3rd Floor, Innovation Hub",
    city: "Jaipur",
    state: "Rajasthan",
    pincode: "302017",
    instructions: "Deliver to reception between 9 AM to 6 PM.",
    isDefault: false,
  },
];

const mockRecentOrders = [
  {
    id: "EZY-9842",
    store: "Green Valley Organics",
    date: "Today, 11:20 AM",
    items: "Organic Avocados, Fresh Spinach, Almond Milk",
    amount: "₹450",
    status: "Delivered",
    statusColor: "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800",
  },
  {
    id: "EZY-9831",
    store: "The Artisan Bakery",
    date: "Yesterday, 4:15 PM",
    items: "Sourdough Loaf, Butter Croissants (2x)",
    amount: "₹280",
    status: "Out for Delivery",
    statusColor: "bg-amber-50 text-amber-700 dark:bg-amber-950/60 dark:text-amber-400 border-amber-200 dark:border-amber-800",
  },
  {
    id: "EZY-9810",
    store: "Prime Electronics",
    date: "24 Oct 2024",
    items: "Wireless Fast Charger, Braided USB-C Cable",
    amount: "₹899",
    status: "Delivered",
    statusColor: "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800",
  },
];

export default function CustomerDashboardView({ userId }: { userId: string }) {
  const { data: session } = useSession();

  // Active Tab: overview, orders, chat, settings
  const [activeTab, setActiveTab] = useState<"overview" | "orders" | "chat" | "settings">("overview");

  // Verified email avatar resolver
  const getVerifiedEmailAvatar = (email: string) => {
    if (!email) return "";
    const clean = email.trim().toLowerCase();
    // Azfar Alam (Owner/Developer) verified avatar
    if (
      clean === "azfarsarsaar@gmail.com" ||
      clean === "azfaralam.ops@gmail.com" ||
      clean.includes("azfar")
    ) {
      return "https://avatars.githubusercontent.com/u/100375390?v=4";
    }
    // Multi-service avatar resolver for any verified email (Gravatar / Google)
    return `https://unavatar.io/${encodeURIComponent(clean)}`;
  };

  // User Profile state (persisted in localStorage)
  const [userName, setUserName] = useState<string>("");
  const [userEmail, setUserEmail] = useState<string>("");
  const [userPhone, setUserPhone] = useState<string>("+91 98765 43210");
  const [userAvatar, setUserAvatar] = useState<string>("");
  const [imgError, setImgError] = useState(false);

  // Edit Profile Popup Modal state
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [modalName, setModalName] = useState("");
  const [modalPhone, setModalPhone] = useState("");
  const [modalAvatar, setModalAvatar] = useState("");
  const [modalImgError, setModalImgError] = useState(false);

  // Addresses state
  const [addresses, setAddresses] = useState<Address[]>(defaultAddresses);
  const [isAddingAddress, setIsAddingAddress] = useState(false);
  const [newAddrType, setNewAddrType] = useState<"Home" | "Work" | "Other">("Home");
  const [newAddrStreet, setNewAddrStreet] = useState("");
  const [newAddrCity, setNewAddrCity] = useState("Jaipur");
  const [newAddrState, setNewAddrState] = useState("Rajasthan");
  const [newAddrPincode, setNewAddrPincode] = useState("");
  const [newAddrInstructions, setNewAddrInstructions] = useState("");

  // Store chat state
  const [stores, setStores] = useState<StoreItem[]>([]);
  const [storeSearch, setStoreSearch] = useState("");
  const [loadingStores, setLoadingStores] = useState(true);

  // Initialize profile from session / localStorage
  useEffect(() => {
    const savedName = localStorage.getItem(`ezyshop_user_name_${userId}`);
    const savedPhone = localStorage.getItem(`ezyshop_user_phone_${userId}`);
    const savedAvatar = localStorage.getItem(`ezyshop_user_avatar_${userId}`);
    const savedAddrs = localStorage.getItem(`ezyshop_user_addrs_${userId}`);

    const resolvedName = savedName || session?.user?.name || "MD AZFAR ALAM";
    const resolvedEmail = session?.user?.email || "azfarsarsaar@gmail.com";
    const resolvedPhone = savedPhone || "+91 98765 43210";
    const verifiedAvatar = getVerifiedEmailAvatar(resolvedEmail);
    const resolvedAvatar = savedAvatar || (session?.user as any)?.image || verifiedAvatar;

    setUserName(resolvedName);
    setUserEmail(resolvedEmail);
    setUserPhone(resolvedPhone);
    setUserAvatar(resolvedAvatar);
    setImgError(false);

    setModalName(resolvedName);
    setModalPhone(resolvedPhone);
    setModalAvatar(resolvedAvatar);
    setModalImgError(false);

    if (savedAddrs) {
      try {
        setAddresses(JSON.parse(savedAddrs));
      } catch (e) {
        setAddresses(defaultAddresses);
      }
    }
  }, [userId, session]);

  // Open Edit Profile Modal
  const handleOpenEditModal = () => {
    setModalName(userName);
    setModalPhone(userPhone);
    setModalAvatar(userAvatar);
    setModalImgError(false);
    setIsEditModalOpen(true);
  };

  // Custom photo upload handler
  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 2.5 * 1024 * 1024) {
      toast.error("Please choose a photo smaller than 2.5MB.");
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string") {
        setModalAvatar(reader.result);
        setModalImgError(false);
      }
    };
    reader.readAsDataURL(file);
  };

  // Reset to verified email picture
  const handleResetToVerifiedAvatar = () => {
    const verified = getVerifiedEmailAvatar(userEmail);
    setModalAvatar(verified);
    setModalImgError(false);
    toast.success("Reset to verified email profile picture!");
  };

  // Save profile changes from modal
  const handleSaveProfileModal = (e: React.FormEvent) => {
    e.preventDefault();
    if (!modalName.trim()) {
      toast.error("Please enter a valid name.");
      return;
    }

    const updatedName = modalName.trim();
    const updatedPhone = modalPhone.trim();
    const updatedAvatar = modalAvatar || getVerifiedEmailAvatar(userEmail);

    setUserName(updatedName);
    setUserPhone(updatedPhone);
    setUserAvatar(updatedAvatar);
    setImgError(false);

    localStorage.setItem(`ezyshop_user_name_${userId}`, updatedName);
    localStorage.setItem(`ezyshop_user_phone_${userId}`, updatedPhone);
    localStorage.setItem(`ezyshop_user_avatar_${userId}`, updatedAvatar);
    setIsEditModalOpen(false);

    toast.success("Profile details updated successfully!", {
      id: "profile-modal-update",
      duration: 3500,
    });
  };

  // Fetch stores for the chat tab
  useEffect(() => {
    const fetchStores = async () => {
      try {
        const res = await fetch("/data/store.json");
        const data = await res.json();
        if (Array.isArray(data)) {
          setStores(data);
        }
      } catch (error) {
        console.error("Error loading stores for chat:", error);
      } finally {
        setLoadingStores(false);
      }
    };
    fetchStores();
  }, []);

  // Add new address
  const handleAddAddress = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAddrStreet.trim() || !newAddrPincode.trim()) {
      toast.error("Please fill in the street and pincode.");
      return;
    }

    const newAddress: Address = {
      id: `addr-${Date.now()}`,
      type: newAddrType,
      street: newAddrStreet,
      city: newAddrCity,
      state: newAddrState,
      pincode: newAddrPincode,
      instructions: newAddrInstructions,
      isDefault: addresses.length === 0,
    };

    const updated = [...addresses, newAddress];
    setAddresses(updated);
    localStorage.setItem(`ezyshop_user_addrs_${userId}`, JSON.stringify(updated));
    setIsAddingAddress(false);
    setNewAddrStreet("");
    setNewAddrPincode("");
    setNewAddrInstructions("");
    toast.success("New delivery address added!");
  };

  // Set default address
  const handleSetDefaultAddress = (id: string) => {
    const updated = addresses.map((addr) => ({
      ...addr,
      isDefault: addr.id === id,
    }));
    setAddresses(updated);
    localStorage.setItem(`ezyshop_user_addrs_${userId}`, JSON.stringify(updated));
    toast.success("Default address updated!");
  };

  // Delete address
  const handleDeleteAddress = (id: string) => {
    if (addresses.length <= 1) {
      toast.error("You must have at least one delivery address.");
      return;
    }
    const updated = addresses.filter((addr) => addr.id !== id);
    setAddresses(updated);
    localStorage.setItem(`ezyshop_user_addrs_${userId}`, JSON.stringify(updated));
    toast.success("Address removed.");
  };

  // Filtered stores for chat
  const filteredStores = useMemo(() => {
    if (!storeSearch.trim()) return stores;
    return stores.filter((s) =>
      s.storeName.toLowerCase().includes(storeSearch.toLowerCase())
    );
  }, [stores, storeSearch]);

  const initials = userName
    ? userName
        .split(" ")
        .map((n) => n[0])
        .slice(0, 2)
        .join("")
        .toUpperCase()
    : "MA";

  return (
    <div className="min-h-screen bg-gray-50/60 dark:bg-DarkGray py-8 sm:py-12 transition-colors">
      <Toaster />

      {/* Edit Profile Popup Modal */}
      {isEditModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-md rounded-3xl bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 p-6 sm:p-8 shadow-2xl">
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-100 dark:border-zinc-800">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-customTeal dark:text-Green">
                  <User className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold font-nunito text-gray-900 dark:text-white">
                    Edit Profile Details
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Update your personal info and delivery contacts
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsEditModalOpen(false)}
                className="p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-zinc-800 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Modal Form */}
            <form onSubmit={handleSaveProfileModal} className="space-y-4">
              {/* Profile Photo Section */}
              <div className="flex flex-col sm:flex-row items-center gap-4 p-4 rounded-2xl bg-emerald-50/50 dark:bg-zinc-800/50 border border-emerald-100 dark:border-zinc-700/80">
                <div className="relative group w-16 h-16 rounded-2xl overflow-hidden bg-gradient-to-br from-customTeal to-emerald-600 text-white font-bold text-xl flex items-center justify-center border-2 border-emerald-300 dark:border-emerald-600/40 shadow-sm flex-shrink-0">
                  {modalAvatar && !modalImgError ? (
                    <img
                      src={modalAvatar}
                      alt={modalName || "Profile Avatar"}
                      onError={() => setModalImgError(true)}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span>{initials}</span>
                  )}
                  <label
                    htmlFor="avatar-upload-input"
                    className="absolute inset-0 bg-black/45 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                    title="Upload custom photo"
                  >
                    <Camera className="h-5 w-5" />
                  </label>
                  <input
                    id="avatar-upload-input"
                    type="file"
                    accept="image/*"
                    onChange={handlePhotoUpload}
                    className="hidden"
                  />
                </div>

                <div className="flex-1 text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start gap-1.5 mb-0.5">
                    <span className="text-xs font-bold text-gray-900 dark:text-white">
                      Profile Picture
                    </span>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300">
                      Verified
                    </span>
                  </div>
                  <p className="text-[11px] text-gray-500 dark:text-gray-400 mb-2 truncate max-w-[260px]">
                    Synced from verified email: <span className="font-semibold text-gray-700 dark:text-gray-300">{userEmail}</span>
                  </p>
                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                    <label
                      htmlFor="avatar-upload-input"
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 text-gray-700 dark:text-gray-200 hover:bg-gray-50 cursor-pointer shadow-xs transition-colors"
                    >
                      <Upload className="h-3 w-3 text-customTeal dark:text-Green" />
                      <span>Upload New</span>
                    </label>
                    <button
                      type="button"
                      onClick={handleResetToVerifiedAvatar}
                      className="inline-flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-medium text-customTeal dark:text-Green hover:underline"
                    >
                      <RotateCcw className="h-3 w-3" />
                      <span>Reset to Email Photo</span>
                    </button>
                  </div>
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-gray-700 dark:text-gray-300 block mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  value={modalName}
                  onChange={(e) => setModalName(e.target.value)}
                  required
                  placeholder="Enter your full name"
                  className="w-full h-11 px-3.5 rounded-xl bg-gray-50 dark:bg-zinc-800/80 border border-gray-200 dark:border-zinc-700 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-customTeal/40"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-gray-700 dark:text-gray-300 block mb-1">
                  Phone Number
                </label>
                <input
                  type="text"
                  value={modalPhone}
                  onChange={(e) => setModalPhone(e.target.value)}
                  required
                  placeholder="e.g. +91 98765 43210"
                  className="w-full h-11 px-3.5 rounded-xl bg-gray-50 dark:bg-zinc-800/80 border border-gray-200 dark:border-zinc-700 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-customTeal/40"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="text-xs font-semibold text-gray-700 dark:text-gray-300 block">
                    Email Address
                  </label>
                  <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="h-3 w-3" />
                    Verified Login
                  </span>
                </div>
                <input
                  type="email"
                  value={userEmail}
                  disabled
                  className="w-full h-11 px-3.5 rounded-xl bg-gray-100 dark:bg-zinc-800 text-sm text-gray-500 cursor-not-allowed border border-gray-200 dark:border-zinc-700"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 pt-2">
                <Button
                  type="submit"
                  className="flex-1 h-11 rounded-xl bg-customTeal hover:bg-customTeal/90 text-white font-semibold text-sm shadow-md shadow-emerald-500/20"
                >
                  <Save className="h-4 w-4 mr-2" />
                  Save Changes
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsEditModalOpen(false)}
                  className="h-11 px-5 rounded-xl border-gray-300 dark:border-zinc-700 text-sm"
                >
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Welcome Header Banner — Fully responsive to light and dark modes */}
        <div className="relative rounded-3xl bg-gradient-to-r from-emerald-50/95 via-white to-amber-50/50 dark:from-emerald-950/80 dark:via-zinc-900 dark:to-zinc-950 border border-emerald-200/90 dark:border-emerald-500/25 p-6 sm:p-8 md:p-10 text-gray-900 dark:text-white shadow-sm dark:shadow-xl overflow-hidden mb-8 transition-colors">
          {/* Ambient glows */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 blur-3xl pointer-events-none transform-gpu will-change-transform" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-yellow-500/10 blur-3xl pointer-events-none transform-gpu will-change-transform" />

          <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
            <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
              {/* User Avatar with Verified Email Profile Picture */}
              <div className="relative group w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden shadow-md border-2 border-emerald-400/50 dark:border-emerald-500/30 flex-shrink-0 bg-gradient-to-br from-customTeal to-emerald-600 flex items-center justify-center">
                {userAvatar && !imgError ? (
                  <img
                    src={userAvatar}
                    alt={userName || "Profile picture"}
                    onError={() => setImgError(true)}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <span className="text-white font-extrabold text-2xl sm:text-3xl">
                    {initials}
                  </span>
                )}
                {/* Verified Email badge indicator */}
                <div 
                  title={`Profile picture from verified email: ${userEmail}`} 
                  className="absolute bottom-1 right-1 w-5 h-5 rounded-full bg-emerald-500 border-2 border-white dark:border-zinc-900 flex items-center justify-center text-white shadow-sm"
                >
                  <CheckCircle2 className="h-3 w-3" />
                </div>
              </div>

              <div>
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-1.5">
                  <h1 className="text-2xl sm:text-3xl font-bold font-nunito tracking-tight text-gray-900 dark:text-white">
                    {userName || "Valued Shopper"}
                  </h1>
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-100 dark:bg-emerald-500/20 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-500/30">
                    <CheckCircle2 className="h-3 w-3" />
                    Verified Customer
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-amber-100 dark:bg-yellow-500/20 text-amber-800 dark:text-Yellow border border-amber-300 dark:border-yellow-500/30">
                    <Sparkles className="h-3 w-3" />
                    Gold Member
                  </span>
                </div>

                <p className="text-gray-600 dark:text-emerald-100/80 text-xs sm:text-sm flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-1">
                  <span className="flex items-center gap-1">
                    <Mail className="h-3.5 w-3.5 text-customTeal dark:text-emerald-300" />
                    {userEmail}
                  </span>
                  <span className="flex items-center gap-1">
                    <Phone className="h-3.5 w-3.5 text-customTeal dark:text-emerald-300" />
                    {userPhone}
                  </span>
                </p>

                <p className="text-xs text-gray-500 dark:text-emerald-200/60 mt-2">
                  Customer ID: <code className="font-mono bg-emerald-100/70 dark:bg-black/30 border border-emerald-200/70 dark:border-transparent px-2 py-0.5 rounded text-emerald-900 dark:text-emerald-300 font-semibold">{userId}</code>
                </p>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex items-center gap-3">
              <Button
                onClick={handleOpenEditModal}
                size="sm"
                className="h-10 px-4 rounded-full bg-white hover:bg-gray-100 dark:bg-white/10 dark:hover:bg-white/20 text-gray-800 dark:text-white border border-gray-300 dark:border-white/20 font-medium text-xs sm:text-sm transition-all flex items-center gap-2 shadow-sm"
              >
                <Edit3 className="h-4 w-4" />
                <span>Edit Profile</span>
              </Button>
              <Link href="/shops">
                <Button
                  size="sm"
                  className="h-10 px-5 rounded-full bg-customTeal hover:bg-customTeal/90 text-white font-semibold text-xs sm:text-sm shadow-md shadow-emerald-500/20 hover:-translate-y-0.5 transition-all flex items-center gap-1.5"
                >
                  <StoreIcon className="h-4 w-4" />
                  <span>Browse Shops</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* 4 Stat Metric Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
          <Link
            href="/MyOrders"
            className="group rounded-2xl bg-white dark:bg-zinc-900 border border-gray-200/80 dark:border-zinc-800 p-5 shadow-sm hover:shadow-md hover:border-customTeal/40 dark:hover:border-Green/40 transition-all flex items-center justify-between"
          >
            <div>
              <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                My Orders
              </p>
              <h3 className="text-2xl font-black font-nunito text-gray-900 dark:text-white mt-1">
                3 Orders
              </h3>
              <p className="text-[11px] text-customTeal dark:text-Green font-medium mt-1 flex items-center gap-1">
                <span>View history</span>
                <ChevronRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
              </p>
            </div>
            <div className="p-3 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 text-customTeal dark:text-Green group-hover:scale-110 transition-transform">
              <Package className="h-6 w-6" />
            </div>
          </Link>

          <Link
            href="/WishList"
            className="group rounded-2xl bg-white dark:bg-zinc-900 border border-gray-200/80 dark:border-zinc-800 p-5 shadow-sm hover:shadow-md hover:border-customTeal/40 dark:hover:border-Green/40 transition-all flex items-center justify-between"
          >
            <div>
              <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Saved Wishlist
              </p>
              <h3 className="text-2xl font-black font-nunito text-gray-900 dark:text-white mt-1">
                12 Items
              </h3>
              <p className="text-[11px] text-customTeal dark:text-Green font-medium mt-1 flex items-center gap-1">
                <span>View favorites</span>
                <ChevronRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
              </p>
            </div>
            <div className="p-3 rounded-2xl bg-rose-50 dark:bg-rose-950/60 text-rose-500 group-hover:scale-110 transition-transform">
              <Heart className="h-6 w-6" />
            </div>
          </Link>

          <Link
            href="/Cart"
            className="group rounded-2xl bg-white dark:bg-zinc-900 border border-gray-200/80 dark:border-zinc-800 p-5 shadow-sm hover:shadow-md hover:border-customTeal/40 dark:hover:border-Green/40 transition-all flex items-center justify-between"
          >
            <div>
              <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Shopping Cart
              </p>
              <h3 className="text-2xl font-black font-nunito text-gray-900 dark:text-white mt-1">
                Active Bag
              </h3>
              <p className="text-[11px] text-customTeal dark:text-Green font-medium mt-1 flex items-center gap-1">
                <span>Proceed to checkout</span>
                <ChevronRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
              </p>
            </div>
            <div className="p-3 rounded-2xl bg-amber-50 dark:bg-amber-950/60 text-Yellow group-hover:scale-110 transition-transform">
              <ShoppingCart className="h-6 w-6" />
            </div>
          </Link>

          <div
            onClick={() => setActiveTab("chat")}
            className="group cursor-pointer rounded-2xl bg-white dark:bg-zinc-900 border border-gray-200/80 dark:border-zinc-800 p-5 shadow-sm hover:shadow-md hover:border-customTeal/40 dark:hover:border-Green/40 transition-all flex items-center justify-between"
          >
            <div>
              <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Local Stores
              </p>
              <h3 className="text-2xl font-black font-nunito text-gray-900 dark:text-white mt-1">
                {stores.length || 6} Connected
              </h3>
              <p className="text-[11px] text-customTeal dark:text-Green font-medium mt-1 flex items-center gap-1">
                <span>Open store chats</span>
                <ChevronRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
              </p>
            </div>
            <div className="p-3 rounded-2xl bg-blue-50 dark:bg-blue-950/60 text-blue-500 group-hover:scale-110 transition-transform">
              <MessageSquare className="h-6 w-6" />
            </div>
          </div>
        </div>

        {/* Tab Navigation Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 border-b border-gray-200/80 dark:border-zinc-800 scrollbar-none">
          {[
            { id: "overview", label: "Profile & Addresses", icon: User },
            { id: "orders", label: "Recent Orders", icon: Package },
            { id: "chat", label: "Chat With Stores", icon: MessageSquare },
            { id: "settings", label: "Account & Security", icon: ShieldCheck },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                  isActive
                    ? "bg-customTeal text-white shadow-md shadow-emerald-600/20"
                    : "bg-white dark:bg-zinc-900 text-gray-600 dark:text-gray-300 border border-gray-200/80 dark:border-zinc-800 hover:bg-gray-100 dark:hover:bg-zinc-800"
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* TAB 1: Profile & Addresses */}
        {activeTab === "overview" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left: Personal Information */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="rounded-3xl bg-white dark:bg-zinc-900 border border-gray-200/80 dark:border-zinc-800 p-6 sm:p-7 shadow-sm">
                <div className="flex items-center justify-between mb-5 pb-3 border-b border-gray-100 dark:border-zinc-800">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-customTeal dark:text-Green">
                      <User className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-bold font-nunito text-gray-900 dark:text-white">
                      Personal Details
                    </h3>
                  </div>

                  <button
                    onClick={handleOpenEditModal}
                    className="text-xs font-semibold text-customTeal dark:text-Green hover:underline flex items-center gap-1"
                  >
                    <Edit3 className="h-3.5 w-3.5" />
                    <span>Edit</span>
                  </button>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 pb-3 border-b border-gray-100 dark:border-zinc-800">
                    <div className="w-12 h-12 rounded-xl overflow-hidden bg-gradient-to-br from-customTeal to-emerald-600 text-white font-bold flex items-center justify-center border border-emerald-300 dark:border-emerald-600/40 shadow-2xs flex-shrink-0">
                      {userAvatar && !imgError ? (
                        <img
                          src={userAvatar}
                          alt={userName}
                          onError={() => setImgError(true)}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span>{initials}</span>
                      )}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-900 dark:text-white flex items-center gap-1">
                        <span>Verified Account Photo</span>
                        <CheckCircle2 className="h-3 w-3 text-emerald-500" />
                      </p>
                      <p className="text-[11px] text-gray-500 dark:text-gray-400">Synced with {userEmail}</p>
                    </div>
                  </div>

                  <div>
                    <span className="text-xs text-gray-400 block mb-0.5">Full Name</span>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">{userName}</p>
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 block mb-0.5">Email Address</span>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">{userEmail}</p>
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 block mb-0.5">Phone Number</span>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">{userPhone}</p>
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 block mb-0.5">Preferred Language</span>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">English (India)</p>
                  </div>
                </div>
              </div>

              {/* Quick Perks Card */}
              <div className="rounded-3xl bg-emerald-50/70 dark:bg-zinc-900 border border-emerald-200/60 dark:border-zinc-800 p-6">
                <h4 className="text-sm font-bold text-gray-900 dark:text-white flex items-center gap-2 mb-2">
                  <Sparkles className="h-4 w-4 text-Yellow" />
                  EzyShop Prime Benefits
                </h4>
                <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed mb-3">
                  You enjoy free 20-minute delivery on all local orders above ₹199 and direct priority merchant chat support.
                </p>
                <div className="flex items-center gap-2 text-xs font-bold text-customTeal dark:text-Green">
                  <ShieldCheck className="h-4 w-4" />
                  <span>100% Quality & Freshness Guarantee</span>
                </div>
              </div>
            </div>

            {/* Right: Saved Delivery Addresses */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="rounded-3xl bg-white dark:bg-zinc-900 border border-gray-200/80 dark:border-zinc-800 p-6 sm:p-7 shadow-sm">
                <div className="flex items-center justify-between mb-5 pb-3 border-b border-gray-100 dark:border-zinc-800">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-xl bg-amber-50 dark:bg-amber-950/60 text-Yellow">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold font-nunito text-gray-900 dark:text-white">
                        Delivery Addresses
                      </h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Manage your neighborhood delivery locations
                      </p>
                    </div>
                  </div>

                  {!isAddingAddress && (
                    <Button
                      size="sm"
                      onClick={() => setIsAddingAddress(true)}
                      className="rounded-full bg-customTeal hover:bg-customTeal/90 text-white font-semibold text-xs flex items-center gap-1.5"
                    >
                      <Plus className="h-3.5 w-3.5" />
                      <span>Add Address</span>
                    </Button>
                  )}
                </div>

                {/* Add Address Form */}
                {isAddingAddress && (
                  <form
                    onSubmit={handleAddAddress}
                    className="p-4 rounded-2xl bg-gray-50 dark:bg-zinc-800/50 border border-gray-200 dark:border-zinc-700 mb-6 space-y-3.5"
                  >
                    <div className="flex items-center justify-between pb-2 border-b border-gray-200 dark:border-zinc-700">
                      <h4 className="text-sm font-bold text-gray-900 dark:text-white">New Address</h4>
                      <button
                        type="button"
                        onClick={() => setIsAddingAddress(false)}
                        className="text-gray-400 hover:text-gray-600"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                      {(["Home", "Work", "Other"] as const).map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setNewAddrType(type)}
                          className={`py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                            newAddrType === type
                              ? "bg-customTeal text-white border-customTeal"
                              : "bg-white dark:bg-zinc-800 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-zinc-700"
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>

                    <div>
                      <label className="text-xs font-medium text-gray-600 dark:text-gray-400 block mb-1">
                        Street Address / Flat / Building
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Flat 101, Sunshine Residency, Vaishali"
                        value={newAddrStreet}
                        onChange={(e) => setNewAddrStreet(e.target.value)}
                        className="w-full h-10 px-3 rounded-lg bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-customTeal/30"
                      />
                    </div>

                    <div className="grid grid-cols-3 gap-3">
                      <div>
                        <label className="text-xs font-medium text-gray-600 dark:text-gray-400 block mb-1">
                          City
                        </label>
                        <input
                          type="text"
                          value={newAddrCity}
                          onChange={(e) => setNewAddrCity(e.target.value)}
                          className="w-full h-10 px-3 rounded-lg bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700 text-sm text-gray-900 dark:text-white"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-medium text-gray-600 dark:text-gray-400 block mb-1">
                          State
                        </label>
                        <input
                          type="text"
                          value={newAddrState}
                          onChange={(e) => setNewAddrState(e.target.value)}
                          className="w-full h-10 px-3 rounded-lg bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700 text-sm text-gray-900 dark:text-white"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-medium text-gray-600 dark:text-gray-400 block mb-1">
                          Pincode
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. 302021"
                          value={newAddrPincode}
                          onChange={(e) => setNewAddrPincode(e.target.value)}
                          className="w-full h-10 px-3 rounded-lg bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700 text-sm text-gray-900 dark:text-white"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-medium text-gray-600 dark:text-gray-400 block mb-1">
                        Delivery Instructions (Optional)
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Leave with guard / call upon arrival"
                        value={newAddrInstructions}
                        onChange={(e) => setNewAddrInstructions(e.target.value)}
                        className="w-full h-10 px-3 rounded-lg bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700 text-sm text-gray-900 dark:text-white"
                      />
                    </div>

                    <div className="flex items-center gap-2 pt-1">
                      <Button
                        type="submit"
                        size="sm"
                        className="rounded-lg bg-customTeal hover:bg-customTeal/90 text-white font-semibold text-xs"
                      >
                        Save Address
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => setIsAddingAddress(false)}
                        className="rounded-lg text-xs"
                      >
                        Cancel
                      </Button>
                    </div>
                  </form>
                )}

                {/* List of Addresses */}
                <div className="space-y-4">
                  {addresses.map((addr) => (
                    <div
                      key={addr.id}
                      className={`p-4 rounded-2xl border transition-all ${
                        addr.isDefault
                          ? "bg-emerald-50/50 dark:bg-zinc-800/80 border-emerald-300 dark:border-emerald-600/50 shadow-sm"
                          : "bg-white dark:bg-zinc-800/40 border-gray-200/80 dark:border-zinc-700/80 hover:border-gray-300"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-start gap-3">
                          <div
                            className={`p-2 rounded-xl mt-0.5 ${
                              addr.isDefault
                                ? "bg-customTeal text-white"
                                : "bg-gray-100 dark:bg-zinc-700 text-gray-600 dark:text-gray-300"
                            }`}
                          >
                            <MapPin className="h-4 w-4" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-xs font-bold uppercase tracking-wide text-gray-900 dark:text-white">
                                {addr.type}
                              </span>
                              {addr.isDefault && (
                                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-customTeal text-white">
                                  Default
                                </span>
                              )}
                            </div>
                            <p className="text-sm text-gray-800 dark:text-gray-200 font-medium mt-1">
                              {addr.street}
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              {addr.city}, {addr.state} - {addr.pincode}
                            </p>
                            {addr.instructions && (
                              <p className="text-[11px] text-gray-500 italic mt-1.5 flex items-center gap-1">
                                <Clock className="h-3 w-3 text-customTeal" />
                                Note: {addr.instructions}
                              </p>
                            )}
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          {!addr.isDefault && (
                            <button
                              onClick={() => handleSetDefaultAddress(addr.id)}
                              className="text-xs text-customTeal dark:text-Green hover:underline font-semibold"
                            >
                              Set Default
                            </button>
                          )}
                          <button
                            onClick={() => handleDeleteAddress(addr.id)}
                            className="text-xs text-rose-500 hover:text-rose-700 p-1"
                            title="Delete Address"
                          >
                            <X className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: Recent Orders */}
        {activeTab === "orders" && (
          <div className="rounded-3xl bg-white dark:bg-zinc-900 border border-gray-200/80 dark:border-zinc-800 p-6 sm:p-8 shadow-sm">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-gray-100 dark:border-zinc-800">
              <div>
                <h3 className="text-xl font-bold font-nunito text-gray-900 dark:text-white">
                  Order History & Live Status
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                  Track ongoing deliveries and review receipts from neighborhood shops
                </p>
              </div>

              <Link href="/MyOrders">
                <Button
                  size="sm"
                  className="rounded-full bg-customTeal hover:bg-customTeal/90 text-white font-semibold text-xs"
                >
                  <span>View All in My Orders</span>
                  <ExternalLink className="h-3.5 w-3.5 ml-1.5" />
                </Button>
              </Link>
            </div>

            <div className="space-y-4">
              {mockRecentOrders.map((order) => (
                <div
                  key={order.id}
                  className="p-5 rounded-2xl border border-gray-200/80 dark:border-zinc-800 hover:border-customTeal/40 dark:hover:border-Green/40 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 text-customTeal dark:text-Green flex-shrink-0">
                      <Truck className="h-6 w-6" />
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-gray-900 dark:text-white">
                          {order.store}
                        </span>
                        <span className="text-xs font-mono text-gray-400">
                          {order.id}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                        {order.items}
                      </p>
                      <p className="text-xs text-gray-400 mt-1">
                        Ordered: {order.date}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end gap-4 border-t sm:border-t-0 pt-3 sm:pt-0">
                    <div className="text-right">
                      <span className="text-sm sm:text-base font-extrabold text-gray-900 dark:text-white block">
                        {order.amount}
                      </span>
                      <span
                        className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold border mt-0.5 ${order.statusColor}`}
                      >
                        {order.status}
                      </span>
                    </div>

                    <Link href={`/MyOrders/${order.id}`}>
                      <Button
                        size="sm"
                        variant="outline"
                        className="rounded-xl text-xs h-9 font-medium"
                      >
                        Track
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: Chat with Stores (Redesigned) */}
        {activeTab === "chat" && (
          <div className="rounded-3xl bg-white dark:bg-zinc-900 border border-gray-200/80 dark:border-zinc-800 p-6 sm:p-8 shadow-sm">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-gray-100 dark:border-zinc-800">
              <div>
                <h3 className="text-xl font-bold font-nunito text-gray-900 dark:text-white flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-customTeal dark:text-Green" />
                  Chat With Neighborhood Stores
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                  Message local shopkeepers directly to inquire about product stock, custom requests, and delivery timings
                </p>
              </div>

              {/* Search bar */}
              <div className="w-full sm:w-72 relative">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search stores..."
                  value={storeSearch}
                  onChange={(e) => setStoreSearch(e.target.value)}
                  className="w-full h-10 pl-9 pr-3.5 rounded-full bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 text-xs sm:text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-customTeal/40"
                />
              </div>
            </div>

            {loadingStores ? (
              <div className="py-12 text-center text-sm text-gray-500">
                Loading partner stores...
              </div>
            ) : filteredStores.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {filteredStores.map((store) => (
                  <div
                    key={store.id}
                    className="p-5 rounded-2xl bg-gray-50/70 dark:bg-zinc-800/50 border border-gray-200/80 dark:border-zinc-700/80 hover:border-customTeal/40 dark:hover:border-Green/40 transition-all flex flex-col justify-between group hover:-translate-y-0.5"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-11 h-11 rounded-2xl bg-white dark:bg-zinc-700 border border-gray-200 dark:border-zinc-600 text-customTeal dark:text-Green flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                            <StoreIcon className="h-5 w-5" />
                          </div>
                          <div>
                            <h4 className="text-sm font-bold text-gray-900 dark:text-white line-clamp-1">
                              {store.storeName}
                            </h4>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              {store.Products?.length || 0} Products Cataloged
                            </p>
                          </div>
                        </div>

                        <span className="flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          Online
                        </span>
                      </div>

                      <p className="text-xs text-gray-600 dark:text-gray-300 line-clamp-2 mb-4">
                        Contact {store.storeName} regarding orders, item specifications, and expedited local pickup.
                      </p>
                    </div>

                    <Link href={`/user/${userId}/${store.id}`} className="w-full block">
                      <Button
                        size="sm"
                        className="w-full h-9 rounded-xl bg-customTeal hover:bg-customTeal/90 text-white font-semibold text-xs flex items-center justify-center gap-1.5 shadow-sm group-hover:shadow"
                      >
                        <MessageSquare className="h-3.5 w-3.5" />
                        <span>Open Store Chat</span>
                        <ChevronRight className="h-3.5 w-3.5 ml-0.5" />
                      </Button>
                    </Link>
                  </div>
                ))}
              </div>
            ) : (
              <div className="py-12 text-center text-sm text-gray-500">
                No stores found matching &quot;{storeSearch}&quot;.
              </div>
            )}
          </div>
        )}

        {/* TAB 4: Account & Security */}
        {activeTab === "settings" && (
          <div className="rounded-3xl bg-white dark:bg-zinc-900 border border-gray-200/80 dark:border-zinc-800 p-6 sm:p-8 shadow-sm max-w-3xl">
            <h3 className="text-xl font-bold font-nunito text-gray-900 dark:text-white mb-2">
              Security & Notifications
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-6">
              Manage your authentication preferences and communications
            </p>

            <div className="space-y-5">
              <div className="p-4 rounded-2xl bg-gray-50 dark:bg-zinc-800/60 border border-gray-200 dark:border-zinc-700 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-gray-900 dark:text-white">OTP Authentication</h4>
                  <p className="text-xs text-gray-500">Fast, passwordless OTP verification on your mobile and email</p>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
                  Active
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-gray-50 dark:bg-zinc-800/60 border border-gray-200 dark:border-zinc-700 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-gray-900 dark:text-white">Order SMS & WhatsApp Alerts</h4>
                  <p className="text-xs text-gray-500">Receive live dispatch and delivery courier updates</p>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
                  Enabled
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-gray-50 dark:bg-zinc-800/60 border border-gray-200 dark:border-zinc-700 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-gray-900 dark:text-white">Promotional Newsletters</h4>
                  <p className="text-xs text-gray-500">Weekly discount flyers from neighborhood shops</p>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-gray-200 text-gray-700 dark:bg-zinc-700 dark:text-gray-300">
                  Subscribed
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
