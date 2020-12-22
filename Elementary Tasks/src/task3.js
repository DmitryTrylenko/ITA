function getTriangleAreas(arr){
    let validationStatus = validate3(arr);

    if (validationStatus.reason) {
        return validationStatus;
    } else {
        const areas = [];

        for (let i = 0; i < arr.length; i++) {
            let a = parseInt(arr[i].a);
            let b = parseInt(arr[i].b);
            let c = parseInt(arr[i].c);

            const p = (a + b + c) / 2;
            const area = Math.sqrt(p * (p - a) * (p - b) * (p - c));
            areas.push({
                name: arr[i].name,
                area,
            });
        }

        areas.sort((a, b) => {
            if ( a.area > b.area ){
                return -1;
            }
            if ( a.area < b.area ){
                return 1;
            }
            return 0;
        });
        return areas;
    }
}

function validate3(arr) {
    const errorStatus = {
        status: 'failed',
        reason: '',
    };
    for (let i = 0; i < arr.length; i++) {
        let reg = /^([0-9]*[.])?[0-9]+$/;

        let a = arr[i].a,
            b = arr[i].b,
            c = arr[i].c;

        if (a && b && c ) {
            if (reg.test(a) && reg.test(b) && reg.test(c)){
                errorStatus.status = null;
            } else {
                errorStatus.reason += `Введены некорректные данные для треугольника ${arr[i].name} \n`;
                errorStatus.status = 'failed';
            }
        } else {
            errorStatus.reason += `Введите данные по условию для треугольника ${arr[i].name} \n`;
            errorStatus.status = 'failed';
        }
    }

    return errorStatus;
}
