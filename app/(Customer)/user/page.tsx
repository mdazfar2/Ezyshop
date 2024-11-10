'use client';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Bookmark, Delete, Edit, Mail, Text, Trash, User } from 'lucide-react';
import { getuserById } from '@/actions/user/userGET';
import toast from 'react-hot-toast';
import { User as UserType } from '@prisma/client';
import { useBookmark } from '@/context/UserBookmarkProvider';

export default function UserProfile() {
  const { data: session } = useSession();
  const [user, setUser] = useState<UserType | null>(null);

  const { bookmarks, fetchBookmarks, removeFromBookmarks, loading, error } =
    useBookmark();

  useEffect(() => {
    if (session) {
      // Fetch user details when the session is available
      const fetchUserData = async () => {
        const userData = await getuserById({ id: session.user.id });
        if (!userData.success && userData.error) {
          toast.error(userData.error);
          return;
        } else {
          if (!userData.data) {
            toast.error('NADA');
            return;
          }
          setUser(userData.data);
        }
      };
      fetchUserData();

      fetchBookmarks(session.user.id);
    }
  }, []);

 

  // if(!loading&&bookmarks.length>0){
  //   console.log('BOOKMARKSSSSSSS' + bookmarks[0].listing);
  // }
  
  return (
    <div className="flex flex-col items-center py-8 px-4 md:px-10 lg:px-20">
      {/* User Info Section */}
      {user && user.id && (
        <>
          <Card className="w-full max-w-7xl p-6 mb-8 shadow-md border border-gray-200 rounded-md">
            <CardHeader className="flex items-center">
              <div className="flex justify-between w-full items-center">
                <User className="h-10 w-10 text-gray-500 mr-4" />
                <div>
                  <CardTitle className="text-gray-600 flex items-center">
                    <Text className="h-5 w-5 text-gray-500 mr-2" />
                    {user.name}
                  </CardTitle>
                  <p className="text-gray-600 flex items-center">
                    <Mail className="h-5 w-5 text-gray-500 mr-2" />
                    {user.email}
                  </p>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Edit className="text-green-500" />
                  <Trash className="text-red-500" />
                </div>
              </div>
            </CardHeader>
          </Card>

          {loading && (
            <div>Loading Bookmarks....</div>
          )}
          {!loading &&  (
            
            <div className="w-full max-w-7xl">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <Bookmark className="h-6 w-6 text-gray-600 mr-2" />
                Bookmarked Listings
              </h2>
              <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {bookmarks.length>0 && bookmarks.map(bookmark => (
                <Card
                  key={bookmark.id}
                  className="shadow-md border border-gray-200 rounded-md"
                >
                  <CardHeader className="p-3">
                    <CardTitle className="text-lg font-semibold">
                      {bookmark.listing.name}
                    </CardTitle>
                    <p className="text-sm text-gray-600 truncate">
                      {bookmark.listing.description}
                    </p>
                  </CardHeader>
                  <CardContent className="p-3">
                    <img
                      src={bookmark.listing.images[0].url}
                      className="h-32 w-full object-cover rounded-md mb-2"
                      alt={bookmark.listing.name}
                    />
                    <p className="text-gray-700 font-bold">${bookmark.listing.price}</p>

            
                    <button
                        onClick={() => removeFromBookmarks(user.id , bookmark.listing.id)}
                      className="mt-4 bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600 transition duration-200"
                    >
                      <Trash className="h-5 w-5" />
                    </button>
                  </CardContent>
                </Card>
              ))}
              </div>

              {bookmarks.length === 0 && (
              <p className="text-center text-gray-500 mt-4">
                No bookmarks yet.
              </p>
            )}
            </div>
          )}
        </>
      )}
    </div>
  );
}
