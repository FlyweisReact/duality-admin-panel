import React from 'react'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import routes from './Routes/routes'

const App = () => {
  return (
    <section>
      <BrowserRouter>
        <Routes>
          {routes.map((i , index) => <Route key={index} path={} />)}
        </Routes>
      </BrowserRouter>
    </section>
  )
}

export default App
