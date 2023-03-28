import { useState } from "react"
import { Link } from 'react-router-dom'
// import Button from "./Button"
import Button from '@mui/material/Button';


function Navbar() {
  const [isVisible, setIsVisible] = useState(false)

  const dropDown = () => {
    setIsVisible(!isVisible)
  }

  const clicked = () => {
    setIsVisible(false)
  }

  return (
    <nav className='flex items-center justify-between flex-wrap bg-gray-500 p-6'>
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link to='/' className='font-semibold text-xl tracking-tight'>Book Club</Link>
      </div>
      <div className="block">
        <button
        onClick={dropDown}
          className="flex items-center px-3 py-2 text-gray-200 border rounded border-gray-400
           hover:text-white hover:border-white">
            <i className="fa-solid fa-bars"></i>
        </button>
      </div>
      { isVisible ? (
        <div className='w-full block flex-grow items-center'>
          <div className="text-sm lg:flex-grow">
              <div className="space-x-4 mt-4 flex">
                <Link to='/' onClick={ clicked } className="flex place-items-center mt-4 lg:inline-block lg:mt-0 text-gray-200
                  hover:text-white">
                    <Button variant="contained">
                      Home
                    </Button>
                </Link>
                <Link to='/dashboard' onClick={ clicked } className="flex place-items-center mt-4 lg:inline-block lg:mt-0 text-gray-200
                  hover:text-white">
                  <Button variant="contained">
                    Dashboard
                  </Button>
                </Link>
              </div>      
          </div>
        </div>
        ) : (
        <></>
      )}
    </nav>
  )
}

export default Navbar
