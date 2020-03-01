import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Avatar from '../img/avatar.png';
import cvPdf from '../docs/cv.pdf';

class Landing extends Component {
    render() {
        return (
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img
                         src={Avatar}
                         alt="avatar"
                         className="avatar-img"                 
                        />

                        <div className="banner-text">
                            <h1>Développeur Web Full Stack</h1>

                            <hr/>

                            <p>React | HTML / CSS | Bootstrap | JavaScript | Jquery | Drupal | Wordpress</p>
                        

                            <div className="social-links">
                                {/* LinkedIn */}
                                <a href="https://www.linkedin.com/in/corentin-delobel-93148313b" target="_blank" rel="noopener noreferrer">
                                    <i class="fab fa-linkedin"></i>                                    
                                </a>

                                {/* CV PDF */}
                                <a href={cvPdf} target="_blank" rel="noopener noreferrer">
                                    <i class="far fa-file-alt"><span>cv</span></i>
                                </a>

                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
 
export default Landing;