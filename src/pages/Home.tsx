import React from 'react'
import { Link } from 'react-router-dom'
import Background from '../assets/images/dog.jpg'
import Button from '@mui/material/Button';

function Home() {
  return (
    <div
      style={{ backgroundImage: `url(${ Background })`}}
      className="flex justify-center bg-cover bg-fixed"
    >
      <div className='flex flex-col justify-center items-center h-screen'>
        <h4 className='sm:p-5 text-slate-100 rounded text-4xl border bg-black bg-opacity-70 mb-5'>
          Welcome to Book Club
        </h4>
        <h4 className='sm:p-3 text-slate-100 rounded text-3xl border bg-black bg-opacity-70'>
          Enter your dashboard to get started!
        </h4>
        <Link className='mt-5' to='/dashboard'>
          <Button variant="contained" className="py-10">
            Dashboard
          </Button>
        </Link>
      </div> 
    </div>
  )
}

export default Home
