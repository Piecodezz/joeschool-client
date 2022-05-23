<template>
    <div class="home">
        <div class="container">
            <div class="subjects">
                <h1 class="subTxt">Your Subjects</h1>
                <SubjectCards
                    :sub="Subjects"
                />
            </div>
            <div class="statAdd">
                <input v-model="SubName" type="text" placeholder="name here" class="name">
                <input v-model="SubPic" type="text" placeholder="link here" class="picLink"> 
                <textarea v-model="SubDesc" cols="30" rows="10" placeholder="ur description abt ur subject" class="desc"></textarea>
                <button @click="handleSubject" class="addSub">Add ur new Subject</button>
            </div>
        </div>
  </div>
</template>

<script>
import axios from 'axios'
import SubjectCards from "@/components/SubjectCrads.vue"

export default {
    name: 'HomeView',

    components:{
    SubjectCards,
    },

    data(){
        return{
            Subjects: {},
            SubName: '',
            SubDesc: '',
            SubPic: ''
        }
    },

    methods:{
       async handleSubject () {
            try{
                const res = await axios.post("http://localhost:5000/api/subjects/", {name: this.SubName, desc: this.SubDesc, pp: this.SubPic})
                console.log('wha')
            }catch(err) {}
        }
    },

     async created() {
    try {
        const response = await axios.get(`http://localhost:5000/api/subjects/`)
      this.Subjects = response.data
    } catch (e) {
        console.log(e)
    }
  }
}
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=BIZ+UDPGothic:wght@400;700&display=swap');

.home{
    background-color: #1c1c1b;
    height: 1000vh;
    flex-direction:column;
}

.subjects{
    height: 3vh;
    display:flex;
    flex-wrap: wrap;
    flex-direction: row;
    flex:2;
    justify-content: start;
} 

.subTxt{
    color:white;
    font-family: 'BIZ UDPGothic', sans-serif;
    height: 20px;
}

.statAdd{
    margin-top: 50vh;
}

.subCard{
    padding-top: 60px;
}

.name{
    height: 50px;
    margin-left: 50px;
    border: 2px solid teal;
    border-radius: 20px;
    padding: 10px;
}

.statAdd{
    display: flex;
    position: absolute;
    top: 30%;
    flex:1;
}

.picLink{
    height: 50px;
    margin-left: 50px;
    border: 2px solid teal;
    border-radius: 20px;
    padding: 10px;
}
.desc{
    height: 100px;
    margin-left: 50px;
    border: 2px solid teal;
    border-radius: 20px;
    padding: 10px;
}

.addSub{
background: #e83f3f;  /* fallback for old browsers */
padding: 10px;
border: 1px solid black;
color: white;
font-size:14px;
height: 60px;
border-radius: 30px ;
margin-left: 50px;

cursor: pointer;
margin-top: 20px;
}
</style>
