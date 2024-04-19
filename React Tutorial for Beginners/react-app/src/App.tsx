import { useState } from "react";
import Alert from "./components/Alert";
import { Button } from "./components/Button";
import ListGroup from "./components/ListGroup";
function App() {
  // let items = ["New York", "San Fransisco", "Tokyo", "London", "Paris"];

  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };

  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <div>
      {/* <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      ></ListGroup> */}

      {/* <Alert>
        Hii <span>Salaha</span>
      </Alert> */}
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>
      )}
      <Button color="danger" onClick={() => setAlertVisibility(true)}>
        CLICK ME
      </Button>
    </div>
  );
}

export default App;
