<template>
  <ContentBase>
    <form>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
        />
      </div>
      <div class="mb-3">
        <label for="Password" class="form-label">Password</label>
        <input
          type="password"
          class="form-control"
          id="Password"
        />
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </ContentBase>
</template>

<script>
import ContentBase from "@/components/contentbase.vue";
import { ref } from "vue";
export default {
  name: "LoginView",
  components: {
    ContentBase,
  },
};
</script>

<style scoped></style>
