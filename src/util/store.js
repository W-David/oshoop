export default {
    data () {
        return {
            cart: [],
            order: []
        }
    },
    methods: {
        getStore () {
            let store = window.localStorage.getItem('storeKey')
            if(store) {
                store = JSON.parse(store)
                this.cart = store.cart || []
                this.order = store.order || []
            }
        },
        setStore () {
            let store = {
                cart: this.cart,
                order: this.order
            }
            store = JSON.stringify(store)
            window.localStorage.setItem('storeKey', store)
        }
    }
}