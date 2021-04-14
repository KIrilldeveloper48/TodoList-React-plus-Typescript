import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid'

import TodoForm from '../../components/TodoForm/TodoFrom';
import TodoList from '../../components/TodoList/TodoList';

import { iTodo } from '../../intefaces';

declare var confirm: (question: string) => boolean

const TodosPage: React.FC = () => {

  const [todos, setTodos] = useState<iTodo[]>([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem(`todos`) || `[]`) as iTodo[]
    setTodos(saved)
  }, [])

  useEffect(() => {
    localStorage.setItem(`todos`, JSON.stringify(todos))
  }, [todos])


  const addHandler = (title: string) => {
    const newTodo: iTodo = {
      taskName: title,
      key: nanoid(),
      completed: false
    }
    setTodos(prev => [newTodo, ...prev])
  }

  const toggleHandler = (id: string) => {
    setTodos(prev => (
      prev.map(todo => {

        if (todo.key === id) {
          return Object.assign({}, { ...todo, completed: !todo.completed })
        }

        return todo
      })
    ))
  }

  const removeHandler = (id: string) => {
    const shouldRemove = confirm(`Вы уверены, что хотите удалить элемент?`)
    if (shouldRemove) {
      setTodos(prev => prev.filter(todo => todo.key !== id))
    }
  }

  return (
    <>
      <TodoForm onAdd={addHandler} />
      <TodoList todos={todos} onRemove={removeHandler} onToggle={toggleHandler} />
    </>

  )
}

export default TodosPage