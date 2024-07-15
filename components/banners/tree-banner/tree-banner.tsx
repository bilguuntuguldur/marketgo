
import Image from "next/image";
import Link from "next/link";



const ThreeBanner = () => {
    return (
        <div className="conten-box my-10 grid gap-4 grid-cols-1 sm:grid-cols-3 lg:grid-cols-3">
            <div className="w-full">
                <Link href="#" className="w-full h-64 object-cover overflow-hidden">
                    <Image
                        src="/images/banner/img1_home1.jpg"
                        alt="gobi-banner"
                        width={380}
                        height={210}
                        layout="responsive fill"
                    />
                </Link>
            </div>         
            <div className="w-full">
                <Link href="#" className="w-full h-64 object-cover overflow-hidden">
                    <Image
                        src="/images/banner/img2_home1.jpg"
                        alt="nike-banner"
                        width={380}
                        height={210}
                        layout="responsive fill"
                    />
                </Link>
            </div>
            <div className="w-full">
                <Link href="#" className="w-full h-64 object-cover overflow-hidden">
                    <Image
                        src="/images/banner/img3_home1.jpg"
                        alt="nike-banner"
                        width={380}
                        height={210}
                        layout="responsive fill"
                    />
                </Link>
            </div>
        </div>
    );
}

export default ThreeBanner;