import { Seller } from "@prisma/client";
import { DashboardForm } from "./components/dashboard-form";
import prismadb from "@/lib/prismadb";

interface DashboardProps {
    params: {
      storeId: string;
    };
  }

const EditDashboard:React.FC<DashboardProps> = async({params}) => {
    let seller: Seller | null = null;
  try {
    seller = await prismadb.seller.findUnique({
      where: {
        id: params.storeId,
      },
    });
  } catch (err) {
    console.error(
      "Error fetching seller",
      err instanceof Error ? err.message : err
    );
  }
  // console.log(coverUrl)
  if (!seller) return <div>seller not found</div>;

    return ( 
        <div className="dark:bg-DarkGray h-screen px-10 flex-col pt-10">
            <DashboardForm initialData={seller}/>
        </div>
     );
}
 
export default EditDashboard;