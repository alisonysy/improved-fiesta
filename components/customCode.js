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
    console.log(val);// should have <script> or <style> tag,append the tags to the document body
    this.setState(()=>{
      return {customCode:val}
    })
  }

  render(){
    return (
      <Card>
        <Form onSubmit={v => console.log(v)}>
          <FormLayout>
            <DisplayText size="small">Custom code</DisplayText>
            <textarea rows="10" cols="80" placeholder="Please put your custom codes here..." style={{marginLeft:'10px'}}></textarea>
          </FormLayout>
        </Form>
      </Card>
    )
  }
}

export default CustomCodePage;