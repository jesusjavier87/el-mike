import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            redirect: 'dashboard/basic-dashboard',
            component: () =>
                import ('@/layouts/Layout'),
            children: [
                // Components
                {
                    name: 'Alerts',
                    path: 'pages/alerts',
                    component: () =>
                        import ('@/views/pages/Alerts'),
                },
                {
                    name: 'Icons',
                    path: 'pages/icons',
                    component: () =>
                        import ('@/views/pages/Icons'),
                },

                {
                    name: 'Dashboard',
                    path: 'dashboard/basic-dashboard',
                    component: () =>
                        import ('@/views/dashboard/BasicDashboard'),
                },
                {
                    name: 'DateCliente',
                    path: 'pages/date-cliente',
                    component: () =>
                        import ('@/views/pages/DateCliente'),
                },
                {
                    name: 'Mascotas',
                    path: 'pages/mascotas',
                    component: () =>
                        import ('@/views/pages/Mascotas'),
                },
                {
                    name: 'DetaMascota',
                    path: 'pages/deta-mascotas',
                    component: () =>
                        import ('@/views/pages/DetaMascota'),
                },
                {
                    name: 'TerminoYCon',
                    path: 'pages/termino-ycon',
                    component: () =>
                        import ('@/views/pages/TerminoYCon'),
                },
                {
                    name: 'DetaAgenda',
                    path: 'pages/deta-agenda',
                    component: () =>
                        import ('@/views/pages/DetaAgenda'),
                },
                {
                    name: 'Chats',
                    path: 'pages/chats',
                    component: () =>
                        import ('@/views/pages/Chats'),
                },
                {
<<<<<<< HEAD
                    name: 'Login',
                    path: 'pages/login',
                    component: () =>
                        import ('@/views/pages/Login'),
                },
                {
                    name: 'registro',
                    path: 'pages/registro',
                    component: () =>
                        import ('@/views/pages/registro'),
                },
                {
                    name: 'RePass',
                    path: 'pages/repass',
                    component: () =>
                        import ('@/views/pages/RePass'),
                },
=======
                    name: 'Pagar',
                    path: 'pages/pagar',
                    component: () =>
                        import ('@/views/pages/pagar'),
                }
>>>>>>> 83095d1fa9183dfdee7d7964e51853656edccffa
            ]
        },

    ],
})