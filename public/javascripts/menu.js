$(document).ready(function() {
    $.ajax({
        url:"/api/category",
        method: "GET"
    }).done(function(data) {
        data.forEach(function(category) {
            $('.categories-list').append(`<li class="${category._id}">
                <div class="nameOfCategory">${category.name}</div>
            </li>`);
        });
    });
});