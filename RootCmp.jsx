import { ContactDetails } from './cmps/ContactDetails.jsx'
import { Footer } from './cmps/Footer.jsx'
import { Home } from './pages/Home.jsx'

const Router = ReactRouterDOM.HashRouter
const { Routes, Route } = ReactRouterDOM

export function RootCmp() {
    return (
        <section>
            <Router>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/contact/details' element={<ContactDetails />} />
                </Routes>
                <Footer />
            </Router>
        </section>
    )
}
