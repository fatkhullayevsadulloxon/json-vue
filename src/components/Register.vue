<template>
    <div class="login">
    <h1>Ro'yxatdan o'tish</h1>
        <form @submit.prevent="handleSubmit" class="form">
            <div>
                <input v-model="first_name" type="text" placeholder="Ismingizni kiriting">
            </div>
            <div>
                <input v-model="last_name" type="text" placeholder="Familiyangizni kiriting">
            </div>
            <div>
                <input v-model="email" type="email" placeholder="Emailingiznin kiriting">
            </div>
            <div>
                <input v-model="password" type="password" placeholder="Parol kiriting">
            </div>
            <div>
                <input v-model="password_confirm" type="password" placeholder="Parolni qayta kiriting">
            </div>
            <button type="submit">Yuborish</button>
        </form>

    </div>
    
</template>

<script>
import axios from 'axios';
export default {
    name: "Register",
    data() {
        return {
            first_name: "",
            last_name: "",
            email: "",
            password: "",
            password_confirm: "",
        }
    },
    methods: {
        async handleSubmit() {
            await axios.post('register', {
                first_name: this.first_name,
                last_name: this.last_name,
                email: this.email,
                password: this.password,
                password_confirm: this.password_confirm,
            })

            this.$router.push('/login')
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
