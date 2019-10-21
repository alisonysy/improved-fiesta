!(function(){
  let view={
    styleTag:'style[data-bar=stylesheet]',
    addToCartBtn:'form[action="/cart/add"] button[data-add-to-cart]',
    currentBar:'#ptk_bar'
  };
  let model ={
    dt_about:{
      name:'',
      url:'',// to added to data to be saved
      position:'',
      onPage:{
        selected:'',
        url:''
      },
      onTime:{
        start:'',
        end:''
      },
      geoTg:[]
    },
    dt_style:{
      bgImg:{}, // size, type, name
      customCode:{
        script:'',
        style:''
      },
      barStyle:{
        bgColor:'',
        opacity:100,
        txtColor:'',
        spTxtColor:'',
        fontFam:'',
        padding:0,
        fontSize:0
      }
    },
    dt_prop:{
      link:'',
      openNew:false
    },
    dt_txt:{
      goal:0, // of type number
      initMsg:{
        s:'',
        e:''
      },
      prgMsg:{
        s:'',
        e:''
      },
      achievedMsg:''
    },
    dt_cart:{},
    mt_fetchClientData:async function(){
      // use async and await to wait for the response
      // assign response to correspondent this.dt_ objects
      Object.assign(this.dt_about,{
        name:'test1',
        url:'https://testpitaka.myshopify.com',
        position:'push-down',
        onPage:{
          selected:'all',
          url:''
        },
        onTime:{
          start:'2019/10/19 11:0',
          end:'2019/10/20 16:0'
        }
      });
      Object.assign(this.dt_style,{
        bgImg:{},
        customCode:{
          script:undefined,
          style:`
          #ptk_bar {
            background: black url(https://cdn.shopify.com/s/files/1/1036/4113/t/33/assets/aramid.jpg?225834);
            background-repeat: no-repeat;
            background-size: cover;
            animation: slider 7s infinite alternate;
          }
          
          @-webkit-keyframes slider{
            from {
              background-size: cover;
              background-position: center top;
            }
            to {
              background-size: cover;
              background-position: center bottom;
            }
          }
          
          @-moz-keyframes slider{
            from {
              background-size: cover;
              background-position: center top;
            }
            to {
              background-size: cover;
              background-position: center bottom;
            }
          }
          
          @-o-keyframes slider{
            from {
              background-size: cover;
              background-position: center top;
            }
            to {
              background-size: cover;
              background-position: center bottom;
            }
          }
          
          @keyframes slider{
            from {
              background-size: cover;
              background-position: center top;
            }
            to {
              background-size: cover;
              background-position: center bottom;
            }
          }
          `
        },
        barStyle:{
          bgColor:'#4c4c4c',
          opacity:100,
          txtColor:'#cccccc',
          spTxtColor:'rgb(232,122,122)',
          fontFam:'Raleway',
          padding:10,
          fontSize:18
        }
      });
      Object.assign(this.dt_prop,{
        link:'',
        openNew:true
      });
      Object.assign(this.dt_txt,{
        goal:50,
        initMsg:{
          s:'Free Shipping on All Orders Over <span style="color:red;">one</span>',
          e:'<div>two</div>'
        },
        prgMsg:{
          s:'Only ',
          e:' away from free shipping'
        },
        achievedMsg:'Free Shipping Worldwide <a href="">this link</a>'
      })
    },
    mt_fetchCartTotal:function(){
      const self = this;
      return $.ajax({
        type: 'GET',
        url: '/cart.js',
        cache: false,
        async:false,
        dataType: 'json',
        success: function(cart) {
          console.log(cart);
          let {total_price} = cart;
          total_price = total_price / 100;
          cart = {...cart,total_price};
          Object.assign(self.dt_cart,cart);
        },
        error: function(err){
          console.log(err);
          Object.assign(self.dt_cart,null);
        }
      });
    }
  };
  let controller = {
    init:function(view,model){
      this.view = view;
      this.model = model;
      console.log('script loaded',new Date())
      this.checkJq();
      this.model.mt_fetchClientData();
      this.handleCartCheck(this.view.addToCartBtn,this.model,this.view.currentBar);
      this.appendStyleTagToPage(this.createBarStyleTag(this.model.dt_style));
      // this.handlePagePosition(this.model.dt_about,this.createBarEl(this.model.dt_txt,this.model.dt_prop,this.model.dt_cart,'empty_cart'));
      this.handleFirstRenderCartCheckAndRender(this.model,this.view.currentBar);
    },
    checkJq:function(){
      if(!window.jQuery){
        let jq = document.createElement('script');
        jq.src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js';
        document.body.prepend(jq);
      }
      return ;
    },
    createBarEl:function(text,prop,cart,phase){ // cart object has 'currency'(string) and 'total_price'(number)
      let barEl_wrapper = document.createElement('div'), 
          barEl=document.createElement('div'),
          barEl_a = document.createElement('a');
      let {goal,initMsg,prgMsg,achievedMsg} = text,
          {link,openNew} = prop;
      barEl.setAttribute('id','ptk_bar');
      
      if(openNew){
        barEl_a.setAttribute('href',link);
        barEl_wrapper.append(barEl_a);
        barEl_a.append(barEl);
      }else{
        barEl_wrapper.append(barEl);
      }

      switch(phase){
        case 'empty_cart':
          barEl.innerHTML = `
            <span>${initMsg.s}</span><span class="ptk_bar_goal"> $${goal}</span><span>${initMsg.e}</span>
          `;
          break;
        case 'cart_in_progress':
          barEl.innerHTML = `
            <span>${prgMsg.s}</span><span class="ptk_bar_goal"> $${goal - cart.total_price }</span><span>${prgMsg.e}</span>
          `;
          break;
        case 'achieved':
          barEl.innerHTML = `
            <span>${achievedMsg}</span>
          `;
          break;
        default:
          barEl.innerHTML = `
            <span>${initMsg.s}</span><span class="ptk_bar_goal"> $${goal}</span><span>${initMsg.e}</span>
          `;
          break;
      };

      return barEl_wrapper;
    },
    createBarStyleTag:function(style){ // param should be dt_style
      // create a style tag, with the custom style
      let styleTag = document.createElement('style');
      styleTag.setAttribute('data-bar','stylesheet');
      let {bgColor,opacity,txtColor,spTxtColor,fontFam,padding,fontSize} = style.barStyle,
          bgImg = style.bgImg,
          styleCode = style.customCode.style;
      let imgUrl;

      if(opacity.toString() !== '100'){
        bgColor = this.tool_hexToRgba(bgColor,opacity);
      }

      if(bgImg.size){
        imgUrl = 'url("'+window.URL.createObjectURL(bgImg)+'")';
      }

      styleTag.textContent = `
        #ptk_bar{
          padding:${padding}px 0;
          font-size:${fontSize? fontSize +'px' : '18px'};
          line-height:22.5px;
          text-align:center;
          position:relative;
          background-color:${bgColor};
          color:${txtColor};
          background-image:${imgUrl};
          font-family:${fontFam},sans-serif;
        }

        #ptk_bar .ptk_bar_goal{
          color:${spTxtColor};
        }
      `;

      if(styleCode.length > 0){
        styleTag.textContent += styleCode;
      }

      return styleTag;
    },
    handleFirstRenderCartCheckAndRender:function(model,curBar){
      let sumInCart, newBar, current = $(curBar);
      model.mt_fetchCartTotal().done(function(){
        sumInCart = model.dt_cart.total_price;
      });

      if(sumInCart === 0){
        newBar = this.createBarEl(model.dt_txt,model.dt_prop,model.dt_cart,'empty_cart');
      }else if(sumInCart < model.dt_txt.goal && sumInCart > 0){
        newBar = this.createBarEl(model.dt_txt,model.dt_prop,model.dt_cart,'cart_in_progress');
      }else{
        newBar = this.createBarEl(model.dt_txt,model.dt_prop,model.dt_cart,'achieved');
      };

      if(current.length){
        current.remove();
      }
      this.handlePagePosition(model.dt_about,newBar);

    },
    handleCartCheck:function(cartBtn,model,curBar){
      const self = this;
      let btn = $(cartBtn);
      btn.on('click',function(){
        let sumInCart, newBar, current = $(curBar);
        setTimeout(() => {
          model.mt_fetchCartTotal().done(function(){
            sumInCart = model.dt_cart.total_price;
  
            if(sumInCart === 0){
              newBar = self.createBarEl(model.dt_txt,model.dt_prop,model.dt_cart,'empty_cart');
            }else if(sumInCart < model.dt_txt.goal && sumInCart > 0){
              newBar = self.createBarEl(model.dt_txt,model.dt_prop,model.dt_cart,'cart_in_progress');
            }else{
              newBar = self.createBarEl(model.dt_txt,model.dt_prop,model.dt_cart,'achieved');
            };
            
            //append the bar to page
            if(current.length){
              current.remove();
            }
            self.handlePagePosition(model.dt_about,newBar);
          });
        }, 500);
        
      })
    },
    handlePagePosition:function(about,barEl){
      let {url,position,onPage,onTime,geoTg} = about;
      let bodyStyle,barStyle,ifOnTime=false;
      switch(position){
        case 'push-down':
          bodyStyle=true;
          barStyle={
            position:'absolute',
            top:0,
            zIndex:99999,
            width:'100%'
          };
          break;
        case 'push-down-visible':
          bodyStyle=true;
          barStyle={
            position:'fixed',
            top:0,
            zIndex:99999,
            width:'100%'
          };
          break;
        case 'overlap':
          barStyle={position:'absolute'};
          break;
        case 'overlap-visible':
          barStyle={
            position:'fixed',
            top:0,
            zIndex:99999,
            width:'100%'
          };
          break;
      };

      ifOnTime = this.checkIfShouldDisplay(onTime);

      if(ifOnTime){
        switch(onPage.selected){
          case 'all':
            this.appendBarToPage(barEl,bodyStyle,barStyle);
            break;
          case 'homepage':
            if(url+'/'===window.location.href || url === window.location.href){
              this.appendBarToPage(barEl,bodyStyle,barStyle);
            };
            break;
          case 'url':
            if(onPage.url+'/'===window.location.href || onPage.url === window.location.href){
              this.appendBarToPage(barEl,bodyStyle,barStyle);
            };
            break;
          case 'exclude':
            if(onPage.url+'/'!==window.location.href || onPage.url !== window.location.href){
              this.appendBarToPage(barEl,bodyStyle,barStyle);
            }
            break;
          default:
            this.appendBarToPage(barEl,bodyStyle,barStyle);
            break;
        }
      }
    },
    checkIfShouldDisplay:function(onTime){
      if(!onTime.start && !onTime.end) return true;
      if(onTime.start.length === 0 && onTime.end.length === 0) return true;
      let thisTime = new Date(),
          scheduled_start = new Date(onTime.start),
          scheduled_end = new Date(onTime.end);
      if(scheduled_start <= thisTime && scheduled_end >= thisTime){
        return true;
      }else{
        return false;
      }
    },
    appendBarToPage:function(barEl,bodyStyle,barStyle){
      $(barEl).css(barStyle);
      $(document.body).append(barEl);
      let barH = $(barEl).height();
      if(bodyStyle){
        bodyStyle={paddingTop:barH+'px'}
      }
      $(document.body).css(bodyStyle);
      console.log('finished rendering',new Date())
    },
    appendStyleTagToPage:function(styleTag){
      $(document.body).append(styleTag);
    },
    tool_hexToRgba:function(h,op){
      let r = 0, g = 0, b = 0;

      if (h.length == 4) {
        r = "0x" + h[1] + h[1];
        g = "0x" + h[2] + h[2];
        b = "0x" + h[3] + h[3];

      } else if (h.length == 7) {
        r = "0x" + h[1] + h[2];
        g = "0x" + h[3] + h[4];
        b = "0x" + h[5] + h[6];
      }
      
      return "rgba("+ +r + "," + +g + "," + +b + "," + op/100 + ")";
    }
  }
  controller.init(view,model);
})();