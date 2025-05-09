import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import HomeLayouts from '../Layouts/HomeLayouts';
import About from '../components/About';
import Contact from '../components/Contact';
import Categories from '../components/Categories';
import NewArrival from '../components/NewArrival';
import CategeoriesNews from '../components/CategeoriesNews';
import ElectronicsDetails from '../components/ElectronicsDetails';
import Setting from '../components/Profile/Setting';
import Profile from '../components/Profile/Profile';
import Register from '../components/pages/Register';
import Login from '../components/pages/Login';
import AddToCart from '../components/AddToCart';
import FashonDetails from '../components/FashonDetails';
import ComputerDetails from '../ComputerDetails';


const Router = createBrowserRouter([
    {
        path: '/',
        element:<HomeLayouts></HomeLayouts>,
        children: [
            {
                path: '/categories/:category',
                element: <CategeoriesNews />,
                loader: ({ params }) =>
                    fetch(`https://trendbazar-server.onrender.com/products?category=${params.category}`)
                
            },
            {
                 
            }
        ]
    },
    {
        path: '/electronics/:id',
        element:<ElectronicsDetails></ElectronicsDetails>,
        loader:({params})=>fetch(`https://trendbazar-server.onrender.com/electronics/${params.id}`)
    },
    {
        path:'/fashon/:id',
        element:<FashonDetails></FashonDetails>,
        loader:({params})=>fetch(`https://trendbazar-server.onrender.com/fashon/${params.id}`)
    },
    {
        path:'/computers/:id',
        element:<ComputerDetails></ComputerDetails>,
        loader:({params})=>fetch(`https://trendbazar-server.onrender.com/computer/${params.id}`)
    },
    {
        path:'settings',
        element:<Setting></Setting>
    },
    {
        path:'profile',
        element:<Profile></Profile>
    },
    {
        path: '/about',
        element:<About></About>
    },
    {
        path: '/contact',
        element:<Contact></Contact>
    },{
        path: '/categories',
        element:<Categories></Categories>
    },
    {
        path:'/new-arrival',
        element:<NewArrival></NewArrival>
    },
    
    {
        path:'/addToCart',
        element:<AddToCart></AddToCart>
    },
    {
        path:'/register',
        element:<Register></Register>
    },
    {
        path:'/login',
        element:<Login></Login>
    }
])

export default Router;