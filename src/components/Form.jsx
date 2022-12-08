import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToDo } from "../redux/modules/toDoList";
import { nanoid } from "nanoid";
import styled from "styled-components";

const StInput = styled.div`
  background-color: rgb(20, 1, 1);
  border-radius: 15px;
  justify-content: space-between;
  padding: 13px;
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  color: white;
`;

function Form() {
  const toDoListStore = useSelector((state) => state);
  console.log(toDoListStore);
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  // const [lists, setLists] = useState([]);
  const saveToDo = {
    id: nanoid(),
    title: title,
    content: content,
    isDone: false,
  };

  return (
    <StInput>
      <label>제목</label>
      <input
        onChange={(event) => setTitle(event.target.value)}
        type="text"
        value={title}
      ></input>
      <label>내용</label>
      <input
        onChange={(event) => setContent(event.target.value)}
        type="text"
        value={content}
      ></input>

      <button
        onClick={() => {
          dispatch(addToDo(saveToDo));
        }}
      >
        추가하기
      </button>
    </StInput>
  );
}

export default Form;
