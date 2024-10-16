import Image from "next/image";
import { Button } from "./button";

const Hero = () => {

    return ( 
    <div className="flex flex-col lg:flex-row items-center justify-around lg:p-5 text-gray-100  bg-customTeal dark:bg-gradient-to-r from-Green to-Yellow h-full mb-20">
        <div className="flex flex-col items-center lg:items-start justify-center gap-10 p-4 lg:p-0 lg:w-2/4">
            <div className="text-5xl pt-5 lg:pt-0 lg:text-8xl text-center lg:text-start font-extrabold font-handlee text-gray-200">
            Revolutionizing How You Shop
            </div>
            <div className="text-center text-gray-200 lg:text-wrap lg:text-start lg:text-lg">
            Bringing every store to your door, no matter where you live. EzyShop makes it easy to browse, 
            order, and receive products from your favorite stores—from your local area to beyond—right 
            from your live place. Enjoy seamless shopping without stepping outside.
            </div>
            <Button size={"lg"} variant={"default"} className="rounded-full w-52 mb-10 lg:mb-0 h-16 text-xl text-gray-200 font-bold lg:w-60 max-w-60 bg-DarkGray border-black hover:shadow-black dark:hover:text-black">
                Start shopping
            </Button>
        </div>
        <div>
            <Image alt="Hero Image"  src={"/hero.png"} width={550} height={550}/>
        </div>

    </div> 
    );
}
 
export default Hero;