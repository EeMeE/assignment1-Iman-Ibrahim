export default {
  data() {
    return {
      form: {
        name: "",

        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
        email: "",
        labelPosition: "right"
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
