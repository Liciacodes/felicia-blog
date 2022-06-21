import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav >
      <h2 className='nav-text'>Felicia's Blog</h2>
      <div className='nav-links'>
        <Link to='/'>Home</Link>
       <Link to='/newblog'>New Blog</Link>
      
</div>
    </nav>
  )
}

export default Navbar
