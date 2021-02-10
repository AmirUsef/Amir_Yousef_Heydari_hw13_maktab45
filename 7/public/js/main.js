let cars = [];
$.ajax({
    url: "http://localhost:5005/cars",
    async: false,
    success: function(result) {
        cars = result;
    }
});

$(document).ready(function() {
    displayCards();
    displayPage();
})

function displayCards() {
    $(".cards").html("");
    for (let index = 0; index < 6; index++) {
        $(".cards").append(`    
        <div class="card col-12 col-md-6 col-lg-4">
            <img class="card-img-top" src="${cars[index].img}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${cars[index].brand}</h5>
                <p class="card-text">${cars[index].model}</p>
                <a class="btn btn-primary" id="${cars[index].id}" href="http://localhost:5005/cars/${index+1}">more info</a>
            </div>
        </div>`);
    }
}

function displayPage() {
    for (let index = 1; index < 7; index++) {
        $(`#${index}`).append(`    
            <img class="card-img-top" src="${cars[index-1].img}" alt="Card image cap">
            <div class="card-body">
                <p class="card-text">Brand : ${cars[index-1].brand}</p>
                <p class="card-text">Model : ${cars[index-1].model}</p>
                <p class="card-text">Power : ${cars[index-1].power} hp</p>
                <p class="card-text">0-60mph : ${cars[index-1]["0-60mph"]} s</p>
                <p class="card-text">Description : ${cars[index-1].description}</p>
            </div>`)
    }
}