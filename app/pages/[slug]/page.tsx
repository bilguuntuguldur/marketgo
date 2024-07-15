import { fetchWordPressPage, fetchWordPressPages } from "@/utils/wpApi";
import WpPage from "@/components/wp-pages/page";
import Container from "@/components/ui/container";

export async function generateStaticParams() {
    const pages = await fetchWordPressPages();
    return pages.map((page: { slug: string }) => ({
        slug: page.slug,
    }));
}

export default async function Page({ params }: { params: { slug: string } }) {
    const page = await fetchWordPressPage(params.slug);

    if (!page || !page.title || !page.content) {
        return (
            <Container>
                <div className="my-16 page_container">
                    <div className="text-2xl font-semibold mb-6 text-center">
                        <h1>Хуудас олдсонгүй</h1>
                    </div>
                    <div className="main_gray text-sm">
                        <p>Уучлаарай хуудас олдсонгүй. Та дараа дахин оролдоно уу.</p>
                    </div>
                </div>
            </Container>
        );
    }

    return <WpPage page={page} />;
}