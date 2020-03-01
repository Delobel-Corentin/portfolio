import React from 'react';
import './App.css';
import Main from './components/main';
import { Link } from 'react-router-dom';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';

function App() {
  return (
    <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">D Corentin</Link>} scroll>
            <Navigation>
                <Link to="/">Accueil</Link>
                <Link to="/aboutme">A Propos</Link>
                <Link to="/projects">Mes Projets</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">D Corentin</Link>}>
            <Navigation>
                <Link to="/">Accueil</Link>
                <Link to="/aboutme">A Propos</Link>
                <Link to="/projects">Mes Projets</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
  );
}

export default App;
