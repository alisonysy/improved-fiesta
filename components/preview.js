import { Card, Form, FormLayout } from '@shopify/polaris';
import PreviewBar from '../snippets/previewBar';

class PreviewPage extends React.Component{
  constructor(props){
    super(props);
    this.state={}
  }

  render(){
    const {barTxtConfig,barFrShGl,barLink} = this.props.contentConfig;
    const bgImg = this.props.bgImg;
    console.log(this.props.styleConfig);

    return (
      <Card>
        <Form>
          <FormLayout>
            <PreviewBar 
              barConfig={{
                bgColor:this.props.styleConfig.colorConfig.bgColor,
                ftColor:this.props.styleConfig.colorConfig.txtColor,
                spColor:this.props.styleConfig.colorConfig.specialColor,
                opacity:this.props.styleConfig.colorConfig.bgOpacity,
                inpTxt:barTxtConfig.initialMsg1, 
                goal:barFrShGl,
                addedHtml:barTxtConfig.initialMsg2,
                bgImg:bgImg,
                fontFamily:this.props.styleConfig.fontConfig.fontFamily,
                paddingUpDown:this.props.styleConfig.fontConfig.barPadding,
                fontSize:this.props.styleConfig.fontConfig.fontSize
              }} 
              barLink={barLink}
            />
            <PreviewBar 
              barConfig={{
                bgColor:this.props.styleConfig.colorConfig.bgColor,
                ftColor:this.props.styleConfig.colorConfig.txtColor,
                spColor:this.props.styleConfig.colorConfig.specialColor,
                opacity:this.props.styleConfig.colorConfig.bgOpacity,
                inpTxt:barTxtConfig.prgMsg1, 
                goal:barFrShGl-1,
                addedHtml:barTxtConfig.prgMsg2,
                bgImg:bgImg,
                fontFamily:this.props.styleConfig.fontConfig.fontFamily,
                paddingUpDown:this.props.styleConfig.fontConfig.barPadding,
                fontSize:this.props.styleConfig.fontConfig.fontSize
              }} 
              barLink={barLink}
            />
            <PreviewBar 
              barConfig={{
                bgColor:this.props.styleConfig.colorConfig.bgColor,
                ftColor:this.props.styleConfig.colorConfig.txtColor,
                spColor:this.props.styleConfig.colorConfig.specialColor,
                opacity:this.props.styleConfig.colorConfig.bgOpacity,
                inpTxt:barTxtConfig.achievedMsg, 
                addedHtml:barTxtConfig.initialMsg2,
                bgImg:bgImg,
                fontFamily:this.props.styleConfig.fontConfig.fontFamily,
                paddingUpDown:this.props.styleConfig.fontConfig.barPadding,
                fontSize:this.props.styleConfig.fontConfig.fontSize
              }} 
              barLink={barLink} 
            />
          </FormLayout>
        </Form>
      </Card>
    )
  }
}

export default PreviewPage;