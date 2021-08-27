<template>
    <div class="product-list">
        <table>
            <thead>
                <tr>
                    <th>
                        <span>SKU</span>
                    </th>
                    <th>
                        <span>NAME</span>
                    </th>
                    <th>
                        <span>PRICE</span>
                    </th>
                    <th>
                        <span>QUANTITY</span>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="product in products" :key="product.sku" @click="selectProduct(product)">
                        <td><span style="padding: 0px 8px;">{{ product.sku }}</span></td>
                        <td><span style="padding: 0px 8px;">{{ product.name }}</span></td>
                        <td><span style="padding: 0px 8px;">$ {{ (product.price).toFixed(2) }}</span></td>
                        <td><span style="padding: 0px 8px;">x {{ product.quantity }}</span></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import $ from "jquery"

export default {
    computed: {
        products() {
            return this.$store.state.products
        }
    },
    methods: {
        selectProduct(product) {
            this.$store.commit("selectProduct", product)
        }
    },
    mounted() {
        $("table").DataTable()
    },
}

// <div class="product-item" v-for="product in products" :key="product.sku">
//             <div @click="selectProduct(product)">
//                 <span style="padding: 0px 8px;">{{ product.sku }}</span>
//                 <span style="padding: 0px 8px;">{{ product.name }}</span>
//                 <span style="padding: 0px 8px;">$ {{ (product.price).toFixed(2) }}</span>
//                 <span style="padding: 0px 8px;">x {{ product.quantity }}</span>
//             </div>
//         </div>
</script>

<style scoped>
    .product-list {
        flex-grow: 1;
        border: 1px solid cornflowerblue;
        padding: 16px;
    }

    .product-item {
        padding: 8px;
    }

    .product-item > div {
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid gray;
        padding: 8px;
    }
    
    .product-item > div:hover {
        background-color: gainsboro;
    }
</style>