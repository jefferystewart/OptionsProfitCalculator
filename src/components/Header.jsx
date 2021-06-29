import PiggyBankFill from 'bootstrap-icons/icons/piggy-bank-fill.svg'

export const Header = () => {
  return (
    <nav className="navbar navbar-dark">
      <div className="container-fluid">
        <a className="navbar-brand mx-auto" href="#">
          <img src={PiggyBankFill} />
        </a>
      </div>
    </nav>
  )
}
