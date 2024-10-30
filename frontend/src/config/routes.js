import Auth from "../components/auth";
import Home from "../components/home";
import Inauth from "../components/inauth";
import Register from "../components/register";
import Live from '../components/live';
import Health from '../components/health'
import promotions from "../components/promotions";
import Admin from "../components/admin"

export const publicRoutes=[
    {
        name:'Главная',
        path:'/',
        component:Home
    },
    {
        name:'Проживание',
        path:'/live',
        component:Live
    },
    {
        name: 'Лечение',
        path:'/health',
        component:Health
    },
    {
        name: 'Акции',
        path: '/promotions',
        component:promotions
    },
    {
        name:'Регистрация',
        path:'/register',
        component:Register
    },
    {
        name:'Авторизация',
        path:'/auth',
        component:Auth
    },
    {
        name:'Админ',
        path:'admin',
        component:Admin
        
    }

];

export const authRoutes =[

];

export const adminRoutes =[
    
];