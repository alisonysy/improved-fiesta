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
    this.state={};
    this.handleClicking = this.handleClicking.bind(this);
    this.tpItem = React.createRef();
  }

  handleClicking(bg,ftColor){
    this.props.handleClickedLi(bg,ftColor);
  }

  componentDidMount(){
    let tpUl = this.tpItem.current;
    let tpItems = tpUl.querySelectorAll('li');
    const self = this;
    for(let n=0;n<tpItems.length;n++){
      tpItems[n].addEventListener('click',function(e){
        let li = e.target;
        let bg = li.style.backgroundColor, ftColor = li.style.color;
        self.handleClicking(bg,ftColor);
      })
    }
  }

  render(){
    return (
      <Card>
        <ul style={{display:'flex',flexFlow:'row wrap',padding:'0 2em',marginTop:'5px'}} ref={this.tpItem}>
          <TemplateStyleItem styleT="Basic" bg="#000" ft="#b31219" mgRt="y"/>
          <TemplateStyleItem styleT="Havest Good" bg="rgb(255, 240, 165)" ft="rgb(182, 73, 38)" />
          <TemplateStyleItem styleT="Fairy Tale" bg="rgb(255, 217, 210)" ft="rgb(127, 77, 67)" mgRt="y" />
          <TemplateStyleItem styleT="Shades of Grey" bg="rgb(76, 76, 76)" ft="rgb(204, 204, 204)" />
        </ul>
      </Card>
    )
  }
}

export default TemplateStyle;