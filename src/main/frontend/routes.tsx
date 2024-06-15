import { RouterConfigurationBuilder } from '@vaadin/hilla-file-router/runtime.js';
import Flow from 'Frontend/generated/flow/Flow';
import fileRoutes from 'Frontend/generated/file-routes';

export const { router, routes } = new RouterConfigurationBuilder()
    .withFileRoutes(fileRoutes) // (1)
    // To define routes manually or adding an individual route, use the
    // following code and remove (1):
    // .withReactRoutes(
    //     [
    //       {
    //         element: <MainLayout />,
    //         handle: { title: 'Main' },
    //         children: [
    //             { path: '/hilla', element: <HillaView />, handle: { title: 'Hilla' } }
    //         ],
    //       },
    //       { path: '/login', element: <Login />, handle: { title: 'Login' } }
    //     ]
    // )
    // OR
    // .withReactRoutes(
    //   [
    //     { path: '/login', element: <Login />, handle: { title: 'Login' } }
    //   ]
    // )
    .withFallback(Flow)
    // Optional method that adds an authentication for routes.
    // Can take an optional path to redirect to, if not authenticated:
    // .protect('/login');
    .protect()
    .build();
