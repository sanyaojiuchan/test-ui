<template>
  <div id="app">
    <my-form :model="model">
        <my-form-item label="用户名">
            <my-input placeholder="请输入" v-model="model.username" width="200px"></my-input>
        </my-form-item>
    <my-form-item label="单选框">
            <my-switch v-model="model.active"></my-switch>
        </my-form-item>


        <my-form-item label="单选框">
            <my-button >1111111</my-button>
        </my-form-item>
    </my-form>
    
  </div>
</template>
<script>
export default {
  data() {
    return {
     model:{
         active:true,
         username:''
     }
    };
  },
  
};
</script>
<style lang="less"></style>
