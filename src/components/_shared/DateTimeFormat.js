export { getFormatedDateAndTime, getFormatedDate };

var monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];

var dayNames = ['Sun.', 'Mon.', 'Tues.', 'Wed.', 'Thrus.', 'Fri', 'Sat.'];

function getFormatedDateAndTime(date, time) {
    let dateObject = new Date(date);
    return (
        dayNames[dateObject.getDay()] +
        ' ' +
        dateObject.getDate() +
        ' ' +
        monthNames[dateObject.getMonth()] +
        ' at ' +
        time +
        ':00'
    );
}

function getFormatedDate(date) {
    let dateObject = new Date(date);
    return (
        dayNames[dateObject.getDay()] +
        ' ' +
        dateObject.getDate() +
        ' ' +
        monthNames[dateObject.getMonth()]

    );
}