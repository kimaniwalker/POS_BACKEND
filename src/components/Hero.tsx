import { breakpoints } from '@/utils/breakpoints'
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
width: 100%;
object-fit: cover;
object-position: center;
@media ${breakpoints.large} {
    height: 768px;
   
  }


`


