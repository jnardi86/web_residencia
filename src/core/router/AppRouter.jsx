import React from 'react'
import { createHashRouter } from "react-router-dom";
import GeneralLayout from '../layouts/GeneralLayout';
import HomeView from '../../pages/home/view/HomeView';
import ProgramaView from '../../pages/programa/view/ProgramaView';
import PacientesView from '../../pages/pacientes/view/PacientesView';


export const appRouter = createHashRouter([
    {
        path: "/",
        element: (
            <GeneralLayout>
                <HomeView />
            </GeneralLayout>
        ),
    },
    {
        path: "/programa",
        element: (
            <GeneralLayout>
                <ProgramaView />
            </GeneralLayout>
        ),
    },
    {
        path: "/pacientes",
        element: (
            <GeneralLayout>
                <PacientesView />
            </GeneralLayout>
        ),
    },
]);