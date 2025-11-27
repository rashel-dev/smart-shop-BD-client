import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/shared/Navbar";
import Footer from "@/Components/shared/Footer";
import { AuthProvider } from "@/providers/AuthProvider";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "Smart Shop - Your Premium Shopping Destination",
    description: "Discover the best products for your lifestyle at Smart Shop",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased max-w-7xl mx-auto`}>
                <AuthProvider>
                    <Navbar />
                    {children}
                    <Footer></Footer>
                </AuthProvider>
            </body>
        </html>
    );
}
