import React from "react";

import styled from "styled-components";

const SectionWrapper = styled.section`
  display:flex;
  width: 100%;
  padding-top: 53%;
  z-index: 10;
  p {
    font-family: sans-serif;
  }
`;

const LeftDescText = styled.p`
 
`;

const RightDescText = styled.p`
 
`;
const LeftDesc = styled.div`
 
  background-color: #e6399b;
  padding: 0.4em;
  
  color: #b9f73e;
  border: none;
  border-radius:10px;
  margin-left: 0.4em;
  width: 48%;
  
`;
const RightDesc=styled.div`
background-color: #FF9640;
padding: 0.4em;

color: #33CCCC;
border: none;
border-radius:10px;
margin-left: 0.4em;
width: 48%;`;
export const Section = () => {
  return (
    <SectionWrapper>
      <LeftDesc>
        <LeftDescText>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
          Evil) by Cicero, written in 45 BC. This book is a treatise on the
          theory of ethics, very popular during the Renaissance. The first line
          of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
          section 1.10.32.
        </LeftDescText>
        
      </LeftDesc>

      <RightDesc>
        <RightDescText>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
          Evil) by Cicero, written in 45 BC. This book is a treatise on the
          theory of ethics, very popular during the Renaissance. The first line
          of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
          section 1.10.32.
        </RightDescText>
        
      </RightDesc>

    </SectionWrapper>
  );
};
