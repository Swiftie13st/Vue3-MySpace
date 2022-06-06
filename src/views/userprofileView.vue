<template>
  <ContentBase>
    <div class="row">
      <div class="col-3">
        <UserprofileInfo :user="user" @follow="follow" @unfollow="unfollow" />
        <Userprofilewrite @post_a_post="post_a_post" />
      </div>
      <div class="col-9">
        <Userprofilepost :posts="posts" />
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

export default {
  name: "UserProfile",
  components: {
    ContentBase,
    UserprofileInfo,
    Userprofilepost,
    Userprofilewrite,
  },
  setup() {
    const route = useRoute();
    const userId = route.params.userId;
    console.log(userId);
    const user = reactive({
      id: 1,
      username: "UserName",
      lastName: "Bruce",
      firstName: "S",
      followerCount: 0,
      is_followed: false,
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

    const posts = reactive({
      count: 3,
      posts: [
        {
          id: 1,
          userId: 1,
          content: "帖子1",
        },
        {
          id: 2,
          userId: 1,
          content: "帖子帖子2",
        },
        {
          id: 3,
          userId: 1,
          content: "帖子帖子帖子3",
        },
      ],
    });

    const post_a_post = (content) => {
      posts.count++;
      posts.posts.unshift({
        id: posts.count,
        userId: 1,
        content: content,
      });
    };

    return {
      user,
      follow,
      unfollow,
      posts,
      post_a_post,
    };
  },
};
</script>

<style scoped>
.container {
  margin-top: 20px;
}
</style>
