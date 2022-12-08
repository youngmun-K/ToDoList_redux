// import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
// import { getToDoById } from "../redux/modules/toDoList";
import styled from "styled-components";
// import todolist from "../redux/modules/toDoList";

const Details = () => {
  //  const dispatch = useDispatch();
  const navigate = useNavigate();
  const param = useParams();
  // const todo = state.find((todo) => todo.id === parseInt(param.id));
  const state = useSelector((state) => state.toDoList);

  //  useEffect(() => {
  //    dispatch(getToDoById(id));
  //  }, [dispatch, id]);

  return (
    <div>
      {state.map((data) => {
        if (data.id === param.id) {
          return (
            <div>
              <p>ID:{data.id}</p>
              <button onClick={() => navigate(-1)}>이전으로</button>
              <h2>{data.title}</h2>
              <p>{data.content}</p>
            </div>
          );
        }
      })}
    </div>
  );
};
export default Details;
