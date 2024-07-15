
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/container";

const TwoBanner = () => {
    return (
        <Container>
            <div className="my-10 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
                <div className="w-full">
                    <Link href="#"  className="w-full h-64 object-cover overflow-hidden">
                        <Image 
                            src="/images/banner/gobi.jpg" 
                            alt="gobi-banner" 
                            width={632} 
                            height={210} 
                            layout="responsive" 
                        />
                    </Link>
                </div>
                <div className="w-full">
                    <Link href="#" className="w-full h-64 object-cover overflow-hidden">
                        <Image 
                            src="/images/banner/gobi.jpg" 
                            alt="nike-banner" 
                            width={632} 
                            height={210} 
                            layout="responsive" 
                            />
                    </Link>
                </div>
            </div>
        </Container>
    );
}

export default TwoBanner;
