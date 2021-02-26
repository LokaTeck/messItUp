import React, { useState, useEffect } from 'react';
import Modal from './Modal.jsx';
import NewComponent from './NewComponent.jsx';

function App(props) {
  const [ count, setCount ] = useState(0);
  const [ todos, setTodos ] = useState([{ text: 'Learn Hooks' }]);
  const [ name, setName ] = useState("");
  const [ showModal, setShowModal ] = useState(false);

  const clicks = `You clicked ${count} times.`;

  useEffect(() => {
    console.log('Mount and update.');

    return () => {
      console.log('Cleanup');
    };
  }, []);

  const handleClick = () => {
    setCount(count + 1);
    console.log("You clicked 'Click me'");
  }

  const handleChange = (event) => {
    console.log(`Name is: ${name}.`)
  }

  const toggleModal = () => setShowModal(!showModal);

  const handleKeyPress = (e) => {
    if(e.key === "Enter") {
      document.title = name;
      setName("");
    }
  }

  return (
    <div>
      <h1> {clicks} </h1>
      <button onClick={(e) => setCount(count + 1)} > Click me </button>
      <div>
        <label>
          What is your name?
          <input
            type="text"
            value={name}
            placeholder="Name..."
            onChange={e => setName(e.target.value)}
            onKeyPress={handleKeyPress}
          />
        </label>
        <button type="button" onClick={(e) => {
          document.title = name;
          setName("");
        }}>
          SUBMIT
        </button>
      </div>
      <button onClick={toggleModal}> Open Modal </button>
      {
        showModal ? (
          <Modal>
            <h1> This is the coolest Modal! </h1>
            <h1> Hi!! </h1>
            <h3> Do you think so too? </h3>
            <button onClick={toggleModal}> Close Modal </button>
          </Modal>
        ) : null}
        <h1> NEW STUFF </h1>
        <NewComponent />
    </div>
  )
}

export default App;
