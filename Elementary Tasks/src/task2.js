function envelopes(envelopeA, envelopeB) {
    let validationStatus = validate2(envelopeA, envelopeB);

    if (validationStatus.status) {
        return validationStatus;
    } else {
        const aW = parseFloat(envelopeA.width),
            aH = parseFloat(envelopeA.height),
            bW = parseFloat(envelopeB.width),
            bH = parseFloat(envelopeB.height);

        if (aW < bW && aH < bH || aW < bH && aH < bW) {
            return 1;
        } else if (aW > bW && aH > bH || aW > bH && aH > bW) {
            return 2;
        } else {
            return 0;
        }
    }
}


function validate2(a, b) {
    const errorStatus = {
        status: 'failed',
        reason: '',
    };

    if (a.width && b.width && a.height && b.height) {
        let reg = /^([0-9]*[.])?[0-9]+$/;

        if ((reg.test(a.width)) && (reg.test(b.width)) && (reg.test(a.height)) && (reg.test(b.height))) {
            return true;
        } else {
            errorStatus.reason = 'Введены некорректные данные';
            return errorStatus;
        }
    } else {
        errorStatus.reason = 'Введите данные по условию';
        return errorStatus;
    }
}
