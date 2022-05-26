<template>
  <div class="container">
    <lesson-card
      v-for="lesson in lessonsP"
      :key="lesson._id"
      :lesson="lesson"
    />
  </div>
</template>

<script>
import LessonCard from "./LessonCard.vue";

export default {
  name: "LessonCards",
  components: {
    LessonCard,
  },
  props: {
    lessonsP: Object,
  },
};
</script>

<style scoped></style>
