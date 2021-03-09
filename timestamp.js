const timestamp = (date) => {
    let unix, utc;
    if (!date) {
        unix = Date.now();
        utc = new Date().toGMTString();
    } else if (Number(date)) {
        unix = Number(date);
        utc = new Date(Number(date)).toGMTString();
    } else {
        unix = new Date(Date.parse(date)).getTime();
        utc = new Date(Date.parse(date)).toGMTString();
    }

    if (!unix || utc === 'Invalid Date') {
        return {
            error: 'Invalid Date',
        };
    }

    return {
        unix,
        utc,
    };
};

module.exports = timestamp;
