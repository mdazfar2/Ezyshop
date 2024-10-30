import prismadb from "@/lib/prismadb";
import { Store } from "@prisma/client";
import { DashboardForm } from "./components/dashboard-form";

interface DashboardProps {
    params: {
      storeId: string;
    };
  }

const EditDashboard:React.FC<DashboardProps> = async({params}) => {
    let store:Store | null = null;
  try {
    store = await prismadb.store.findUnique({
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
  if (!store) return <div>seller not found</div>;

    return ( 
        <div className="dark:bg-DarkGray h-screen px-10 flex-col pt-10">
            <DashboardForm initialData={store}/>
        </div>
     );
}
 
export default EditDashboard;