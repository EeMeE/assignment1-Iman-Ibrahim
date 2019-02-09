<template>
  <el-form
    ref="form"
    :model="form"
    label-width="120px"
    :label-position="labelPosition"
  >
    <el-form-item label="First Name">
      <el-input
        v-model="form.name"
        placeholder="First Name"
        label="right"
      ></el-input>
    </el-form-item>
    <div style="margin: 20px;"></div>
    <el-form-item label="Last Name">
      <el-input v-model="form.name" placeholder="Last Name"></el-input>
    </el-form-item>
    <div style="margin: 20px;"></div>
    <el-form-item
      prop="email"
      label="Email"
      :rules="[
        {
          required: true,
          message: 'Please input email address',
          trigger: 'blur'
        },
        {
          type: 'email',
          message: 'Please input correct email address',
          trigger: ['blur', 'change']
        }
      ]"
    >
      <el-input v-model="form.email"></el-input>
    </el-form-item>
    <div style="margin: 20px;"></div>
    <el-form-item label="Claim Request">
      <el-input
        type="textarea"
        v-model="form.desc"
        placeholder="Describe your request"
      ></el-input>
    </el-form-item>
    <div style="margin: 20px;"></div>
    <el-form-item label="Terms and Conditions">
      <el-checkbox-group v-model="form.type">
        <el-checkbox label="I agree" name="type"></el-checkbox>
        <el-checkbox label="I don't agree" name="type"></el-checkbox>
      </el-checkbox-group>
    </el-form-item>
    <div style="margin: 20px;"></div>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">Submit</el-button>
      <el-button>Cancel</el-button>
    </el-form-item>
    <div style="margin: 20px;"></div>
    <el-button type="text" @click="centerDialogVisible = true"
      >Click to open the Dialog</el-button
    >

    <el-dialog
      title="Warning"
      :visible.sync="centerDialogVisible"
      width="30%"
      center
    >
      <span>
        It should be noted that the content will not be aligned in center by
        default
      </span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="centerDialogVisible = false"
          >Confirm</el-button
        >
      </span>
    </el-dialog>
  </el-form>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>
<script src="./form.js"></script>
<style src="./form.css" scoped></style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
