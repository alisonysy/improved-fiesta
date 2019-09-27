import { Card, DisplayText, Stack, TextField, Button, Form, FormLayout } from '@shopify/polaris';
import { useState, useCallback } from 'react';
import ImageDropZone from '../snippets/imageDropZone';

function BackgroundSetting(props){
  const [bgColor, setBgColor] = useState('');
  const [bgOpacity, setBgOpacity] = useState('');

  const [txtColor, setTxtColor] = useState('');
  const [specialColor, setSpecialColor] = useState('');

  const handleBgColorChange = (val) => {
    setBgColor(val);
  };

  const handleBgOpacity = (val) => {
    setBgOpacity(val)
  }

  const handleTxtColorChange = (val) => {
    setTxtColor(val)
  }

  const handleSpecialTxtColorChange = (val) => {
    setSpecialColor(val)
  }

  return (
    <Card.Section>
      <Stack>
        <div>
          <h3>Background color:</h3>
          <div style={{height:'25px',width:'25px',borderWidth:'1px',borderStyle:'solid',borderColor:'#ddd',display:'inline-block',backgroundColor:bgColor}}></div>
          <TextField 
            value={bgColor}
            onChange={handleBgColorChange}
          />
        </div>
        <div>
          <h3>Background opacity:</h3>
          <div style={{display:'inline-block'}}>{bgOpacity}</div>
          <TextField 
            value={bgOpacity}
            onChange={handleBgOpacity}
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
            onChange={handleTxtColorChange}
          />
        </div>
        <div>
          <h3>Special text color:</h3>
          <div style={{height:'25px',width:'25px',borderWidth:'1px',borderStyle:'solid',borderColor:'#ddd',display:'inline-block',backgroundColor:specialColor}}></div>
          <TextField 
            value={specialColor}
            onChange={handleSpecialTxtColorChange}
          />
        </div>
      </Stack>
    </Card.Section>
  )
}

function Fonts(props){
  const [fontSize,setFontSize] = useState(16);
  const [padding,setPadding] = useState(10);

  const handleFontFam = (val) => {
  }

  const handleFontSize = useCallback(
    (val) => {console.log(val);setFontSize(val);},
    []
  );

  const handlePadding = useCallback(
    (val) => {console.log(val);setPadding(val);},
    []
  );

  return (
    <Card.Section>
      <div>Font family:</div>
      <Button onClick={() => handleFontFam('Montserrat')}>Montserrat</Button>
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
    this.state = {}
  }

  render(){
    return (
      <Card>
        <Form>
          <FormLayout>
            <DisplayText>Style Configuration</DisplayText>
            <BackgroundSetting />
            <ImageDropZone />
            <Fonts />
          </FormLayout>
        </Form>
      </Card>
    )
  }
}

export default StyleConfigPage;