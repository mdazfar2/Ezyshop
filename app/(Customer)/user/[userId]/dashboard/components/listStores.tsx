'use client';
import { Card, CardContent } from '@/components/ui/card';
import { Spinner } from '@/components/ui/spinner';
import { Product, Store } from '@prisma/client';
import { StoreIcon } from 'lucide-react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface Customer {
  id: string;
  name: string;
  email: string;
  Stores: string[];
}

interface StoreWithProduct extends Store {
  Products: Product[];
}

const ListStores = () => {
  const [customer, setCustomer] = useState<Customer | null>(null);
  const [Stores, setStores] = useState<StoreWithProduct[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isMounted, setIsMounted] = useState(false);

  const session = useSession();
  const userId= session.data?.user.id

  useEffect(() => {
    const fetchData = async () => {
      const customerData = await fetch('/data/customers.json').then(res =>
        res.json()
      );
      setCustomer(customerData[0]);

      const StoreData = await fetch('/data/store.json').then(res =>
        res.json()
      );
      setStores(StoreData);
    };
    fetchData();
    setIsMounted(true);
  }, [session.status]);

  // Filter Stores based on search query
  const filteredStores = Stores.filter(Store =>
    Store.storeName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (!isMounted || !Stores.length || !userId) {
    return <Spinner />; 
  }


  return (
    <div className="bg-white p-5 rounded-lg">
      {customer && (
        <>
          <div className="w-full flex items-center justify-center">
            <div className="text-3xl font-nunito font-bold py-2 ">Chat With Stores</div>
          </div>
          {/* Search Bar */}
          <div className="mb-6">
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-lg"
              placeholder="Search Stores by name"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {filteredStores.length > 0 ? (
              filteredStores.map(Store => (
                <Link href={`/user/${userId}/${Store.id}`} key={Store.id}>
                  <Card className="hover:scale-105 bg-gray-200">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <StoreIcon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <div className="text-lg font-handlee font-semibold">{Store.storeName}</div>
                          <p className="text-sm text-gray-500">{Store.Products.length} Products</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))
            ) : (
              <p className="col-span-full text-center text-gray-500">No Stores found</p>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default ListStores;
