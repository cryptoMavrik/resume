import React from 'react'
import { FlexColumn, FlexRow, Heading, Text } from '../../styles'
import { Container, Header, SkillBox, Wrapper } from './styles'
import Tilt from 'react-parallax-tilt';
import { skills1, skills2 } from './config';

const Profile = () => {
    return (
        <Container>
            <Wrapper>
                <Header
                    flexBasis={"60%"}
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    px="3rem"
                    initial={{
                        y: 300,
                        opacity: 0,
                        scale: .5
                    }}
                    animate={{
                        y: 0,
                        opacity: 1,
                        scale: 1
                    }}
                    transition={{
                        type: "tween",
                        duration: .5
                    }}>
                    <Heading scale='lg'>
                        Web3/React Developer
                    </Heading>
                    <Text
                        p="1rem 0rem"
                        scale='lg'
                        initial={{
                            opacity: 0
                        }}
                        animate={{
                            opacity: 1
                        }}
                        transition={{
                            delay: .25,
                            duration: .5
                        }}>
                        Passionate and performance-driven React developer with a strong emphasis on current and future blockchain technologies. Over 5 years of experience developing applications for EVM-like blockchains, and over 1 year exclusively developing Web3 React dapps.  Developer/Moderator for the Aquachain Foundation.
                    </Text>
                </Header>
                <Tilt tiltReverse scale={1.1} tiltMaxAngleX={10} tiltMaxAngleY={10}>
                    <SkillBox
                        initial={{
                            x: 200,
                            opacity: 0,
                            scale: .5
                        }}
                        animate={{
                            x: 0,
                            opacity: 1,
                            scale: 1
                        }}
                        transition={{
                            type: "spring",
                            duration: 1,
                            delay: .75
                        }}>
                        <Heading>
                            Skills
                        </Heading>
                        <FlexRow
                            alignItems={"flex-start"}
                            m="2rem"
                            px="1rem"
                            initial={{
                                opacity: 0
                            }}
                            animate={{
                                opacity: 1
                            }}
                            transition={{
                                delay: 1.25,
                                duration: .25
                            }}>
                            <FlexColumn alignItems={"flex-start"} justifyContent={"flex-start"}>
                                {skills1.map((el, index) => {
                                    return (
                                        <Text key={index}>
                                            {`• ${el}`}
                                        </Text>
                                    )
                                })}
                            </FlexColumn>
                            <FlexColumn alignItems={"flex-start"} justifyContent={"flex-start"}>
                                {skills2.map((el, index) => {
                                    return (
                                        <Text key={index}>
                                            {`• ${el}`}
                                        </Text>
                                    )
                                })}
                            </FlexColumn>
                        </FlexRow>
                    </SkillBox>
                </Tilt>
            </Wrapper>
        </Container >
    )
}

export default Profile