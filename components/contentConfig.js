import { Card, TextField, DisplayText, Stack, Form, FormLayout, Button, Select, Checkbox, ChoiceList } from '@shopify/polaris';
import { useState, useCallback, useEffect } from 'react';

function NameField(props){
  const [name,setName] = useState('');

  useEffect(()=>{
    props.handleName(name);
  },[name]);

  return ( 
    <FormLayout.Group>
      <TextField label="Name: " value={name} onChange={ (nw) => setName(nw)} />
    </FormLayout.Group>
  )
}

function FreeShippingGoal(props){
  const [goal,setGoal] = useState(30);
  const _handleGoalChange = function(newGoal){
    setGoal(newGoal);
    props.handleGoalChange(newGoal)
  }
  return (
    <FormLayout.Group>
      <TextField 
        label="Free Shipping Goal: " 
        type="number"
        value={goal} 
        onChange={(nw) => _handleGoalChange(nw)} 
      />
    </FormLayout.Group>
  );
}

function InitialMsg(props){
  const [msg,setMsg] = useState('Free Shipping on All Orders Over ');
  const [added,setAdded] = useState('');

  useEffect(()=>{
    props.handleMsgChange({initialMsg1:msg,initialMsg2:added});
  },[msg,added])

  return (
    <FormLayout.Group>
      <Stack alignment="center" distribution="fill">
        <TextField
          label="Initial message: "
          type="text"
          value={msg}
          onChange={(nw) => setMsg(nw)}
          helpText="Display when cart is empty"
        />
        <div style={{fontSize:'18px'}}>{props.currency} {props.goal}</div>
        <TextField 
          label=" "
          type="text"
          value={added}
          onChange={(nw) => setAdded(nw)}
        />
      </Stack>
    </FormLayout.Group>
  )
}

function ProgressMsg(props){
  const [msg,setMsg] = useState('Only ');
  const [added,setAdded] = useState(' away from free shipping');
  const gl = props.goal;

  useEffect(()=>{
    props.handleMsgChange({prgMsg1:msg,prgMsg2:added})
  },[msg,added])

  return (
    <FormLayout.Group condensed>
      <Stack alignment="center" distribution="fill">
        <TextField
          label="Progress message: "
          type="text"
          value={msg}
          onChange={(nw) => setMsg(nw)}
          helpText="Displays when cart value is less than the goal"
        />
        <div style={{fontSize:'18px'}}>{props.currency} {gl-1}</div>
        <TextField 
          label=" "
          type="text"
          value={added}
          onChange={(nw) => setAdded(nw)}
        />
      </Stack>
    </FormLayout.Group>
  )
}

function GoalAchieved(props){
  const [msg,setMsg] = useState('Free Shipping Worldwide');

  useEffect(()=>{
    props.handleMsgChange({achievedMsg:msg})
  },[msg])

  return (
    <FormLayout.Group>
      <TextField
        label="Goal Achieved Message: "
        type="text"
        value={msg}
        onChange={(nw) => setMsg(nw)}
        helpText="Displays when cart value is greater than goal"
      />
    </FormLayout.Group>
  )
}

function AddLinkToBar(props){
  const [havLink,setHavLink] = useState(false);
  const [url,setUrl] = useState('');
  const [checkbox,setChecked] = useState(false);

  const opts=[
    {label:'Off',value:false},
    {label:'On',value:true}
  ]

  const handleSwitch = (val) => {
    val = val === 'true'? true : false;
    setHavLink(val);
    if(!val){
      props.handleBarLinkChange('');
    }
  }

  const handleCheckbox = (val) => {
    setChecked(val);
    props.handleBarLinkChange(val);
  }

  return(
    <FormLayout.Group>
      <Select 
        label="Add Link to the Bar: "
        options={opts}
        onChange={handleSwitch}
        value={havLink}
      />
      {
        havLink?
        <FormLayout.Group>
          <TextField
            label="Link URL: "
            type="url"
            value={url}
            onChange={(nw) => {setUrl(nw); props.handleBarLinkChange(nw);}}
            helpText="This address will be visited after clicking the bar"
          />
          <Checkbox 
            label="Open the link in a NEW tab when clicked"
            checked={checkbox}
            onChange={(nw) => handleCheckbox(nw)}
          />
        </FormLayout.Group>
        :
        null
      }
    </FormLayout.Group>
  )
}

