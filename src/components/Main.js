require('normalize.css/normalize.css')
require('styles/App.css')
require('react-data-grid/themes/react-data-grid.css')

import React from 'react'
const ReactDataGrid = require('react-data-grid');
const ReactDataGridPlugins = require('react-data-grid/addons');

// import ReactDataGridPlugins from 'react-data-grid/addons'
import faker from 'faker'

const Editors = ReactDataGridPlugins.Editors
const Toolbar = ReactDataGridPlugins.Toolbar
const AutoCompleteEditor = ReactDataGridPlugins.Editors.AutoComplete
const DropDownEditor = ReactDataGridPlugins.Editors.DropDownEditor
faker.locale = 'en_GB'

var counties = [{ id: 0, title: 'Bedfordshire' }, { id: 1, title: 'Berkshire' }, { id: 2, title: 'Buckinghamshire' }, { id: 3, title: 'Cambridgeshire' }, { id: 4, title: 'Cheshire' }, { id: 5, title: 'Cornwall' }, { id: 6, title: 'Cumbria, (Cumberland)' }, { id: 7, title: 'Derbyshire' }, { id: 8, title: 'Devon' }, { id: 9, title: 'Dorset' },
  { id: 10, title: 'Durham' },
  { id: 11, title: 'Essex' },
  { id: 12, title: 'Gloucestershire' },
  { id: 13, title: 'Hampshire' },
  { id: 14, title: 'Hertfordshire' },
  { id: 15, title: 'Huntingdonshire' },
  { id: 16, title: 'Kent' },
  { id: 17, title: 'Lancashire' },
  { id: 18, title: 'Leicestershire' },
  { id: 19, title: 'Lincolnshire' },
  { id: 20, title: 'Middlesex' },
  { id: 21, title: 'Norfolk' },
  { id: 22, title: 'Northamptonshire' },
  { id: 23, title: 'Northumberland' },
  { id: 24, title: 'Nottinghamshire' },
  { id: 25, title: 'Northamptonshire' },
  { id: 26, title: 'Oxfordshire' },
  { id: 27, title: 'Northamptonshire' },
  { id: 28, title: 'Rutland' },
  { id: 29, title: 'Shropshire' },
  { id: 30, title: 'Somerset' },
  { id: 31, title: 'Staffordshire' },
  { id: 32, title: 'Suffolk' },
  { id: 33, title: 'Surrey' },
  { id: 34, title: 'Sussex' },
  { id: 35, title: 'Warwickshire' },
  { id: 36, title: 'Westmoreland' },
  { id: 37, title: 'Wiltshire' },
  { id: 38, title: 'Worcestershire' },
  { id: 39, title: 'Yorkshire' }]

var titles = ['Dr.', 'Mr.', 'Mrs.', 'Miss', 'Ms.']

var columns = [
  {
    key: 'id',
    name: 'ID',
    width: 80,
    resizable: true
  },
  {
    key: 'avartar',
    name: 'Avartar',
    width: 60,
    formatter: ReactDataGridPlugins.Formatters.ImageFormatter,
    resizable: true,
    headerRenderer: <ReactDataGridPlugins.Formatters.ImageFormatter value={faker.image.cats() } />
  },
  {
    key: 'county',
    name: 'County',
    editor: <AutoCompleteEditor options={counties}/>,
    width: 200,
    resizable: true
  },
  {
    key: 'title',
    name: 'Title',
    editor: <DropDownEditor options={titles}/>,
    width: 200,
    resizable: true,
    events: {
      onDoubleClick: function () {
        console.log("The user double clicked on title column")
      }
    }
  },
  {
    key: 'firstName',
    name: 'First Name',
    editable: true,
    width: 200,
    resizable: true
  },
  {
    key: 'lastName',
    name: 'Last Name',
    editable: true,
    width: 200,
    resizable: true
  },
  {
    key: 'email',
    name: 'Email',
    editable: true,
    width: 200,
    resizable: true
  },
  {
    key: 'street',
    name: 'Street',
    editable: true,
    width: 200,
    resizable: true
  },
  {
    key: 'zipCode',
    name: 'ZipCode',
    editable: true,
    width: 200,
    resizable: true
  },
  {
    key: 'date',
    name: 'Date',
    editable: true,
    width: 200,
    resizable: true
  },
  {
    key: 'bs',
    name: 'bs',
    editable: true,
    width: 200,
    resizable: true
  },
  {
    key: 'catchPhrase',
    name: 'Catch Phrase',
    editable: true,
    width: 200,
    resizable: true
  },
  {
    key: 'companyName',
    name: 'Company Name',
    editable: true,
    width: 200,
    resizable: true
  },
  {
    key: 'sentence',
    name: 'Sentence',
    editable: true,
    width: 200,
    resizable: true
  }
]

const createFakeRowObjectData = (index) => {
  return {
    id: 'id_' + index,
    avartar: faker.image.avatar(),
    county: faker.address.county(),
    email: faker.internet.email(),
    title: faker.name.prefix(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    street: faker.address.streetName(),
    zipCode: faker.address.zipCode(),
    date: faker.date.past().toLocaleDateString(),
    bs: faker.company.bs(),
    catchPhrase: faker.company.catchPhrase(),
    companyName: faker.company.companyName(),
    words: faker.lorem.words(),
    sentence: faker.lorem.sentence()
  }
}
const createRows = (numberOfRows) => {
  let rows = []
  for (let i = 0; i < numberOfRows; i++) {
    rows[i] = createFakeRowObjectData(i)
  }
  return rows
}

class AppComponent extends React.Component {

  displayName: 'component'

  constructor(props) {
    super(props)
    let fakeRows = createRows(2000)
    this.state = { rows: fakeRows }
  }

  getColumns = () => {
    let clonedColumns = columns.slice()
    clonedColumns[2].events = {
      onClick: function (ev, args) {
        let idx = args.idx
        let rowIdx = args.rowIdx
        this.refs.grid.openCellEditor(rowIdx, idx)
      }.bind(this)
    }
    return clonedColumns
  }

  handleGridRowsUpdated = (updatedRowData) => {
    let rows = this.state.rows

    for (let i = updatedRowData.fromRow; i <= updatedRowData.toRow; i++) {
      let rowToUpdate = rows[i]
      let updatedRow = React.addons.update(rowToUpdate, { $merge: updatedRowData.updated })
      rows[i] = updatedRow
    }

    this.setState({ rows: rows })
  }

  handleAddRow = (e) => {
    let newRow = {
      value: e.newRowIndex,
      userStory: '',
      developer: '',
      epic: ''
    }
    let rows = React.addons.update(this.state.rows, { $push: [newRow] })
    this.setState({ rows: rows })
  }

  getRowAt = (index) => {
    if (index < 0 || index > this.getSize()) {
      return undefined
    }
    return this.state.rows[index]
  }

  getSize = () => {
    return this.state.rows.length
  }

  render() {
    return (
      <ReactDataGrid
        ref='grid'
        enableCellSelect={true}
        columns={this.getColumns() }
        rowGetter={this.getRowAt}
        rowsCount={this.getSize() }
        onGridRowsUpdated={this.handleGridRowsUpdated}
        toolbar={<Toolbar onAddRow={this.handleAddRow}/>}
        enableRowSelect={true}
        rowHeight={50}
        minHeight={600}
        rowScrollTimeout={200}
        />
    )
  }
}

AppComponent.propTypes = {
}

AppComponent.defaultProps = {
}

export default AppComponent


