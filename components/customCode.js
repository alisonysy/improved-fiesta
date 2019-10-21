import { Card, FormLayout, Collapsible, TextContainer } from '@shopify/polaris';
import SectionHead from '../snippets/sectionHead';
import '../css/mainStyleSheet.css';
import { useState } from 'react';

const horizontalCodes = `
#ptk_bar {
  background: black url(https://cdn.shopify.com/s/files/1/1036/4113/t/33/assets/aramid.jpg?225834);
  background-repeat: no-repeat;
  background-size: 3000px;
  animation: slider 10s infinite alternate;
}

@-webkit-keyframes slider{
  from {
    background-size: 2000px;
    background-position: left top;
  }
  to {
    background-position: right center;
    background-size: 3000px;
  }
}

@-moz-keyframes slider{
  from {
    background-size: 2000px;
    background-position: left top;
  }
  to {
    background-position: right center;
    background-size: 3000px;
  }
}

@-o-keyframes slider{
  from {
    background-size: 2000px;
    background-position: left top;
  }
  to {
    background-position: right center;
    background-size: 3000px;
  }
}

@keyframes slider{
  from {
    background-size: 2000px;
    background-position: left top;
  }
  to {
    background-position: right center;
    background-size: 3000px;
  }
}
`;

const verticalCodes = `
#ptk_bar {
  background: black url(https://cdn.shopify.com/s/files/1/1036/4113/t/33/assets/aramid.jpg?225834);
  background-repeat: no-repeat;
  background-size: cover;
  animation: slider 7s infinite alternate;
}

@-webkit-keyframes slider{
  from {
    background-size: cover;
    background-position: center top;
  }
  to {
    background-size: cover;
    background-position: center bottom;
  }
}

@-moz-keyframes slider{
  from {
    background-size: cover;
    background-position: center top;
  }
  to {
    background-size: cover;
    background-position: center bottom;
  }
}

@-o-keyframes slider{
  from {
    background-size: cover;
    background-position: center top;
  }
  to {
    background-size: cover;
    background-position: center bottom;
  }
}

@keyframes slider{
  from {
    background-size: cover;
    background-position: center top;
  }
  to {
    background-size: cover;
    background-position: center bottom;
  }
}
`;

function TextArea(props){
  return (
    <Card.Section>
      <div style={{fontSize:'16px',padding:'0 0 7px 0',textTransform:'capitalize'}}>{props.type}</div>
      <div style={{fontSize:'14px',padding:'0 0 4px 0'}}>&lt;{props.type}&gt;</div>
      <textarea 
        rows="10" cols="80" placeholder="Please put your custom codes here..." 
        style={{border:'1px solid #bbb',borderRadius:'5px',width:'calc(100% - 2em)',marginBottom:'5px'}} 
        onChange={(evt) => {
          evt.persist();
          props.handleCustomCode(evt.nativeEvent.target.value,props.type)
        }}
        className="styleTextarea"
      >{props.customCode}</textarea>
      <div style={{fontSize:'14px'}}>&lt;/{props.type}&gt;</div>
    </Card.Section>
  )
}

class CustomCodePage extends React.Component{
  constructor(props){
    super(props)
    this.state={
      customCode:'',
      sectionActive:true,
    };
    this.horizontalZoom = React.createRef();
    this.verticalScroll = React.createRef();
    this.handleCustomCode = this.handleCustomCode.bind(this);
    this.injectCodeAfterClicking = this.injectCodeAfterClicking.bind(this);
    this.bindClickingEvent = this.bindClickingEvent.bind(this);
    this.renderTextFrmProps = this.renderTextFrmProps.bind(this);
  }

  handleCustomCode(val,type){
    const self = this;
    let scriptTxt, styleTxt;
    switch(type){
      case 'style':
        styleTxt = val;
        break;
      case 'script':
        scriptTxt = val;
        break;
    }
    if(this.state.timer){
      clearTimeout(this.state.timer);
    };
    this.setState(()=>{
      let timerN = setTimeout(() => {
        self.props.handleCustomCode(scriptTxt,styleTxt);
      }, 5000);
      return {timer:timerN}
    });
  };

  componentDidMount(){
    this.bindClickingEvent();
    this.renderTextFrmProps();
  }

  componentDidUpdate(){
    this.bindClickingEvent();
  }

  injectCodeAfterClicking(el,type){
    if(!el) return;
    const self= this;
    let style = document.querySelector('.styleTextarea');
    let script = document.querySelector('.scriptTextarea');
    switch(type){
      case 'horizontal':
        style.value = horizontalCodes;
        self.handleCustomCode(horizontalCodes,'style');
        break;
      case 'vertical':
        style.value = verticalCodes;
        self.handleCustomCode(verticalCodes,'style');
    }
  }

  bindClickingEvent(){
    const h_z = this.horizontalZoom.current;
    const v_s = this.verticalScroll.current;
    const self = this;
    if(h_z && v_s){
      h_z.addEventListener('click',function(e){
        self.injectCodeAfterClicking(e.target,'horizontal')
      });
      v_s.addEventListener('click',function(e){
        self.injectCodeAfterClicking(e.target,'vertical')
      })
    }
  }

  renderTextFrmProps(){
    let styleArea = document.querySelector('.styleTextarea');
    let scriptArea = document.querySelector('.scriptTextarea');
    if(this.props.customCode && this.props.customCode.style && this.props.customCode.style.length > 0){
      styleArea.value = this.props.customCode.style;
    }
    if(this.props.customCode && this.props.customCode.script && this.props.customCode.script.length > 0){
      scriptArea.value = this.props.customCode.script;
    }
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
            <TextArea 
              handleCustomCode={this.handleCustomCode} 
              type="style"
              customCode={this.props.customCode.style}
            />
            <TextArea 
              handleCustomCode={this.handleCustomCode}
              type="script"
              customCode={this.props.customCode.script}
            />
            <Card.Section>
              <TextContainer>
                <div><span className="codeChoices" ref={this.horizontalZoom}>Horizontal Zoom</span>:Good for displaying a pattern based background image</div>
                <div><span className="codeChoices" ref={this.verticalScroll}>Vertical Scroll</span>:A Background image scrolled vertically. Good for showing a product image.</div>
              </TextContainer>
            </Card.Section>
          </FormLayout>
        </Collapsible>
      </Card>
    )
  }
}

export default CustomCodePage;