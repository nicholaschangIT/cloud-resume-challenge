window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
});

const apiGateway = 'https://fun-prd1.azurewebsites.net/api/HttpTrigger1?code=aybalM8MHLE6pDB4xHXO64aZroBn/S6GjRUCMp/o1EqjG1J8yplt0w==';

const getVisitCount = () => {
    let count = 0;
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
