import React from 'react'
import { FlexColumn, FlexRow, Heading, Text } from '../../styles'
import { Container, SkillBox } from './styles'
import Tilt from 'react-parallax-tilt';

const Profile = () => {
    return (
        <Container>
            <FlexRow>
                <FlexColumn flexBasis={"54%"} justifyContent="flex-start" alignItems="flex-start" px="3rem">
                    <Heading scale='lg'>
                        Web3/React Developer
                    </Heading>
                    <Text p="1rem 0rem">
                        Passionate and performance-driven React developer with a strong emphasis on current and future blockchain technologies. Over 5 years of experience developing applications for EVM-like blockchains and Developer/Moderator for the Aquachain Foundation.
                    </Text>
                </FlexColumn>
                <Tilt tiltReverse scale={1.1} tiltMaxAngleX={10} tiltMaxAngleY={10}>
                    <SkillBox px="2rem">
                        <Heading>
                            Skills
                        </Heading>
                        <FlexRow alignItems={"flex-start"} m="2rem">
                            <FlexColumn alignItems={"flex-start"} justifyContent={"flex-start"} pl="2rem">
                                <Text scale='sm'>
                                    • HTML
                                </Text>
                                <Text scale='sm'>
                                    • CSS/SCSS
                                </Text>
                                <Text scale='sm'>
                                    • Typescript
                                </Text>
                                <Text scale='sm'>
                                    • React
                                </Text>
                                <Text scale='sm'>
                                    • NextJS
                                </Text>
                                <Text scale='sm'>
                                    • Solidity
                                </Text>
                                <Text scale='sm'>
                                    • Python
                                </Text>
                                <Text scale='sm'>
                                    • GraphQL
                                </Text>
                                <Text scale='sm'>
                                    • ERC20 Swap interface
                                </Text>
                                <Text scale='sm'>
                                    • ERC721 Collections
                                </Text>
                                <Text scale='sm'>
                                    • ERC721 Marketplace
                                </Text>
                            </FlexColumn>
                            <FlexColumn alignItems={"flex-start"} justifyContent={"flex-start"}>
                                <Text scale='sm'>
                                    • Trading View Integration
                                </Text>
                                <Text scale='sm'>
                                    • ERC1155 Staking
                                </Text>
                                <Text scale='sm'>
                                    • ERC20 Launchpad
                                </Text>
                                <Text scale='sm'>
                                    • Token stream interface
                                </Text>
                                <Text scale='sm'>
                                    • Token Pre-sale interface
                                </Text>
                                <Text scale='sm'>
                                    • Arbitrage Bots
                                </Text>
                                <Text scale='sm'>
                                    • Chain-agnostic Protocols
                                </Text>
                                <Text scale='sm'>
                                    • Swap Aggregation
                                </Text>
                                <Text scale='sm'>
                                    • Wallet integration
                                </Text>
                                <Text scale='sm'>
                                    • EVM HD Wallets
                                </Text>
                            </FlexColumn>
                        </FlexRow>
                    </SkillBox>
                </Tilt>
            </FlexRow>
        </Container >
    )
}

export default Profile