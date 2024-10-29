import Auth from "../components/auth";
import Home from "../components/home";
import Inauth from "../components/inauth";
import Register from "../components/register";

export const publicRoutes=[
    {
        name:'Главная',
        path:'/',
        component:Home
    },
    {
        name:'Проживание',
        path:'/live'
    },
    {
        name: 'Лечение',
        path:'/health'
    },
    {
        name: 'Акции',
        path: '/contacts'
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

];

export const authRoutes =[

];

export const adminRoutes =[
    
];