jest.unmock('../../src/components/Main'); // unmock to use the actual implementation of sum

import React, {Component,PropTypes} from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import FixedDataTable from 'fixed-data-table';
import {Table, Column, Cell} from 'fixed-data-table';
import Main from '../../src/components/Main';

describe('AppComponent', () => {

  it('renders the element', () => {
    // Render a Table with label in the document
    const table = TestUtils.renderIntoDocument(
      <Main />
    );

    const tableNode = ReactDOM.findDOMNode(table);

    // Verify that the table has loaded with our hard-coded data
    // Future tests should incorporate a call for data and verify
    console.log(tableNode);
    expect(tableNode.textContent).toEqual('Ads Nameimpressionsreachfrequencycpmspendctrcost_per_inline_link_clickactions:goalactions:link_clickcost_per_action_type:cost_per_goalactions:offsite_conversion1231231231.041344938930212.30131445905182.490.876306033033.041536060.834564561231231.041344938930212.30131445905182.490.876306033033.041536060.831237891231231.041344938930212.30131445905182.490.876306033033.041536060.837899011231231.041344938930212.30131445905182.490.876306033033.041536060.83901');

  });
});
