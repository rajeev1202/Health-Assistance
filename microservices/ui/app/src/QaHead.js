import React from 'react';
import ReactDOM from 'react-dom';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import muiThemeable from 'material-ui/styles/muiThemeable';
import {    grey50, grey200, grey300, grey400, grey900, indigoA700, blueA700, blueA400,
            blueGrey900, blueGrey800, blueGrey700, blueGrey600, blueGrey400, blue500, lightBlue600, lightBlue500, blue900, blue800, blue700, blue600, red400
       } from 'material-ui/styles/colors';
	  
import Paper from 'material-ui/Paper';

	  
	  const style = {
backgroundImage:'logo.svg', 
backgroundColor : 'black' ,
 height: '380px',
  width:'100%',
  marginTop:'54px',
  textAlign: 'center',
  display: 'inline-block',
};
	  
	  export class QaHead extends React.Component{
	
	render()
	{
		return(
		
	 <div style={{ height:60,backgroundColor:'#FFCC80'}}>
    <Tabs style={{ height:'20%',width:'20%',

    }}  tabItemContainerStyle={{backgroundColor:'#FFCC80'}}
      inkBarStyle={{color:'orange',background: '#00aced'}} style={{marginLeft:'40px',marginTop:'', height:'10%',width:'30%',

      }} >
	
        <Tab  buttonStyle={{color:'blue'}} label="Home" value="a"
        style={{textTransform: "none"}}>
      </Tab>
      <Tab  buttonStyle={{color:'blue'}} label="About Us" value="b"
        style={{textTransform: "none"}}>
      </Tab>
      <Tab style={{textTransform: "none"}} buttonStyle={{color:'blue'}} label="Contact" value="c">

      </Tab>
  
  </Tabs>  
	 <Paper style={style}  zDepth={1} rounded={false}>
	 <div style={{textAlign:'centre', fontSize: '100px', color:"white",}}>Health Assistant Bot</div>
	 <a style = {{fontSize :'60px',fontFamily:'cursive',color:'white',}}> Get  your all Health Answers </a>
	 
	 </Paper>
	
	</div>	
		
		
		);
}};
