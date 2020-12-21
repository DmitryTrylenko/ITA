const table = ['91%','81%','72%','81%','97%','84%','83%','76%','92%','82%','82%','87%','72%','87%','73%','83%','88%','92%','92%','98%','81%','89%','83%','91%','83%','73%','84%','67%','81%','93%','89%','93%','98%','82%','93%','82%','91%','93%','77%','83%','82%','84%','94%','91%','82%','96%','84%','90%','99%','91%','68%','71%','87%','86%','79%','98%','90%','76%','97%','83%','71%','69%','75%','81%','73%','75%','74%','98%','72%','61%','72%','67%','82%','93%','93%','78%','89%','85%','91%','64%','88%','92%','96%','81%','72%','60%','58%','89%','92%','76%','77%','94%','92%','100%','88%','97%','84%','72%','100%','71%','100%','82%','92%','100%','100%','79%','100%','71%','82%','86%','71%','82%','83%','85%','81%','100%','93%','84%','82%','67%','100%','82%','93%','66%','92%','67%','100%','89%','100%','92%','77%','100%','85%','82%','81%','83%','95%','100%','100%','100%','74%','93%','93%','100%'];

const zodiacs = ['Овен','Телец','Близнецы','Рак','Лев','Дева','Весы','Скорпион','Стрелец','Козерог','Водолей','Рыбы'];

const zodiacSigns = ['♈', '♉', '♊', '♋', '♌', '♍', '♎', '♏', '♐', '♑', '♒', '♓', '⛎'];

let result = [];

function getZodiac(user){
    // 1993-07-20T09:44:18.674Z
    const dob = new Date(user.dob.date);
    const month = dob.getMonth();
    sign(month);
    return {
        name : zodiacs[month],
        id : month,
        gender : user.gender
    };
}

function sign(month) {
    const sign1 = document.querySelector('.sign1'),
          sign2 = document.querySelector('.sign2');
    for (let i = 0; i < zodiacSigns.length; i++) {
        if (month == i) {
                if (result.length == 2) {
                    result = [];
                    result.push(zodiacSigns[i]);
                } else {
                    result.push(zodiacSigns[i]);
                };
        }; 
    };
    
    sign1.innerHTML = `<div><p>${result[0]}</p></div>`;
    sign2.innerHTML = `<div><p>${result[1]}</p></div>`;
}

export function getCompatibility(users){
    const xy = {
        male : 'x',
        female : 'y'
    };
    const zodiacs = users.map(getZodiac).reduce((acc, el) => {
        console.log(el);
        acc[xy[el.gender]] = el.id;
        return acc;
    },{});

    const tableId = zodiacs.y * 12 + zodiacs.x;
    percent(table[tableId]);

    return table[tableId];
}

function generateMessage(data, isResultMatched) {
    const percentResult = document.querySelector('.percent'),
          blockBtns = document.querySelector('.btn-check');

    const message = isResultMatched ? 'Вы угадали.' : 'Вы не угадали.'
    percentResult.innerHTML = `<div class='massage'><p>${message} Совместимость: ${data}</p></div>`;
    blockBtns.classList.add('hide');
}

function handlePercentBtn(btn, percentStart, percentEnd, data) {
    btn.addEventListener('click', () => {
        if (data <= percentStart && data >= percentEnd) {
            generateMessage(data, true);
        } else {
            generateMessage(data, false);
        };
    });
}

function percent(data) {
    const first = document.querySelector('.first'),
          second = document.querySelector('.second'),
          third = document.querySelector('.third'),
          fouth = document.querySelector('.fouth'),
          fifth = document.querySelector('.fifth');

    handlePercentBtn(first, '69%', '60%', data);
    handlePercentBtn(second, '79%', '60%', data);
    handlePercentBtn(third, '89%', '60%', data);
    handlePercentBtn(fouth, '99%', '60%', data);
    handlePercentBtn(fifth, '100%', '100%', data);
}