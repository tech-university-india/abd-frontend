import React from 'react';
import Navbar from '../dumbComponents/navBar'
import PoNotesBody from '../poNotesComponents/poNotesBody';
import PoNotesHeader from '../poNotesComponents/poNotesHeader';

function poNotesContainer (){
    return (
        <div>
            <Navbar/>
            <PoNotesHeader/>
            <PoNotesBody/>
        </div>
    );
};

export default poNotesContainer;