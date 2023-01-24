import Link from 'next/link'
function Navbar() {
  return (
    <nav>
      <Link href='/'>
      <h1>Employee List</h1>
      </Link>
      <ul className='nav__link'>
        <Link href='/'><a>Home</a></Link>
        <Link href='/about'><a>About</a></Link>
        <Link href='/ninjas'><a>NinjaList</a></Link>
      </ul>
    </nav>
  )
}

export default Navbar