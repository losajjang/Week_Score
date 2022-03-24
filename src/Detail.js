import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";

const Detail = (props) => {
  const history = useHistory();
  const params = useParams();
  const [n, sN] = useState(0);

  return (
    <Wrap>
      <h1>
        <Span>{params.day}요일</Span> 평점 남기기
      </h1>
      <SortedRow>
        {Array.from({ length: 5 }, (c, i) => {
          return (
            <Circle
              key={i}
              style={{ backgroundColor: n <= i ? "#ddd" : "palevioletred" }}
              onClick={() => {
                sN(i + 1);
              }}
            />
          );
        })}
      </SortedRow>
      <Back
        onClick={() => {
          history.goBack();
        }}
      >
        뒤로가기
      </Back>
    </Wrap>
  );
};

const Wrap = styled.div`
  background-color: #eee;
  min-width: 270px;
  width: 40vw;
  min-height: 400px;
  height: 70vh;
  margin: 30px auto;
  flex-direction: column;
  border: 1px solid #ddd;
  border-radius: 10px;
`;

const SortedRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Span = styled.span`
  color: #fff;
  font-weight: 900;
  background: orange;
  padding: 0.2rem;
  border-radius: 5px;
`;

const Circle = styled.div`
  :hover {
    
    cursor: pointer;
  }
  width: 30px;
  height: 30px;
  border-radius: 30px;
  margin: 5px;

`;

const Back = styled.button`
  :hover {
    background-color: violet;
    cursor: pointer;
  }
  width: 100%;
  background-color: purple;
  border: none;
  border-radius: 5px;
  padding: 1rem;
  color: #fff;
`;

export default Detail;
