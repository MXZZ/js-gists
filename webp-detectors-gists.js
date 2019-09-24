	
///////Canvas Based  Sync [ Warning: problem with firefox ]

function checkWebpSupport () {
     let webptest = document.createElement('canvas');
        if (!!(webptest.getContext && webptest.getContext('2d'))) {
            return webptest.toDataURL('image/webp').indexOf('data:image/webp') == 0;
        }
        return false;
}

///////Canvas mini version 
webp = e => document.createElement('canvas').toDataURL('image/webp').indexOf('data:image/webp') == 0;


///////Async Image loader
 
function checkWebpSupport(){

var webp = new Image();
  webp.onerror = function(){
    // not supported
  };
  webp.onload = function(){
    //supported
  };
  webp.src = 'data:image/webp;base64,UklGRjIAAABXRUJQVlA4ICYAAACyAgCdASoBAAEALmk0mk0iIiIiIgBoSygABc6zbAAA/v56QAAAAA==';
}
  
  
//////Promises ES6
    
function checkWebpSupport() {
  return new Promise(res => {
      const webP = new Image();
      webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
      webP.onload = webP.onerror = function () {
          res(webP.height === 2);
      };        
  })
};
checkWebpSupport().then(hasWebP => console.log(hasWebP));
  
  
