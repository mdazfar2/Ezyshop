import { format } from "date-fns";
import { BillboardClient } from "./components/client";
import { BillboardColumn } from "./components/columns";
import { Billboard, PrismaClient } from "@prisma/client";

const BillboardsPage = async ({ params }: { params: { storeId: string } }) => {

  const prisma = new PrismaClient()
  const billboards:Billboard[] = await prisma.billboard.findMany({
    where: {
      storeId: params.storeId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  const formattedBillboards: BillboardColumn[] = billboards.map((item) => ({
    id: item.id,
    label: item.label,
    createdAt: format(item.createdAt, "MMMM do, yyyy"),
  }));
  return (
    <div className="felx-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <BillboardClient data={formattedBillboards} />
        {/* billboardss */}
      </div>
    </div>
  );
};

export default BillboardsPage;
