// Write your code here
import './index.css'

const TodoItem = props => {
  const {Todo, deleteTodo} = props
  const {title, id} = Todo
  const onDelete = () => {
    deleteTodo(id)
  }
  return (
    <li className="todo-container">
      <p className="todoItem">{title}</p>
      <button onClick={onDelete} className="button" type="button">
        Delete
      </button>
    </li>
  )
}
export default TodoItem
