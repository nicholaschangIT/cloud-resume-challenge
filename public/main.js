window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
});

const apiGateway = 'https://func-prd01.azurewebsites.net/api/HttpTrigger1?code=EeVpfo8bKSRDNVXWHeMqgPEoDv6S2PkzyRaae1g4aFIhjPYaaxOMVA==';

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
