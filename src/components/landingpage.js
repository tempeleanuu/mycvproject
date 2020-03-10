import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class Landing extends Component {
	render() {
		return(
			<div style={{width: '100%' , margin: 'auto'}}>
				<Grid className="landing-grid">
					<Cell col={12}>
						<img 
						src="https://scontent.fsbz1-2.fna.fbcdn.net/v/t1.0-9/p960x960/72668974_1364150077077541_5930935109438930944_o.jpg?_nc_cat=103&_nc_sid=7aed08&_nc_ohc=xXeDAyCGUwEAX_n48o6&_nc_ht=scontent.fsbz1-2.fna&_nc_tp=6&oh=49f3b4a889ac004b961dae1bddd2e57b&oe=5E903E3D"
						alt="avatar"
						className="avatar-img"
						/>
						<div className="banner-text">
							<h1>Front End Developer</h1>

							<hr />
							<p>HTML | CSS | Bootstrap | Javascript | React | Ableton Live Suite </p>
						<div className="social-links">

							<a href="https://www.linkedin.com/in/tempeleanu-paul-8b0307190/" rel="noopener noreferrer" target="_blank">
								<i className="fa fa-linkedin-square"  aria-hidden="true" />
							</a>

							<a href="https://github.com/tempeleanuu" rel="noopener noreferrer" target="_blank">
								<i className="fa fa-github-square"  aria-hidden="true" />
							</a>

							<a href="https://soundcloud.com/tempe2000forever" rel="noopener noreferrer" target="_blank">
								<i className="fa fa-soundcloud"  aria-hidden="true" />
							</a>

							<a href="https://www.instagram.com/tempeleanupaul/" rel="noopener noreferrer" target="_blank">
								<i className="fa fa-instagram"  aria-hidden="true" />
							</a>

						</div>

						<div className="infotext">
							<p>Here is my presentation webpage, I am an aspiring Front End Developer, and music producer.
							</p>
						</div>

						</div>
					</Cell>
				</Grid>	
			</div>
		)
	}
}

export default Landing;