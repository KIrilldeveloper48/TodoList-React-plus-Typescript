import React, { useState } from 'react';

interface TodoFormProps {
  onAdd(title: string): void
}

const TodoForm: React.FC<TodoFormProps> = ({ onAdd }) => {
  const [title, setTitle] = useState<string>(``);

  const changeHandler = (evt: React.ChangeEvent<HTMLInputElement>): void => {
    setTitle(evt.target.value)
  }

  const keyPressHandler = (evt: React.KeyboardEvent): void => {
    if (evt.key === `Enter`) {
      onAdd(title);
      setTitle(``)
    }
  }

  return (
    <div className="input-field" data-testid="todo-form">
      <input value={title} type="text" id="title" placeholder="Введите название дела" onChange={changeHandler} onKeyPress={keyPressHandler} data-testid="todo-form-input" />
      <label htmlFor="title" className="active">Введите название дела</label>
    </div>
  )
}

export default TodoForm