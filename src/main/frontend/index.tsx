import { createElement } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from 'Frontend/generated/routes.js';

import "./globals.css"
import ButtonTest from "Frontend/views/testView";

function App() {
    return (<ButtonTest />)
}

createRoot(document.getElementById('outlet')!).render(createElement(App));
