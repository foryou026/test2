
dues = {
    "shricunt" : 100,
    "agand" : -600,
    "gayrub" : 300,
    "gayman wormaaa" : -320,
    "chutainya" : 500,
    "ay-may chutre" : -400,
    "wankit gonorrohea": 200,
    "har jeet a loda" : -69,
    "mukh dhaar" : 600,
    "anclit ya dove" : 400,
};

const container = document.querySelectorAll('.container')[1];
console.log(container);

function createTag(name, amount, orderSwitch = false) {
    const rowtag = document.createElement("div");
    const nameBlock = document.createElement("div");
    const nameTag = document.createElement("h3");
    nameTag.textContent = name;

    const amountTag = document.createElement("h2");
    
    const gaaliTag = document.createElement("p");

    if(amount == 0) {
        gaaliTag.textContent = "paraye fatte mai haath ni maarte, nikal";
        amountTag.textContent = amount;
    } else if(amount > 0) {
        gaaliTag.textContent = "andha paisa, machaya bhai";
        amountTag.textContent = "+" + amount;
        amountTag.classList.add("text-success");
    } else {
        gaaliTag.textContent = "sasti gaali";
        amountTag.textContent = amount;
        if(name == "ay-may chutre") {
            amountTag.textContent = "-10 * someone's pointer";
        } else {
            amountTag.textContent = amount;
        }
        amountTag.classList.add("text-danger");
    }

    const amountGaaliBlock = document.createElement("div");
    // gaaliTag.className = "d-none d-sm-block";
    rowtag.className = "row row-content align-items-center";

    if(orderSwitch) {
        amountGaaliBlock.className = "col col-sm order-sm-first col-md";
        nameBlock.className = "col-12 col-sm-4 order-sm-last col-md-3";
    } else {
        amountGaaliBlock.className = "col-12 col-sm-4 col-md-3";
        nameBlock.className = "col col-sm col-md";
    }

    amountGaaliBlock.appendChild(amountTag);
    amountGaaliBlock.appendChild(gaaliTag);
    nameBlock.appendChild(nameTag);

    rowtag.appendChild(nameBlock);
    rowtag.appendChild(amountGaaliBlock);
    
    container.appendChild(rowtag);
}


duesIndex = 0;

for (const key in dues) {
    console.log(duesIndex ,key);
    createTag(key, dues[key], (duesIndex%2===0));
    duesIndex++;
}
