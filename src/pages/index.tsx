
import { CalendarButton } from '@/components/CalendarButton'
import { Contact } from '@/components/Contact'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import HowItWorks from '@/components/HowItWorks'
import { MyModal } from '@/components/Modal'
import Layout from '@/styles/layout/PageLayout'
import React from 'react'
import styled from "styled-components"

export default function Index() {
    

    return (
        <Wrapper>
            <Header />
            <Layout>
            <Hero />
            <HowItWorks />
            <MyModal />
            <Contact />

            </Layout>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    height: 100%;
    width: 100%;
    margin: 0;
`

