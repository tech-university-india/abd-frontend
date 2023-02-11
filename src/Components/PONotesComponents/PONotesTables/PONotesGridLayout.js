/* import  React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import PONotesTable from './PONotesTable';

const actionItems = {
  // heading is the heading of the information model
  heading: 'Action Items',
  // definitiHn is the definition of the information model
  definition: ' are the tasks that the Product Owner(PO) has to do in order to unblock the team, and can be linked to an issue in the Project management tool such as Jira.',
  // accessibiltyInformation is the accessibility information of the information model
  accessibiltyInformation: 'PO is the owner of this section only PO can add or edit these entries.'

};
const agendaItems = {
  heading: 'Agenda Items',
  // definition is the definition of the information model
  definition: ' are the questions that the PO wanted to ask  the team members and the  leadership to derive some actions or decisions.',
  // accessibiltyInformation is the accessibility information of the information model
  accessibiltyInformation: '  PO is the owner of this section only PO can add or edit these entries.'
};
const keyDecisions = {
  // heading is the heading of the information model
  heading: 'Key Decisions',
  // definition is the definition of the information model
  definition: ' are the vital outcomes/decisions from the various discussions that PO has been part of.',
  // accessibiltyInformation is the accessibility information of the information model
  accessibiltyInformation: '  PO is the owner of this section only PO can add or edit these entries.'
}
export default function PONotesGridLayout(
  // { search, startDate, endDate, status }
  ) {

  const query = {
      search: "l",
      startDate: "2023-02-10",
      endDate: "2023-02-10",
      status: "PENDING"
  }

  // const query = {
  //   ...(search && { search }),
  //   ...(startDate && { startDate }),
  //   ...(endDate && { endDate }),
  //   ...(status && { status }),
  // }
  return (
    <Box sx>
      <Grid container spacing={3}>
        <Grid item xs>
          <item><PONotesTable heading={actionItems.heading} definition={actionItems.definition} accessibiltyInformation={actionItems.accessibiltyInformation} query={query} />
     </item>
        </Grid>
        <Grid item xs>
          <item> <PONotesTable heading={keyDecisions.heading} definition={keyDecisions.definition} accessibiltyInformation={keyDecisions.accessibiltyInformation} query={query} />
      </item>
        </Grid>
        <Grid item xs>
        <item><PONotesTable heading={agendaItems.heading} definition={agendaItems.definition} accessibiltyInformation={agendaItems.accessibiltyInformation} query={query}/>
      </item>
      </Grid>
      </Grid>
    </Box>   
  );
} */
import  React from 'react';
import Grid from '@mui/material/Grid';
import PONotesTable from './PONotesTable';

// information about action items
const actionItems = {
  // heading is the heading of the information model
  heading: 'Action Items',
  // definition is the definition of the information model
  definition: ' are the tasks that the Product Owner(PO) has to do in order to unblock the team, and can be linked to an issue in the Project management tool such as Jira.',
  // accessibiltyInformation is the accessibility information of the information model
  accessibilityInformation: 'PO is the owner of this section only PO can add or edit these entries.'

};
// information about agenda items
const agendaItems = {
  heading: 'Agenda Items',
  definition: ' are the questions that the PO wanted to ask  the team members and the  leadership to derive some actions or decisions.',
  accessibilityInformation: '  PO is the owner of this section only PO can add or edit these entries.'
};

// information about key decisions
const keyDecisions = {
  heading: 'Key Decisions',
  definition: ' are the vital outcomes/decisions from the various discussions that PO has been part of.',
  accessibilityInformation: '  PO is the owner of this section only PO can add or edit these entries.'
}

export default function PONotesGridLayout(
 
  ) {
// setting serach query based on { text, start date , end date and status }.
  const query = {
      // search: "l",
      // startDate: "2023-02-10",
      // endDate: "2023-02-10",
      // status: "PENDING"
  }
  return (
    // grid layout for the three tables
    <Grid container spacing={5} columns={19} >
      <Grid item sx={1} />
      <Grid sx={{
        p: 6,
        m: 1,
        display: 'flex',
        flexDirection: 'row'
      }} item xs={6}>
        {/* Table for action items */ }
        <PONotesTable heading={actionItems.heading} definition={actionItems.definition} accessibilityInformation={actionItems.accessibilityInformation} query={query} />
 
      </Grid>
      <Grid sx={{
        p: 6,
        m: 1,
        display: 'flex',
        flexDirection: 'row'
      }} item xs={6}>
         {/* Table for agenda items */ }
        <PONotesTable heading={agendaItems.heading} definition={agendaItems.definition} accessibilityInformation={agendaItems.accessibilityInformation} query={query} />
    </Grid>
    <Grid sx={{
        p: 6,
        m: 1,
        display: 'flex',
        flexDirection: 'row'
      }} item xs={6}>
         {/* Table for key decisions */ }
        <PONotesTable heading={keyDecisions.heading} definition={keyDecisions.definition} accessibilityInformation={keyDecisions.accessibilityInformation} query={query} />
    </Grid>
    <Grid item sx={1} />
      </Grid>
   
  );
}










