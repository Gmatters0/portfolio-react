import styles from './Footer.module.css'
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
function Footer(){
    return(
        <div className={styles.footer}>
            <ul>
                <li><a href=''><FaInstagram size={30}/></a></li>
                <li><a href='https://www.linkedin.com/in/gabriel-maranhao-06636723a/'><FaLinkedin size={30}/></a></li>
                <li><a href='https://github.com/Gmatters0'><FaGithub size={30}/></a></li>
            </ul>
            <p>gabrielmaranhao.cpm@gmail.com</p>
            <p>Gabriel Maranhão © 2024</p>
        </div>
    )
}

export default Footer;