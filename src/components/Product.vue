<template>
    <div>

        <div class="container"> 
            <h1>Texnomart</h1>
            <div class="row row-cols-1 row-cols-md-2 g-4">
                <div v-for="item in list" :key="item.id" class="col">
                    <div class="card shadow">
                        <img v-bind:src="item.thumbnail" class="card-img-top" alt="..." width="300" height="300">
                        <div class="card-body">
                        <h5 class="card-title">{{item.title}}</h5>
                        <p class="card-text">{{item.description}}</p>
                        <p>{{item.brand}}</p>
                        <p>{{item.stock}} stock</p>
                        <h2>{{item.price}}$</h2>
                     </div>
                    </div>

                </div>
            </div>
        </div>    
            <nav class="pagination1" aria-label="pagination">
                <ul class="pagination  pagination-sm">
                <li 
                class="item pe-auto" 
                v-for="pageNumber in total" 
                :key="pageNumber.id" 
                @click="changePageHandler(pageNumber)"
                >
                    <span class="page-link" :class="{'active' : pageNumber === skip}">{{pageNumber}}</span>
                </li>
                </ul>
            </nav>
    </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Product",
  data() {
    return {
      list: [],
      images: [],
      skip: 1,
      limit: 4,
      total: 120    
    };
  },
  methods: {
     async fetchmovie() {
         const response = await axios.get("https://dummyjson.com/products", {
            params: {
            limit: this.limit,
            skip: this.skip,
        }
    });
    this.list = response.data.products;
       },
       
    mounted(){
        this.fetchmovie()
    },
    changePageHandler(skip) {
        this.skip = skip 
        this.fetchmovie()
    },
  },
};
</script>

<style scoped>
    .pagination{
        width: 900px !important;
        overflow-x: scroll;
        margin: 0 auto
    }

   @media only screen and (max-width: 974px) {
        .pagination{
            width: 700px !important;
        }
    }
   @media only screen and (max-width: 742px) {
        .pagination{
            width: 500px !important;
        }
    }
   @media only screen and (max-width: 538px) {
        .pagination{
            width: 300px !important;
        }
    }
</style>

