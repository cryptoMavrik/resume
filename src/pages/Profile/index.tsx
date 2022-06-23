import React from 'react'
import { FlexColumn, FlexRow, Heading, Text } from '../../styles'
import { Container, SkillBox } from './styles'

const Profile = () => {
    return (
        <Container>
            <FlexRow>
                <FlexColumn justifyContent="flex-start" alignItems="flex-start" px="3rem">
                    <Heading scale='lg'>
                        Web3/React Developer
                    </Heading>
                    <Text p="1rem .5rem">
                        Passionate and performance-driven React developer with a strong emphasis on current and future blockchain technologies. Over 5 years of experience developing applications for EVM-like blockchains and Developer/Moderator for the Aquachain Foundation.
                    </Text>
                </FlexColumn>
                <SkillBox px="3rem">
                    <Heading>
                        Skills
                    </Heading>
                    <FlexRow alignItems={"flex-start"} p="1rem">
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
                                • Chain-agnostic
                            </Text>
                            <Text scale='sm'>
                                • Swap Aggregation
                            </Text>
                            <Text scale='sm'>
                                • Multi-chain Defi Protocols
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
            </FlexRow>
        </Container>
    )
}

export default Profile