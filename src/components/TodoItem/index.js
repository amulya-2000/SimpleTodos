// Write your code here
import './index.css'

const TodoItem = props => {
  const {details, deleteItem} = props
  const {id, title} = details
  const onDelete = () => {
    deleteItem(id)
  }
  return (
    <li className="lItem">
      <div className="card">
        <p className="para">{title}</p>
        <button className="button" onClick={onDelete} type="button">
          Delete
        </button>
      </div>
    </li>
  )
}
export default TodoItem
