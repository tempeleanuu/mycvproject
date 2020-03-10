import React, {Component}  from 'react';
import './App.css';
import {Layout,Header , Navigation,Drawer,Content} from 'react-mdl';
import Main from './components/main';
import {Link} from 'react-router-dom';


class App extends Component {
  render() { 
  return (
	<div className="demo-big-content">
    <Layout>
        <Header className="header-color" title={<Link style={{textDecoration:'none', color: 'white'}} to="/">MY PORTFOLIO</Link>} scroll>
            <Navigation>
				<Link to="/" className="boom">Home</Link>
                <Link to="/mycv" className="cv">Curicullum Vitae</Link>
                
                <Link to="/projects" className="proj">Projects</Link>
                <Link to="/contact" className="con">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration:'none', color: 'black'}} to="/">MY PORTFOLIO</Link>} >
            <Navigation>
				<Link to="/mycv">Curicullum Vitae</Link>
                
                <Link to="/projects">Projects</Link>
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
}

export default App;
