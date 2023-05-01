import './index.css'

const TabItem = props => {
  const {tabDetails, getActiveTabId, isActive} = props
  const {displayText, tabId} = tabDetails

  const activeTab = isActive ? 'active-tab' : null

  function changeTab() {
    getActiveTabId(tabId)
  }
  return (
    <li className="tab">
      <button
        type="button"
        className={`button ${activeTab}`}
        onClick={changeTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
