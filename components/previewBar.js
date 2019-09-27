
class PreviewBar extends React.Component{
  constructor(props){
    super(props);
    this.state = {}
    this.handleAddedHtml = this.handleAddedHtml.bind(this);
  }

  handleAddedHtml(userInp){
    // console.log(userInp);
    // if 'link-container' class exists, have a fixed height, hide overflows and alternate the inner content;
    debugger;
    if(userInp) {
      debugger;
      console.log('appended')
      return userInp
    } 
  }

  render(){
    const {bgColor, ftColor } = this.props.barConfig;
    return (
      <div>
        <div style={{padding:'8px 0',backgroundColor:bgColor,color:ftColor}}>
          { this.props.barConfig.inpTxt }
          {/* #question: how to turn user input into raw html */}
          { this.props.barConfig.addedHtml?
              // this.handleAddedHtml(this.props.barConfig.addedHtml) 
              this.props.barConfig.addedHtml
              :
              null
          }
        </div>
      </div>
    )
  }
}

export default PreviewBar;