import React, {Component} from 'react';
import {Grid , Cell} from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Mycv extends Component {
	render() {
		return(
			<div>
				<Grid>
					<Cell col={4}>
						

						<h2 style={{paddingTop: '2.5em'}}>Paul Tempeleanu</h2>
						<h4 style={{color:'grey'}}>Front End Developer</h4>
						<hr style={{borderTop: '4px solid #833fb2', width:'100%', borderRadius: '3px'}} />
						<p>Here is my CV, I am a aspiring Front End Developer who's also passionate about music production.</p>
						<hr style={{borderTop: '4px solid #833fb2', width:'100%', borderRadius: '3px'}} />
						<h5 style={{color:'grey'}}>Address</h5>
						<p>Strada Rovine nr. 12, Cluj-Napoca</p>
						<h5 style={{color:'grey'}}>Phone</h5>
						<p>+40752-669-126</p>
						<h5 style={{color:'grey'}}>E-Mail</h5>
						<p>paultempeleanu@gmail.com</p>
						<h5 style={{color:'grey'}}>GitHub</h5>
						<a href="github.com/tempeleanuu">GitHub</a>
						<hr style={{borderTop: '4px solid #833fb2', width:'100%', borderRadius: '3px'}} />
					</Cell>

					<Cell className="resume-right-col" col={8}>
						<h2 style={{paddingTop: '2em'}}>Education</h2>


					<Education 
						startYear={2019}
						endYear={2020}
						schoolName="Scoala informala de IT"
						schoolDescription="Took part at a Web Development course at Scoala Informala de IT in Cluj-Napoca, and in 5 months I learned the following:
						"
					/>
					<Education
						schoolDescription="HTML | CSS | Bootstrap | Javascript | Ajax | OOP | React"
					/>
					<hr style={{borderTop: '3px solid black'}} />
					<h2>Experience</h2>

					<Experience
					startYear={2017}
					endYear="Ongoing"
					jobName="Iron Mountain SRL | Data Entry Specialist"
					jobDescription="Processing documents for our clients"
					/>
					<Experience
					jobDescription="Meeting delivery deadlines"
					/>
					<Experience
					jobDescription="Ensuring a high percentage of quality in regards to the documents that are processed"
					/>
					<hr style={{borderTop: '3px solid black'}} />
					<h2>Skills</h2>
					<Skills
					skill="HTML / CSS"
					progress={100}
					/>
					<Skills
					skill="Javascript"
					progress={75}
					/>
					<Skills
					skill="React"
					progress={65}
					/>
					<Skills
					skill="Ableton Live Suite 10"
					progress={95}
					/>    
						
					</Cell>
				</Grid>
			</div>
		)
	}
}

export default Mycv;