const TabItem = props => {
  const {tabDetails, changeTab, isActive} = props
  const {tabId, displayText} = tabDetails

  const buttonClass = isActive ? 'active-tab' : 'normal-tab'

  return (
    <li className="tab-list">
      <button
        className={buttonClass}
        type="button"
        onClick={() => changeTab(tabId)}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