function SetPosition(props){
  const [isSelected,setSelected] = useState(['push-down']);

  const choices = [
    {label:'Top bar pushes down the rest of the page',value:'push-down'}, //body padding-top equals to the height of the bar, position: absolute
    {label:'Top bar pushes down the rest of the page (always visible while scrolling)', value:'push-down-visible'}, // body padding-top, and position: -webkit-sticky
    {label:'Top bar overlaps top of the page',value:'overlap'}, //no padding-top for body
    {label:'Top bar overlaps top of the page (always visible while scrolling)',value:'overlap-visible'}, //no padding-top for body, and position:sticky
    {
      label:'Manual placement',
      value:'manual',
      renderChildren:(isSelected)=>{
        return (
          isSelected && (
            <div>Place the code</div>
          )
        )
      }}
  ];

  useEffect(()=>{
    props.handleBarPosition(isSelected);
  },[isSelected])

  return (
    <FormLayout.Group>
      <ChoiceList 
        title={'Select a Display Position: '}
        choices={choices}
        selected={isSelected}
        onChange={(nw) => setSelected(nw)}
      />
    </FormLayout.Group>
  )
}

class ContentConfigPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {frShGl:30,msgText:{initialMsg1:'Free Shipping on All Orders Over ',initialMsg2:'',prgMsg1:'Only ',prgMsg2:' away from free shipping',achievedMsg:'Free Shipping Worldwide'}}
    this.handleGoalChange = this.handleGoalChange.bind(this);
    this.handleMsgChange = this.handleMsgChange.bind(this);
    this.handleBarLinkChange = this.handleBarLinkChange.bind(this);
  }

  handleGoalChange(newGoal){
    if(parseFloat(newGoal) !== 0){
      this.setState((state) => {
        return {frShGl:parseFloat(newGoal)}
      },function(){
        this.props.handleContentConfig_goal(this.state.frShGl);
      })
    }
  }


  handleMsgChange(msg){
    this.setState((state)=>{
      msg = {...state.msgText,...msg};
      return {msgText:msg}
    },function(){
      this.props.handleContentConfig_msg(this.state.msgText)
    });
  };

  handleBarLinkChange(val){
    let barLinkConfig = {};
    if(typeof val === 'boolean'){
      barLinkConfig.openNew = val;
    }else if(typeof val === 'string'){
      barLinkConfig.url = val;
    }
    this.props.handleContentConfig_link(barLinkConfig);
  }

  render(){
    const {frShGl} = this.state;
    return (
      <Card>
        <Form onSubmit={() => {}}>
          <FormLayout>

            <NameField handleName={(name)=> this.props.handleName(name)}/>

            <FreeShippingGoal handleGoalChange={this.handleGoalChange}/>

            { frShGl? 
              <FormLayout>
                <InitialMsg goal={frShGl} currency="$" handleMsgChange={this.handleMsgChange}/>
                <ProgressMsg goal={frShGl} currency="$" handleMsgChange={this.handleMsgChange} />
              </FormLayout>
              :
              null
            }
            
            <GoalAchieved handleMsgChange={this.handleMsgChange} />

            <AddLinkToBar handleBarLinkChange={this.handleBarLinkChange} />

            <SetPosition handleBarPosition={(val)=>this.props.handleBarPosition(val)}/>

          </FormLayout>
        </Form>
      </Card>
    )
  }
}

export default ContentConfigPage;