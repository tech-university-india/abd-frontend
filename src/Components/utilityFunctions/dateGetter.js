
const dateGetter = (timeStamp) => {
    const date = new Date(timeStamp);
    const month = date.toLocaleString('default', { month: 'short' });
    const day = date.getDate();
    const year = date.getFullYear();
    const time= date.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
    return `${day} ${month}, ${year} ${time}`;
}
export default dateGetter;