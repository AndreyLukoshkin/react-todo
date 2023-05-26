import { useState } from 'react'
import styles from './TodoForm.module.css'
import Button from '../UI/Button'

function TodoForm({ addTodo }) {
  // Компонент TodoForm, заполнение input с задачей, передаем из родительского только свойство добавления задач
  const [text, setText] = useState([]) // создаем состояние Текста в input, контролируемый

  const onSubmitHandler = (event) => {
    // функция подтверждения отправки формы
    event.preventDefault() // отменяем обновление страницы (так как данные не сохранятся)
    addTodo(text) // используя функцию addTodoHandler из свойства передаем как аргумент text из состояние input
    setText('') // после выполнения функции, устанавливаем поле ввода в пустое
  }
  return (
    <div className={styles.todoFormContainer}>
      {' '}
      {/* применяем стиль из модульных стилей для компонента */}
      <form onSubmit={onSubmitHandler}>
        {' '}
        {/* отправка формы вызывает функцию onSubmitHandler */}
        <input
          placeholder="Enter new Todo"
          value={text} // в значение input записывается text который вводит пользователь
          onChange={(e) => setText(e.target.value)} // отслеживаем изменения input и записываем их в переменную состояния text
        />
        <Button type="submit" title="Submit">
          {' '}
          {/* Компонент только со стандартными свойствами */}
          Submit
        </Button>
      </form>
    </div>
  )
}

export default TodoForm
