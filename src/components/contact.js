import React, {Component} from 'react';
import {Grid, Cell, List, ListItem,ListItemContent} from 'react-mdl';

class Contact extends Component {
	render() {
		return(
			<div className="contact-body">
				<Grid className="contact-grid">
					<Cell col={6}>
						<h2>Paul Tempeleanu</h2>
						<img 
						src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
						alt="avatar"
						style={{height:'250px'}}
						/>
						<p style={{width: '75%', margin:'auto', paddingTop:'1em'}}>Here you will find all the places in which you can contact me.</p>
					</Cell>
					<Cell col={6}>
						<h2>Contact me</h2>
						<hr />
						<div className="contact-list">
						<List>
 							<ListItem>
   								<ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
									   < i className="fa fa-phone-square" aria-hidden="true" />
									    (+40)752-669-126
								   </ListItemContent>
 						 	</ListItem>

 						 	<ListItem>
   								<ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
									   < i className="fa fa-envelope" aria-hidden="true" />
									    paultem@gmail.com
								   </ListItemContent>
 						 	</ListItem>

							  <ListItem>
   								<ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
									   < i className="fa fa-skype" aria-hidden="true" />
									    @tempeleanuu
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