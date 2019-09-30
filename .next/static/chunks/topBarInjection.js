console.log('script injection succeeded')

!(function(){
  let cont = document.createElement('div');
  let body = document.body;
  cont.setAttribute('style',"height:22px;background:#ddd;width:100%;position:absolute;top:0;left:0;")
  
  body.style.paddingTop = '22px';
  body.style.position = 'relative';
  body.appendChild(cont);
  console.log('done')
})();