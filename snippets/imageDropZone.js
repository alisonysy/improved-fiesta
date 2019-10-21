import { Card } from '@shopify/polaris';

class ImageDropZone extends React.Component{
  constructor(props){
    super(props)
    this.state = {
    }
    this.inputRef = React.createRef();
    this.handleInpImg = this.handleInpImg.bind(this);
  }

  componentDidMount(){
    if(this.props.bgImg.size){
      this.handleInpImg(this.inputRef.current,this.props.bgImg);
    }
  }

  componentDidUpdate(){
    const inputBtn = this.inputRef.current;
    const self = this;
    inputBtn.addEventListener('change',function(e){
      self.handleInpImg(inputBtn,null);
    });
  }

  handleInpImg(tg,file){
    let img ,imgs,al;
    if(tg.files && tg.files[0]){
      img = tg.files[0];
    }else if(file && file.size){
      img = file;
    }
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