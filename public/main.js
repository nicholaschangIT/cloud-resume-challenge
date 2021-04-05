window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
});

const apiGateway = 'https://fun-prd1.azurewebsites.net/api/HttpTrigger1?code=geoCCyLfuPr/S2OGHAfbotKRE0qS6pGeZvdztlMoqOpWaa1Wznd7vQ==/'; 

const getVisitCount = () => {
    let count = 0;
    fetch(apiGateway, {
        mode: 'cors',
    })
    .then(response => {
        return response.json()
    })
    .then(res => {
        const count = res.Attributes.visitcount;
        document.getElementById('counter').innerText =count;
        document.getElementById('visitorElem').style.display = 'block';
    })
    return count;
}
