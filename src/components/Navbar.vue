<template>
    <div>
        <div>
            <ul class="list">
                <li class="item">
                    <router-link class="link" to="/login">Login</router-link>  
                </li>
                <li class="item">
                    <router-link class="link" to="/register">Register</router-link>
                </li>
            </ul>
        </div>
    <router-view/>
    </div>
</template>

<script>
export default {
    name: "Navbar"
}
</script>

<style scoped>
    .list{
        display: flex;
        list-style: none;
        justify-content: space-around;
    }

    .link{
        text-decoration: none;
         font-weight: bold;
        color: white;
        background-color: teal;
        padding: 8px 16px
    }
</style>

