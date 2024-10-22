import "./Todo.css";
const Todo = ({ isDone, task }) => {
  let taskcontent = "Done";
  !isDone && (taskcontent = "Work On");
  return (
    <>
      {/* <li className="box">
        {isDone ? "Done" : "Work On"}: {task}
      </li> */}
      <li className="box">
        {taskcontent}: {task}
      </li>
    </>
  );
};

export default Todo;
