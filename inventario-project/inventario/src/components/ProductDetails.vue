<template>
    <div class="product-details">
        <div v-if="product">
            <div class="modal show d-block" tabindex="-1">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Modal title</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="closeModal"></button>
                        </div>
                        <div class="modal-body">
                            <h1>{{ product.sku }} / {{ product.name }}</h1>
                            <div>
                                <div>
                                    <span>$ {{ product.price.toFixed(2) }}</span>
                                </div>
                                <div>
                                    <span>x {{ product.quantity }}</span>
                                </div>
                            </div>
                            <div>
                                <input placeholder="Cantidad" type="number" v-model="quantity" />
                            </div>
                            <div>
                                <button @click="addProductInventory(product)">Agregar a inventario</button>
                                <button @click="removeProductInventory(product)">Quitar de inventario</button>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="closeModal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    data() {
        return {
            quantity: 1
        }
    },
    computed: {
        product() {
            return this.$store.state.selectedProduct
        }
    },
    methods: {
        closeModal() {
            this.$store.state.selectedProduct = null;
        },
        addProductInventory(product) {
            this.$store.commit("addProductInventory", {
                sku: product.sku,
                quantity: this.quantity
            })
        },
        removeProductInventory(product) {
            this.$store.commit("removeProductInventory", {
                sku: product.sku,
                quantity: this.quantity
            })
        },
    }
}
</script>

<style scoped>
    .product-details {
        flex-grow: 1;
        padding: 16px;
    }
</style>