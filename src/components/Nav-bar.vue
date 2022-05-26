<template>
  <div class="container">
    <div class="title">
      <h1 class="titleTxt">Joe's Class</h1>
    </div>
    <div class="profile">
      <i class="fa-solid fa-user"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

.container {
  display: flex;
  height: 100px;
  background-color: #1a1c1a;
  font-family: "Poppins", sans-serif;
}

.title {
  flex: 4;
}

.titleTxt {
  padding-top: 20px;
  padding-left: 800px;
  font-weight: 500;
  color: white;
  font-size: 27px;
}

.profile {
  flex: 1;
}

.fa-user {
  color: white;
  padding: 15px;
  margin-left: 280px;
  font-size: 40px;
  border: 2px solid white;
  border-radius: 50%;
}
.visit {
  color: white;
  font-size: 24px;
}
</style>
