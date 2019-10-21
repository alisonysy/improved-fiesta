import { Card, Form, FormLayout } from '@shopify/polaris';
import PreviewBar from '../snippets/previewBar';
import $ from 'jquery';

class PreviewPage extends React.Component{
  constructor(props){
    super(props);
    this.state={
      scriptCode:'',
    };
  };

  static getDerivedStateFromProps(nextProps,prevState){
    let scriptC = nextProps.customCode.script;
    if(scriptC && scriptC !== prevState.scriptCode){
      PreviewPage.injectScript(scriptC);
      return {...prevState,scriptCode:scriptC}
    }else{
      return {...prevState,scriptCode:null}
    }
  };

  static injectScript(scriptCode){
    let scriptEl = document.createElement('script');
    scriptEl.setAttribute('data-custom','');
    let al_script = document.body.querySelector('script[data-custom]');
    if(scriptCode && scriptCode.length !== 0){
      scriptEl.textContent = `
        try{
          ${scriptCode}
        }catch(err){
          console.error(err);
        }
      `;
    }
    if(al_script){
      document.body.removeChild(al_script);
    }
    document.body.appendChild(scriptEl);
  }



  render(){
    const {barTxtConfig,barFrShGl,barLink} = this.props.contentConfig;
    const bgImg = this.props.bgImg;

    return (
      <Card>
        <Form>
          <FormLayout>
            <div style={{fontSize:'18px',padding:'1.5em 0 0 1em'}}>Preview</div>
            <Card.Section>
              { barFrShGl? 
                <div>
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
                    codes={{...this.props.customCode}}
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
                    codes={{...this.props.customCode}}
                  />
                </div>
                :
                null
              }
              {
                barFrShGl ?
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
                    codes={{...this.props.customCode}}
                  />
                  :
                  <PreviewBar 
                    barConfig={{
                    bgColor:this.props.styleConfig.colorConfig.bgColor,
                    ftColor:this.props.styleConfig.colorConfig.txtColor,
                    spColor:this.props.styleConfig.colorConfig.specialColor,
                    opacity:this.props.styleConfig.colorConfig.bgOpacity,
                    goal:-1,
                    inpTxt:barTxtConfig.achievedMsg, 
                    bgImg:bgImg,
                    fontFamily:this.props.styleConfig.fontConfig.fontFamily,
                    paddingUpDown:this.props.styleConfig.fontConfig.barPadding,
                    fontSize:this.props.styleConfig.fontConfig.fontSize
                    }} 
                    barLink={barLink}
                    codes={{...this.props.customCode}}
                  />
              }
            </Card.Section>
          </FormLayout>
        </Form>
      </Card>
    )
  }
}

export default PreviewPage;