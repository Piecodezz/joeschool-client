<template>
  <div class="container">
    <img class="subImg" src="../assets/logo.svg" alt="alt for the thing" />
    <h5 class="SubnameTxt">{{ subj.name }}</h5>
    <router-link :to="{ name: 'subjects', params: { id: subj._id } }"
      >Subjects</router-link
    >
  </div>
</template>

<script>
export default {
  name: "SubjectCard",
  props: ["subj"],
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Koulen&display=swap");

.container {
  height: 100px;
  display: flex;
  margin: 30px;
  margin-top: 60px;
  border-radius: 20px;
  width: 450px;
  background: #0f2027; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #2c5364,
    #203a43,
    #0f2027
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #2c5364,
    #203a43,
    #0f2027
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

.subImg {
  height: 50px;
  margin: 20px;
  margin-top: 25px;
}

.SubnameTxt {
  font-size: 32px;
  margin-top: 20px;
  font-family: "Koulen", cursive;
  color: white;
}
</style>
