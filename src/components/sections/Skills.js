import styles from './Skills.module.css'
import javascript from '../../image/skills/javascript.svg'
import html from '../../image/skills/html.svg'
import css from '../../image/skills/css.svg'
import react from '../../image/skills/react.svg'
import c from '../../image/skills/c++.svg'

function Skills(){
    return(
        <div id='skills' className={styles.skills}>
            <h1>Habilidades</h1>
            <p>Conheça um pouco das minhas principais habilidades e conhecimentos</p>
            <div>
                <img alt='IMG_Not_Found' src={javascript}/>
                <img alt='IMG_Not_Found' src={html}/>
                <img alt='IMG_Not_Found' src={css}/>
                <img alt='IMG_Not_Found' src={react}/>
                <img alt='IMG_Not_Found' src={c}/>
            </div>
        </div>
    )
}

export default Skills;