export default {
  data() {
    return {
      labelposition: "right",
      form: {
        firstname: "",
        lastname: "",
        delivery: false,
        type: "1",
        resource: "",
        desc: "",
        subtitle: "",
        email: "",
        request: "",
        checkedornot: ["I agree", "I do not agree"]
      },

      centerDialogVisible: false
    };
  },

  methods: {
    onSubmit() {
      console.log("submit!");
    }
  }
};
