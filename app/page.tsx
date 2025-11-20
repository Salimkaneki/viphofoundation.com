import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import HeroSection from '../components/sections/HeroSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <Footer />
    </div>
  );
}
