import './Todo.css'

function Todo({ title, onTodoDelelte }) {
    

return (
    <div className='todo'>
         <p>{title}</p>
       <button onClick={onTodoDelelte}>Delete</button>
    </div>
)
}
export default Todo
