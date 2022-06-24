import { PortfolioCardType } from "./types";
import pawn from "../../assets/pawn.png"
import kingdoms from "../../assets/kingdoms.png"
import kindred from "../../assets/kh_heart_logo.png"
import nftylabs from "../../assets/nftylabs.png"
import nftynetwork from "../../assets/nftynetwork.svg"
import overwatch from "../../assets/overwatch.png"
import women from "../../assets/WotW.png"

export const sites: PortfolioCardType[] = [
    {
        href: "https://kindredhearts.io",
        image: kindred,
        title: "Kindred Hearts",
        description: "React Front-end/Minting interface for a NFT collection"
    },
    {
        href: "https://app.kingdoms.financial",
        image: kingdoms,
        title: "Kingdoms Financial",
        description: "ERC1155 staking platform"
    },
    {
        href: "https://upgrade.kingdoms.financial",
        image: pawn,
        title: "Kingdoms Pawn",
        description: "ERC20 token staking/migrator"
    },
    {
        href: "https://nftylabs.org",
        image: nftylabs,
        title: "NFTY Labs",
        description: "React Front-end"
    },
    {
        href: "https://staking.nftynetwork.io",
        image: nftynetwork,
        title: "NFTY Staking",
        description: "Multi-chain ERC20 staking platform"
    },
    {
        href: "https://stream.nftynetwork.io",
        image: nftynetwork,
        title: "NFTY Stream",
        description: "Token streaming platform"
    },
    {
        href: "https://cryptomavrik.github.io/dapp-overwatch",
        image: overwatch,
        title: "Overwatch",
        description: "Token sniping/Liquidity monitoring"
    },
    {
        href: "https://cryptomavrik.github.io/dapp-wild/",
        image: women,
        title: "Women of the West",
        description: "NFT minting interface demo"
    },
]