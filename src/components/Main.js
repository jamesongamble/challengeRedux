require('./fixed-data-table.css')
require('normalize.css/normalize.css')
require('../styles/App.css')
const FixedDataTable = require('fixed-data-table')
const React = require('react');
const {Table, Column, Cell} = FixedDataTable;

const TextCell = (props) => {
  if (!props.ads) {
    return (
      <Cell {...props}>
        {props.state['ads_metrics']['rows'][props.rowIndex][props.col]}
      </Cell>
    )
  }
  return (
    <Cell {...props}>
      {props.state['ads'][props.rowIndex]['name']}
    </Cell>
  )
};

class AppComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ads: [
        {
          'id': 1,
          'remote_id': '123',
          'name': '123',
          'status': 'ACTIVE'
        },
        {
          'id': 2,
          'remote_id': '456',
          'name': '456',
          'status': 'ACTIVE'
        },
        {
          'id': 3,
          'remote_id': '789',
          'name': '789',
          'status': 'ACTIVE'
        },
        {
          'id': 4,
          'remote_id': '901',
          'name': '901',
          'status': 'ACTIVE'
        }
      ],
      ads_metrics: {
        'column_names': [
          'impressions',
          'reach',
          'frequency',
          'cpm',
          'spend',
          'ctr',
          'cost_per_inline_link_click',
          'actions:goal',
          'actions:link_click',
          'cost_per_action_type:cost_per_goal',
          'actions:offsite_conversion'
        ],
        'rows': [
          {
            'remote_id': '456',
            'impressions': '123',
            'reach': 123,
            'frequency': 1.0413449389302,
            'cpm': 12.30131445905,
            'spend': 182.49,
            'ctr': 0.87630603303,
            'cost_per_inline_link_click': 3.0415,
            'actions:goal': 3,
            'actions:link_click': 60,
            'cost_per_action_type:cost_per_goal': 60.83,
            'actions:offsite_conversion': 456
          },
          {
            'remote_id': '123',
            'impressions': '123',
            'reach': 123,
            'frequency': 1.0413449389302,
            'cpm': 12.30131445905,
            'spend': 182.49,
            'ctr': 0.87630603303,
            'cost_per_inline_link_click': 3.0415,
            'actions:goal': 3,
            'actions:link_click': 60,
            'cost_per_action_type:cost_per_goal': 60.83,
            'actions:offsite_conversion': 123
          },
          {
            'remote_id': '789',
            'impressions': '123',
            'reach': 123,
            'frequency': 1.0413449389302,
            'cpm': 12.30131445905,
            'spend': 182.49,
            'ctr': 0.87630603303,
            'cost_per_inline_link_click': 3.0415,
            'actions:goal': 3,
            'actions:link_click': 60,
            'cost_per_action_type:cost_per_goal': 60.83,
            'actions:offsite_conversion': 789
          },
          {
            'remote_id': '901',
            'impressions': '123',
            'reach': 123,
            'frequency': 1.0413449389302,
            'cpm': 12.30131445905,
            'spend': 182.49,
            'ctr': 0.87630603303,
            'cost_per_inline_link_click': 3.0415,
            'actions:goal': 3,
            'actions:link_click': 60,
            'cost_per_action_type:cost_per_goal': 60.83,
            'actions:offsite_conversion': 901
          }
        ]
      }
    }
  }

  render() {
    const state = this.state;
    const columnNames = this.state['ads_metrics']['column_names']
    const adsNames = this.state['ads']

    return (
        <Table
          rowHeight={30}
          headerHeight={30}
          rowsCount={this.state.ads_metrics.rows.length}
          width={1000}
          maxHeight={500}
          className="flexcontainer"
          marginLeft="auto"
          {...this.props}>

          <Column
            fixed={true}
            header={<Cell>Ads Name</Cell>}
            cell={<TextCell ads data={adsNames} col='companyName' state={state}/>}
            flexGrow={1}
            width={150}
            />

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

export default AppComponent
