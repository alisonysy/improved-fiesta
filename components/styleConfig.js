import { Card, Stack, TextField, Button, Form, FormLayout, ColorPicker} from '@shopify/polaris';
import { useState, useCallback, useEffect } from 'react';
import ImageDropZone from '../snippets/imageDropZone';
import '../css/fonts.css';

function ColorPickers(props){
  
  const [color, setColor] = useState({
    hue: 0,
    brightness: 0,
    saturation: 0,
  });

  useEffect(()=>{
    props.handleColorChange(color);
  },[color])

  return (
    <div style={{height:'100px',width:'auto',position:'absolute',top:'25px',left:'0',zIndex:'99'}}>
      <ColorPicker onChange={setColor} color={color} />
    </div>
  );
}

function BackgroundSetting(props){
  const rgbToHex = (rgb) => {
    if(rgb.includes('#')) return rgb;
    let regExp = /\(\s*(\d+),\s*(\d+),\s*(\d+)\)/;
    let re = rgb.match(regExp);
    if(re){
      let r=parseInt(re[1]).toString(16),
        g=parseInt(re[2]).toString(16),
        b=parseInt(re[3]).toString(16);
      if (r.length == 1)
        r = "0" + r;
      if (g.length == 1)
        g = "0" + g;
      if (b.length == 1)
        b = "0" + b;
      return "#" + r + g + b;
    }
  };
  const hslToRgb = (h,s,l) => { // s, l must be fractions of 100;
    let c = (1 - Math.abs(2 * l - 1)) * s,
      x = c * (1 - Math.abs((h / 60) % 2 - 1)),
      m = l - c/2,
      r = 0,
      g = 0,
      b = 0;
    if (0 <= h && h < 60) {
      r = c; g = x; b = 0;
    } else if (60 <= h && h < 120) {
      r = x; g = c; b = 0;
    } else if (120 <= h && h < 180) {
      r = 0; g = c; b = x;
    } else if (180 <= h && h < 240) {
      r = 0; g = x; b = c;
    } else if (240 <= h && h < 300) {
      r = x; g = 0; b = c;
    } else if (300 <= h && h < 360) {
      r = c; g = 0; b = x;
    }
    r = Math.round((r + m) * 255);
    g = Math.round((g + m) * 255);
    b = Math.round((b + m) * 255);
  
    return "rgb(" + r + "," + g + "," + b + ")";
  }
  const [showBgPicker,setBgPicker] = useState(false);
  const [showTxtPicker,setTxtPicker] = useState(false);
  const [showSpTxtPicker,setSpTxtPicker] = useState(false);
  const [bgColor, setBgColor] = useState('#000');
  const [bgOpacity, setBgOpacity] = useState('100');

  const [txtColor, setTxtColor] = useState('#b31219');
  const [specialColor, setSpecialColor] = useState('#fff');
  let bgColorFrmProps = props.colorConfig.bgColor, txtColorFrmProps = props.colorConfig.txtColor;

  useEffect(()=>{
    props.handleStyleConfig({
      bgColor:bgColor,
      bgOpacity:bgOpacity,
      txtColor:txtColor,
      specialColor:specialColor
    },undefined);
  },[bgColor,bgOpacity,txtColor,specialColor]);

  useEffect(()=>{
    setBgColor(rgbToHex(bgColorFrmProps));
  },[bgColorFrmProps]);

  useEffect(()=>{
    setTxtColor(rgbToHex(txtColorFrmProps));
  },[txtColorFrmProps]);



  return (
    <Card.Section>
      <Stack>
        <div>
          <h3>Background color:</h3>
          <div style={{position:'relative'}}>
            <div style={{height:'25px',width:'25px',borderWidth:'1px',borderStyle:'solid',borderColor:'#ddd',display:'inline-block',backgroundColor:bgColor,cursor:'pointer'}} 
              onClick={() => setBgPicker(!showBgPicker)}
            ></div>
            { showBgPicker? 
              <ColorPickers 
                handleColorChange={(hslCl) => {
                  let cRgb = hslToRgb(hslCl.hue,hslCl.saturation,hslCl.brightness);
                  setBgColor(cRgb);
                }}
              />
              :
              null
            }
          </div>
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
          <div style={{position:'relative'}}>
           <div style={{height:'25px',width:'25px',borderWidth:'1px',borderStyle:'solid',borderColor:'#ddd',display:'inline-block',backgroundColor:txtColor,cursor:'pointer'}}
            onClick={()=>setTxtPicker(!showTxtPicker)}
           ></div>
            { showTxtPicker?
              <ColorPickers 
                handleColorChange={(hslCl) => {
                  let cRgb = hslToRgb(hslCl.hue,hslCl.saturation,hslCl.brightness);
                  setTxtColor(cRgb);
                }}
              />
              :
              null
            }
          </div>
          <TextField 
            value={txtColor}
            onChange={nw => setTxtColor(nw)}
          />
        </div>
        <div>
          <h3>Special text color:</h3>
          <div style={{position:'relative'}}>
            <div style={{height:'25px',width:'25px',borderWidth:'1px',borderStyle:'solid',borderColor:'#ddd',display:'inline-block',backgroundColor:specialColor,cursor:'pointer'}}
              onClick={()=>setSpTxtPicker(!showSpTxtPicker)}
            ></div>
            { showSpTxtPicker?
              <ColorPickers 
                handleColorChange={(hslCl) => {
                  let cRgb = hslToRgb(hslCl.hue,hslCl.saturation,hslCl.brightness);
                  setSpecialColor(cRgb);
                }}
              />
              :
              null
            }
          </div>
          <TextField 
            value={rgbToHex(specialColor)}
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
    },
    [fontFam]
  )

  const handleFontSize = useCallback(
    (val) => {
      setFontSize(val);
    },
    [fontSize]
  );

  const handlePadding = useCallback(
    (val) => {
      setPadding(val);
    },
    [padding]
  );

  useEffect(()=>{
    props.handleStyleConfig(undefined,{fontFamily:fontFam,fontSize:fontSize,barPadding:padding});
  },[fontFam,fontSize,padding])

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
            <div style={{fontSize:'18px',padding:'1.5em 0 0 1em'}}>Style Configuration</div>
            <BackgroundSetting handleStyleConfig={this.handleStyleConfig} {...this.props.styleConfig}/>
            <ImageDropZone uploadBgImg={this.uploadBgImg}/>
            <Fonts  handleStyleConfig={this.handleStyleConfig}/>
          </FormLayout>
        </Form>
      </Card>
    )
  }
}

export default StyleConfigPage;