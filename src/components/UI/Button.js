import styles from './Button.module.css'

function Button(props) {
  const { children, disabled = false } = props // Передаем текстовую запись кнопки через свойство children и устанавливаем disabled в false(кнопка активна)

  return (
    <button {...props} className={styles.button} disabled={disabled}>
      {' '}
      {/* кнопке передаем свойства */}
      {children} {/* текст из свойства */}
    </button>
  )
}

export default Button
