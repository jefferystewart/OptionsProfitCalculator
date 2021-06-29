import Logo from '../assets/logo.svg'

export const Footer = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand mx-auto" href="#">
          RFC
          {' '}
          <img src={Logo} width="24" height="24" className="d-inline-block align-text-top" />
        </a>
      </div>
    </nav>
  )
}
