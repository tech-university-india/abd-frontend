import React from 'react';
import { render, cleanup, getByTestId, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import PoNotesContainer from '../components/routes/poNotes';


describe('po-notes', () => {

  afterEach(cleanup);

  it('renders the po-notes page', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/po-notes']}>
        <PoNotesContainer />
      </MemoryRouter>
    )
    const poNotesIdentifier = getByTestId(container, 'poNotesIdentifier');
    expect(poNotesIdentifier).toBeInTheDocument();
  });


  it('should open form to add po notes', () => {
    const { container, getByText } = render(
      <MemoryRouter initialEntries={['/po-notes']}>
        <PoNotesContainer />
      </MemoryRouter>
    );
    const AddPoNotesForm = getByTestId(container, 'AddPoNotesFormIdentifier');
    fireEvent.click(AddPoNotesForm);
    expect(getByText('Add a Note')).toBeInTheDocument();
  });

  it('should select action-item by default when we render addPoNotes form', () => {

  });

  it('should render timeline when action-item is selected in addPoNotesForm', () => {

  });

  it('should not render timeline when key decision or agenda-item is selected in addPoNotesForm', () => {

  });


});