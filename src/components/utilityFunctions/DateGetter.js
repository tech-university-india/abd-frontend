const dateGetter = (timeStamp,dateHolder) => {
    const DUE_DATE = "dueDate";
    const date = new Date(timeStamp);
    const month = date.toLocaleString('default', { month: 'short' });
    const day = date.getDate();
    const year = date.getFullYear();
    const time= date.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
    if(dateHolder===DUE_DATE)
    return `${day} ${month}, ${year}`;
    return `${day} ${month}, ${year} ${time}`;

}
export default dateGetter;