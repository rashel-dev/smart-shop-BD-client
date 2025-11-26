import Banner from "@/Components/Home/Banner";
import PopularProducts from "@/Components/Home/PopularProducts";

export default function Home() {
    return (
        <div className="min-h-screen bg-base-100">
            <Banner />
            <PopularProducts />
        </div>
    );
}
