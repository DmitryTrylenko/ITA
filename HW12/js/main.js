const dropdown = document.getElementsByClassName('dropdown-child')[0];
    dropdown.addEventListener('click', (event) => {
        const spinnerType = event.currentTarget.options[event.target.selectedIndex].value;
        const previewElement = document.getElementsByClassName('preview')[0];
        previewElement.classList = '';
        previewElement.classList.add('preview', spinnerType);
    });

    window.addEventListener('load', (event) => {
        let items = [];

        if (localStorage.getItem('lastVisits')) {
            items = JSON.parse(localStorage.getItem('lastVisits'));

            for (let i = 0; i< items.length; i++) {
                document.getElementById('last-visit').innerHTML += `<div>${items[i]} </div>`;
            }
        }
    });

    window.addEventListener('beforeunload', function(e){
        let items = [];
        const lastVisitDate = new Date().toLocaleString();
        if (localStorage.getItem('lastVisits')) {
            items = JSON.parse(localStorage.getItem('lastVisits'));
        }
        localStorage.setItem('lastVisits', JSON.stringify(items.concat(lastVisitDate)));
    }, false);