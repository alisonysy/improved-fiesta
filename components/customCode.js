import { Card, Form, FormLayout } from '@shopify/polaris'

class CustomCodePage extends React.Component{
  constructor(props){
    super(props)
    this.state={
      customCode:''
    }
    this.handleCustomCode = this.handleCustomCode.bind(this);
    this.parseCssString = this.parseCssString.bind(this);
  }

  handleCustomCode(val){
    let scriptStart = val.indexOf('<script>'), scriptEnd = val.indexOf('</script>'), styleStart = val.indexOf('<style>'), styleEnd = val.indexOf('</style>');
    let scriptTxt, styleTxt;
    if(scriptStart !== -1 && scriptEnd !== -1){
      scriptTxt = val.slice(scriptStart+8,scriptEnd).trim();
    }
    if(styleStart !== -1 && styleEnd !== -1){
      styleTxt = val.slice(styleStart+7,styleEnd).trim();
    } 
    styleTxt = this.parseCssString(styleTxt);
    this.props.handleCustomCode(scriptTxt,styleTxt);
  }

  parseCssString(code){
    let style = code,selectors=[];
    if(!style) return;
    let styleArr = style.split('}');
    let sl_regExp = /(.+)\s*{/;
    styleArr.map( i => {
      if(i.trim()!==''){
        let re = i.match(sl_regExp);
        if(re){
          let selector = re[1],selectorObj={};
          let propStr =  i.slice(selector.length+1);
          propStr = propStr.split(';');
          if(propStr.length){
            propStr = propStr.map( i => {
              let prop_name,prop_val,reg=/.+/;
              //handle extra {
              let a = i.indexOf('{');
              a !== -1 ? 
              i=i.slice(a+1)
              :
              i=i;
              //handle carriage return
              if(!i.match(reg)) return;
              i = i.match(reg)[0];              
              //handle colons inside property value;
              let notUrl = /:[^\/]/;
              let re_notUrl = i.match(notUrl);
              if(!re_notUrl) return;
              prop_name = i.substring(0,re_notUrl.index);
              prop_val = i.substring(re_notUrl.index+1);
              selectorObj[prop_name] = prop_val;
            });
            selectors.push({[selector]:selectorObj})
          }
        }
      }
    });
    return selectors;
  };

  render(){
    return (
      <Card>
        <Form onSubmit={v => console.log(v)}>
          <FormLayout>
            <div style={{fontSize:'18px',padding:'1.5em 0 0 1em'}}>Custom Codes</div>
            <textarea rows="10" cols="80" placeholder="Please put your custom codes here..." style={{marginLeft:'1em'}} onChange={(evt) => {evt.persist();this.handleCustomCode(evt.nativeEvent.target.value)}}></textarea>
          </FormLayout>
        </Form>
      </Card>
    )
  }
}

export default CustomCodePage;