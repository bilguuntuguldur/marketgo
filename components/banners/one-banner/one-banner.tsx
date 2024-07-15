
import Image from "next/image";
import Link from "next/link";


const OneBanner = () => {

return (
        <div className="conten-box">
            <div className="stati3">
                <div className="banner-box">
                    <Link href="#"> 
                        <Image src="/images/banner/auto-banner.png" alt="" className="img-responsive" width={1920} height={200}/>
                    </Link>
                </div>
            </div>
        </div>
)

}

export default OneBanner;