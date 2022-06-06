<template>
  <div class="card">
    <div class="card-body">
      <div class="row">
        <!-- 头像 -->
        <div class="col-3 img-field">
          <img class="img-fluid" :src="user.photo" alt="" />
        </div>
        <!-- 用户信息 -->
        <div class="col-9">
          <div class="username">{{ user.username }}</div>
          <div class="fans">粉丝数：{{ user.followerCount }}</div>
          <button
            @click="follow"
            v-if="!user.is_followed"
            type="button"
            class="btn btn-secondary btn-sm"
          >
            关注
          </button>
          <button
            @click="unfollow"
            v-if="user.is_followed"
            type="button"
            class="btn btn-secondary btn-sm"
          >
            取关
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import { useStore } from "vuex";

export default {
  name: "UserProfileInfo",
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  setup(props, context) {
    const store = useStore();
    const follow = () => {
      //   console.log("follow");
      $.ajax({
        url: "https://app165.acapp.acwing.com.cn/myspace/follow/",
        type: "POST",
        data: {
          target_id: props.user.id,
        },
        headers: {
          Authorization: "Bearer " + store.state.user.access,
        },
        success(resp) {
          if (resp.result === "success") {
            context.emit("follow");
          }
        },
      });
    };

    const unfollow = () => {
      //   console.log("unfollow");
      $.ajax({
        url: "https://app165.acapp.acwing.com.cn/myspace/follow/",
        type: "POST",
        data: {
          target_id: props.user.id,
        },
        headers: {
          Authorization: "Bearer " + store.state.user.access,
        },
        success(resp) {
          if (resp.result === "success") {
            context.emit("unfollow");
          }
        },
      });
    };

    return {
      follow,
      unfollow,
    };
  },
};
</script>

<style scoped>
img {
  border-radius: 50%;
}

.username {
  font-weight: bold;
}

.fans {
  font-size: 12px;
  color: gray;
}

button {
  padding: 2px 4px;
  font-size: 12px;
}
.img-field {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
