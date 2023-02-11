import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper
} from '@mui/material'
import React from 'react'
import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';
import PropTypes from 'prop-types';
import { useQuery } from 'react-query';
import PONotsTableHeader from './poNotesTablesHeader/PONotesTableHeader';
import filterToDifferentTypes from '../../utilityFunctions/FilterData';
import PONotesTableTheme from '../../theme/GlobalTheme';
import CardLayout from '../../cards/CardLayout';
import { DOMAIN } from '../../../config';

// query params for get Api call
const getApiUrl = (query, page, limit) => {
  let queryParams = `page=${page}&limit=${limit}`;
  queryParams += query.status ? `&status=${query.status}` : '';
  queryParams += query.search ? `&search=${query.search}` : '';
  queryParams += query.startDate ? `&startDate=${query.startDate}` : '';
  queryParams += query.endDate ? `&endDate=${query.endDate}` : '';
  return `${DOMAIN}/api/po-notes?${queryParams}`;
};

// table for the action items
export default function PONotesTable(props) {
  const { heading, definition, accessibilityInformation, query } = props;
  // need to add page & limit to the query
  const apiUrl = getApiUrl(query, 1, 10);
  const map = {
    'Action Items': 'action_item',
    'Agenda Items': 'agenda_item',
    'Key Decisions': 'key_decisions',
  }
  const { data, error, isError, isLoading } = useQuery('data', async () => {
    const res = await fetch(apiUrl);
    return res.json();
  },
    {
      refetchInterval: 10000,
    }
  );
  if (isLoading) {
    return <div>Loading...</div>
  }
  if (isError) {
    return <div>Error! {error.message}</div>
  }

  let dataValue = [];
  const filteredData = filterToDifferentTypes(data);
  const noteType = map[heading];
  if (noteType === 'action_item') {
    dataValue = filteredData.ACTION_ITEM ?? [];
  }
  else if (noteType === 'key_decisions') {
    dataValue = filteredData.KEY_DECISION ?? [];
  }
  else if (noteType === 'agenda_item') {
    dataValue = filteredData.AGENDA_ITEM ?? [];
  }
  const countOfItems = dataValue.length;
  return (
    <Box sx={{ width: '600px' }}>
      <ThemeProvider theme={PONotesTableTheme}>
        <TableContainer component={Paper}>
          <Table stickyHeader aria-label='simple table'>
            <TableHead>
              <TableRow align='center'>
                {/* calling the action item table header and passing count of action items in the table as props in countOfItems variable */}
                <TableCell>
                  {/* Information regarding each PO Notes type(Action Items, Key decisions and Agenda Items are passed as props to table header) */}
                  <PONotsTableHeader heading={heading}
                    definition={definition}
                    accessibilityInformation={accessibilityInformation}
                    countOfItems={countOfItems} />
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody >
              <TableRow> 
                {/* Data from get Api call using query params is passed to cardlayout for displaying it in cards */}
                <CardLayout chckBox type={map[heading]} data={dataValue} /> </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </ThemeProvider>
    </Box>

  )
}

// props validation
PONotesTable.propTypes = {
  definition: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  accessibilityInformation: PropTypes.string.isRequired,
  query: PropTypes.shape({
    status: PropTypes.string,
    search: PropTypes.string,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
  }).isRequired,
}
