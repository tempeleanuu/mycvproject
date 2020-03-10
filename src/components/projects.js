import React, {Component} from 'react';
import {Tabs, Tab , Grid , Cell , Card , CardTitle ,CardText,CardActions, Button, CardMenu, IconButton, CardMedia} from 'react-mdl';

class Projects extends Component {
	constructor(props) {
		super(props);
		this.state={activeTab: 0};
	}

	toggleCategories() {
	if (this.state.activeTab === 0) {
		return(
			<Card shadow={5} style={{minWidth: '450' ,margin: 'auto'}}>
				<CardTitle style={{color: 'wheat' , height: '175px', background: 'url(https://reactjs.org/logo-og.png) center / cover'}}>React Project</CardTitle>
				<CardText>
					Here are some projects made in React
				</CardText>
				<CardActions border>
					<Button colored><a href="https://github.com/tempeleanuu/ToDo">GitHub</a></Button>
					
				</CardActions>
				<CardMenu style={{color:'#fff'}}>
					<IconButton name="share" />

				
				</CardMenu>
			</Card>
		)
		}	else if(this.state.activeTab === 1) {
			return (
				<Card shadow={5} style={{minWidth: '450' ,margin: 'auto'}}>
				<CardTitle style={{color: 'wheat' , height: '175px', background: 'url(https://vanar.md/media/k2/items/cache/d6e7bc44feb1613d041d5385e5745b10_XL.jpg) center / cover'}}>HTML | CSS | JS</CardTitle>
				<CardText>
					Here are some projects made in HTML | CSS | Javascript
				</CardText>
				<CardActions border>
					<Button colored><a href="https://github.com/tempeleanuu/ToDo">GitHub</a></Button>
					
				</CardActions>
				<CardMenu style={{color:'#fff'}}>
					<IconButton name="share" />

				
				</CardMenu>
			</Card>
			)
		} else if(this.state.activeTab === 2) {
			return (
				<Card shadow={5} style={{minWidth: '450' ,margin: 'auto'}}>
				<CardTitle style={{color: 'wheat' , height: '175px', background: 'url(https://media.sweetwater.com/api/i/q-82__ha-e7eaa4c2c0c0cf3a__hmac-9f88eda7d5898948d6b1092afe3ec5cb341fc0c5/images/items/750/Sub37-large.jpg) center / cover'}}>Musical Projects</CardTitle>
				<CardText>
					Here are some musical projects made in Ableton Live
				</CardText>
				<CardActions border>
					<Button colored><a href="https://soundcloud.com/tempe2000forever/earlyjam">Soundcloud</a></Button>
					<Button colored><a href="https://soundcloud.com/tempe2000forever/erosion">Soundcloud</a></Button>
					
				</CardActions>
				<CardMenu style={{color:'#fff'}}>
					<IconButton name="share" />

				
				</CardMenu>
			</Card>
			)
		}

	}

	

	render() {
		return(
			<div className="category-tabs">
				<Tabs activeTab={this.state.activeTab} onChange={(tabID) => this.setState({activeTab:tabID})} ripple>
					<Tab>React</Tab>
					<Tab>HTML | CSS | Javascript</Tab>
					<Tab>Musical Projects</Tab>
				</Tabs>

				<section className="projects-grid">
					<Grid className="projects-grid">
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