import CustomerDashboardView from "./components/CustomerDashboardView";

export default function CustomerDashboardPage({
  params,
}: {
  params: { userId: string };
}) {
  return <CustomerDashboardView userId={params.userId} />;
}
