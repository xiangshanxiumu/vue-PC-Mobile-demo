<template>
  <div class="imgUpload-wrap">
    <li v-for="item in imgs" class="upLoadFileWrap">
      <span class="img_font">图片</span>
      <input
        type="file"
        accept="image/*"
        name="upload"
        id="upload"
        multiple
        @change="fileChange"
        v-if="!item"
      />
      <div class="imgShowBox" v-else>
        <img :src="item" class="imgShow" @click="scaleLargeImg(item)" />
        <span class="deleteimg" @click="deleteImg(item)">X</span>
      </div>
    </li>
  </div>
</template>
<script>
export default {
  name: "ImgUpload",
  data() {
    return {
    //   imgs: [{ imgId: "", imgName: "", imgData: "" }]
    imgs:[""]
    };
  },
  mounted() {
  },
  methods: {
    fileChange (e) {
      let files = e.target.files;
      let type = files[0].type.split("/")[0];
      if (type != "image") {
          alertMsg("请上传图片");
          return;
      }
      //let size = Math.floor(file.size / 1024 / 1024);
        //if (size > 3) {
        //  alert('图片大小不得超过3M');
        //  return;
        //};
      for (let i = 0; i < files.length; i++) {
          let reader = new FileReader();
          reader.readAsDataURL(files[i]);
          reader.onloadstart = function() {
            //用以在上传前加入一些事件或效果，如载入中...的动画效果
          };
          let _this = this;
          reader.onloadend = function(e) {
            let dataURL = this.result;
            let imaged = new Image();
            imaged.src = dataURL;
            imaged.onload = function() {
              //利用canvas对图片进行压缩
              let canvas = document.createElement("canvas");
              let ctx = canvas.getContext("2d");
              let w = 0;
              let h = 0;
              if (this.width > this.height) {
                h = 1000;
                let scale = this.width / this.height;
                h = h > this.height ? this.height : h;
                w = h * scale;
              } else {
                w = 1000;
                let scale = this.width / this.height;
                w = w > this.width ? this.width : w;
                h = w / scale;
              }
              let anw = document.createAttribute("width");
              let anh = document.createAttribute("height");
              if (this.width > this.height) {
                anw.value = h;
                anh.value = w;
              } else {
                anw.value = w;
                anh.value = h;
              }
              canvas.setAttributeNode(anw);
              canvas.setAttributeNode(anh);
              if (this.width > this.height) {
                ctx.translate(h, 0);
                ctx.rotate((90 * Math.PI) / 180);
                ctx.drawImage(this, 0, 0, w, h);
                ctx.restore();
              } else {
                ctx.drawImage(this, 0, 0, w, h);
              }
              let dataURL = canvas.toDataURL("image/jpeg");
              // console.log(dataURL)
             console.log(_this)
              _this.imgs.push(dataURL);
              //回调函数用以向数据库提交数据
              // _this.callback(dataURL);
            };
          };
        }
        console.log(this.imgs)
    },
    scaleLargeImg(item) {},
    deleteImg(img) {
        console.log(img)
        console.log(this.imgs)
        this.imgs.filter(item=>{
            return item != img
        })
    }
  }
};
</script>
<style scoped>
.imgUpload-wrap {
  width:inherit;
  display: flex;
  flex-wrap:wrap;
}
.upLoadFileWrap {
    width:4.5rem;
    height:4.5rem;
    background-color: #9c9c9c;
  background-image: url("../../assets/img/imgUpload/Plus.png");
  background-size: contain;
    margin:0.5rem;
    border-radius: 0.25rem;
    position: relative;
}
.img_font{
    position: absolute;
    font-size: 1rem;
    color:#9c9c9c;
    bottom:0.25rem;
    left:50%;
    transform: translateX(-50%)
}
#upload{
    width:inherit;
    height:inherit;
    opacity: 0;
    filter: alpha(opacity=0);
}
.imgShowBox {
  width: inherit;
  height: inherit;
  position: relative;
}
.imgShow {
  width: inherit;
  height: inherit;
}
.deleteimg{
    width:1.5rem;
    height:1.5rem;
    position: absolute;
    top:-0.5rem;
    left:-0.5rem;
    /* background-image: url("../../img/mailbox/deleteAddedPictures.png");
    background-size: contain; */
}






</style>