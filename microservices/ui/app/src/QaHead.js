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
backgroundColor:'grey', 
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
		
	 <div style={{ height:60,backgroundColor:'#009688'}}>
    <Tabs style={{ height:'20%',width:'20%',

    }}  tabItemContainerStyle={{backgroundColor:'#009688'}}
      inkBarStyle={{color:'orange',background: '#00aced'}} style={{marginLeft:'40px',marginTop:'', height:'10%',width:'30%',

      }} >
	
        <Tab  buttonStyle={{color:'black'}} label="Home" value="a"
        style={{textTransform: "none"}}>
      </Tab>
      <Tab  buttonStyle={{color:'black'}} label="About Us" value="b"
        style={{textTransform: "none"}}>
      </Tab>
      <Tab style={{textTransform: "none"}} buttonStyle={{color:'black'}} label="Contact" value="c">

      </Tab>
  
  </Tabs>  
	 <Paper style={style} zDepth={1} rounded={false} />
		
	</div>	
		
		
		);
}};