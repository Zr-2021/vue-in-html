<!--最大化最小化组件封装-->
<template>
    <div class="header-title">
        <span class="title-name">{{ dialogTittle }}</span>
        <span 
            style="float: right; color: #909399; cursor: pointer;" 
            class="el-icon-close" 
            @click="() => closed"></span>
        <span 
            style="float: right; margin-right: 10px; color:#909399; cursor: pointer;" 
            :class="flodIconClass"
            @click="() => isFullscreen"></span>
    </div>
  </template>
  
  <script>
module.exports = {
    props: {
      dialogTittle: {
          type: String,
          default: () => ''
      },
      fullscreen: {
          type: Boolean,
          default: () => false
      }
    },
    data () {
      return {
        header_box: {
            'display': 'flex',
            'align-items': 'center'
        }
      }
    },
    computed: {
        flodIconClass() {
            return this.fullscreen ? 'el-icon-copy-document' : 'el-icon-full-screen';
        },
        isFullscreen() {
            if(!this.fullscreen){
                const dialogWrapperElement = document.querySelector('.mydialog');
                const dialogHeaderEl = dialogWrapperElement.querySelector('.el-dialog__header');
                const dragDom = dialogWrapperElement.querySelector('.el-dialog');

                dialogHeaderEl.style.cssText += ';cursor:move;'
                dragDom.style.cssText += ';top:0px;left:0px'
            }
            this.$emit('is-fullscreen', !this.fullscreen);
        },
        closed() {
            this.$emit('handle-closed', 2)
        }
    },
    created() {
    
    },
    methods: {
        
    },
    mounted() {
      
    },
  }
  </script>