import styles from './Card.module.css'
import ButtonB from './ButtonB.js'

function Card({projectImg,title,techs,desc,repo,site}){
    return(
        <div className={styles.card}>
            <a href={site}>
                <img src={projectImg}/>
            </a>
            <section id="desc">
                <h3>{title}</h3>
                <p><strong>Tecnologias:</strong> {techs}</p>
                <p>{desc}</p>
                <ButtonB link={repo} text="Acesse o repositório"/>
            </section>
        </div>
    )
}

export default Card