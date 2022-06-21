import { createWebHistory, createRouter } from 'vue-router'

import ProductosAdmin from '../components/ProductosAdmin.vue'
import PedidosAdmin from '../components/PedidosAdmin.vue'
import ProductosUsuario from '../components/ProductosUsuario.vue'
import FormEditProd from '../components/FormEditProd.vue'
import DetalleAdmin from '../components/DetalleAdmin.vue'
import VerCarrito from '../components/VerCarrito.vue'

const routes = [
    { path: '/', name: 'Home', component: ProductosUsuario },
    { path: '/ProductosAdmin', name: 'ProductosAdmin', component: ProductosAdmin },
    { path: '/PedidosAdmin', name: 'PedidosAdmin', component: PedidosAdmin },
    { path: '/VerCarrito', name: 'VerCarrito', component: VerCarrito },
    { path: '/ProductosUsuario', name: 'ProductosUsuario', component: ProductosUsuario },
    { path: '/FormEditProd/:id', name: 'FormEditProd', component: FormEditProd, props: true},
    { path: '/DetalleAdmin/:id', name: 'DetalleAdmin', component: DetalleAdmin, props: true},

]


const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router


