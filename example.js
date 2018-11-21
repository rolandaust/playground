function getCurrentYear() {
    return new Promise((resolve, reject) => {
        const date = new Date();
        const year = date.getFullYear();
        if (year) {
            resolve(year);
        } else {
            reject('year not found');
        }
    });
}


getCurrentYear.then((result) => {
    console.log('Current year is ' + result);
}).catch((error) => {
    console.log('Error detecting current year: ' + error);
});