function getClosestPair(points) {
    const arrayOfPoints = [...points];

    arrayOfPoints.sort((a, b) => {
        return a[0] - b[0];
    });

    arrayOfPoints.sort((a, b) => {
        if (a[0] === b[0]) {
            return a[1] - b[1];
        }

        return a[0] - b[0];
    });

    console.log(arrayOfPoints);

    return arrayOfPoints.slice(0, 2);
};

getClosestPair([[2, 2], [2, 8], [5, 5], [6, 3], [6, 7], [7, 4], [7, 9]]);