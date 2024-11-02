"use client"; // Ensure this is added at the very top

import ItemNotFound from '@/components/ui/ItemNotFound';
import { useEffect } from 'react';

const NotFound = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = '/'; // Redirect to homepage after 1 second
    }, 1000);

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  return <ItemNotFound />;
};

export default NotFound;
