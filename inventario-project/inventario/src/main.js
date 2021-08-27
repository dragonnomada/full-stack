import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"

import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'

const store = createStore({
    state() {
        return {
            selectedProduct: null,
            products: [
                // {
                //     sku: "123",
                //     name: "Coca Cola 600ml",
                //     price: 10.5,
                //     quantity: 15
                // },
                // {
                //     sku: "234",
                //     name: "Galletas Marías",
                //     price: 8.5,
                //     quantity: 3
                // },
            ]
        }
    },
    mutations: {
        getProductsAll(state) {
            fetch("http://localhost:5000/api/products").then(response => {
                return response.json()
            }).then(products => {
                state.products = products
                if (state.selectedProduct) {
                    state.selectedProduct = products.find(product => product.sku === state.selectedProduct.sku)
                }
            }).catch(error => {
                console.error(error)
            })
        },
        selectProduct(state, product) {
            state.selectedProduct = product
        },
        addProductInventory(state, { sku, quantity }) {
            // state.products = state.products.map(product => {
            //     if (product.sku === sku) {
            //         product.quantity += quantity
            //     }
            //     return product;
            // })

            fetch("http://localhost:5000/api/products/inventory/add", {
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ sku, quantity })
            }).then(async response => {
                if (response.status !== 200) {
                    const error = await response.text();
                    throw new Error(error);
                }

                return response.json()
            }).then(result => {
                console.log("addProductInventory", result)
            }).then(() => {
                store.commit("getProductsAll")
            }).catch(error => {
                console.warn(error)
            })
        },
        removeProductInventory(state, { sku, quantity }) {
            // state.products = state.products.map(product => {
            //     if (product.sku === sku) {
            //         if (product.quantity - quantity >= 0) {
            //             product.quantity -= quantity
            //         }
            //     }
            //     return product;
            // })

            fetch("http://localhost:5000/api/products/inventory/remove", {
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ sku, quantity })
            }).then(async response => {
                if (response.status !== 200) {
                    const error = await response.text();
                    throw new Error(error);
                }
                return response.json()
            }).then(result => {
                console.log("removeProductInventory", result)
            }).then(() => {
                store.commit("getProductsAll")
            }).catch(error => {
                console.warn(error)
            })
        },
    }
})

const app = createApp(App)

app.use(store)

app.mount('#app')

store.commit("getProductsAll")
