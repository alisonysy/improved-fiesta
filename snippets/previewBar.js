
class PreviewBar extends React.Component{
  constructor(props){
    super(props);
    this.state = {animReq:null};
    this.htmlRef = React.createRef();
    this.closeBtn = React.createRef();
    this.injectHtml = this.injectHtml.bind(this);
    this.setAnimation = this.setAnimation.bind(this);
  }

  setAnimation(el,childToQuery){
    let keyframeEl = document.createElement('style');
    keyframeEl.textContent = `
      @keyframes infiniteSlide{
          from {
            margin-top:0
          }
          to {
            margin-top: -22px
          }
      }
    `;
    el.insertAdjacentElement('afterbegin',keyframeEl);
    el.setAttribute('style',"padding:0;margin:0;list-style:none;transition:all 2.5s;animation:infiniteSlide 2.5s;");
    el.addEventListener('animationend',function(){
      el.style.animation = '';
      void el.offsetWidth;
      let elNode = el.children[0].parentNode;
      let firstChild = elNode.querySelector(childToQuery);
      let clonedFirstChild = firstChild.cloneNode(true);
      elNode.insertAdjacentElement('beforeend',clonedFirstChild);
      elNode.removeChild(firstChild);
      el.style.animation = 'infiniteSlide 2.5s';
    })
  }

  componentDidMount(){
    // handle injected html
    if(this.htmlRef.current){
      let injectedHtmlElCollection = this.htmlRef.current.children; // object
      for(let n=0;n<injectedHtmlElCollection.length;n++){
        let el = injectedHtmlElCollection[n];
        if(el.classList.contains('link-container')){
          el.setAttribute("style","height:22px;overflow:hidden;line-height:22px;");
          if(el.children[0].tagName==='UL'){
            let ul = el.children[0];
            this.setAnimation(ul,'li');
          }
        }
      }
    }
    
    // handle closing action
    let closeBtn = this.closeBtn.current;
    closeBtn.addEventListener('click',(e)=>{
      // #todo add script when appending to page to hide the bar element
    })
  }

  componentDidUpdate(){
    // handle injected html
    if(this.htmlRef.current){
      let injectedHtmlElCollection = this.htmlRef.current.children; // object
      for(let n=0;n<injectedHtmlElCollection.length;n++){
        let el = injectedHtmlElCollection[n];
        if(el.classList.contains('link-container')){
          el.setAttribute("style","height:22px;overflow:hidden;line-height:22px;");
          if(el.children[0].tagName==='UL'){
            let ul = el.children[0];
            this.setAnimation(ul,'li');
          }
        }
      }
    }
  }


  injectHtml(html){
    let contExp = /link\-container/;
    let havCont = contExp.test(html);
    if(havCont){

    }
    return (
      <span dangerouslySetInnerHTML={{__html:html}} ref={this.htmlRef} style={{textAlign:'center'}}></span>
    )
  }

  render(){
    const {bgColor, ftColor } = this.props.barConfig;
    return (
      <div style={{margin:'20px 0'}}>
        <div style={{padding:'8px 5px',fontSize:'18px',lineHeight:'22.5px',textAlign:'center',position:'relative',backgroundColor:bgColor,color:ftColor}}>
          { this.props.barConfig.goal?
            this.props.barConfig.inpTxt + '$' + this.props.barConfig.goal
            :
            this.props.barConfig.inpTxt
          }
          {/* #question: how to turn user input into raw html */}
          { this.props.barConfig.addedHtml?
              this.injectHtml(this.props.barConfig.addedHtml) 
              :
              null
          }
          <div style={{position:'absolute',top:'8px',right:'8px',cursor:'pointer'}} ref={this.closeBtn}>X</div>
        </div>
      </div>
    )
  }
}

export default PreviewBar;