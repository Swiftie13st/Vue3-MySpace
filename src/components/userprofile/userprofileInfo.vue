<template>
  <div class="card">
    <div class="card-body">
      <div class="row">
        <!-- 头像 -->
        <div class="col-3">
          <img
            class="img-fluid"
            src="https://raw.githubusercontent.com/Swiftie13st/Figurebed/main/img/202206051712008.png"
            alt=""
          />
        </div>
        <!-- 用户信息 -->
        <div class="col-9">
          <div class="username">{{ fullName }}</div>
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
import { computed } from "vue";
export default {
  name: "UserProfileInfo",
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  setup(props, context) {
    let fullName = computed(
      () => props.user.lastName + " " + props.user.firstName
    );

    const follow = () => {
    //   console.log("follow");
      context.emit("follow");
    };

    const unfollow = () => {
    //   console.log("unfollow");
      context.emit("unfollow");
    };

    return {
      fullName,
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
</style>
