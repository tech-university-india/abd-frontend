import Navbar from '../dumbComponents/navBar'
import PoNotesBody from '../poNotesComponents/poNotesBody';
import PoNotesHeader from '../poNotesComponents/poNotesHeader';

const poNotesContainer = ()=>{
    return (
        <div>
            <Navbar/>
            <PoNotesHeader/>
            <PoNotesBody/>
        </div>
    );
};

export default poNotesContainer;