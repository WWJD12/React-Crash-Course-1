import './App.css';
import Todo from './components/Todo';
import Title from './components/Title';
import Modal from './components/Modal';
import Counter from './components/Counter';
import React, { useState } from 'react';
 
function App() {
  const [showModal, setShowModal] = useState(false)

  function onTodoDelete() {
    setShowModal(true)
    console.log('onTodoDelete()')
  }

  function cancelModal() {
    setShowModal(false)
  }

  function confirmModal() {
    setShowModal(false)
  }

  
  return (
    <div>
      <Title />
      <div>
      <input type="text" onChange={(event) => {
            console.log(event.target.value)
      }}/>
      <button onClick={() => setShowModal(true)}>Add to do</button>
      </div>
      <div className='todo__wrapper'>
      <Todo onTodoDelete={onTodoDelete} title="Finish Frontend Simplified" />
      <Todo onTodoDelete={onTodoDelete} title="Finish Interview Section" />
      <Todo onTodoDelete={onTodoDelete} title="Land a 100k Job" />
      </div>
       {showModal && <Modal cancelModal={cancelModal} confirmModal={confirmModal} title="Confirm Delete" />} 
    </div>
  );
}

export default App;
