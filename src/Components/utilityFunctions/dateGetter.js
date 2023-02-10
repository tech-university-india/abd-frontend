
const dateGetter = (timeStamp,dateHolder) => {
    const date = new Date(timeStamp);
    const month = date.toLocaleString('default', { month: 'short' });
    const day = date.getDate();
    const year = date.getFullYear();
    const time= date.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
    if(dateHolder==="dueDate")
    return `${day} ${month}, ${year}`;
    return `${day} ${month}, ${year} ${time}`;

}
export default dateGetter;