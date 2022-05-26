<template>
  <div class="container">
    {{ name }}
    {{ diff }}
    {{ time }}
    {{ questions }}
    {{ sub }}
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "LessonView",
  data() {
    return {
      name: "",
      date: "",
      diff: "",
      questions: "",
      time: "",
      sub: "",
    };
  },
  async mounted() {
    const lesson_id = this.$route.params.id;

    const res = await axios.get(
      `http://localhost:5000/api/lessons/${lesson_id}`
    );

    (this.name = res.data.lessonName),
      (this.date = res.data.CreatedAt),
      (this.diff = res.data.diff),
      (this.questions = res.data.questions),
      (this.time = res.data.questions);
    this.sub = res.data.sub;

    //Lesson stuff
    const resQuestion = await axios.get(
      `http://localhost:5000/api/questions/`,
      {
        params: {
          lesub: `${this.name.replace(/\s+/g, "")}.${this.sub}`,
        },
      }
    );

    console.log(resQuestion);
    console.log("hi");
  },
};
</script>

<style scoped></style>
