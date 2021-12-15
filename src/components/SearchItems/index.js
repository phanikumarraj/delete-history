import './index.css'

const SearchItems = props => {
  const {HistoryDetails, deleteItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = HistoryDetails

  const onDelete = () => {
    deleteItem(id)
  }

  return (
    <li className="list-item">
      <p className="time">{timeAccessed}</p>
      <img className="social-logo" src={logoUrl} alt="logo" />
      <p className="title">{title}</p>
      <p className="title-url">{domainUrl}</p>
      <div className="image-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          onClick={onDelete}
          className="delete-image"
        />
      </div>
    </li>
  )
}

export default SearchItems
