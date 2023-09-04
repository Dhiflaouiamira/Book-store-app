import React from 'react'
import { Routes,Route } from 'react-router-dom'
import CreateBooks from './pages/CreateBooks'
import Home from './pages/Home'
import DeleteBooks from './pages/DeleteBooks'
import Edite from './pages/Edite'
import ShowBook from './pages/ShowBook'

function App() {
  return (
    <Routes>
       <Route path='/'element={<Home/>} />
       <Route path='/books/create'element={<CreateBooks/>} />
       <Route path='/books/delete'element={<DeleteBooks />} />
       <Route path='/books/edite/:id'element={<EditeBook />}/>
       <Route path='/books/details/:id'element={<ShowBook/>} />
  
</Routes>
  )
};

export default App