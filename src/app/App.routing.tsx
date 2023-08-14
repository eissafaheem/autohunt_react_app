import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomeComponent from "./home/Home.component";

import React from 'react'
import LayoutComponent from "./layout/Layout.component";
import InputFieldComponent from "./_shared/components/input-field/InputField.component";
import LandingPageComponent from "./home/landing-page/LandingPage.component";
import FilterComponent from "./home/filter/Filter.component";
import InfoComponent from "./home/info/Info.component";
import SellComponent from "./home/sell/Sell.component";
import CompareComponent from "./home/compare/Compare.component";
import { ROUTES } from "./_shared/utils/Routes";

function AppRouter() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <LayoutComponent/>,
            children: [
                {
                    path: `${ROUTES.landing_page}`,
                    element: <LandingPageComponent/>
                },
                {
                    path: `${ROUTES.filter}`,
                    element: <FilterComponent/>
                },
                {
                    path: `${ROUTES.info}`,
                    element: <InfoComponent/>
                },
                {
                    path: `${ROUTES.sell}`,
                    element: <SellComponent/>
                },
                {
                    path: `${ROUTES.compare}`,
                    element: <CompareComponent/>
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