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
                                <Text>
                                    • HTML
                                </Text>
                                <Text>
                                    • CSS/SCSS
                                </Text>
                                <Text>
                                    • Typescript
                                </Text>
                                <Text>
                                    • React
                                </Text>
                                <Text>
                                    • NextJS
                                </Text>
                                <Text>
                                    • Solidity
                                </Text>
                                <Text>
                                    • Python
                                </Text>
                                <Text>
                                    • GraphQL
                                </Text>
                                <Text>
                                    • ERC20 Swap interface
                                </Text>
                                <Text>
                                    • ERC721 Collections
                                </Text>
                                <Text>
                                    • ERC721 Marketplace
                                </Text>
                            </FlexColumn>
                            <FlexColumn alignItems={"flex-start"} justifyContent={"flex-start"}>
                                <Text>
                                    • Trading View Integration
                                </Text>
                                <Text>
                                    • ERC1155 Staking
                                </Text>
                                <Text>
                                    • ERC20 Launchpad
                                </Text>
                                <Text>
                                    • Token stream interface
                                </Text>
                                <Text>
                                    • Token Pre-sale interface
                                </Text>
                                <Text>
                                    • Arbitrage Bots
                                </Text>
                                <Text>
                                    • Chain-agnostic Protocols
                                </Text>
                                <Text>
                                    • Swap Aggregation
                                </Text>
                                <Text>
                                    • Wallet integration
                                </Text>
                                <Text>
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