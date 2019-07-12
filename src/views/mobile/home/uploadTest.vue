<template>
<div class="testWrap">
    <ImgUpload/>
</div>
</template>
<script>
import ImgUpload from '@/components/mobile/ImgUpload';
export default {
 name:'uploadTest',
 components:{
     ImgUpload
 }
}
</script>
<style scoped>
.testWrap{
    width:100%;
    height:100%;
}
</style>