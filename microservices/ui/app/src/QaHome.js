import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {QaHead} from './QaHead'
import {DownTab} from './DownTab.js'
import  {DownPage} from './DownPage.js'
//import {sendMess} from './server.js'




export class QaHome extends React.Component{
	render()
	{
		return(
		<div>
		<QaHead/>
		<DownTab/>
		<DownPage/>
		
		
		</div>
		);
	}};