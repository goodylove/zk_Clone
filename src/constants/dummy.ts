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


interface RoadMapConfigType {
    tag: string
    title: string
    list: string[]
}

export const RoadMapConfig: RoadMapConfigType[] = [
    {
        tag: 'H1 2024',
        title: 'Public Testnet Beta',
        list: [
            'Bootstrap Chain',
            'Fflonk, Groth16, Risc0, zkSync Era Verifiers',
            'Block Explorer',
            'Consensus Mechanism'
        ]
    },
    {
        tag: 'H2 2024',
        title: 'Incentivized Testnet',
        list: [
            'In-person & Online Hackathons',
            'Incentivized Testnet',
            'Block Explorer',
            'Consensus Mechanism',
            'Ultraplonk, Space and Time Proof of SQL Verifiers',
            'Tools: Explorer, OpenGov, Test Token Faucet'
        ]
    },
    {
        tag: 'H1 2025',
        title: 'Permanent Testnet',
        list: [
            'Permanent Testnet Volta Regenesis',
            'Node Acceleration & Security Audit',
            'ETHDenver & Online Hackathons',
            'Plonky2, SP1 Verifiers',
            'Incentivized Testnet Dashboard'
        ]
    },
    {
        tag: 'Q3 2025',
        title: 'Mainnet Launch',
        list: [
            'VFY Token Generation Event (TGE) ',
            'EVM Parachain VFlow',
            'Token Bridging to EVMs',
            'UltraHonk, EZKL, Halo2 Verifier',
            'Initial Validator Set',
            'Expanded Community Quests'
        ]
    }
]