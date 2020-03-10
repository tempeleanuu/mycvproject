import React from 'react';
import { Switch,Route} from 'react-router-dom';
import Landing from './landingpage';

import Contact from './contact';
import Projects from './projects';
import Mycv from './mycv';

const Main = () => (
	<Switch>
		<Route exact path ="/" component={Landing} />
		
		<Route path ="/contact" component={Contact} />
		<Route path ="/projects" component={Projects} />
		<Route path ="/mycv" component={Mycv} />
	</Switch>
)

export default Main;