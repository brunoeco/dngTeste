import React from 'react';
import { useHistory } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import logoutImage from '../../images/logout.png'
import perfilImage from '../../images/perfil.png'
import centralImage from '../../images/works_0.png'
import project0Image from '../../images/project-0.png'
import project1Image from '../../images/project-1.png'
import project2Image from '../../images/project-2.png'

import './styles.css'

function Login(props) {
    const history = useHistory();

    if(props.location.state === undefined || props.location.state === null){
        history.push('/dngTeste/');
    }

    function handleLogout() {
        history.push('/dngTeste/');
    }

    return (
        <>
            <Helmet>
                <title>Meu Perfil</title>
            </Helmet>
            
            <div className="profile-main main">
                <div className="profile-container">
                    <a className='logout-button' onClick={handleLogout}>
                        <img src={logoutImage} alt="LogoutImage"/>
                    </a>

                    
                    <div className="profile">
                        <img src={perfilImage} alt="profileImage" />

                        <h1><span>BRUNO</span> ELIAS</h1>
                        <h2>Desenvolvedor Web</h2>
                    </div>

                    <div className="presentation">
                        <h3>Resumo</h3>

                        <p>
                            Olá, meu nome é Bruno Elias, tenho 20 anos, e estou 
                            cursando Análise e desenvolvimento de sistemas no seu 
                            segundo ano, moro em Industrial, Contagem. Gosto de passar meu tempo livre estudando, 
                            escutando música, jogando ou pesquisando sobre astronomia 
                            ou tecnologia. <a target="_blank" rel="noreferrer" href="http://brunoeco.github.io/portfolio">Acessar site pessoal</a>.
                        </p>

                        

                    </div>

                    <div className="experiences">
                        <h3>Experiências</h3>

                        <div className="work-0">
                            <div className="work-text">
                                <h2>Central Usinagem</h2>
                                <p>
                                    Site desenvolvido como projeto freelancer para uma empresa de 
                                    usinagem e caldeiraria. Desenvolvido utilizando HTML, CSS, Javascrip e PHP.
                                </p>

                                <a target="_blank" rel="noreferrer" href="http://centralusinagem.com.br/" >Visitar site!</a>
                            </div>

                            <img src={centralImage} alt="centralImage" />
                        </div>
                    </div>

                    <div id="projects-container">
                        <h3>Projetos</h3>

                        <div className="projects">
                            <span className="project-box">
                                <a target="_blank" rel="noreferrer" href="https://github.com/brunoeco/ecoleta">
                                    <div className="project-0">
                                        <img src={project0Image} alt="projectImage" />
                                        <p>Ecoleta</p>
                                    </div>
                                </a>
                            </span>

                            <span className="project-box">
                                <a target="_blank" rel="noreferrer" href="https://github.com/brunoeco/be-the-hero">
                                    <div className="project-0">
                                        <img src={project1Image} alt="projectImage" />
                                        <p>BeTheHero</p>
                                    </div>
                                </a>
                            </span>

                            <span className="project-box">
                                <a target="_blank" rel="noreferrer" href="https://github.com/brunoeco/dev-radar">
                                    <div className="project-0">
                                        <img src={project2Image} alt="projectImage" />
                                        <p>DevRadar</p>
                                    </div>
                                </a>
                            </span>
                        </div>

                        <a className="github-link" target="_blank" rel="noreferrer" href="https://github.com/brunoeco">Acessar GitHub</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;