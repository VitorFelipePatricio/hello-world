import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
        <div className={styles.containerCentral}>      
            <div className={styles.containerLeft}>
                <div>
                    <h1 className={styles.h1}>Hello World.</h1>
                </div>
                <div>
                    <p className={styles.pLeft}>So never mind the darkness We still can find a way 'Cause nothin' lasts forever Even cold November rain.</p>
                </div>
                <div>
                    <h3 className={styles.h3}>Login with social media</h3>
                    <div>
                        <div className={styles.containerIcons}>
                            <div className={styles.iconFacebook}>
                                <i className={styles.face} className="fab fa-facebook-f"></i>
                            </div>
                            <div className={styles.iconTwitter}>
                                <p className={styles.p}><i className="fab fa-twitter"></i> Login with twitter</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.containerRight}>
                <form className={styles.form} action="">
                <h1>Login</h1>
                    <p className={styles.pRight}>Don't have an account? <Link href='/signup'><a className={styles.a}>Create your account</a></Link> it takes less then a minute.</p>
                    <div className={styles.containerInput}> 
                        <input className={styles.input} type="text" placeholder="Email" name="" id="" required />
                    </div>
                    <div className={styles.containerInput}>
                        <input className={styles.input} type="password" placeholder="Password" name="" id="" required />
                    </div>
                    <div className={styles.containerCheck}>
                        <div>
                            <input className={styles.inputCheck} type="checkbox" name="rememberMe" id="rememberMe" />
                            <label className={styles.labelRemember} htmlFor="rememberMe">Remember me</label>
                        </div>
                        <div className={styles.forgotPassword}>
                            <Link href='/'>
                                <a className={styles.a}>Forgot password?</a>
                            </Link>
                        </div>
                    </div>
                    <button className={styles.btn} type="submit">Login</button>
                </form>
            </div>
        </div>  
    </div>
  )
}
