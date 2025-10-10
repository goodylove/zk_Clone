import HeroSection from "@/components/HeroSection";
import ChartContainer from "@/components/ChartContainer";
import RoadMap from "@/components/RoadMap";
import { Divider } from "@/constants/Icons/svg";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ChartContainer />
      <RoadMap />
      <div className="hidden lg:block -mb-[0.5px] xl:-mb-[1.2px]">
        <Divider />
      </div>
      <RoadMap />
    </>
  );
}
