import React, {useState} from 'react';

const TodoForm: React.FC = () => {
  const [title, setTitle] = useState<string>(``);

  const changeHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(evt.target.value)
  }

  const keyPressHandler = (evt: React.KeyboardEvent) => {
    if (evt.key === `Enter`) {
      console.log(title);
      setTitle(``)
    }
  }

  return (
    <div className="input-field">
      <input value={title} type="text" id="title" placeholder="Введите название дела" onChange={changeHandler} onKeyPress={keyPressHandler}/>
      <label htmlFor="title" className="active">Введите название дела</label>
  </div>
)
}

export default TodoForm