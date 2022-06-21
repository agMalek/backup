import { createStore } from 'vuex'

export default createStore({
    state() {
        return {
            carrito: []
        }
    },
    actions: {
        agregar({commit}, prod) {
            commit('agregar', prod)
        }
    },
    mutations: {
        agregar(state,prod) {
            const aux = state.carrito.find(producto => producto.idProd == prod.idProd)
            if(aux != null){
                aux.cantidad += Number.parseInt(prod.cantidad)
            }
            else{
                state.carrito.push(prod)
            }
        }   
    }
})