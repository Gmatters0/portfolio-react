import styles from './Projects.module.css'
import ButtonB from './elements/ButtonB'
import Card from './elements/Card'
import lpArquitetura from '../../image/projects/lp-arquitetura.svg'
import spPortfolio from '../../image/projects/sp-portfolio.svg'

function Projects(){
    return(
        <div id="projects" className={styles.projects}>
            <h1>Projetos</h1>
            <Card 
            projectImg={lpArquitetura} 
            title="Landing Page Arquitetura" 
            techs="HTML, CSS" 
            desc="Desafio feito no curso Front-End da Escola DNC" 
            repo="https://github.com/Gmatters0/Desafio-Landing-Page-Arquitetura" 
            site="https://lp-desafio-arquitetura.netlify.app/"
            />
            <Card 
            projectImg={spPortfolio} 
            title="Site Portfolio Modelo" 
            techs="HTML, CSS" 
            desc="Base de estudo do curso Desenvolvimento Front-End da Escola DNC" 
            repo="https://github.com/Gmatters0/Projeto-Portfolio" 
            site="https://portfolio-exemplo.netlify.app"
            />
            <ButtonB link="https://github.com/Gmatters0/portfolio-react" text="Ver repositório Completo"></ButtonB>
        </div>
    )
}

export default Projects;