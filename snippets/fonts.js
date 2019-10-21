import { useState, useEffect, useCallback } from 'react';
import { Card, Button, TextField } from '@shopify/polaris';
import '../css/fonts.css';

const fontsJson={
  "sans-serif":"Sans serif",
  "Lato":"Lato",
  "Montserrat":"Montserrat",
  "Raleway":"Raleway",
  "Righteous":"Righteous",
  "Josefin Sans":"Josefin Sans"
}

function FontItem(props){
  const fontFam = props.fontFam;
  const fontName = props.fontName;

  return (
    <span style={{margin:'0 .6em .6em 0',fontFamily:fontFam}}>
      <Button onClick={() => props.handleFontFam(fontFam)} >
        {fontName}
      </Button>
    </span>
  )
}

function Fonts(props){
  let fontsArr =[];
  const [fontSize,setFontSize] = useState(
    props.styleConfig.fontConfig && props.styleConfig.fontConfig.fontSize ?
      props.styleConfig.fontConfig.fontSize
      :
      18
    );
  const [padding,setPadding] = useState(
    props.styleConfig.fontConfig && props.styleConfig.fontConfig.barPadding ?
      props.styleConfig.fontConfig.barPadding
      :
      10
    );
  const [fontFam,setFontFam] = useState(
    props.styleConfig.fontConfig && props.styleConfig.fontConfig.fontFamily && props.styleConfig.fontConfig.fontFamily.length > 0 ?
      props.styleConfig.fontConfig.fontFamily
      :
      'sans-serif'
    );

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


  const renderFontItem=() => {
    for(var [key,val] of Object.entries(fontsJson)){
      fontsArr.push(<FontItem fontFam={key} fontName={val} handleFontFam={handleFontFam} key={key} />);
    }
    return fontsArr;
  }

  return (
    <Card.Section>
      <div style={{marginBottom:'5px'}}>Font family:</div>
      {
        renderFontItem()
      }
      <div style={{margin:'1em 0'}}>
        <TextField 
          label="Font size:"
          suffix="px"
          type="number"
          value={fontSize}
          onChange={handleFontSize}
        />
      </div>
      <div>
        <TextField 
          label="Bar padding:"
          suffix="px"
          type="number"
          value={padding}
          onChange={handlePadding}
        />
      </div>
    </Card.Section>
  )
}

export default Fonts;