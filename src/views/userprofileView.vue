<template>
  <ContentBase>
    <div class="row">
      <div class="col-3">
       <UserprofileInfo></UserprofileInfo>
      </div>
      <div class="col-9">
        用户动态
      </div>
    </div>
  </ContentBase>
</template>

<script>
import ContentBase from "@/components/contentbase.vue";
import UserprofileInfo from "@/components/userprofile/userprofileInfo.vue";
// @ is an alias to /src

export default {
  name: "UserProfile",
  components: {
    ContentBase,
    UserprofileInfo
},
};
</script>
<style scoped>
.container {
  margin-top: 20px;
}
</style>
