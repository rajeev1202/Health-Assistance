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
import Paper from 'material-ui/Paper';
	
	export class DownTab extends React.Component {
		constructor(){
		super();
		this.state={ 
		line :' '
		,dummy:''
		}
		this.updateState = this.updateState.bind(this);
		this.writeState = this.writeState.bind(this);
		this.componentDidMount=this.componentDidMount.bind(this);
		};
		updateState(e){
			this.setState({line:e.target.value});
			 
		}
           writeState()
		{
			if(this.state.line != ""){
				
				this.componentDidMount();
              	  
			}
		
		}
		
		
		componentDidMount()
		{
			axios .post("https://api.beady27.hasura-app.io/wit",{Input:this.state.line})
		 
		 .then(response => {
			  console.log(response.data);
			  var rr = JSON.stringify(response.data);
			  var str = rr.replace("{\"Response\":","");
			  var str1 =str.replace("\"}","");
			  var str1 =str1.replace("\"","");
			 
			
			 if( str1 =="Intent unrecognised")
			 {
				   str1="Type your query";
			 }
			 document.getElementById("hello").innerHTML=str1;
			 
		
			 
			 this.setstate({line: response.data});
              
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
			 
			
			
			<div style={{ hight:60,backgroundColor:'#FFCC80',}} >
    <div
	 containerStyle={{backgroundColor:'orange'}}
      InkBarStyle={{color:'orange',background: '#1DE9B6'}} style={{paddingTop:'8px',marginLeft:'20px',marginTop:'375px', height:'5%',width:'30%',background:'',}} >
	
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
	buttonstyle={{heigth:'40%',}}>
	<RaisedButton onClick={this.writeState}
	primary={true}    
	label ="Ask" />
	
	</div>     
		
</div>
<div style={{paddingTop:'50px' ,}}>
<Paper style = {{height:'100px' , width:'100%' ,display: 'inline-block',marginBottom:'20px',}} zDepth={1} rounded={false}>
	 <div style={{color:'orange' , fontSize:'20px' , fontFamily:'Courier' , fontSize:'20px'}}><b>Your Answer</b></div>
	 <div style={{textAlign:'centre', fontSize: '20px',}}><h3 id="hello"></h3> <p id="hello1"></p></div>
	</Paper>
	</div>
 </div>
			
	 );
	}};		
