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
                    name: 'Profile',
                    path: 'pages/profile',
                    component: () =>
                        import ('@/views/pages/Profile'),
                },

                {
                    name: 'Icons',
                    path: 'pages/icons',
                    component: () =>
                        import ('@/views/pages/Icons'),
                },

                {
                    name: 'TableSimple',
                    path: 'pages/tables-simple',
                    component: () =>
                        import ('@/views/pages/TableSimple'),
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
                    name: 'PageChat',
                    path: 'pages/page-chat',
                    component: () =>
                        import ('@/views/pages/PageChat'),
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
                    name: 'Agenda',
                    path: 'pages/agenda',
                    component: () =>
                        import ('@/views/pages/Agenda'),
                },
                {
                    name: 'EditPerfil',
                    path: 'pages/edit-perfil',
                    component: () =>
                        import ('@/views/pages/EditPerfil'),
                },
                {
                    name: 'TerminoYCon',
                    path: 'pages/termino-ycon',
                    component: () =>
                        import ('@/views/pages/TerminoYCon'),
                },
                {
                    name: 'PagePago',
                    path: 'pages/page-pago',
                    component: () =>
                        import ('@/views/pages/PagePago'),
                },
                {
                    name: 'DetaAgenda',
                    path: 'pages/deta-agenda',
                    component: () =>
                        import ('@/views/pages/DetaAgenda'),
                },
                {
                    name: 'Perfil',
                    path: 'pages/perfil',
                    component: () =>
                        import ('@/views/pages/Perfil'),
                }
            ]
        },

    ],
})