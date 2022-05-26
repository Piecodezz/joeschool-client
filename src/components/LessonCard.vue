<template>
  <div class="container">
    <router-link :to="{ name: 'lessons', params: { id: lesson._id } }">
      {{ lesson.lessonName }}
    </router-link>
    <p class="date">{{ new Date(lesson.createdAt).toDateString() }}</p>
    <p class="diff">{{ lesson.diff }}</p>
    <p class="quan">{{ lesson.questions }}</p>
    <p class="time">{{ lesson.time }}</p>
  </div>
</template>

<script>
export default {
  name: "Lessoncard",
  props: {
    lesson: Object,
  },
};
</script>

<style scoped>
.container {
  height: 100px;
  display: flex;
}
</style>
