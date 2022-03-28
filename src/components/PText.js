import React from 'react'
import styled from 'styled-components'

const PText1 = styled.div`
  max-width: 500px;
  margin: 0 auto;
  font-size: 1.8rem;
  line-height: 1.3em;
  color : var(--gray-1);

  @media only screen and (max-width: 768px) {
    font-size: 1.4rem;
  }
`;
function PText({ children }) {
  return (
    <PText1 className="para">
      <p>{children}</p>
    </PText1>
  )
}

export default PText
