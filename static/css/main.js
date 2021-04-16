window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
});

const apiGateway = 'https://func-prd01.azurewebsites.net/api/HttpTrigger1?code=R/xuV1h6W9lc00m7hqiYYKMbxP70uGqi9OabEcuJbM/SBrntqt80PA==';

const getVisitCount = () => {
    let count = 30;
    fetch(functionApi)
    .then(response => {
        return response.json()
    })
    .then(response => {
        console.log("Website called function API.");
        count = response.count;
        document.getElementById('counter').innerText = count;
    }).catch(function(error) {
        console.log(error);
      });
    return count;
}