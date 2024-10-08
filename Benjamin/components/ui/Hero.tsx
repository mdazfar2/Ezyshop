import Image from "next/image";
import { Button } from "./button";

const Hero = () => {
    return ( 
    <div className="flex items-center justify-around p-5 text-gray-100 bg-[#17a2b8] h-full">
        <div className="flex flex-col gap-10 w-2/4">
            <div className="text-8xl font-bold font-handlee">
            Revolutionizing How You Shop
            </div>
            <div className="text-wrap text-lg">
            Bringing every store to your door, no matter where you live. EzyShop makes it easy to browse, 
            order, and receive products from your favorite stores—from your local area to beyond—right 
            from your live place. Enjoy seamless shopping without stepping outside.
            </div>
            <Button className="rounded-full max-w-60">
                Start shopping
            </Button>
        </div>
        <div>
            <Image alt="Hero Image" src={"/hero.png"} width={550} height={550}/>
        </div>

    </div> 
    );
}
 
export default Hero;