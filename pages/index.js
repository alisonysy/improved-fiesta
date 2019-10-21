import { Layout, Page, ButtonGroup, Button, Toast, Frame } from '@shopify/polaris';
import { useState, useCallback } from 'react';
import gql from 'graphql-tag';
import { useMutation, useSubscription } from 'react-apollo';
import store from 'store-js';

import BarList from '../components/barList';
import TemplateStyle from '../components/templateStyle';
import ContentConfigPage from '../components/contentConfig';
import StyleConfigPage from '../components/styleConfig';
import TargetConfigPage from '../components/targetConfig';
import CustomCodePage from '../components/customCode';
import PreviewPage from '../components/preview';

const INJECT_SCRIPT = gql`
  mutation scriptTagCreate($input: ScriptTagInput!) {
    scriptTagCreate(input: $input) {
      scriptTag {
        id
      }
      userErrors {
        field
        message
      }
    }
  }
`;

function SaveUserPreference(props){
  const [injectScriptTag, {data,error}] = useMutation(INJECT_SCRIPT);

  const handleInjectionSuccess = (data,b) =>{
    console.log(data);
    setTimeout((b) => {
      b='dismiss'
    }, 2500);
    return (
      b === 'success'? 
      <Toast
        content="Saved successfully."
        onDismiss={() => {}}
      />
      :
      b === 'error' ?
      <Toast
        content="Something went wrong."
        onDismiss={ () => {}}
      />
      :
      null
    )
  };
  
  return (
    <div style={{marginTop:'50px',height:'100px'}}>
      <ButtonGroup>
        <Button
          onClick = {()=>{
            props.handleEdit();
          }}
        >Cancel</Button>
        <Button primary 
          onClick={(e)=>{
            e.preventDefault();
            console.log('calling useMutation hooks');
            injectScriptTag({
              variables:{
                input:{
                  displayScope:'ONLINE_STORE',
                  src:'https://3ea47c01.ngrok.io/_next/static/chunks/topBarInjection.js'
                }
              }
            })
            props.handleSaving();
          }}
        >
          Save
        </Button>
      </ButtonGroup>
      <Frame>
        { data && handleInjectionSuccess(data,'success')}
        { error &&  handleInjectionSuccess(error,'error') }
      </Frame>
    </div>
  )
}

class Index extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      open: false,
      onEdit:false,
      savedName:'',
      barTxtConfig:{initialMsg1:'',prgMsg1:'',achievedMsg:''},
      barFrShGl:30,
      barLink:{url:'',openNew:false},
      barPosition:'',
      bgImg:{},
      styleConfig:{colorConfig:{bgColor:'#000',txtColor:'#b31219',bgOpacity:100,specialColor:'#fff'},fontConfig:{fontFamily:'sans-serif'}},
      customCode:{script:'',style:''},
      dspOnPage:{selected:'',url:''},
      shipsToCountries:[],
      selectedTargets:[],
      scheduleTime:{}
    };
    this.baseState = this.state;
    this.finalBars = React.createRef();
    this.handleEditId = this.handleEditId.bind(this);
  }

  handleEditId(id){
    console.log(id);
    this.setState({onEdit:true});
  }

  render(){
    const emptyState = !store.get('ids');
    const {barTxtConfig,barFrShGl,barLink,styleConfig,bgImg,savedName,barPosition,dspOnPage,selectedTargets,scheduleTime,customCode} = this.state;
    return (
      <Page>
        <Layout.Section>
          <BarList 
            handleEditId={(id) => this.handleEditId(id)}
            handleTargetCountries={(arr)=> this.setState({shipsToCountries:arr},function(){console.log(this.state.shipsToCountries)})}
          />
          {
            this.state.onEdit?
            <div style={{marginTop:'3em'}}>
              <TemplateStyle handleClickedLi={(bg,ftColor) => this.setState({styleConfig:{...this.state.styleConfig,colorConfig:{...this.state.styleConfig.colorConfig,bgColor:bg,txtColor:ftColor}}})}/>
              <PreviewPage 
                others={{savedName,barPosition,dspOnPage,selectedTargets,scheduleTime}}
                customCode={customCode}
                contentConfig={{barTxtConfig,barFrShGl,barLink}} 
                styleConfig = {{...styleConfig}}
                bgImg = {bgImg}
                ref={this.finalBars}
              />
              <ContentConfigPage 
                handleContentConfig_msg={(msg)=> this.setState({barTxtConfig:{...this.barTxtConfig,...msg}})} 
                barTxt={this.state.barTxtConfig}
                handleContentConfig_goal={(gl) => this.setState({barFrShGl:gl})}
                goal={this.state.barFrShGl}
                handleContentConfig_link={(val)=> this.setState({barLink:{...this.state.barLink,...val}})}
                link={this.state.barLink}
                handleName={(name)=> this.setState({savedName:name})}
                name={this.state.savedName}
                handleBarPosition={(p)=> this.setState({barPosition:p})}
                barPosi={this.state.barPosition}
              />
              <StyleConfigPage 
                handleStyleConfig={(colorCf,fontCf) => {
                  this.setState({styleConfig:{colorConfig:colorCf,fontConfig:fontCf}})
                }}
                styleConfig={this.state.styleConfig}
                uploadBgImg={(bgFile) => this.setState({bgImg:bgFile})}
                bgImg={this.state.bgImg}
              />
              <TargetConfigPage 
                handleDisplayOnPage={(sec,url)=>this.setState({dspOnPage:{selected:sec,url:url}})}
                dspOnPage={this.state.dspOnPage}
                shipsToCountries={this.state.shipsToCountries}
                selectedTargets={this.state.selectedTargets}
                handleSelectedTargets={(val)=>this.setState({selectedTargets:val})}
                handleTimeSetting={(timeObj) => this.setState({scheduleTime:timeObj})}
                scheduleTime={this.state.scheduleTime}
              />
              <CustomCodePage 
                handleCustomCode={(script,style) => {
                  this.setState({customCode:{script:script,style:style}})
                }}
                customCode={this.state.customCode}
              />
              <SaveUserPreference 
                handleEdit={()=> {
                  this.setState(this.baseState);
                }}
                handleSaving={()=>{
                  console.log(this.finalBars.current);
                }}
              />
            </div>
            :
            null
          }
        </Layout.Section>
      </Page>
    )
  };

};

export default Index;