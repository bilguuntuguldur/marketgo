import Link from "next/link";
import Image from "next/image";

const Social = () => {
    return (
        <div className="flex gap-4 justify-center">
            <Link href="https://www.facebook.com/">
                <Image
                    src="/images/icons/facebook.png"
                    alt="Facebook"
                    width={35}
                    height={35}
                    className="cursor-pointer"
                />
            </Link>
            <Link href="https://www.instagram.com/">
                <Image
                    src="/images/icons/instagram.png"
                    alt="Instagram"
                    width={35}
                    height={35}
                    className="cursor-pointer"
                />
            </Link>
            <Link href="https://www.twitter.com/">
                <Image
                    src="/images/icons/twitter.png"
                    alt="Instagram"
                    width={35}
                    height={35}
                    className="cursor-pointer"
                />
            </Link>
        </div>
    )
}   


export default Social;