import React from 'react'
import { FlexColumn, FlexRow, Heading, Text } from '../../styles'
import { sites } from './config'
import { CardBody, CardGrid, CardHeader, CardImage, Container, ImageWrapper, PortfolioCard } from './styles'

const Portfolio = () => {
    return (
        <Container>
            <FlexRow pb={"4rem"}>
                <Heading>
                    Recent Projects
                </Heading>
            </FlexRow>
            <CardGrid>
                {sites.map(({ href, title, image, description }, index) => {
                    return (
                        <a href={href} target={"_blank"} rel="noreferrer" >
                            <PortfolioCard justifyContent={"flex-start"}>
                                <ImageWrapper>
                                    <CardImage
                                        src={image}
                                        width={
                                            title === "NFTY Labs"
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
        </Container>
    )
}

export default Portfolio