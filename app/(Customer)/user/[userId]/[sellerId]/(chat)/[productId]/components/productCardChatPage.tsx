
import { Card , CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Image as ImageInterface} from "@prisma/client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay';

export interface ProductCardProps {
  id: string; name: string; price: number; description: string; 
  images: ImageInterface[]
};

const ProductCardChatPage: React.FC<ProductCardProps> = ({
  name,price, description,images
}) => {
  return (
    <Card className="w-full bg-gray-700">
      <CardHeader className=" p-0">
        <div className="flex flex-col gap-2">
        <Carousel
        className="h-48"
        opts={{
          align: 'start',
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent className="flex gap-4">
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <Image
                src={image.url} // Use the image URL from the database
                alt={name}
                width={1000}
                height={1000} // Fill the parent container
                objectFit="cover" // Cover the area while maintaining aspect ratio
                className="rounded-t-lg h-48" // Optional: Add styling for rounded corners
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

          <CardTitle className="flex items-center justify-between text-2xl pt-4 text-customTeal dark:text-Green m-2 px-5 font-handlee">
            <div>{name}</div>
            <div className="text-gray-200">
              ₹<span className="text-3xl">{price}</span>
            </div>
          </CardTitle>
        </div>
      </CardHeader>

      <CardFooter className="flex flex-col">
        <div className="flex flex-col items-start w-full justify-start">
          <div className="text-gray-100 text-xl">{description}</div>
        </div>
        
      </CardFooter>
    </Card>
  );
};

export default ProductCardChatPage;
