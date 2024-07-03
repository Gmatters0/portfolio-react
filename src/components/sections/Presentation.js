import styles from './Presentation.module.css'
import ButtonA from './elements/ButtonA';

function Presentation(){
    return(
        <div id='presentation' className={styles.presentation}>
            <h3>Bem-vindo ao meu Portfólio</h3>
            <h1>Olá, eu sou Gabriel Maranhão!</h1>
            <p> Um apaixonado por desafios e tecnologia, cresci
                ligado a computação. Estudante e profissional <br></br>
                de TI, estou sempre buscando evoluir e entregar trabalhos com muita qualidade, procurando <br></br> 
                sempre inovar e gerar resultados cada vez melhores. Atualemnte coordenador de desenvolvimento <br></br>
                de um site de eventos oficial da PUC Goiás, universidade onde sou aluno.
            </p>
            <ButtonA text="Conecte-se comigo!!"/>
        </div>
    )
}

export default Presentation;