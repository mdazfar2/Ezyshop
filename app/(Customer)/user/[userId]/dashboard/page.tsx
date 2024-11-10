
import Container from '@/components/ui/container';
import ListSellers from './components/listStores';

const CustomerDashboard = () => {
  return (
    <div className="min-h-screen bg-[url('/dashboardPage.png')]">
      <Container>
        <div className="p-8 bg-black bg-opacity-50 flex flex-col">
          <div className='bg-black text-gray-200 w-fit my-4 bg-opacity-80 rounded-xl p-5'>
            <h1 className="text-6xl font-handlee text-customTeal font-bold mb-2">
              User Dashboard
            </h1>
            <p className='text-customTeal'>Ready to explore Ezyshop?</p>
          </div>

          <ListSellers />
        </div>
      </Container>
    </div>
  );
};

export default CustomerDashboard;
