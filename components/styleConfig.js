import { Card, DisplayText, Stack, TextField, Button, Form, FormLayout } from '@shopify/polaris';
import { useState, useCallback, useEffect } from 'react';
import ImageDropZone from '../snippets/imageDropZone';
import '../css/fonts.css';

function BackgroundSetting(props){
  const [bgColor, setBgColor] = useState('#000');
  const [bgOpacity, setBgOpacity] = useState('100');

  const [txtColor, setTxtColor] = useState('#b31219');
  const [specialColor, setSpecialColor] = useState('#fff');


  useEffect(()=>{
    props.handleStyleConfig({
      bgColor:bgColor,
      bgOpacity:bgOpacity,
      txtColor:txtColor,
      specialColor:specialColor
    },undefined);
  },[bgColor,bgOpacity,txtColor,specialColor])

  return (
    <Card.Section>
      <Stack>
        <div>
          <h3>Background color:</h3>
          <div style={{height:'25px',width:'25px',borderWidth:'1px',borderStyle:'solid',borderColor:'#ddd',display:'inline-block',backgroundColor:bgColor}}></div>
          <TextField 
            value={bgColor}
            onChange={nw => setBgColor(nw)}
          />
        </div>
        <div>
          <h3>Background opacity:</h3>
          <div style={{display:'inline-block'}}>{bgOpacity}</div>
          <TextField 
            value={bgOpacity}
            onChange={nw => setBgOpacity(nw)}
            type="number"
            helpText="0 is transparent, 100 is opaque."
          />
        </div>
      </Stack>
      <Stack>
        <div>
          <h3>Text color:</h3>
          <div style={{height:'25px',width:'25px',borderWidth:'1px',borderStyle:'solid',borderColor:'#ddd',display:'inline-block',backgroundColor:txtColor}}></div>
          <TextField 
            value={txtColor}
            onChange={nw => setTxtColor(nw)}
          />
        </div>
        <div>
          <h3>Special text color:</h3>
          <div style={{height:'25px',width:'25px',borderWidth:'1px',borderStyle:'solid',borderColor:'#ddd',display:'inline-block',backgroundColor:specialColor}}></div>
          <TextField 
            value={specialColor}
            onChange={nw => setSpecialColor(nw)}
          />
        </div>
      </Stack>
    </Card.Section>
  )
}

function Fonts(props){
  const [fontSize,setFontSize] = useState(18);
  const [padding,setPadding] = useState(10);
  const [fontFam,setFontFam] = useState('sans-serif');

  const handleFontFam = useCallback(
    (val) => {
      setFontFam(val);
      props.handleStyleConfig(undefined,{fontFamily:val});
    },
    [fontFam]
  )

  const handleFontSize = useCallback(
    (val) => {
      setFontSize(val);
      props.handleStyleConfig(undefined,{fontSize:val})
    },
    []
  );

  const handlePadding = useCallback(
    (val) => {
      setPadding(val);
      props.handleStyleConfig(undefined,{barPadding:val})
    },
    []
  );

  return (
    <Card.Section>
      <div>Font family:</div>
      <Button onClick={() => handleFontFam('Montserrat')}>Montserrat</Button>
      <Button onClick={() => handleFontFam('sans-serif')}>Sans serif</Button>
      <TextField 
        label="Font size:"
        suffix="px"
        type="number"
        value={fontSize}
        onChange={handleFontSize}
      />
      <TextField 
        label="Bar padding:"
        suffix="px"
        type="number"
        value={padding}
        onChange={handlePadding}
      />
    </Card.Section>
  )
}

class StyleConfigPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      colorConfig:{},
      fontConfig:{},
      bgImg:{}
    }
    this.handleStyleConfig = this.handleStyleConfig.bind(this);
    this.uploadBgImg = this.uploadBgImg.bind(this);
  }

  handleStyleConfig(colorCf,fontCf){
    this.setState((state)=>{
      if(colorCf===undefined){
        fontCf = {...state.fontConfig,...fontCf};
        return {colorConfig:state.colorConfig,fontConfig:fontCf}
      }else if(fontCf === undefined){
        colorCf = {...state.colorConfig,...colorCf};
        return {colorConfig:colorCf,fontConfig:state.fontConfig}
      }
    },function(){
      this.props.handleStyleConfig(this.state.colorConfig,this.state.fontConfig);
    })
  }

  uploadBgImg(bgFile){
    this.setState({bgImg:bgFile},function(){
      this.props.uploadBgImg(this.state.bgImg)
    })
  }

  render(){
    return (
      <Card>
        <Form>
          <FormLayout>
            <DisplayText>Style Configuration</DisplayText>
            <BackgroundSetting handleStyleConfig={this.handleStyleConfig}/>
            <ImageDropZone uploadBgImg={this.uploadBgImg}/>
            <Fonts  handleStyleConfig={this.handleStyleConfig}/>
          </FormLayout>
        </Form>
      </Card>
    )
  }
}

export default StyleConfigPage;