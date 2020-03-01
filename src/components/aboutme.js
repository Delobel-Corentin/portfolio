import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Avatar from '../img/avatar.png';
import Education from './education';
import Experiences from './experience';
import Competences from './competences';

class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img
                            src={Avatar}
                            alt="avatar"
                            style={{height: '200px'}}
                            />
                        </div>

                        <h2 style={{paddingTop: '2em'}}>Delobel Corentin</h2>
                        <h4 style={{color: 'grey'}}>Développeur Web Full Stack</h4>

                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}} />

                        <p style={{ width: '100%', margin: 'auto', paddingTop: '1em'}}>« Hey ! Salut, moi c'est Corentin.
                        <br />Je suis Développeur Web Full Stack avec une appétence particulière pour le développement <i style={{color: 'blue'}}>Front-end</i>, 
                        actuellement j'apprend <i style={{color: 'blue'}}>React JS </i>et j'aimerais aussi apprendre <i style={{color: 'blue'}}>React Native</i>.
                        <br />Passionné par les dernières technologies, les objets connectées. »</p>

                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}} />
                        <h5 >Email</h5>
                        <p>delobel.corentin59@gmail.com</p>
                        <h5 >Téléphone</h5>
                        <p>06 95 70 13 28</p>
                        <h5 >Web</h5>
                        <a href="https://corentind.alwaysdata.net" target="_blank" rel="noopener noreferrer"><p>https://corentind.alwaysdata.net</p></a>

                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}} />
                    </Cell>
                    <Cell className="about-right-col" col={8}>
                        <h2>Éducation</h2>

                        <Education 
                            startYear={2019}
                            endYear={2019}
                            schoolName="Formation Développeur Full-Stack (Dawan)"
                            schoolDescription="J'ai éffectué une formation de Développeur Full-Stack (HTML5, CSS3, JS, Angular, Symfony, Drupal, TypeScript, Twig, MYSQL, PHP) obtenu en 2019"
                        />

                        <Education 
                            startYear={2018}
                            endYear={2018}
                            schoolName="Certification Udémy"
                            schoolDescription="J'ai éffectué une certification des langages (HTML5, CSS3, JS, JQUERY, BOOTSTRAP, MYSQL, PHP) obtenu en 2018"
                        />

                        <Education 
                            startYear={2017}
                            endYear={2017}
                            schoolName="Certification OpenClassRooms"
                            schoolDescription="J'ai éffectué une certification des langages (HTML5 et CSS3) obtenu en 2017"
                        />


                        <Education 
                            startYear={2013}
                            endYear={2015}
                            schoolName="Lycée Vertes Feuilles"
                            schoolDescription="J'ai éffectué un CAP Agent de sécurité, obtenu en 2015"
                        />

                        <hr style={{borderTop: '3px solid #e22947'}} />

                        <h2>Expèriences</h2>

                        <Experiences 
                            startYear={2019}
                            endYear={2019}
                            jobName="Technicien assistance informatique & réseaux (Septech)"
                            jobDescription="Chez Septech j'ai appris plusieurs choses: Contact client ( Téléphonique & direct), Gestion des tickets (Odoo), Prise de contrôle à distance (TeamViewer), Gestion des lignes OVH et installation de poste."
                        />

                        <Experiences 
                            startYear={2018}
                            endYear={2018}
                            jobName="Réalisation avec formation en ligne (Udémy)"
                            jobDescription="Création d'un site de burger disponible dans mes projets.. Un snake en JS, Un site de top 5 meilleurs actrices, un site vitrine d'agence de voyage (fictif). Tout ces projets sont disponible dans mes projets."
                        />

                        <Experiences 
                            startYear={2018}
                            endYear={2018}
                            jobName="Stage Technicien assistance informatique (AFPA)"
                            jobDescription="Validation de mon projet professionnel: Installation de poste de travail, Installation VMware (Machine virtuel).
                            Serveur DHCP + DNS, Contrôleur de domaine, Création des stratégies de groupe, GPO..."
                        />

                        <Experiences 
                            startYear={2015}
                            endYear={2016}
                            jobName="Agent de sécurité (ATMG, GEST'N SPORT, COS OPALE SÉCURITÉ, SNS SÉCURITÉ.)"
                            jobDescription="Agent de sécurité, dans les stades (Lille, Stade de france) ainsi que de la surveillance de nuit et magasin"
                        />

                        <hr style={{borderTop: '3px solid #e22947'}} />
                        <h2>Compétences</h2>
                        <Competences 
                            Competences="HTML5 / CSS3"
                            progress={95}
                        />

                        <Competences 
                            Competences="PHP / MySQL"
                            progress={85}
                        />

                        <Competences 
                            Competences="JavaScript"
                            progress={75}
                        />

                        <Competences 
                            Competences="Angular"
                            progress={65}
                        />

                        <Competences 
                            Competences="Symfony"
                            progress={65}
                        />

                        <Competences 
                            Competences="React JS"
                            progress={30}
                        />
                    </Cell>
                </Grid>
            </div>
        )
    }
}
 
export default Resume;