import { RiDeleteBin2Line, RiTodoFill } from 'react-icons/ri'
import { FaCheck } from 'react-icons/fa'
import styles from './Todo.module.css'

function Todo({ todo, deleteTodo, toggleTodo }) {
  // Компонент с нашей задачей который передасться в TodoList список задач
  // принимаем 3 свойства от TodoList
  return (
    <div
      className={`${styles.todo} ${
        todo.isCompleted ? styles.completedTodo : ''
      }`}
    >
      {' '}
      {/* Применяем модульные стили, и также с учетом isCompleted*/}
      <RiTodoFill className={styles.todoIcon} />{' '}
      {/* Добавляем иконку и применяем стили */}
      <div className={styles.todoText}>{todo.text}</div>{' '}
      {/* Здесь записываем текст задачи в блок div */}
      <RiDeleteBin2Line
        className={styles.deleteIcon}
        onClick={() => deleteTodo(todo.id)}
      />{' '}
      {/* Добавляем иконку и применяем стили */}
      <FaCheck
        className={styles.checkIcon}
        onClick={() => toggleTodo(todo.id)}
      />{' '}
      {/* Добавляем иконку и применяем стили */}
    </div>
  )
}

export default Todo
