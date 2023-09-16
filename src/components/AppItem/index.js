import './index.css'

const AppItem = props => {
  const {itemDetails} = props
  const {appName, imageUrl} = itemDetails

  return (
    <li className="app-item">
      <img src={imageUrl} alt={appName} className="app-image" />
      <p className="name">{appName}</p>
    </li>
  )
}

export default AppItem
