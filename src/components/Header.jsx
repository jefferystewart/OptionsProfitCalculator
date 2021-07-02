import Logo from '../assets/logo.svg'

export const Header = () => {
  return (
    <nav className="navbar">
        <a className="navbar__logo-link" href="#">
          <img src={Logo} width="24" height="24" className="navbar__logo-img" />
          <span className="navbar__logo-text">React Fintech Cryptocurrency</span>
        </a>
    </nav>
  )
}
