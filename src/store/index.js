import {createStore} from 'vuex'

export default createStore({
    state: {
        cartProducts: []
    },
    mutations:{
        setProduct(state,val){
            state.cartProducts.push(val)
        },
        removeProduct(state,id){
            state.cartProducts = state.cartProducts.filter(el => el.id !== id)
        },
        // Created method for locale storage that pushes storage data in out state's cartProducts array
        replaceProduct(state,val){
            state.cartProducts = val
        }
    },
    getters:{
        getProducts: state => {
            return state.cartProducts
        }
    }
})