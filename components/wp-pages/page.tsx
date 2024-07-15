"use client";

import "./wp-pages.style.css";
import NextBreadcrumb from "../breadcrumbs/page";
import Container from "@/components/ui/container";

interface PageProps {
    page: {
        title: { rendered: string };
        content: { rendered: string };
        slug: string;
    };
}

const WpPage = ({ page }: PageProps) => {
    return (
        <div>
            <div className="breadcrumb">
                <div className="conten-box">
                    <div className="breadcrumb_container">
                        <nav className="breadcrumb-inner">
                            <NextBreadcrumb
                                homeElement={'Home'}
                                separator={<span> / </span>}
                                activeClasses='main_color'
                                containerClasses='flex'
                                listClasses='hover:underline mx-2 font-bold'
                                capitalizeLinks
                            />
                        </nav>
                    </div>
                </div>
            </div>
            <Container>
                <div className="my-16 page_container">
                    <div className="text-2xl font-semibold mb-6 text-center">
                        <h1>{page.title.rendered}</h1>
                    </div>
                    <div dangerouslySetInnerHTML={{ __html: page.content.rendered }} className="main_gray text-sm" />
                </div>
            </Container>
        </div>
    );
};

export default WpPage;
