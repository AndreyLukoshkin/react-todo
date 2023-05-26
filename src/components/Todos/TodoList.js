import Todo from './Todo'
import styles from './TodoList.module.css'

function TodoList({ todos, deleteTodo, toggleTodo }) {
  // в компонент передаем 3 свойства, массив задач и 2 функции
  return (
    <div className={styles.todoListContainer}>
      {' '}
      {/* применяем модульные стили */}
      {!todos.length && <h2>Todo list is empty</h2>}{' '}
      {/* Если массив задач пустой показать 0-false !false = true && ... */}
      {todos.map(
        (
          todo // мапаем массив задач
        ) => (
          <Todo // Создаем компонент Todo - отдельная задача
            key={todo.id} // уникальный идентификатор
            todo={todo} // объект нашей задачи
            deleteTodo={deleteTodo}
            toggleTodo={toggleTodo}
          />
        )
      )}
    </div>
  )
}

export default TodoList
