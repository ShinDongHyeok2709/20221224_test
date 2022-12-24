import React from "react";
import useTodosContext from "./hooks/useTodosContext";

export default function TodoHeader() {
  const [todos] = useTodosContext();
  const todoCount = todos.filter((todo) => todo.done === false).length;

  return (
    <>
      <h1>나의 할일(Todo) 목록</h1>
      <p>
        <b>할일 : </b>
        <span style={{ color: "red" }}>{todoCount}</span>
        <span>/{todos.length}개</span>
        &nbsp;(
        {Math.round((todoCount / todos.length) * 100)}%)
      </p>
    </>
  );
}
