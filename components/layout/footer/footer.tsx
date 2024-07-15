import Link from "next/link";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import Container from "@/components/ui/container";
import Social from "@/components/ui/social-icons";

const Footer = () => {
    return (
        <div className="w-full">
            <div className="w-full bg-gray-100 p-4 my-16 md:h-32">
                <Container>
                    <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 items-center justify-between gap-4 p-4">
                        <div className="">
                            <h2 className="text-2xl font-bold">Хайсан бараагаа нэг дороос</h2>
                            <p className="text-sm main_gray">Зөвхөн өнөөдөр сонгогдсон бүх бараа 20% OFF </p>
                        </div>
                        <div className="">
                            <form action="" className="w-64 md:w-96 lg:w-96 relative">
                                <input placeholder="Та юу хайж байна вэ?" className="w-full h-12 text-sm main_gray px-4"/>
                                <button type="submit" className="absolute right-0 top-0 p-3 main_bg_orange w-24 h-12 rounded-md flex items-center justify-center">
                                    <Image src="/images/icons/search.png" alt="magnifyglass" width={25} height={25} />
                                </button>
                            </form>
                        </div>
                        <div className="text-center">
                            <Social />
                        </div>
                    </div>
                </Container>
            </div>
            <div className="conten-box" >
                <div className="w-full my-6 mx-6 grid grid-cols-1 sm:grid-cols-3 sm:mx-0 md:grid-cols-4 md:mx-0 lg:mx-0 lg:grid-cols-4 gap-6">
                    <div className="">
                        <Image 
                            src="/images/logo-main.png" alt="logo"
                            width={263}
                            height={93} />
                        <p className="text-sm mt-4 main_gray">
                            Онлайн худалдааны цогц үйлчилгээг бид санал болгоно.
                        </p>
                        <div className="">
                            <h4 className="my-4 uppercase text-black font-semibold text-sm">
                                Төлбөрийн шийдэл
                            </h4>
                            <ul className="flex gap-4">
                                <li>
                                    <Image
                                        src="/images/icons/payments/visa.png"
                                        alt="Payment-method"
                                        width={55}
                                        height={55}
                                        className=""
                                    />
                                </li>
                                <li>
                                    <Image
                                        src="/images/icons/payments/card.png"
                                        alt="Payment-method"
                                        width={55}
                                        height={55}
                                        className=""
                                    />
                                </li>
                                <li>
                                    <Image
                                        src="/images/icons/payments/qpay.png"
                                        alt="Payment-method"
                                        width={50}
                                        height={35}
                                        className=""
                                    />
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="text-center">
                        <h4 className="my-6 uppercase text-black font-semibold text-sm">Онцлох ангилал</h4>
                        <ul className="my-4 text-sm main_gray">
                            <li className="mb-2 transition hover:pl-2"><Link href="#" className="text-black">Linkable text here</Link></li>
                            <li className="mb-2 transition hover:pl-2"><Link href="#" className="text-black">Linkable text here</Link></li>
                            <li className="mb-2 transition hover:pl-2"><Link href="#" className="text-black">Linkable text here</Link></li>
                            <li className="mb-2 transition hover:pl-2"><Link href="#" className="text-black">Linkable text here</Link></li>
                            <li className="mb-2 transition hover:pl-2"><Link href="#" className="text-black">Linkable text here</Link></li>
                        </ul>
                    </div>
                    <div className="text-center md:text-left">
                        <h4 className="my-6 uppercase text-black font-semibold text-sm">Хэрэгтэй холбоос</h4>
                        <ul className="my-4 text-sm main_gray">
                            <li className="mb-2 transition hover:pl-2"><Link href="#" className="text-black">Түгээмэл асуулт & хариулт</Link></li>
                            <li className="mb-2 transition hover:pl-2"><Link href="#" className="text-black">Linkable text here</Link></li>
                            <li className="mb-2 transition hover:pl-2"><Link href="#" className="text-black">Linkable text here</Link></li>
                            <li className="mb-2 transition hover:pl-2"><Link href="#" className="text-black">Linkable text here</Link></li>
                            <li className="mb-2 transition hover:pl-2"><Link href="#" className="text-black">Linkable text here</Link></li>
                        </ul>
                    </div>
                    <div className="text-left">
                        <h4 className="my-6 uppercase text-black font-semibold text-sm">Холбоо барих</h4>
                        <ul className="my-4 text-sm main_gray">
                            <li className="mb-2 flex gap-4">
                                <span className="text-sm font-semibold">Хаяг:</span>
                                <span className="text-sm main_gray">Бага тойруу, 73-1 байр, 14182</span>
                            </li>
                            <li className="mb-2 flex gap-4">
                                <span className="text-sm font-semibold">И-мэйл:</span>
                                <span className="text-sm main_gray">contact@marketgo.mn</span>
                            </li>
                            <li className="mb-2 flex gap-4">
                                <span className="text-sm font-semibold">Утас:</span>
                                <span className="text-sm main_gray">+976 8911 5479</span>
                            </li>
                        </ul>
                        <h4 className="my-6 uppercase text-black font-semibold text-sm">Хамтран ажиллах</h4>
                        <ul className="my-4 text-sm main_gray">
                            <li>marketing@marketgo.mn</li>
                        </ul>
                    </div>
                </div>
                <div className="w-full flex justify-between py-4 border-t text-black text-sm">
                    <div className="">
                        <p>© 2024 <Link href="https://www.goysite.com" target="_blank" className="hover:text-underline">GoySite 🚀.</Link> Оюуны өмчийн хуулиар хамгаалагдсан.</p>
                    </div>
                    <div className="">
                        <ul className="flex gap-x-4 items-center">
                            <li><Link href="#">Үйлчилгээний нөхцөл</Link></li>
                            <span>|</span>
                            <li><Link href="#">Нууцлалын бодлого</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;