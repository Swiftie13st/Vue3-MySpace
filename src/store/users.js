import $ from "jquery";

const ModuleUser = {
  state: {
    id: "",
    username: "",
    photo: "",
    followerCount: 0,
  },
  getters: {},
  mutations: {},
  actions: {
    login(context, data) {
      $.ajax({
        url: "https://app165.acapp.acwing.com.cn/api/token/",
        type: "POST",
        data: {
          username: data.username,
          password: data.password,
        },
        success(resp) {
          console.log(resp);
        },
      });
    },
  },
  modules: {},
};

export default ModuleUser;
