import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import TodoForm from './components/Todos/TodoForm'
import TodoList from './components/Todos/TodoList'
import TodosActions from './components/Todos/TodosActions'
import './App.css'

function App() {
  // родительский корневой Компонент
  const [todos, setTodos] = useState([]) // массив наших todos задач
  console.log(todos)
  const addTodoHandler = (text) => {
    const newTodo = {
      // объект новой задачи
      text: text,
      isCompleted: false,
      id: uuidv4(), // уникальный id из import { v4 as uuidv4 } from 'uuid'
    }
    setTodos([...todos, newTodo]) // записываем все todos через ... и также новую задачу
  }

  const deleteTodoHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id)) // фильтруем массив todos, если элемент массива todo и его id !== id из аргумента функции, он НЕ проходит, остальные проходят
  }

  const toggleTodoHandler = (id) => {
    // Выполнена ли задача? Изменяет свойство isCompleted
    setTodos(
      todos.map((todo) => {
        // мапаем массив todos
        return todo.id === id // если свойство id элемента массива todo === id из аргумента функции
          ? { ...todo, isCompleted: !todo.isCompleted } // то записываем все ...todo и МЕНЯЕМ isCompleted
          : { ...todo } // в противном случае просто записываем все ...todo
      })
    )
  }

  const resetTodosHandler = () => {
    // функция изменяет todos в пустой массив
    setTodos([])
  }

  const deleteCompletedTodosHandler = () => {
    // фильтруем массив todos
    setTodos(todos.filter((todo) => !todo.isCompleted)) // остаются только НЕ завершенные задачи
  }

  const completedTodosCount = todos.filter((todo) => todo.isCompleted).length // длинна завершенных задач

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodoHandler} />
      {/* Передаем в компонент TodoForm функцию addTodoHandler через свойство addTodo */}
      {!!todos.length /* двойное НЕ !! Если есть что то в массиве todos */ && (
        <TodosActions // ТО добавим компонент TodosActions со свойствами в которых переменная и 2 функции
          completedTodosExist={
            !!completedTodosCount
          } /* переменная в свойстве */
          resetTodos={resetTodosHandler} /* функция в свойстве */
          deleteCompletedTodos={
            deleteCompletedTodosHandler
          } /* функция в свойстве */
        />
      )}
      <TodoList // Добавим компонент
        todos={todos} /* Массив задач в свойстве */
        deleteTodo={deleteTodoHandler} /* функция в свойстве */
        toggleTodo={toggleTodoHandler} /* функция в свойстве */
      />
      {!!completedTodosCount && ( // двойное НЕ - Если есть завершенные задачи
        <h2>{`You have completed ${completedTodosCount} ${
          completedTodosCount > 1 ? 'todos' : 'todo'
        }`}</h2>
      )}
    </div>
  )
}

export default App
