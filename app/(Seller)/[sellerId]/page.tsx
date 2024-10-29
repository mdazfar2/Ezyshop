import prismadb from "@/lib/prismadb";
import { Store } from "@prisma/client";
import SetUpGuide from "./components/setupStore";
import SellerDashboard from "./components/sellerDashboard";

interface SellerPageProps{
  params:{
    sellerId:string,
  },
};

const SellerPage:React.FC<SellerPageProps> = async({params}) => {

  let Stores: Store[] | null = [];
  try {
    Stores = await prismadb.store.findMany({
      where: {
        SellerId:params.sellerId,
      },
    });
  } catch (err) {
    console.error(
      "Error fetching Store",
      err instanceof Error ? err.message : err
    );
  }

    if (Stores.length){
        return <SellerDashboard stores={Stores}/>
    }
  
    else{
      return <SetUpGuide params={params}/>
    }
 
}
 
export default SellerPage;