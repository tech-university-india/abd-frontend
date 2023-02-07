const filterToDifferentTypes = (noteItems) => {
	const filteredNotes = {};
	noteItems.forEach(noteItem => {
		if (filteredNotes[noteItem.type]) {
			filteredNotes[noteItem.type].push(noteItem);
		} else {
			filteredNotes[noteItem.type] = [noteItem];
		}
	});
	return filteredNotes;
};
  export default filterToDifferentTypes;