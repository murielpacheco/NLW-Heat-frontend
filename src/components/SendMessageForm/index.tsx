import { useContext, useState, FormEvent } from 'react'
import { VscGithubInverted, VscSignOut } from 'react-icons/vsc'
import { AuthContext } from '../../contexts/auth'
import { api } from '../../services/api'
import styles from './styles.module.scss'

export function SendMessageForm() {
  const { user, signOut } = useContext(AuthContext)
  const [message, setMessage] = useState('')

  async function handleSendMessage (event: FormEvent) {
    event.preventDefault()
    
    if (!message.trim()) {
      return;
    }

    await api.post('messages', { message })

    setMessage('')
  }


  return (
    <div className={styles.sendMessageFormWrapper}>
      <button onClick={signOut} className={styles.signOutButton}>
        <VscSignOut size="32"/>
      </button>
      
      <header className={styles.userInfo}>
        <div className={styles.userImg}>
          <img src={user?.avatar_url} alt={user?.name} />
        </div>
        <strong className={styles.userName}>{user?.name}</strong>
        <span className={styles.userGithub}>
          <VscGithubInverted size="16" />
        </span>
      </header>

      <form className={styles.sendMessageForm} onSubmit={handleSendMessage}>
        <label htmlFor="message">Mensagem</label>
        <textarea 
        name="message" 
        id="message"
        placeholder="O que você espera do DoWhile 2021?"
        onChange={event => setMessage(event.target.value)}
        value={message}
        />
        <button type="submit">Enviar mensagem</button>
      </form>
    </div>
  )
}