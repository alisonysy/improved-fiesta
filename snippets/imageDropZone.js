import { DropZone, Banner, Stack, List, Thumbnail, Caption, Card } from '@shopify/polaris';

class ImageDropZone extends React.Component{
  constructor(props){
    super(props)
    this.state = {
    }
    this.inputRef = React.createRef();
    this.handleInpImg = this.handleInpImg.bind(this);
  }

  componentDidUpdate(){
    const inputBtn = this.inputRef.current;
    const self = this;
    inputBtn.addEventListener('change',function(e){
      self.handleInpImg(inputBtn);
    });
  }

  handleInpImg(tg){
    let img = tg.files[0],imgs,al;
    let imgWrapper = document.createElement('img');
    let delBtn = document.createElement('button');
    const self = this;
    imgs = tg.parentNode.querySelector('.imgs');

    // delete button handling
    delBtn.textContent = 'Delete Image';
    delBtn.addEventListener('click',function(e){
      e.preventDefault();
      let uploadedImg = imgs.querySelector('img');
      imgs.removeChild(uploadedImg);
      imgs.removeChild(delBtn);
      self.props.uploadBgImg({});
    });
    imgWrapper.src = window.URL.createObjectURL(img);

    al = imgs.querySelector('img');
    if(al){
      imgs.removeChild(al);
      imgs.insertAdjacentElement('afterbegin',imgWrapper);
    }else{
      imgs.insertAdjacentElement('afterbegin',imgWrapper);
      imgs.insertAdjacentElement('beforeend',delBtn);
    }
    
    this.props.uploadBgImg(img);
  }

  render(){
    return (
      <Card.Section>
        <label htmlFor="backgroundImg" style={{marginBottom:'5px'}}>Click the drop zone to continue uploading more images:</label>
        <div>
          <input id="backgroundImg" type="file" accept="image/*" name="bgImg" ref={this.inputRef}/>
          <div className="imgs"></div>
        </div>
      </Card.Section>
    );
  }
}

export default ImageDropZone;