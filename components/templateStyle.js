import { Card } from '@shopify/polaris';

function TemplateStyleItem(props){
  const bgColor = props.bg;
  const ftColor = props.ft;
  const marginRt = props.mgRt? '1em' : '0';
  const wid = props.mgRt? '48%' : '50%';
  return (
    <li style={{listStyleType:'none',width:wid,textAlign:'center',padding:'8px 0',marginTop:'5px',marginRight:marginRt,backgroundColor:bgColor,color:ftColor}}>{props.styleT}</li>
  )
}

class TemplateStyle extends React.Component{
  constructor(props){
    super(props);
    this.state={}
  }

  render(){
    return (
      <Card>
        <ul style={{display:'flex',flexFlow:'row wrap',padding:'0 2em',marginTop:'5px'}}>
          <TemplateStyleItem styleT="Basic" bg="#000" ft="#fff" mgRt="y"/>
          <TemplateStyleItem styleT="Havest Good" bg="rgb(255, 240, 165)" ft="rgb(182, 73, 38)" />
          <TemplateStyleItem styleT="Fairy Tale" bg="rgb(255, 217, 210)" ft="rgb(127, 77, 67)" mgRt="y"/>
          <TemplateStyleItem styleT="Shades of Grey" bg="rgb(76, 76, 76)" ft="rgb(204, 204, 204)"/>
        </ul>
      </Card>
    )
  }
}

export default TemplateStyle;