
import React, { PropsWithChildren } from 'react'
import styled from 'styled-components'

export default function PageLayout({children}:PropsWithChildren) {
    

    return (
        <Wrapper>
            <Content>
                {children}
            </Content>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    display: flex;
    justify-content: center;
`
const Content = styled.div`
    max-width: 1440px;
    width: 100%;
    position: relative;
`
