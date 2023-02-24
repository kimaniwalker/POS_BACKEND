import React from "react";
import styled from "styled-components";
export const CalendarButton = () => {
  
  const [isVisible, setIsVisible] = React.useState(false)
  if (!isVisible) return <Button onClick={() => setIsVisible(true)}>Schedule a consultation</Button>
  return (
    <>
    <iframe src="https://calendly.com/key2designio" width={500} height={500}/>
    </>
  )
};

const Button = styled.button`
  text-align: center;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  height: 50px;
  width: 250px;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 48px;
  display: block;

  :hover {
    cursor: pointer;
  }
`;

