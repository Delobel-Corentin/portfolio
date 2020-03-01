import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import Avatar from '../img/avatar.png';

class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Delobel Corentin</h2>
                        <img 
                        src={Avatar}
                        alt="avatar"
                        style={{height: '250px'}}
                        />
                        <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>« Hey ! <br /> Bonjour, vous avez besoin d'en savoir plus ?<br />Contactez moi !</p>

                    </Cell>
                    <Cell col={6}>
                        <h2>Contact</h2>
                        <hr />

                        <div className="contact-list">
                            <List>
                                
                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                                        <i className="fa fa-phone-square" aria-hidden="true" />
                                         06 95 70 13 28
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                                        <i className="fa fa-envelope" aria-hidden="true" />
                                         delobel.corentin59@gmail.com
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                                        <i className="fab fa-linkedin-in" aria-hidden="true" />
                                        <a href="https://www.linkedin.com/in/corentin-delobel-93148313b" target="_blank" rel="noopener noreferrer" >Corentin Delobel</a>
                                    </ListItemContent>
                                </ListItem>

                            </List>
                        </div>

                        
                    </Cell>
                </Grid>                
            </div>
        )
    }
}
 
export default Contact;