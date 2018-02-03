import React from 'react';
import ReactDOM from 'react-dom';
import  {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import muiThemeable from 'material-ui/styles/muiThemeable';
import {    grey50, grey200, grey300, grey400, grey900, indigoA700, blueA700, blueA400,
            blueGrey900, blueGrey800, blueGrey700, blueGrey600, blueGrey400, blue500, lightBlue600, lightBlue500, blue900, blue800, blue700, blue600, red400
       } from 'material-ui/styles/colors';
	  
import FlatButton from 'material-ui/FlatButton'; 
 import RaisedButton from 'material-ui/RaisedButton';
 import SearchBar from 'material-ui-search-bar'
import axios from "axios";
	
	export class DownTab extends React.Component {
		constructor(){
		super();
		this.state={ 
		line :' '
		,dummy:''
		}
		this.updateState = this.updateState.bind(this);
		this.writeState = this.writeState.bind(this);
		this.apiRequest=this.apiRequest.bind(this);
		};
		updateState(e){
			this.setState({line:e.target.value});
			
		}
           writeState()
		{
			if(this.state.text != ""){
				
				this.apiRequest(this.state.line);
		
			}
		
		}
		apiRequest (){
		 axios .post("https://api.beady27.hasura-app.io/wit",{Input:this.state.line})
		 
		 .then(response => {
			 this.setstate({line: this.state({text:response.data.response}),
			 text:"",
		      
		 
			 });
		 })
		 .catch(error =>{
			 this.setState({
				 dummy:'error man'
		 })
		 });
	 }
		render()
		{
			return(
			<div>
			<div style={{ hight:60,backgroundColor:'#80CBC4',}} >
    <div
	 containerStyle={{backgroundColor:'orange'}}
      InkBarStyle={{color:'orange',background: '#00aced'}} style={{paddingTop:'8px',marginLeft:'20px',marginTop:'375px', height:'5%',width:'30%',background:'',}} >
	
        < FlatButton buttonStyle={{color:'black'}} label="Topics" value="a"
        style={{textTransform: "none",color:''}}/>
      
      < FlatButton  buttonStyle={{color:''}} label="Recent" value="b"
        style={{textTransform: "Lowercase",color:''}}/>
     
      < FlatButton style={{textTransform: "lowercase",color:''}} buttonStyle={{color:'black'}} label="Popular" value="c"/>
</div>
 </div>
 <div style={{marginTop:'15%',marginLeft:'40%'}}>
<input    type = "text" value = {this.state.line} 
               onChange = {this.updateState}
style={{
maxWidth: '100%',height:'35px',paddingLeft:'100px',}}/>
           
      
		
        

	<div  style={{marginTop:'-4.6%',paddingLeft:'35%',}}
	buttonstyle={{heigth:'40%',}}
	
	>
	<RaisedButton onClick={this.writeState}
	primary={true}    
	label ="Ask" />
	
	</div>
</div>
  
 

 </div>
			
	 );
	}};		