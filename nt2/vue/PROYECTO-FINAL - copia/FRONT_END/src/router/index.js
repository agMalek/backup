import { createWebHistory, createRouter } from 'vue-router'

import ProductosAdmin from '../components/ProductosAdmin.vue'
import PedidosAdmin from '../components/PedidosAdmin.vue'
import ProductosUsuario from '../components/ProductosUsuario.vue'
import FormEditProd from '../components/FormEditProd.vue'
import DetalleAdmin from '../components/DetalleAdmin.vue'
import DetalleCarrito from '../components/DetalleCarrito.vue'

const routes = [
    { path: '/', name: 'Home', component: ProductosAdmin },
    { path: '/ProductosAdmin', name: 'ProductosAdmin', component: ProductosAdmin },
    { path: '/PedidosAdmin', name: 'PedidosAdmin', component: PedidosAdmin },
    { path: '/ProductosUsuario', name: 'ProductosUsuario', component: ProductosUsuario },
    { path: '/FormEditProd/:id', name: 'FormEditProd', component: FormEditProd, props: true},
    { path: '/DetalleAdmin/:id', name: 'DetalleAdmin', component: DetalleAdmin, props: true},
    { path: '/DetalleCarrito/', name: 'DetalleCarrito', component: DetalleCarrito},

]


const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router


