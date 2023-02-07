
const dateGetter = (timeStamp) => {
    const date = new Date(timeStamp);
    const month = date.toLocaleString('default', { month: 'short' });
    const day = date.getDate();
    const year = date.getFullYear();
    return `${day} ${month}, ${year}`;
}
export default dateGetter;