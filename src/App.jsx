import './App.css';
import Todo from './components/components/Todo.jsx';
import Title from './components/components/Title.jsx';
import Modal from './components/components/Modal.jsx';
function App() {
  return (
    <div>
      <Title />
      <div className='todo__wrapper'>
      <Todo />
      <Todo />
      <Todo />
      </div>
      <Modal />
    </div>
  );
}

export default App;
