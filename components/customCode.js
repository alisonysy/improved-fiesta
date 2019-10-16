import { Card, Form, FormLayout, Collapsible, Button } from '@shopify/polaris';
import SectionHead from '../snippets/sectionHead';

class CustomCodePage extends React.Component{
  constructor(props){
    super(props)
    this.state={
      customCode:'',
      sectionActive:true
    }
    this.handleCustomCode = this.handleCustomCode.bind(this);
  }

  handleCustomCode(val,type){
    const self = this;
    let scriptTxt, styleTxt;
    switch(type){
      case 'style':
        styleTxt = val;
        break;
      case 'script':
        scriptTxt = va;
        break;
    }
    if(this.state.timer){
      clearTimeout(this.state.timer);
    };
    this.setState(()=>{
      let timerN = setTimeout(() => {
        console.log('codes are sent');
        self.props.handleCustomCode(scriptTxt,styleTxt);
      }, 5000);
      return {timer:timerN}
    });
  }


  render(){
    return (
      <Card>
        <SectionHead 
          handleToggle={(active) => this.setState({sectionActive:active})}
          headerTxt='Custom code'
          sectionActive={this.state.sectionActive}
        />
        <Collapsible open={this.state.sectionActive} >
          <FormLayout>
            <Card.Section>
              <div style={{fontSize:'16px',padding:'0 0 7px 1em'}}>Style</div>
              <div style={{fontSize:'14px',padding:'0 0 4px 1em'}}>&lt;style&gt;</div>
              <textarea rows="10" cols="80" placeholder="Please put your custom codes here..." 
                style={{marginLeft:'1em',border:'1px solid #bbb',borderRadius:'5px',width:'calc(100% - 2em)',marginBottom:'5px'}} 
                onChange={(evt) => {
                  evt.persist();
                  this.setState({timer:null})
                  this.handleCustomCode(evt.nativeEvent.target.value,'style')
                }}
              />
              <div style={{fontSize:'14px',padding:'0 0 0 1em'}}>&lt;/style&gt;</div>
            </Card.Section>
            <Card.Section>
              <div style={{fontSize:'16px',padding:'0 0 7px 1em'}}>Script</div>
              <div style={{fontSize:'14px',padding:'0 0 4px 1em'}}>&lt;script&gt;</div>
              <textarea rows="10" cols="80" placeholder="Please put your custom codes here..." 
                style={{marginLeft:'1em',border:'1px solid #bbb',borderRadius:'5px',width:'calc(100% - 2em)',marginBottom:'5px'}} 
                onChange={(evt) => {
                  evt.persist();
                  this.setState({timer:null})
                  this.handleCustomCode(evt.nativeEvent.target.value,'script')
                }}
              />
              <div style={{fontSize:'14px',padding:'0 0 0 1em'}}>&lt;/script&gt;</div>
            </Card.Section>
          </FormLayout>
        </Collapsible>
      </Card>
    )
  }
}

export default CustomCodePage;