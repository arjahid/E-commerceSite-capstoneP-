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

const Router = createBrowserRouter([
    {
        path: '/',
        element:<HomeLayouts></HomeLayouts>,
        children: [
            {
                path: '/categories/:id',
                element: <CategeoriesNews />,
                loader: async ({ params }) => {
                    const response = await fetch('data.json');
                    const data = await response.json();
                    return data.find(item => item.id === params.id);
                }
            },
            {
                path: '/electronics/:id',
                element:<ElectronicsDetails></ElectronicsDetails>,
                loader:({params})=>fetch(`e.json/${params.id}`)
                
            }
        ]
    },
    {
        path:'settings',
        element:<Setting></Setting>
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
    }
])

export default Router;