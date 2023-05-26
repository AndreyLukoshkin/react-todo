import Button from '../UI/Button'
import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri'
import styles from './TodosActions.module.css'

function TodosActions({
  // функциональный Компонент, с 2мя кнопками, которые управляют задачами
  resetTodos,
  deleteCompletedTodos,
  completedTodosExist,
}) {
  // Передаем 3 функции через свойства
  return (
    <div className={styles.todosActionsContainer}>
      {/* применяем модульные стили */}
      <Button title="Reset Todos" onClick={resetTodos}>
        <RiRefreshLine /> {/* добавляем иконку */}
      </Button>
      {/* Переиспользуем компонент Button при клике вызовет функцию */}
      <Button
        title="Clear Completed Todos"
        onClick={deleteCompletedTodos}
        disabled={
          !completedTodosExist
        } /* Нет задач - кнопка не активна. Длинна выполненных задач */
      >
        <RiDeleteBin2Line /> {/* добавляем иконку */}
      </Button>
      {/* Переиспользуем компонент Button при клике вызовет функцию */}
    </div>
  )
}

export default TodosActions
