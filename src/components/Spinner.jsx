import SpinnerImg from '../assets/spinner-white.svg'

export const Spinner = () => {
  return (
    <div className="spinner">
      <img src={SpinnerImg} className="spinner__figure spinner__figure--rotate" />
    </div>
  )
}
