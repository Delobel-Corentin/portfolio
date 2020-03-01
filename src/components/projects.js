import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories () {
        if(this.state.activeTab === 0){
            return (
                <div  className="projects-grid">


                    {/* Mon Portfolio */}
               <Card shadow={5} style={{minWidth: '450', margin: '10px', borderRadius: '5px'}}>
                   <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://corentind.alwaysdata.net/static/media/portfolio.jpg) center / cover'}}>Mon Portfolio</CardTitle>
                   <CardText>
                       Mon site avec tout mes projets réalisées dans mon portfolio.
                   </CardText>
                   <CardActions>
                       <Button href="https://corentind.alwaysdata.net" target="_blank" colored>Visualiser la Démo</Button>
                   </CardActions>
                   <CardMenu style={{color: '#fff'}}>
                       <IconButton name="share">

                       </IconButton>
                   </CardMenu>
               </Card>

               


                </div>
            )
        } else if (this.state.activeTab === 1){
            return (
                <div>
                    {/* Agence Voyage */}
               <Card shadow={5} style={{minWidth: '450', margin: '10px', borderRadius: '5px'}}>
                   <CardTitle style={{color: 'black', height: '176px', background: 'url(https://corentind.alwaysdata.net/static/media/agence-voyage.jpg) center / cover'}}></CardTitle>
                   <CardText>
                       Un site vitrine pour une agence de voyage (Fictif).
                   </CardText>
                   <CardActions>
                       <Button href="https://corentind.alwaysdata.net/static/projets/agence" target="_blank" colored>Visualiser la Démo</Button>
                   </CardActions>
                   <CardMenu style={{color: '#fff'}}>
                       <IconButton name="share">

                       </IconButton>
                   </CardMenu>
               </Card>               
                </div>
            )
        } else if (this.state.activeTab === 2){
            return (
                <div>
                    {/* Burger Code */}
               <Card shadow={5} style={{minWidth: '450', margin: '10px', borderRadius: '5px'}}>
                   <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://corentind.alwaysdata.net/static/media/burger-code.jpg) center / cover'}}></CardTitle>
                   <CardText>
                       Un site de burger avec la posibilité de modifier dans l'admin.
                   </CardText>
                   <CardActions>
                       <Button href="https://corentind.alwaysdata.net/static/projets/BurgersCode" target="_blank" colored>Visualiser la Démo</Button>
                   </CardActions>
                   <CardMenu style={{color: '#fff'}}>
                       <IconButton name="share">

                       </IconButton>
                   </CardMenu>
               </Card>
                </div>
            )
        } else if (this.state.activeTab === 3){
            return (
                <div>
                    {/* Snake */}
               <Card shadow={5} style={{minWidth: '450', margin: '10px', borderRadius: '5px'}}>
                   <CardTitle style={{color: 'black', height: '176px', background: 'url(https://corentind.alwaysdata.net/static/media/js-serpent.png) center / cover'}}>Jeu Snake</CardTitle>
                   <CardText>
                       Un jeu de snake réalisé avec la formation (Udémy).
                   </CardText>
                   <CardActions>
                       <Button href="https://corentind.alwaysdata.net/static/projets/serpent" target="_blank" colored>Visualiser la Démo</Button>
                   </CardActions>
                   <CardMenu style={{color: '#fff'}}>
                       <IconButton name="share">

                       </IconButton>
                   </CardMenu>
               </Card>


                {/* JQUERY Actrice */}
                <Card shadow={5} style={{minWidth: '450', margin: '10px', borderRadius: '5px'}}>
                   <CardTitle style={{color: 'black', height: '176px', background: 'url(https://corentind.alwaysdata.net/static/media/actrices.png) center / cover'}}></CardTitle>
                   <CardText>
                       Top 5 meilleur actrice en JQUERY.
                   </CardText>
                   <CardActions>
                       <Button href="https://corentind.alwaysdata.net/static/projets/actrices" target="_blank" colored>Visualiser la Démo</Button>
                   </CardActions>
                   <CardMenu style={{color: '#fff'}}>
                       <IconButton name="share">
                       </IconButton>
                   </CardMenu>
               </Card>
                </div>
            )
        }
    }

    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>React</Tab>
                    <Tab>HTML / CSS</Tab>  
                    <Tab>PHP / MySQL</Tab>  
                    <Tab>JS</Tab>  
                </Tabs>

                <section className="projects-grid">
                    <Grid>
                        <Cell col={12}>
                            <div className="content">
                                {this.toggleCategories()}
                            </div>

                        </Cell>
                    </Grid>                    
                </section>
            </div>
        )
    }
}
 
export default Projects;