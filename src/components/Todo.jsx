import { useDispatch, useSelector } from "react-redux";
import { deleteToDo, toggleToDo } from "../redux/modules/toDoList";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

const Working = styled.div`
  border: 4px solid teal;
  border-radius: 12px;
  padding: 12px 24px 24px;
  width: 200px;
  margin: 0;
`;

function Todo() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.toDoList);
  //console.log(state);
  // const finished = state.filter((todo) => todo.isDone);
  // console.log(finished);

  return (
    <div>
      <div>
        <h2>Working.. 🔥</h2>
        <div>
          {state.map((data) => {
            if (data.isDone === false) {
              return (
                <div key={data.id}>
                  <Link to={`/details/${data.id}`}>자세히</Link>
                  <h2> {data.title}</h2>
                  <p>{data.content}</p>
                  <button
                    onClick={() => {
                      dispatch(deleteToDo(data.id)); //id값은 선택(클릭)된 아이디값인데...
                    }}
                  >
                    삭제하기
                  </button>

                  <button
                    onClick={() => {
                      dispatch(toggleToDo(data.id));
                    }}
                  >
                    완료
                  </button>
                </div>
              );
            }
          })}
        </div>

        <h2>Done..!😉</h2>
        <div>
          {state.map((data) => {
            if (data.isDone === true) {
              return (
                <div key={data.id}>
                  <Link to="/details">자세히</Link>
                  <h2> {data.title}</h2>
                  <p>{data.content}</p>
                  <button
                    onClick={() => {
                      dispatch(deleteToDo(data.id)); //id값은 선택(클릭)된 아이디값인데...
                    }}
                  >
                    삭제하기
                  </button>

                  <button
                    onClick={() => {
                      dispatch(toggleToDo(data.id));
                    }}
                  >
                    취소
                  </button>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default Todo;
