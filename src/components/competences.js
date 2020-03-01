import React, { Component } from 'react';
import { Grid, Cell, ProgressBar } from 'react-mdl';

class Competences extends Component {
    render() {
        return (
            <Grid>
                <Cell col={12}>
                    <div style={{display: 'flex'}}>{this.props.Competences} <ProgressBar style={{margin: 'auto', width: '75%'}}
                    progress={this.props.progress}/></div>
                </Cell>
            </Grid>
        )
    }
}

export default Competences;