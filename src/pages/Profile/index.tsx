import React from 'react'
import { FlexColumn, FlexRow, Heading, Text } from '../../styles'
import { Container, SkillBox, Wrapper } from './styles'
import Tilt from 'react-parallax-tilt';
import { skills1, skills2 } from './config';

const Profile = () => {
    return (
        <Container>
            <Wrapper>
                <FlexColumn flexBasis={"60%"} justifyContent="flex-start" alignItems="flex-start" px="3rem">
                    <Heading scale='lg'>
                        Web3/React Developer
                    </Heading>
                    <Text p="1rem 0rem">
                        Passionate and performance-driven React developer with a strong emphasis on current and future blockchain technologies. Over 5 years of experience developing applications for EVM-like blockchains and Developer/Moderator for the Aquachain Foundation.
                    </Text>
                </FlexColumn>
                <Tilt tiltReverse scale={1.1} tiltMaxAngleX={10} tiltMaxAngleY={10}>
                    <SkillBox px="5rem">
                        <Heading>
                            Skills
                        </Heading>
                        <FlexRow alignItems={"flex-start"} m="2rem">
                            <FlexColumn alignItems={"flex-start"} justifyContent={"flex-start"} pl="2rem">
                                {skills1.map((el, index) => {
                                    return (
                                        <Text key={index}>
                                            {`• ${el}`}
                                        </Text>
                                    )
                                })}
                            </FlexColumn>
                            <FlexColumn alignItems={"flex-start"} justifyContent={"flex-start"} pl="2rem">
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