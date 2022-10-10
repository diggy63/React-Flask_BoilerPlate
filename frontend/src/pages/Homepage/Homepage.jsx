import ListGroup from "react-bootstrap/ListGroup";

import "./Homepage.css"

import Chore from "../../Componenet/Chore/Chore";
import AddChore from "../../Componenet/AddChore/AddChore";

export default function Homepage({
  chores,
  handleChoreDelete,
  addChore,
  handleChoreUpdate,
  handleDone,
}) {
  const choreShow = chores.map((item, i) => {
    return (
      <ListGroup.Item key={i}>
        <Chore
          key={i}
          item={item}
          handleChoreDelete={handleChoreDelete}
          handleChoreUpdate={handleChoreUpdate}
          handleDone={handleDone}
        />
      </ListGroup.Item>
    );
  });
  return (
      <div className="todoList">
      <ListGroup>
        <div className="todo">
        <ListGroup.Item>
          <AddChore addChore={addChore} />
        </ListGroup.Item>
        {choreShow}
        </div>
      </ListGroup>
      </div>
  );
}
