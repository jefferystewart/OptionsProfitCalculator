import Logo from '../assets/logo.svg'

export const Footer = () => {
  return (
    <nav className="navbar">
        <a className="navbar__logo-link navbar--footer" href="#">
          <img src={Logo} className="navbar__logo-img" />
          <h1 className="navbar__logo-text">RFC</h1>
        </a>
    </nav>
  )
}
