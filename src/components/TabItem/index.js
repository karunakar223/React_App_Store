// Write your code here
import './index.css'

const TabItem = props => {
  const {tabsDetails, isActive, updateActiveTabId} = props
  const {tabId, displayText} = tabsDetails

  const setClassName = isActive ? 'active' : 'btn-tabs'

  const onClickBtn = () => {
    updateActiveTabId(tabId)
  }

  return (
    <li className="tabs-container">
      <button
        type="button"
        onClick={onClickBtn}
        className={`btn-tabs ${setClassName}`}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
