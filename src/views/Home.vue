<template>
  <div style="position: relative;z-index: 16777271;">
    <!-- <el-button type="text" @click="openForm">打开嵌套表单的 Dialog</el-button> -->

    <el-dialog class="mydialog" :class="isFullscreen ? '' : 'dialogClass_his'"
        custom-class="handleDialogClass" width="800px" :fullscreen="isFullscreen"
       :visible.sync="dialogFormVisible" :show-close="false" :close-on-click-modal="false"
        :close-on-press-escape="true" v-drag>

       <dialog-header slot="title" dialog-tittle="新增" :fullscreen="isFullscreen" @handle-closed="dialogClose"
            @is-fullscreen="onFullscreen"></dialog-header>
            
       <form-create :rule="rule" v-model="fApi" :option="options" :value.sync="value"/>
    </el-dialog>
  </div>
</template>

<script>
module.exports = {
  components:{
      'dialog-header':dialogHeader,
  },
  
  data(){
    return {
        isFullscreen: false,
        dialogFormVisible:true,
                fApi:{},
                value:{},
                options:{
                    onSubmit:(formData)=>{
                        alert(JSON.stringify(formData))
                    }
                },
                rule:[
                    {
                      type: "upload",
    field: "pic",
    title: "轮播图",
    value: [
        'http://img1.touxiang.cn/uploads/20131030/30-075657_191.jpg',
        'http://img1.touxiang.cn/uploads/20131030/30-075657_191.jpg'
        ],
    props: {
        type:"select",
        uploadType:"image",
        action: "/upload.php",
        name:"pic",
        multiple: true,
        accept:"image\/*",
        limit: 2,
        onSuccess:function (res, file) {
            file.url = res.data.filePath;
        }
    },
                    }
                ]
            }
      // return {
      //     dialogFormVisible:false,
      //     fApi:{},
      //     value:{'64b8aa33a20c5f4de8385f59':'111',Fim85zm56kzew:'2',Fckn5zm56l4jf:true,Fdik1nw5ftyphy:'11:11:11',F43j1nw5fu0z4x:'hdfsafhdshp'},
      //     options:{},
      //     rule:[]
      // }
  },
  methods: {
    //是否为全屏函数
    onFullscreen(fullscreen) {
        this.isFullscreen = fullscreen;
    },
    //关闭事件
    dialogClose() {
        this.dialogFormVisible = false;
    },
      openForm() {
          this.dialogFormVisible = true;
          // this.fetchFc();
      },

    fetchFc() {
      fetch('http://127.0.0.1:8888/formCreateDesignerServlet?parentId=' + '63298a2f3acab98cbdca06f6', {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        },
      })
        .then(response => response.json())
        .then(res => {
          // 处理响应数据
          this.rule = res.data.Rule;
          this.options = res.data.Options;
        })
        .catch(error => {
          // 处理错误
          console.error(error);
        });
    }
  },
  mounted() {
  //   this.fetchFc();
  window.openForm = this.openForm
  }
};
</script>

<style>
.el-picker-panel {
  z-index: 16777290 !important;
}
.formDialog {
 z-index: 16777271;
}
</style>
