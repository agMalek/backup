import { createWebHistory, createRouter } from 'vue-router'

import Binding from '../components/Binding.vue'
import ProductosAdmin from '../components/ProductosAdmin.vue'
import Atributos from '../components/Atributos.vue'
import Formulario from '../components/Formulario.vue'
import FormularioVue from '../components/FormularioVue.vue'
import Http from '../components/Http.vue'
import Padre from '../components/Padre.vue'

const routes = [
    { path: '/', name: 'Home', component: Binding },
    { path: '/binding', name: 'Binding', component: Binding },
    { path: '/ProductosAdmin', name: 'ProductosAdmin', component: ProductosAdmin },
    { path: '/atributos', name: 'Atributos', component: Atributos },
    { path: '/formulario', name: 'Formulario', component: Formulario },
    { path: '/formulariovue', name: 'FormularioVue', component: FormularioVue },
    { path: '/http', name: 'Http', component: Http },
    { path: '/padre/:contInicial/:colorDeFondo/:colorDeTexto/:subtitulo', name: 'Padre', component: Padre, props: true }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router


