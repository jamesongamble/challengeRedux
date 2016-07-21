
const TextCell = (props) => {
  if (!props.ads) {
    return (
      <Cell {...props}>
        { props.state['ads_metrics']['rows'] ? props.state['ads_metrics']['rows'][props.rowIndex][props.col] : null }
      </Cell>
    )
  }
  return (
    <Cell {...props}>
      { props.state['ads'][props.rowIndex] ? props.state['ads'][props.rowIndex]['name'] : null }
    </Cell>
  )
}