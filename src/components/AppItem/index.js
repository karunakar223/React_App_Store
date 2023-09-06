// Write your code here
import './index.css'

const AppItem = props => {
  const {appsList} = props
  const {appName, imageUrl} = appsList

  return (
    <li className="li-items card">
      <img src={imageUrl} alt={appName} className="image" />
      <p className="paragraph">{appName}</p>
    </li>
  )
}

export default AppItem
