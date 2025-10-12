import HeroSection from "@/components/HeroSection";
import ChartContainer from "@/components/ChartContainer";
import RoadMap from "@/components/RoadMap";
import { Divider, Divider2 } from "@/constants/Icons/svg";
import UseCase from "@/components/UseCase";
import Empowering from "@/components/Empowering";
import Update from "@/components/Update";
import StayUpToDate from "@/components/StayUpToDate";
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <>
      <HeroSection />
      <ChartContainer />
      <RoadMap />
      <div className="hidden lg:block -mb-[0.5px] xl:-mb-[1.2px]">
        <Divider />
      </div>
      <UseCase />

      <Empowering />

      <Update />
      <StayUpToDate />
      <div className="hidden lg:block -mb-[0.5px] xl:-mb-[1.2px] bg-void">
        <Divider2 />
      </div>
      <Footer/>
    </>
  );
}
