import { ROUTES } from '@/router/settings'
import Layout from '@/widgets/Layout'
import { lazy } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

const AboutLazy = lazy(() => import('@/widgets/About'))

export default function App() {
    return (
        <Router future={{ v7_startTransition: false, v7_relativeSplatPath: true }}>
            <Routes>
                <Route path={ROUTES.HOME} element={<Layout />}>
                    <Route path={ROUTES.ABOUT} element={<AboutLazy />} />
                </Route>

                {/*test*/}
                {/* <Route path="/test" element={<div>test</div>} /> */}
            </Routes>
        </Router>
    )
}
