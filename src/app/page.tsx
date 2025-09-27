import HeroSection from "@/components/HeroSection";
import NotificationBanner from "@/components/NotificationBanner";

export default function Home() {
  return (
    <main className="min-h-screen">
      <NotificationBanner />
      <HeroSection />
    </main>
  );
}
