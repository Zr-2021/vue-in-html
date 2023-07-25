<template>
  <div style="position: relative;z-index: 16777271;">
    <el-button type="text" @click="openForm">打开嵌套表单的 Dialog</el-button>

    <el-dialog title="收货地址" width="800px" :visible.sync="dialogFormVisible">
       <form-create :rule="rule" v-model="fApi" :option="options" :value.sync="value"/>
    </el-dialog>
  </div>
</template>

<script>
module.exports = {
  data(){
      return {
          dialogFormVisible:false,
          fApi:{},
          value:{'64b8aa33a20c5f4de8385f59':'111',Fim85zm56kzew:'2',Fckn5zm56l4jf:true,Fdik1nw5ftyphy:'11:11:11',F43j1nw5fu0z4x:'hdfsafhdshp'},
          options:{},
          rule:[]
      }
  },
  methods: {
      openForm() {
          this.dialogFormVisible = true;
          this.fetchFc();
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
.formDialog {
 z-index: 16777271;
}
</style>
