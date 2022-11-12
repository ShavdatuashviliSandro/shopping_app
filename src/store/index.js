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
        }
    },
    getters:{
        getProducts: state => {
            return state.cartProducts
        }
    }
})