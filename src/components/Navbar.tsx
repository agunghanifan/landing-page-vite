import { Link } from 'react-router-dom'
import SwitcherTheme from './SwitcherTheme'

const Navbar = () => {
  return (
    <div className='navbar bg-transparent p-4 fixed top-0 w-full'>
        <div className='flex-1'>
            <Link to="/" className='btn btn-ghost text-xl'>agunghl</Link>
        </div>
        <div className='flex-none'>
            <ul className='menu menu-horizontal px-1 text-xl'>
                <li className='m-auto'><SwitcherTheme /></li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/">CV</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar