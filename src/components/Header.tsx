import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

export default function Header() {
    

    return (
        <Wrapper>
            <Content>
            <Image src="/POS.png" alt='logo' width={200} height={200}/>
            </Content>
        </Wrapper>
    )
}
const Wrapper = styled.section`
    min-height: 150px;
    background-color: #8b52ff;
    display: flex;
    justify-content: center;
`
const Content = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    max-width: 1440px;
`