<html>
    <head>
      <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
      <link href="/raf/raffle/dragdrop.css?id=2" rel="stylesheet" type="text/css">
      <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
      <script src="/raf/raffle/Sortable.min.js"></script>
      <script src="/raf/raffle/dragdrop.js?id=1"></script>

    </head>
    <body>
        <div id="content" class="content">
          	<h3>Upload Photos <span style="font-weight:normal;font-size:0.7em;">(max 4)</span></h3>
              <div class="photowrap tac ttn" id="photowrap">
                  <form class="tac nodrop" action="" enctype="multipart/form-data" id="imageform">
                    <div class="box_input">
                      <input accept="image/*" type="file" name="files[]" id="images" multiple />
                      <label for="images">
                      	<div>
                          	<i class="fa fa-camera-retro"></i>
                          </div>
                          <h4>
                      		Drag in photos <br> or click here.
                          </h4>
                      </label>
                    </div>
                  </form>
            </div>
            <div style="display:none;">
                <div class="nodrop dropped photo-box" id="template-pic">
                    <canvas class="showcanv"></canvas>
                    <canvas class="savecanv" style="display:none;"></canvas>
                    <div class="photo-rem">
                        <a class="tdn" onClick="delPic()">
                            <i class="fa fa-times"></i>
                        </a>
                    </div>
                    <div class="loading">
                        <i class="fa fa-spinner fa-spin"></i>
                        <div>Uploading...</div>
                    </div>
                </div>
            </div>
		     </div>
    </body>
</html>
