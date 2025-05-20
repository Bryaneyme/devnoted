import "./globals.css";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Image from "next/image";

export const metadata = {
  title: "Devnoted",
  description:
    "A Developer’s Blog with Live Previews. To test basic nextjs knowledge.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative flex flex-col space-between min-h-screen text-grey-950 bg-gray-50">
      <Image 
      src="https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?cs=srgb&dl=pexels-bri-schneiter-28802-346529.jpg&fm=jpg" 
      alt="Hero image"
      height={1920}
      width={1080}
      className="fixed top-0 left-0 h-screen w-full object-cover -z-10"
      priority={true}
      />
        <Navbar />
        <main className="flex flex-col grow justify-center">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
