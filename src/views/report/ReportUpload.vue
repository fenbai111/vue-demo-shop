<template>
  <div>
    <div class="card-header  line-bottom">
         <textarea class="form-control font-control-grey" v-model="comment" placeholder="其他想说的" ></textarea>
    </div>
    <div class="card-content">
        <div class="card-content-imglist">
            <ul>
                <li v-if="images.length < 9">
                    <img src="../../assets/img/xiangji2.png" @click="addImange()">
                </li>
                <li v-for="(item, index) in images" :key="index"><div class="img-cancel" @click.stop="removeImage(index)"></div>
                    <img :src="imgCropFilter(item)" @click.stop="viewImage(index)">
                </li>
            </ul>
        </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'page-tab-container',
    data() {
      return {
        active: 'tab-container1',
        comment: '',
        images: [],
      };
    }
  };
</script>

<style lang="css" scoped>
  .item {
    display: inline-block;
  }

  .nav {
    padding: 10px;
  }

  .link {
    color: inherit;
    padding: 20px;
    display: block;
  }
</style>
