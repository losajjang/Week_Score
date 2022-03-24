import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

function Days({ day }) {
  const toDetail = useHistory();
  const [n, sN] = useState(Math.floor(Math.random() * 5));
  console.log(n);

  return (
    <SortedRow>
      {day}
      {Array.from({ length: 5 }, (c, i) => {
        return (
          <div>
            <Circle style={{ backgroundColor: n <= i ? "#ddd" : "red" }} />
          </div>
        );
      })}
      <div>
        <Triangle
          onClick={() => {
            toDetail.push(`/detail/${day}`);
          }}
        />
      </div>
    </SortedRow>
  );
}

function Main() {
  const day = ["월", "화", "수", "목", "금", "토", "일"];

  return (
    <>
      <Wrap>
        <div>
          <h1>내 일주일은?</h1>
        </div>
        {day.map((day, i) => (
          <Days day={day} />
        ))}
      </Wrap>
    </>
  );
}

const Wrap = styled.div`
  background-color: #eee;
  width: 70vw;
  height: 70vh;
  margin: 30px auto;
  flex-direction: column;
  border: 1px solid #ddd;
  border-radius: 10px;
`;

const Circle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 30px;
  margin: 5px;
`;

const Triangle = styled.div`
  appearance: none;
  background-color: transparent;
  border-color: purple;
  width: 0;
  height: 0;
  border-top: 1rem solid transparent;
  border-bottom: 1rem solid transparent;
  border-left: 1.6rem solid purple;
  color: #fff;
  cursor: pointer;
`;

// const SortedColumn = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

const SortedRow = styled.div`
  display: flex;
  flex-direction: row;
`;

export default Main;
