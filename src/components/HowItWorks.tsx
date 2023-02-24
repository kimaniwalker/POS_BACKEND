import React from 'react'
import styled from 'styled-components'

export default function HowItWorks({}) {
    

    return (
        <Wrapper>
            <Title>How It Works</Title>
            <Content>
<Card>
    <CardTitle>Schedule a consultation</CardTitle>
    <Description>Schedule a free 30 minute call to discuss your businneses needs. This is the time to learn more about us and how we may serve you. </Description>
</Card>
<Card>
    <CardTitle>Build & test</CardTitle>
    <Description>Once we understand your projects requirements , we will get started on building. This time frame can range from 2 weeks up to a month depending on the complexity and features. After building the application , we will give you and your team ample time to test before deploying.</Description>
</Card>
<Card>
    <CardTitle>Release & deploy</CardTitle>
    <Description>We will submit your applicaton to both the Apple and Google play store. Once it is approved, share with your customers and start reaping the benefits of your new application.</Description>
</Card>
            </Content>
        </Wrapper>
    )
}
const Wrapper = styled.section`
    display: flex;
    justify-content: center;
    flex-direction: column;
    
`
const Title = styled.h1`
    font-size: 3rem;
    text-align: center;
`
const Content = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`
const Card = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 350px;
    width: 100%;
    background-color: #6fc6f1;
    margin: 2rem;
    border-radius: 16px;
    padding: .5rem;
    box-shadow: 2px 2px 2px lightgray;
`
const CardTitle = styled.h2`
    font-size: 2rem;
    text-align: center;
`
const Description = styled.h4`
    font-weight: 300;
    text-align: center;
`
