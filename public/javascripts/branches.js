$(document).ready(function() {
    $.ajax({
        url:"/api/branches",
        method: "GET"
    }).done(function(data) {
        data.forEach(function(branch) {
            $('.branches-list').append(`<li>
            <div class="location">
                <div class="location-icon">
                    <i class="bi bi-geo-alt-fill"></i>
                </div>

                <span class="nameOfLocation">${branch.name}</span>
            </div>

            <div class="plus-icon">
                <i class="bi bi-plus-circle-fill"></i>
            </div>
        </li>`);
        });
    });


});