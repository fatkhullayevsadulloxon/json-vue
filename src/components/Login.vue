<template>
    <div class="login">
    <h1>Ro'yxatdan o'tish</h1>
        <form @submit.prevent="handleSubmit" class="form">
            <div>
                <input type="email" v-model="email" placeholder="Email kiriting">
            </div>
            <div>
                <input type="password" v-model="password" placeholder="Parol kiriting">
            </div>
             <button type="submit">Yuborish</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: "Login",
    data() {
        return {
            email: "",
            password: ""
        }
    },

    methods: {
        async handleSubmit() {
            const response = await axios.post('login',{
                email: this.email,
                password: this.password,
            })
            
            console.log(response)
        }
    },
   
}
</script>

<style scoped>
    .form input{
        margin-top: 10px;
        border: none;
        background-color: whitesmoke;
        width: 400px;
        height: 50px;
        outline: none;
        border-radius: 5px;
    }

    .form input::placeholder{
        padding-left: 10px
    }

     .form button{
        border: none;
        padding: 20px 80px;
        margin-top: 20px;
        border-radius: 5px;
        background-color: teal;
        color: white;
        cursor: pointer;
    }

    .form button:hover{
        opacity: 0.8;
        transition: all 0.4s
    }
    .form button:active{
        opacity: 0.4;
        transition: all 0.4s
    }
</style>
