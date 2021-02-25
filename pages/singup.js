import {render} from 'react-dom'
import styles from '../styles/Singup.module.css'
import Link from 'next/link'

export default function Singup() {
    function Submit(e) {
        e.preventDefault()
        const form = e.target
        if(form.password.value === form.confirmPassword.value){
            console.log('deu bom')
        } else {
            const erro = <p>Password fields must be equals</p>
            render(erro, document.getElementById('erro'))
        }

    }
    return(
        <div>
            <div className={styles.container}></div>
            <div className={styles.containerCentral}>
                <div className={styles.containerLeft}>
                    <h1 className={styles.h1}>the beginning of the journey</h1>
                    <h3 className={styles.h3}>Create an account to join the community</h3>
                </div>
                <div className={styles.containerRight}>
                    <div>
                        <form className={styles.form} onSubmit={Submit}>
                            <h2 className={styles.h2}>Create Account</h2>
                            <div className={styles.containerInput}>
                                <input className={styles.input} type='email' placeholder='Email' required />
                            </div>
                            <div className={styles.containerInput}>
                                <input className={styles.input} type='text' placeholder='Name' required />
                            </div>
                            <div className={styles.containerInput}>
                                <input className={styles.input} type='password' placeholder='Password' name='password' required />
                            </div>
                            <div className={styles.containerInput}>
                                <input className={styles.input} type='password' placeholder='Confirm password' name='confirmPassword' required />
                            </div>
                            <div className={styles.erro} id='erro'></div>
                            <div>
                                <button className={styles.btn} type='submit'>Sing up</button>
                            </div>
                            <div>
                                <Link href='/'>
                                    <a className={styles.a}>Back to login</a>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>    
    )
}