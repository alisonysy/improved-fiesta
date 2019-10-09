import { useState } from 'react'
import { TextField, Card, DisplayText, Form, FormLayout } from '@shopify/polaris'

class CustomCodePage extends React.Component{
  constructor(props){
    super(props)
    this.state={
      customCode:''
    }
    this.handleCustomCode = this.handleCustomCode.bind(this);
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
    this.props.handleCustomCode(scriptTxt,styleTxt);
  }

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