import React from 'react';
import { iTodo } from '../../intefaces';

interface TodoListProps {
  todos: iTodo[]
  onToggle(id: string): void
  onRemove(id: string): void
}

const TodoList: React.FC<TodoListProps> = ({ todos, onRemove, onToggle }) => {

  const removeHandler = (evt: React.MouseEvent, id: string): void => {
    evt.preventDefault()
    onRemove(id)
  }

  if (!todos.length) {
    return (
      <p className="center">Пока дел нет!</p>
    )
  }
  return (
    <ul data-testid="todo-list">

      {
        todos.map(todo => {
          const classes = [`todo`]

          if (todo.completed) {
            classes.push(`completed`)
          }

          return (
            <li className={classes.join(` `)} key={todo.key}>
              <label>
                <input type="checkbox" checked={todo.completed} onChange={() => onToggle(todo.key)} data-testid={`todo-list-checkbox-${todo.key}`} />
                <span>{todo.taskName}</span>
                <i className="material-icons red-text" onClick={(evt) => removeHandler(evt, todo.key)} data-testid={`todo-list-delete-${todo.key}`}>delete</i>
              </label>
            </li>
          )

        })
      }

    </ul>
  )
}
export default TodoList