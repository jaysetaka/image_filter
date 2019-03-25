const canvas = document.getElementById('canvas');
const ctx =canvas.getContext('2d');
let img = new Image();
let fileName = '';
const downloadBtn = document.getElementById('download-btn');
const uploadFile = document.getElementById('upload-file');
const revertBtn = document.getElementById('revert-btn');



// add filters and effects
//using event daligation instead of adding an eventListner on every button
document.addEventListener('click', (e)=>{
  //target everything with the class of filter-btn
  if(e.target.classList.contains('filter-btn')){
    //checking the individual classes of button clicked = brightness add
    if(e.target.classList.contains('brightness-add')){
      Caman('#canvas', img, function(){
        this.brightness(5).render();
      });
       //checking the individual classes of button clicked = brightness remove
    }else if(e.target.classList.contains('brightness-remove')){
        Caman('#canvas', img, function(){
          this.brightness(-5).render();
        });
     //checking the individual classes of button clicked = contrast add
    }else if(e.target.classList.contains('contrast-add')){
        Caman('#canvas', img, function(){
          this.contrast(5).render();
        });
      //checking the individual classes of button clicked = contrast remove
    }else if(e.target.classList.contains('contrast-remove')){
        Caman('#canvas', img, function(){
          this.contrast(-5).render();
        });
      //checking the individual classes of button clicked = saturation add
    }else if(e.target.classList.contains('saturation-add')){
      Caman('#canvas', img, function(){
        this.saturation(5).render();
      });
      //checking the individual classes of button clicked = saturation remove
    }else if(e.target.classList.contains('saturation-remove')){
      Caman('#canvas', img, function(){
        this.saturation(-5).render();
      });
      //checking the individual classes of button clicked = vibrance add
    }else if(e.target.classList.contains('vibrance-add')){
      Caman('#canvas', img, function(){
        this.vibrance(5).render();
      });
      //checking the individual classes of button clicked = vibrance remove
    }else if(e.target.classList.contains('vibrance-remove')){
      Caman('#canvas', img, function(){
        this.vibrance(-5).render();
      });
      //checking the individual classes of button clicked = vintage add
    }else if(e.target.classList.contains('vintage-add')){
      Caman('#canvas', img, function(){
        this.vintage().render();
      });
      //checking the individual classes of button clicked = lomo add
    }else if(e.target.classList.contains('lomo-add')){
      Caman('#canvas', img, function(){
        this.lomo().render();
      });
      //checking the individual classes of button clicked = clarity add
    }else if(e.target.classList.contains('clarity-add')){
      Caman('#canvas', img, function(){
        this.clarity().render();
      });
       //checking the individual classes of button clicked = sin city add
    }else if(e.target.classList.contains('sincity-add')){
      Caman('#canvas', img, function(){
        this.sinCity().render();
      });
       //checking the individual classes of button clicked = crossprocess add
    }else if(e.target.classList.contains('crossprocess-add')){
      Caman('#canvas', img, function(){
        this.crossProcess().render();
      });
       //checking the individual classes of button clicked = pinhole add
    }else if(e.target.classList.contains('pinhole-add')){
      Caman('#canvas', img, function(){
        this.pinhole().render();
      });
       //checking the individual classes of button clicked = nostalgia add
    }else if(e.target.classList.contains('nostalgia-add')){
      Caman('#canvas', img, function(){
        this.nostalgia().render();
      });
       //checking the individual classes of button clicked = hermajesty add
    }else if(e.target.classList.contains('hermajesty-add')){
      Caman('#canvas', img, function(){
        this.herMajesty().render();
      });
    }
  }
});


// revert filters

revertBtn.addEventListener('click', ()=>{
  Caman('#canvas', img, function(){
    this.revert();
  });
});


// upload File
uploadFile.addEventListener('change', (e)=>{
  // Get File
  const file = document.getElementById('upload-file').files[0];
  //init filereader
  const reader = new FileReader();
  if(file){
    // set file name
    fileName = file.name;
    // read data url
    reader.readAsDataURL(file);
  }
  // add image to canvas
  reader.addEventListener(
    'load', 
    ()=>{
    // create img
    img = new Image();
    // set source
    img.src = reader.result;
    // on image load add to canvas
    img.onload = function(){
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0, img.width, img.height);
      canvas.removeAttribute('data-caman-id');
    }
  }, false);
});

// DOWNLOAD EVENT

downloadBtn.addEventListener('click', (e)=>{
  // get file extension
  const fileExtension = fileName.slice(-4);  //slice the .jpeg

  // init file name
  let newFileName;

  //check image type/extension 
  if(fileExtension === '.jpg' || fileExtension === '.png'){
    newFileName = fileName.substring(0, fileName.length - 4) + '-edited.jpg';
  }

  // call download
  download(canvas, newFileName);
});


// download function
function download(canvas, filename){
  // init event
  let e;
  // create link
  const link = document.createElement('a');

  // set properties
  link.download = filename;
  link.href = canvas.toDataURL('image/jpeg', 0.8);
  // new mouse event
  e = new MouseEvent('click');
  // dispatch event
  link.dispatchEvent(e);
}

