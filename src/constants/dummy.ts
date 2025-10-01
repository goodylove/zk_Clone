import { BuildComponentSvg, CostComponentSvg, FastComponentSvg, IntegrateComponentSvg } from "./Icons/svg";


type Feature = {
    id: number;
    title: string;
    description: string;
    Icon: React.FC<React.SVGProps<SVGSVGElement>>;
};

export const features: Feature[] = [
    {
        id: 1,
        title: "Ultra-fast Verification",
        description: "Verify proofs in under a second. No latency, no bottlenecks.",
        Icon: FastComponentSvg,
    },
    {
        id: 2,
        title: "Streamlined and Easy Integration",
        description: "Works across any ecosystems and proving schemes, minimizing complexity and infrastructure changes.",
        Icon: IntegrateComponentSvg,
    },
    {
        id: 3,
        title: "Build to Evolve",
        description: "Scale with your use case. Grow with the market.No redesigns, no limits.",
        Icon: BuildComponentSvg,
    },
    {
        id: 4,
        title: "Cost-Efficient at Scale",
        description: "Drastically reduce verification costs, no matter the volume.",
        Icon: CostComponentSvg,
    },
];
