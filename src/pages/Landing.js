import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import CreateBlog from '../components/CreateBlog'
import { Route, Routes } from 'react-router-dom'


const Landing = () => {
  return (
    <div className='relative'>
      <Hero />
    </div>
  )
}

export default Landing