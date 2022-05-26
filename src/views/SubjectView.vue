<template>
  <div class="container">
    <div class="subject">
      <img class="subjectPP" src="../assets/logo.svg" alt="subjectPP" />
      <h1 v-show="!updateMode" class="titleTXt">{{ name }}</h1>
      <input
        v-model="Sname"
        :placeholder="name"
        class="nameIn"
        v-show="updateMode"
        type="text"
      />
      <p v-show="!updateMode" class="desc">{{ desc }}</p>
      <input
        v-model="Sdesc"
        :placeholder="desc"
        class="descIn"
        v-show="updateMode"
        type="text"
      />
      <input
        v-model="Spic"
        :placeholder="pic"
        class="picIn"
        v-show="updateMode"
        type="text"
      />
      <i @click="updateMode = true" class="fa-solid fa-pen-to-square"></i>
      <i
        v-show="updateMode"
        @click="handleUpdate"
        class="fa-solid fa-check"
      ></i>
      <i @click="handleDelete" class="fa-solid fa-trash"></i>
    </div>
    <div class="lesson">
      <h1 class="lessonTxt">Your Lessons</h1>
      <Lessoncards :lessonsP="lessons" />
    </div>

    <input v-model="Sname" placeholder="name" type="text" />
    <input v-model="Sdiff" placeholder="difficulty" type="text" />
    <input v-model="Stime" placeholder="time" type="text" />
    <input v-model="Squestions" placeholder="num of Qs" type="text" />
  </div>
</template>

<script>
import axios from "axios";
import router from "../router/index.js";
import Lessoncards from "../components/LessonsCards.vue";

export default {
  name: "SubjectView",
  data() {
    return {
      name: "",
      desc: "",
      pic: "",
      Sname: "",
      Sdesc: "",
      Spic: "",
      updateMode: false,
      lessons: {},
    };
  },
  async mounted() {
    //Subject stuff
    const subject_id = this.$route.params.id;

    const res = await axios.get(
      `http://localhost:5000/api/subjects/${subject_id}`
    );

    (this.name = res.data.name),
      (this.desc = res.data.desc),
      (this.pic = res.data.pp);

    //Lesson stuff
    const resLesson = await axios.get(`http://localhost:5000/api/lessons/`, {
      params: {
        subject: this.name,
      },
    });

    const lessons = JSON.parse(JSON.stringify(resLesson.data));

    console.log(lessons);

    this.lessons = lessons;
  },
  methods: {
    async handleDelete() {
      await axios.delete(
        `http://localhost:5000/api/subjects/${this.$route.params.id}`
      );
      router.push("/");
    },
    async handleUpdate() {
      await axios.put(
        `http://localhost:5000/api/subjects/${this.$route.params.id}`,
        {
          name: this.Sname,
          desc: this.Sdesc,
          pp: this.Spic,
        }
      );

      this.updateMode = false;
      router.go();
    },
  },
  components: {
    Lessoncards,
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@600&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@400&display=swap");

.container {
  display: flex;
  background-color: grey;
  flex-direction: column;
}

.subject {
  display: flex;
  flex-direction: row;
  background-color: rgb(34, 170, 100);
  width: 100vw;
  height: 30vh;
  z-index: 100;
}

.subjectPP {
  height: 200px;
  width: 200px;
  margin-top: 50px;
  margin-left: 30px;
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  background-color: rgb(30, 31, 32, 0.5);
}

.titleTXt {
  color: white;
  font-family: "Raleway", sans-serif;
  text-transform: uppercase;
  font-size: 60px;
  margin-top: 50px;
  margin-left: 30px;
  text-decoration: underline;
}

.desc {
  color: white;
  font-family: "Quicksand", sans-serif;
  font-size: 24px;
  position: absolute;
  top: 25%;
  left: 14%;
  text-transform: capitalize;
}

.fa-pen-to-square {
  color: white;
  font-size: 32px;
  margin-top: 50px;
  position: absolute;
  right: 6%;
  cursor: pointer;
}

.fa-trash {
  color: white;
  font-size: 32px;
  margin-top: 50px;
  position: absolute;
  right: 3%;
  cursor: pointer;
}

.nameIn {
  height: 50px;
  margin-top: 70px;
  margin-left: 50px;
}

.descIn {
  height: 100px;
  margin-top: 130px;
  width: 300px;
  margin-left: 30px;
}

.picIn {
  height: 50px;
  margin-top: 100px;
  margin-left: 40px;
}

.fa-check {
  color: white;
  font-size: 32px;
  margin-top: 50px;
  position: absolute;
  right: 9%;
  cursor: pointer;
}

.lesson {
  background-color: rgba(0, 0, 0, 0.801);
  min-height: calc(70vh - 100px);
}

.lessonTxt {
  font-family: "Quicksand", sans-serif;
  font-size: 56px;
  margin-top: 20px;
  margin-left: 50px;
  color: white;
}
</style>
