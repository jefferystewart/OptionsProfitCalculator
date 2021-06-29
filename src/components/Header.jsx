import Logo from '../assets/logo.svg'

export const Header = () => {
  return (
    <nav className="navbar navbar-light">
      <div className="container-fluid">
        <a className="navbar-brand text-white fw-bolder" href="#">
          <img src={Logo} width="24" height="24" className="d-inline-block align-text-top" />
          {' '}
          React Fintech Cryptocurrency
        </a>
      </div>
    </nav>
  )
}
