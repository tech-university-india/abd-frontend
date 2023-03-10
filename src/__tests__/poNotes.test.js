import React from 'react';
import { render, cleanup, getByTestId, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import PONotesContainer from '../components/routes/PONotes';

describe('po-notes', () => {
  afterEach(cleanup);
  it('renders the po-notes page', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/po-notes']}>
        <PONotesContainer />
      </MemoryRouter>
    )
    const poNotesIdentifier = getByTestId(container, 'poNotesIdentifier');
    expect(poNotesIdentifier).toBeInTheDocument();
  });
  it('should open form to add po notes', () => {
    const { container, getByText } = render(
      <MemoryRouter initialEntries={['/po-notes']}>
        <PONotesContainer />
      </MemoryRouter>
    );
    const AddPONotesForm = getByTestId(container, 'AddPONotesFormIdentifier');
    fireEvent.click(AddPONotesForm);
    expect(getByText('Add a Note')).toBeInTheDocument();
  });

  xit('should select action-item by default when we render addPONotes form', () => {

  });

  xit('should render timeline when action-item is selected in addPONotesForm', () => {

  });

  xit('should not render timeline when key decision or agenda-item is selected in addPONotesForm', () => {

  });

  xit('should render save button when all the required fields are filled', () => {

  });

});