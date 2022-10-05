import ListGroup from "react-bootstrap/ListGroup";

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
    <>
      <h1>Homepage</h1>
      <ListGroup>
        <ListGroup.Item>
          <AddChore addChore={addChore} />
        </ListGroup.Item>
        {choreShow}
      </ListGroup>
    </>
  );
}
