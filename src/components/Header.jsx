import Logo from '../assets/logo.svg'
import { Hero } from './Hero'

export const Header = () => {
  return (
    <>
    <nav className="navbar">
        <a className="navbar__logo-link navbar--header" href="#">
          <img src={Logo} className="navbar__logo-img" />
          <h1 className="navbar__logo-text">React Fintech Cryptocurrency</h1>
        </a>
    </nav>
    <Hero />
    </>
  )
}
