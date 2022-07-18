import React from 'react'
import { FlexColumn, FlexRow, Heading, Text } from '../../styles'
import { sites } from './config'
import { CardBody, CardGrid, CardHeader, CardImage, Container, ImageWrapper, PortfolioCard } from './styles'

const Portfolio = () => {
    return (
        <Container>
            <FlexRow
                pb={"4rem"}
                initial={{
                    y: 300,
                    opacity: 0,
                    scale: .5
                }}
                animate={{
                    y: 0,
                    opacity: 1,
                    scale: 1
                }}>
                <Heading>
                    Recent Projects
                </Heading>
            </FlexRow>
            <CardGrid>
                {sites.map(({ href, title, image, description }, index) => {
                    return (
                        <a href={href} target={"_blank"} rel="noreferrer" key={index}>
                            <PortfolioCard justifyContent={"flex-start"}
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
                                    delay: .1 + index * .150,
                                    type: "tween"
                                }}>
                                <ImageWrapper>
                                    <CardImage
                                        src={image}
                                        width={
                                            title === "NFTYLabs"
                                                || title === "Women of the West"
                                                || title === "Kingdoms Financial" ? "75%" : "60%"} />
                                </ImageWrapper>
                                <FlexColumn m={".5rem"}>
                                    <CardHeader>
                                        <Heading scale='sm'>
                                            {title}
                                        </Heading>
                                    </CardHeader>
                                    <Text scale='sm' p={"1rem"}>
                                        {description}
                                    </Text>
                                </FlexColumn>
                            </PortfolioCard>
                        </a>
                    )
                })}
            </CardGrid>
            <FlexRow pt={"3rem"}>
                <Text scale="sm" opacity={".9"}>
                    *All projects done with&nbsp;
                    <a href="https://github.com/tsunamisystems" style={{ color: "#90ddc9" }}>
                        Tsunami Systems
                    </a>
                </Text>
            </FlexRow>
        </Container>
    )
}

export default Portfolio