import Home from 'page/home';
import Order from 'page/order';
import Menu from 'page/Menu';

const ROUTES = [
    {
        name: 'home',
        path: '/',
        component: <Home />
    },
    {
        name: 'menu',
        path: '/menu',
        component: <Menu />
    },
    {
        name: 'order',
        path: '/order',
        component: <Order />
    },
    {
        name: 'service',
        path: '/service',
        component: <div>Service</div>
    },
    {
        name: 'notFound',
        path: '*',
        component: <div>not found</div>
    },
]

export default ROUTES
