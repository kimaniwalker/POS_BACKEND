import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

export default function Hero() {
    

    return (
<ImageWrapper>

    <Wrapper fill src="/POSBANNER.png" alt="hero"
              />
</ImageWrapper>
    )
}
const Wrapper = styled(Image)`
    border-radius: 16px;
    margin: 32px 0;
    
    `
const ImageWrapper = styled.div`
position: relative;
min-height: 720px;
width: 100%;
object-fit: cover;
object-position: center;
`


