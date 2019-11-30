function _(id){
  return document.getElementById(id);
}
function addPic(file){
  var l=$('.photo-box').length;
  if(l<2){
    $('#imageform').addClass('dropped');
  }
  if(l>5){
    alert("You have reached the image limit.");
    return false;
  }
  var id='file_'+Math.random().toString(36).substr(2, 9);;

  newSection = $('#template-pic').clone();
  newSection.prop('id', id);
  newSection.find(".showcanv").attr('id',id+'-canvas-show');
  newSection.find(".savecanv").attr('id',id+'-canvas-save');
  newSection.find("a").attr('onclick',"delPic('"+id+"')");
  newSection.find(".loading").show();
  $('#photowrap').prepend(newSection);

  var canvas = _(id+'-canvas-show');
  canvas.width=canvas.parentElement.clientWidth;
  canvas.height=canvas.parentElement.clientHeight;
  var img = new Image;
  img.src = URL.createObjectURL(file);
  img.onload = function() {
    // Resize the image for box
    var srcx=0;
    var srcy=0;
    var srcw=img.width;
    var srch=img.height;
    var neww = srcw, newh=srch;
    if(srcw>srch){
      var dw=srcw-srch;
      srcx=Math.floor(dw/2);
      neww=Math.floor(srcw-dw);
    }else if(srch>srcw){
      var dw=srch-srcw;
      srcy=Math.floor(dw/2);
      newh=Math.floor(srch-dw);
    }
    canvas.getContext('2d').drawImage(img, srcx, srcy, neww, newh,0,0, canvas.width, canvas.height);

    // Resize the image for upload
    canvas = _(id+'-canvas-save');
    var r = srcw/srch;
    var m=700;
    if(srcw>m||srch>m){
      if (r>1) {
        newh=m/r;
        neww=m;

      } else {
        newh=m;
        neww=m*r;
      }
    }else{
      newh=srch;
      neww=srcw;
    }
    canvas.width=neww;
    canvas.height=newh;
    canvas.getContext('2d').drawImage(img, 0, 0, srcw, srch,0,0, neww, newh);

    var imgData=canvas.toDataURL("image/jpeg",0.6);

    // Post to server

  }

  if($('.photo-box').length==5){
    $('#imageform').toggle();
  }
}
function delPic(id){
  var l=$('.photo-box').length;
  if(l>4){
    $('#imageform').toggle();
  }else if(l==2){
    $('#imageform').removeClass('dropped');
  }
  $('#'+id).remove();

  // Post to remove from server

}
$(document).ready(function(){
  var droppedFiles = false;
  $('#imageform').on('drag dragstart dragend dragover dragenter dragleave drop', function(e) {
    e.preventDefault();
    e.stopPropagation();
  })
  .on('dragover dragenter', function() {
    $('#imageform').addClass('is-dragover');
  })
  .on('dragleave dragend drop', function() {
    $('#imageform').removeClass('is-dragover');
  })
  .on('drop', function(e) {
    droppedFiles = e.originalEvent.dataTransfer.files;
    var n=droppedFiles.length;
    for(var i=0;i<n;i++){
      addPic(droppedFiles[i]);
    }
  });
  /*
  Sortable.create(_('photowrap'), {
    animation: 150,
    draggable: '.photo-box',
    handle: '.photo-box'
  });
  */
  var imgz = document.getElementById('images');
  imgz.addEventListener('change', handleFiles);
  function handleFiles(e) {
    var n=e.target.files.length;
    for(var i=0;i<n;i++){
      addPic(e.target.files[i]);
    }
  }
});
