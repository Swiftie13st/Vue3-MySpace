<template>
  <div class="card">
    <div class="card-body">
      <div class="row">
        <!-- 头像 -->
        <div class="col-3">
          <img class="img-fluid"
            src="https://raw.githubusercontent.com/Swiftie13st/Figurebed/main/img/202206051712008.png"
            alt=""
          />
        </div>
        <!-- 用户信息 -->
        <div class="col-9">
            <div class="username">用户名</div>
            <div class="fans">粉丝数：123</div>
            <button type="button" class="btn btn-primary btn-sm">关注</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    name: "UserProfileInfo",

}
</script>

<style scoped>
img {
    border-radius: 50%;
}

.username{
    font-weight: bold;
}

.fans{
    font-size: 12px;
    color: gray;
}

button {
    padding: 2px 4px;
    font-size: 12px;
}


</style>
