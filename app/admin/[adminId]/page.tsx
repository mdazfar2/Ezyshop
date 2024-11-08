
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { Activity, CreditCard, IndianRupee, Package, Store, User } from "lucide-react";
import { RecentSales } from "./components/recentSales";
import Overview from "./components/overview";

interface AdminPageProps {
  params: { storeId: string };
}

const mockGraphData = [
    { name: "Jan", total: 5000 },
    { name: "Feb", total: 4500 },
    { name: "Mar", total: 6000 },
    { name: "Apr", total: 5500 },
    { name: "May", total: 7000 },
    { name: "Jun", total: 8000 },
    { name: "Jul", total: 7500 },
    { name: "Aug", total: 7000 },
    { name: "Sep", total: 8500 },
    { name: "Oct", total: 9000 },
    { name: "Nov", total: 9500 },
    { name: "Dec", total: 10000 },
  ];

const AdminPage: React.FC<AdminPageProps> = async () => {

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <Heading title="Dashboard" description="Overview of the website" />
        <Separator />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2  lg:grid-cols-3">
          <Card className="bg-gray-200 dark:bg-gray-700">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Revenue
              </CardTitle>

              <IndianRupee className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
              ₹ 2,10,789
              </div>
            </CardContent>
          </Card>
          <Card className="bg-gray-200 dark:bg-gray-700">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Sales</CardTitle>

              <CreditCard className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              +577
            </CardContent>
          </Card>
          <Card className="bg-gray-200 dark:bg-gray-700">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Stores Associated
              </CardTitle>

              <Store className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              43
            </CardContent>
          </Card>
          <Card className="bg-gray-200 dark:bg-gray-700">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Customer Associated
              </CardTitle>

              <User className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
                1450
            </CardContent>
          </Card>
          <Card className="bg-gray-200 dark:bg-gray-700">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Website Visits
              </CardTitle>

              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
                100,223
            </CardContent>
          </Card>
          <Card className="bg-gray-200 dark:bg-gray-700">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Successful Orders
              </CardTitle>

              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
                20455+
            </CardContent>
          </Card>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <Card className="col-span-1">
            <CardHeader>Overview</CardHeader>
            <CardContent className="pl-2">
              <Overview data={mockGraphData} />
            </CardContent>
          </Card>
          <div className="col-span-1">
            <Heading title="Some recent figures" description="We have made 114 sales this week!"/>
            <RecentSales />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
