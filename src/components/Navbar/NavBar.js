import './NavBar.css'

const NavBar = () => {
    return (
      <nav className='NavBar'>
        <div>
            <img className='logo' src={'./images/Mr.Not-Logo.jpg'} alt='logo' />
        </div>
        <div>
            <p>MARKET</p> 
        </div>
        <button>Remeras</button>
        <button>Buzos</button>
        <button>Accesorios</button>
      </nav>
    )
  }

  export default NavBar