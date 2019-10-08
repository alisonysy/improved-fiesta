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
                  src:'https://8a9648bd.ngrok.io/_next/static/chunks/topBarInjection.js'
                }
              }
            })
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
      barTxtConfig:{initialMsg1:'',prgMsg1:'',achievedMsg:''},
      barFrShGl:30,
      barLink:{url:'',openNew:false},
      barPosition:'',
      bgImg:{},
      styleConfig:{colorConfig:{bgColor:'#000',txtColor:'#b31219',bgOpacity:100,specialColor:'#fff'},fontConfig:{fontFamily:'sans-serif'}}
    };
    this.baseState = this.state;
    this.handleEditId = this.handleEditId.bind(this);
  }

  handleEditId(id){
    console.log(id);
    this.setState({onEdit:true});
  }

  render(){
    const emptyState = !store.get('ids');
    const {barTxtConfig,barFrShGl,barLink,styleConfig,bgImg} = this.state;
    return (
      <Page>
        <Layout.Section>
          <BarList handleEditId={(id) => this.handleEditId(id)}/>
          {
            this.state.onEdit?
            <div style={{marginTop:'3em'}}>
              <TemplateStyle handleClickedLi={(bg,ftColor) => this.setState({styleConfig:{...this.state.styleConfig,colorConfig:{...this.state.styleConfig.colorConfig,bgColor:bg,txtColor:ftColor}}})}/>
              <PreviewPage 
                contentConfig={{barTxtConfig,barFrShGl,barLink}} 
                styleConfig = {{...styleConfig}}
                bgImg = {bgImg}
              />
              <ContentConfigPage 
                handleContentConfig_msg={(msg)=> this.setState({barTxtConfig:{...this.barTxtConfig,...msg}})} 
                handleContentConfig_goal={(gl) => this.setState({barFrShGl:gl})}
                handleContentConfig_link={(val)=> this.setState({barLink:{...this.state.barLink,...val}})}
              />
              <StyleConfigPage 
                handleStyleConfig={(colorCf,fontCf) => {
                  this.setState({styleConfig:{colorConfig:colorCf,fontConfig:fontCf}})
                }}
                uploadBgImg={(bgFile) => this.setState({bgImg:bgFile})}
                {...this.state}
              />
              <TargetConfigPage />
              <CustomCodePage />
              <SaveUserPreference handleEdit={()=> {
                  this.setState(this.baseState);
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