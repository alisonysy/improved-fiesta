import { Layout, Page } from '@shopify/polaris';
import { ResourcePicker, TitleBar } from '@shopify/app-bridge-react';
import store from 'store-js';

import ResourceListWithProducts from '../components/ResourceList';
import BarList from '../components/barList';
import TemplateStyle from '../components/templateStyle';
import ContentConfigPage from '../components/contentConfig';
import StyleConfigPage from '../components/styleConfig';
import TargetConfigPage from '../components/targetConfig';
import CustomCodePage from '../components/customCode';
import PreviewPage from '../components/preview';

const img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';

class Index extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      open: false,
      onEdit:false,
      barTxtConfig:{initialMsg1:'',prgMsg1:'',achievedMsg:''},
      barFrShGl:30,
      barLink:{url:'',openNew:false},
      barPosition:''
    };
    this.handleEditId = this.handleEditId.bind(this);
  }

  handleEditId(id){
    console.log(id);
    this.setState({onEdit:true});
  }

  render(){
    const emptyState = !store.get('ids');
    const {barTxtConfig,barFrShGl,barLink} = this.state;
    return (
      <Page>
        <TitleBar 
          primaryAction={{
            content:'Select prod',
            onAction: () => this.setState({ open: true }),
          }}
        />
        <ResourcePicker 
          resourceType="Product"
          showVariants={true}
          open={this.state.open}
          onSelection={(src)=> this.handleSelection(src)}
          onCancel={ () => this.setState({ open: false })}
        />
        <Layout.Section>
          <BarList handleEditId={(id) => this.handleEditId(id)}/>
          {
            this.state.onEdit?
            <div style={{marginTop:'3em'}}>
              <TemplateStyle />
              <PreviewPage contentConfig={{barTxtConfig,barFrShGl,barLink}} />
              <ContentConfigPage 
                handleContentConfig_msg={(msg)=> this.setState({barTxtConfig:{...this.barTxtConfig,...msg}})} 
                handleContentConfig_goal={(gl) => this.setState({barFrShGl:gl})}
                handleContentConfig_link={(val)=> this.setState({barLink:{...this.state.barLink,...val}})}
              />
              <StyleConfigPage />
              <TargetConfigPage />
              <CustomCodePage />
            </div>
            :
            null
          }
          {/* <TemplateStyle /> */}
        </Layout.Section>
        {/* { emptyState ? (
          <Layout>
            <EmptyState
              heading="LALALA"
              action={{
                content:'Select products',
                onAction: () => this.setState({open:true}),
              }}
              image={img}
            >
              <p>Select products to see the console.log hhh</p>
            </EmptyState>
          </Layout>
        ) : (
          <ResourceListWithProducts />
        )} */}
      </Page>
    )
  };

  handleSelection = (src) => {
    const idsFromSrc = src.selection.map((prod)=> prod.id);
    this.setState({ open: false })
    console.log(src);
    store.set('ids',idsFromSrc)
  }
};

export default Index;