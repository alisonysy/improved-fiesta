import { Layout, Page, ButtonGroup, Button } from '@shopify/polaris';
import { ResourcePicker, TitleBar } from '@shopify/app-bridge-react';
import gql from 'graphql-tag';
import { useMutation } from 'react-apollo';
import store from 'store-js';

import ResourceListWithProducts from '../components/ResourceList';
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

function SaveUserPreference(){
  const [injectScriptTag, {data,error}] = useMutation(INJECT_SCRIPT);
  return (
    <ButtonGroup>
      <Button>Cancel</Button>
      <Button primary 
        onClick={(e)=>{
          e.preventDefault();
          console.log('calling useMutation hooks');
          injectScriptTag({
            variables:{
              input:{
                displayScope:'ONLINE_STORE',
                src:'https://5be47b78.ngrok.io/_next/static/chunks/topBarInjection.js'
              }
            },
            onCompleted(){
              console.log(data)
            },
            onError(){
              console.log(error);
            }
          })
        }}
      >
        Save
      </Button>
    </ButtonGroup>
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
        {/* <TitleBar 
          primaryAction={{
            content:'Select prod',
            onAction: () => this.setState({ open: true }),
          }}
        /> */}
        {/* <ResourcePicker 
          resourceType="Product"
          showVariants={true}
          open={this.state.open}
          onSelection={(src)=> this.handleSelection(src)}
          onCancel={ () => this.setState({ open: false })}
        /> */}
        <Layout.Section>
          <BarList handleEditId={(id) => this.handleEditId(id)}/>
          {
            this.state.onEdit?
            <div style={{marginTop:'3em'}}>
              <TemplateStyle />
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
              />
              <TargetConfigPage />
              <CustomCodePage />
              <SaveUserPreference />
            </div>
            :
            null
          }
        </Layout.Section>
      </Page>
    )
  };

  // handleSelection = (src) => {
  //   const idsFromSrc = src.selection.map((prod)=> prod.id);
  //   this.setState({ open: false })
  //   console.log(src);
  //   store.set('ids',idsFromSrc)
  // }
};

export default Index;