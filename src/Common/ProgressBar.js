import React from "react";
import styled from "styled-components";

const ProgressBarContainer = styled.section`
  width: 100%;
  height: 100%;
  background-color: #272A35;
  border-radius: 5px;
`;

const ProgressBlock = styled.div`
  width: 25%;
  height: 100%;
  border-radius: 5px;
  background: repeating-linear-gradient(
          45deg,
          #2CB6EC,
          #2CB6EC 10px,
          #CCD4F0 10px,
          #CCD4F0 20px
  );
  position: relative;
  top: 0;
  left: 0;
`;

export const ProgressBar = () => {
    return(
        <ProgressBarContainer>
            <ProgressBlock/>
        </ProgressBarContainer>
    )
}