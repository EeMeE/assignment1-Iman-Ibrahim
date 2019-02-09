<template>
  <el-form
    ref="form"
    :model="form"
    rules="rules"
    class="claimform"
    inline="true"
    :label-position="labelposition"
    label-width="120px"
  >
    <el-form-item
      label="First Name"
      prop="firstname"
      :rules="[
        {
          required: true,
          message: 'This is a required field',
          trigger: 'blur'
        }
      ]"
    >
      <el-input v-model="form.firstname" placeholder="John"></el-input>
    </el-form-item>
    <div style="margin: 20px;"></div>
    <el-form-item
      label="Last Name"
      prop="lastname"
      :rules="[
        {
          required: true,
          message: 'This is a required field',
          trigger: 'blur'
        }
      ]"
    >
      <el-input v-model="form.lastname" placeholder="Doe"></el-input>
    </el-form-item>
    <div style="margin: 20px;"></div>
    <el-form-item
      prop="email"
      label="Email"
      :rules="[
        {
          required: true,
          message: 'This is a required field',
          trigger: 'blur'
        },
        {
          type: 'email',
          message: 'Please input correct email address',
          trigger: ['blur', 'change']
        }
      ]"
    >
      <el-input v-model="form.email" placeholder="Email@example.com"></el-input>
    </el-form-item>
    <div style="margin: 20px;"></div>
    <el-form-item label="Subject Title">
      <el-input
        v-model="form.subtitle"
        placeholder="Include topic of your email"
      ></el-input>
    </el-form-item>
    <div style="margin: 20px;"></div>
    <el-form-item
      label="Claim Request"
      prop="request"
      :rules="[
        {
          required: true,
          message: 'This is a required field',
          trigger: 'blur'
        }
      ]"
    >
      <textarea
        rows="5"
        class="form-control"
        v-model="form.request"
        placeholder="Describe your request"
      ></textarea>
    </el-form-item>
    <div style="margin: 20px;"></div>
    <el-form-item label="Terms and Conditions:">
      <el-checkbox-group v-model="form.type" :max="1">
        <el-checkbox label="I agree" name="type" checked></el-checkbox>
      </el-checkbox-group>
    </el-form-item>
    <div style="margin: 20px;"></div>
    <el-form-item>
      <!-- <el-button type="primary" @click="onSubmit">Submit</el-button> -->
      <el-button type="primary" @click="onSubmit">Submit</el-button>
      <el-button @click="centerDialogVisible = true">Confirm</el-button>
    </el-form-item>
    <div style="margin: 20px;"></div>

    <el-dialog
      title="Confirmation"
      class="popup"
      :visible.sync="centerDialogVisible"
      width="100%"
      fullscreen="true"
      modal-append-to-body="true"
      center
    >
      <div style="margin: 20px;"></div>
      <span>Please confirm to submit information</span>
      <span slot="footer" class="dialog-footer">
        <el-button type="text" @click="centerDialogVisible = false"
          >Confirm</el-button
        >
        <el-button @click="centerDialogVisible = false">Cancel</el-button>
      </span>
    </el-dialog>
  </el-form>
</template>

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
