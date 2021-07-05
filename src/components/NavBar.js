import Logo from '../assets/logo.svg'

export const NavBar = () => {
  return (
    <>
      <nav className="navbar">
        <a className="navbar__logo-link navbar--header" href="#">
          <img src={Logo} className="navbar__logo-img" />
          <h1 className="navbar__logo-text">React Fintech Cryptocurrency</h1>
        </a>
      </nav>
    </>
  )
}
