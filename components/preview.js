import { Card, Form, FormLayout } from '@shopify/polaris';
import PreviewBar from '../snippets/previewBar';

class PreviewPage extends React.Component{
  constructor(props){
    super(props);
    this.state={}
  }

  render(){
    console.log(this.props.contentConfig);
    const {barTxtConfig,barFrShGl} = this.props.contentConfig;
    return (
      <Card>
        <Form>
          <FormLayout>
            <PreviewBar barConfig={{bgColor:'#000',ftColor:'#fff',inpTxt:barTxtConfig.initialMsg1, goal:barFrShGl,addedHtml:barTxtConfig.initialMsg2}} />
            <PreviewBar barConfig={{bgColor:'#000',ftColor:'#fff',inpTxt:barTxtConfig.prgMsg1, goal:barFrShGl-1,addedHtml:barTxtConfig.prgMsg2}} />
            <PreviewBar barConfig={{bgColor:'#ab4e3d',ftColor:'#fff',inpTxt:barTxtConfig.achievedMsg, addedHtml:barTxtConfig.initialMsg2}} />
          </FormLayout>
        </Form>
      </Card>
    )
  }
}

export default PreviewPage;