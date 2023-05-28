console.log('heyy')

const summary = document.getElementById('summary');
fetch('./data.json')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        data.forEach(element => {
            const summ = document.createElement('div');
            summ.innerHTML = `<img src='${element.icon}'><h4>${element.category}</h4><p>${element.score}/100</p>`
            summ.classList.add('summary-each')
            summary.appendChild(summ)
        });
    })
    .catch(error => console.error('Error:', error))
