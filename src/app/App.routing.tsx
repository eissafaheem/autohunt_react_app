import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomeComponent from "./home/Home.component";

import React from 'react'
import LayoutComponent from "./layout/Layout.component";
import InputFieldComponent from "./_shared/components/input-field/InputField.component";

function AppRouter() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <HomeComponent />,
            children: [
                {
                    path: '/layout',
                    element: <LayoutComponent />
                },
                {
                    path: '/input',
                    element: <InputFieldComponent/>
                }
            ]
        }
    ])
    return (
        <RouterProvider router={router} />
    )
}

export default AppRouter

// 1. Create browser router
// 2. Add all urls and elements you want to show init
// 3. export RouterProvider with router as params
// 4. Import in App.tsx and call AppRouter
// 5. you can add children parameter
// 6. After that you should add outlet to place whrere those children needs to be replaced at.