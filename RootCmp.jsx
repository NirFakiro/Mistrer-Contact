import { Home } from './pages/Home.jsx'

const Router = ReactRouterDOM.HashRouter
const { Routes, Route } = ReactRouterDOM

export function RootCmp() {
  return (
    <section>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </section>
  )
}
