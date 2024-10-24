"use client"; // Add this line at the top

import ItemNotFound from '@/components/ui/ItemNotFound';
import { useEffect } from 'react';

const NotFound = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = '/'; // Redirect to homepage after 2 seconds
    }, 1000);

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  return <ItemNotFound />;
};

export default NotFound;
