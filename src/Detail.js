import React from "react";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";

const Detail = (props) => {
  const history = useHistory();
  const params = useParams();


  return (
    <Wrap>
      <h1>
        <Span>{params.day}요일</Span> 평점 남기기
      </h1>
      <div>
        {Array.from({ length: 5 }, (c, i) => {
          return (
            <SortedRow>
              <Circle key={i}/>
              shit
            </SortedRow>
          );
        })}
      </div>
      <Back>뒤로가기</Back>
    </Wrap>
  );
};

const Wrap = styled.div`
  background-color: #eee;
  width: 70vw;
  height: 70vh;
  margin: 30px auto;
  flex-direction: column;
  border: 1px solid #ddd;
  border-radius: 10px;
`;

const SortedRow = styled.div`
  display: flex;
  flex-direction: row;
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
    background-color: gray;
    cursor: pointer;
  }
  width: 30px;
  height: 30px;
  border-radius: 30px;
  margin: 5px;
  background-color: #ddd;
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
