import { useContext } from 'react';
import { VscGithubInverted } from 'react-icons/vsc';
import { AuthContext } from '../../contexts/auth';
import styles from './styles.module.scss'


export function LoginBox() {
  const {signInUrl} = useContext(AuthContext)

  return (
    <div className={styles.loginBoxWrapper}>
       <strong>Entre e compartilhe sua mensagem</strong>
       <a href={signInUrl} className={styles.signInWithGithub}>
         <VscGithubInverted size="22"/>
         Entrar com Githubb
       </a>

       <span className={styles.developedBy}>Desenvolvido por <a href="https://github.com/murielpacheco">Muriel Pacheco</a> | NLW Heat</span>
    </div>
  )
}