import React, {Suspense, lazy} from 'react';
import {Routes, Route} from 'react-router-dom';
import Header from './header/';
import Footer from './footer/';
import Fallback from './fallback/';
import { routes } from '../utils/routes';

// importing routes
const Landing = lazy(() => import('../pages/landing'));
const Swap = lazy(() => import('../pages/swap'));
const Purses = lazy(() => import('../pages/purses'));
const PurseLayout = lazy(() => import('../layout/purseLayout'));
const NotFound = lazy(() => import('./notFound'));

const Layout = () => {
    return (
        <>
            <Header />
            <main>
                <Suspense fallback = {<Fallback />}>
                    <Routes>
                        <Route path = {routes.landing} element = {<Landing />} />
                        <Route path = {routes.swap} element = {<Swap />} />
                        <Route path = {routes.purses} element = {<Purses />} />
                        <Route path = {routes.purse} element = {<PurseLayout />} />
                        <Route path = "*" element = {<NotFound />} />
                    </Routes>
                </Suspense>
            </main>
            <Footer />
        </>
    )
}

export default Layout
