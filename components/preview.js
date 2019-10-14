import { Card, Form, FormLayout } from '@shopify/polaris';
import PreviewBar from '../snippets/previewBar';

class PreviewPage extends React.Component{
  constructor(props){
    super(props);
    this.state={};
    this.parseCssString = this.parseCssString.bind(this)
  }

  parseCssString(code){
    console.log('start parsing')
    let style = code.style,selectors=[];
    console.log(style);
    let styleArr = style.split('}');
    let regExp = /(.+)[\s]*\{(.+)/;
    styleArr.map( i => {
      if(i.trim()!==''){
        let re = i.match(regExp);
        let prop_name = re[1], prop_val=re[2];
        selectors.push({[prop_name]:prop_val})  
      }
    });
    console.log(selectors);
  };


  render(){
    const {barTxtConfig,barFrShGl,barLink} = this.props.contentConfig;
    const bgImg = this.props.bgImg;
    console.log('preview page - style',this.props.styleConfig);
    console.log('preview page - code',this.props.customCode);

    if(this.props.customCode.style !== '' && this.props.customCode.style !== undefined){
      console.log('parsing ready to start')
      this.parseCssString(this.props.customCode);
    }

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
              parseCssString={this.parseCssString}
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
              parseCssString={this.parseCssString}
            />
            <PreviewBar 
              barConfig={{
                bgColor:this.props.styleConfig.colorConfig.bgColor,
                ftColor:this.props.styleConfig.colorConfig.txtColor,
                spColor:this.props.styleConfig.colorConfig.specialColor,
                opacity:this.props.styleConfig.colorConfig.bgOpacity,
                inpTxt:barTxtConfig.achievedMsg, 
                bgImg:bgImg,
                fontFamily:this.props.styleConfig.fontConfig.fontFamily,
                paddingUpDown:this.props.styleConfig.fontConfig.barPadding,
                fontSize:this.props.styleConfig.fontConfig.fontSize
              }} 
              barLink={barLink}
              parseCssString={this.parseCssString} 
            />
          </FormLayout>
        </Form>
      </Card>
    )
  }
}

export default PreviewPage;