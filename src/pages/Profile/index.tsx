import React from 'react'
import { FlexColumn, FlexRow, Heading, Text } from '../../styles'
import { Container, SkillBox, Wrapper } from './styles'
import Tilt from 'react-parallax-tilt';
import { skills1, skills2 } from './config';

const Profile = () => {
    return (
        <Container>
            <Wrapper>
                <FlexColumn
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
                            delay: .5,
                            duration: .5
                        }}>
                        Passionate and performance-driven React developer with a strong emphasis on current and future blockchain technologies. Over 5 years of experience developing applications for EVM-like blockchains and Developer/Moderator for the Aquachain Foundation.
                    </Text>
                </FlexColumn>
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
                            delay: .25
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
                                delay: 1,
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