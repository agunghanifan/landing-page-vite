import { Link } from 'react-router-dom'
import SwitcherTheme from './SwitcherTheme'

const Navbar = () => {
  return (
    <div className='navbar bg-secondary p-4 text-white fixed top-0 w-full'>
        <div className='flex-1'>
            <a className='btn btn-ghost text-xl'>Agunghl</a>
        </div>
        <div className='flex-none'>
            <ul className='menu menu-horizontal px-1'>
                <li><SwitcherTheme /></li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/">CV</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar