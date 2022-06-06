<template>
  <ContentBase>
    <div class="row">
      <div class="col-3 img-field">
        <UserprofileInfo :user="user" @follow="follow" @unfollow="unfollow" />
        <Userprofilewrite v-if="is_me" @post_a_post="post_a_post" />
      </div>
      <div class="col-9">
        <Userprofilepost
          :user="user"
          :posts="posts"
          @delete_a_post="delete_a_post"
        />
      </div>
    </div>
  </ContentBase>
</template>

<script>
import ContentBase from "@/components/contentbase.vue";
import UserprofileInfo from "@/components/userprofile/userprofileInfo.vue";
import Userprofilepost from "@/components/userprofile/userprofilepost.vue";
import { reactive } from "vue";
import Userprofilewrite from "@/components/userprofile/userprofilewrite.vue";
import { useRoute } from "vue-router";
import $ from "jquery";
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  name: "UserProfile",
  components: {
    ContentBase,
    UserprofileInfo,
    Userprofilepost,
    Userprofilewrite,
  },
  setup() {
    const store = useStore();
    const route = useRoute();
    const userId = parseInt(route.params.userId);
    // console.log(userId);
    const user = reactive({});
    const posts = reactive({});
    //获取用户信息
    $.ajax({
      url: "https://app165.acapp.acwing.com.cn/myspace/getinfo/",
      type: "GET",
      data: {
        user_id: userId,
      },
      headers: {
        Authorization: "Bearer " + store.state.user.access,
      },
      success(resp) {
        // console.log(resp);
        user.id = resp.id;
        user.username = resp.username;
        user.photo = resp.photo;
        user.followerCount = resp.followerCount;
        user.is_followed = resp.is_followed;
      },
    });
    //获取用户帖子
    $.ajax({
      url: "https://app165.acapp.acwing.com.cn/myspace/post/",
      type: "GET",
      data: {
        user_id: userId,
      },
      headers: {
        Authorization: "Bearer " + store.state.user.access,
      },
      success(resp) {
        // console.log(resp);
        posts.count = resp.length;
        posts.posts = resp;
      },
    });

    const follow = () => {
      if (user.is_followed) return;
      user.is_followed = true;
      user.followerCount++;
    };
    const unfollow = () => {
      if (!user.is_followed) return;
      user.is_followed = false;
      user.followerCount--;
    };

    const post_a_post = (content) => {
      posts.count++;
      posts.posts.unshift({
        id: posts.count,
        userId: 1,
        content: content,
      });
    };

    const delete_a_post = (post_id) => {
      posts.posts = posts.posts.filter((post) => post.id !== post_id);
      posts.count = posts.posts.length;
    };

    const is_me = computed(() => userId === store.state.user.id);

    return {
      user,
      follow,
      unfollow,
      posts,
      post_a_post,
      is_me,
      delete_a_post,
    };
  },
};
</script>

<style scoped>
.container {
  margin-top: 20px;
}
</style>
