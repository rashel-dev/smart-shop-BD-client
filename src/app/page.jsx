import Banner from "@/Components/Home/Banner";
import PopularProducts from "@/Components/Home/PopularProducts";
import Features from "@/Components/Home/Features";
import TrendingCategories from "@/Components/Home/TrendingCategories";
import Testimonials from "@/Components/Home/Testimonials";

export default function Home() {
    return (
        <div className="min-h-screen bg-base-100">
            <Banner />
            <Features />
            <PopularProducts />
            <TrendingCategories />
            <Testimonials />
        </div>
    );
}
