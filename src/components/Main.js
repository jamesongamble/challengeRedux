if (process.env.NODE_ENV !== 'test') {
  require('./fixed-data-table.css')
  require('normalize.css/normalize.css')
  require('../styles/App.css')
}
const FixedDataTable = require('fixed-data-table')
const React = require('react')
const {Table, Column, Cell} = FixedDataTable
const qwest = require('qwest')
// const TextCell = require('./TextCell')

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

export class AppComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      "ads": {},
      "ads_metrics": {
        "rows": []
      }
    }
  }
  componentDidMount = () => {
    qwest.get(`/ads`)
      .then((xhr, response) => {
        this.setState({"ads": response.ads})
        resolve()
      })
    qwest.get(`/ads_metrics`)
      .then((xhr, response) => {
        this.setState({"ads_metrics": response["ads_metrics"]})
        resolve()
      })
  }
  render() {
    const state = this.state;
    const columnNames = this.state['ads_metrics']['column_names'] || []
    const adsNames = this.state['ads']
    let firstColumn = null;
    let rows = this.state.ads_metrics.rows.length 
    if (columnNames) {
      firstColumn = 
        <Column
          fixed={true}
          header={<Cell>Ads Name</Cell>}
          cell={<TextCell ads data={adsNames} col='companyName' state={state}/>}
          flexGrow={1}
          width={150}
        />
    }

    return (
        <Table
          rowHeight={30}
          headerHeight={30}
          rowsCount={rows}
          width={1000}
          maxHeight={500}
          className="flexcontainer"
          marginLeft="auto"
          {...this.props}>

          {firstColumn}

          {
            columnNames && columnNames.map((item) => {
              return (
                <Column key={item}
                  header={<Cell>{item}</Cell>}
                  cell={<TextCell data={columnNames} col={item} state={state} />}
                  width={150}
                  />
              )
            })
          }
        </Table>
    );
  }
}

AppComponent.propTypes = {
}

AppComponent.defaultProps = {
}

module.exports = AppComponent

export default AppComponent
