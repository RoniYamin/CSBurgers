$(document).ready(function() {

    const usersList =  $('.usersList');
    const ordersList =  $('.ordersList');
    const usersBtn = $('.users');
    const ordersBtn = $('.orders');

    const usersData = $('#usersData');
    const ordersData = $('#ordersData');

    const appendUserLi = (user) => {
        const newElement = $(`<li id="${user._id}">
        <div class="user-Section"> 
            <span class="nameOfUser">${user.fname} ${user.lname}</span>

            <div type="button" class="userInfoButton" data-user-id="${user._id}">
                <i class="bi bi-chevron-down" id="iconToClick-${user._id}"></i>
            </div>
        </div>
        </li>`);

        newElement.find('.userInfoButton').on('click', async function() {
            const btn = $(this);
            const id = btn.attr('data-user-id');
            const icon = $(`#iconToClick-${id}`);

            if(icon.hasClass('bi bi-chevron-down')) {
                await $.ajax({
                    url: `/api/user/${id}`,
                    method: "GET"
                }).done(function(data) {
                    const li = $(`#${id}`);
                    li.append(`<div class="user-data-section" id="user-data-${id}">
                        <div class="user-data">
                            <div class="data">שם פרטי: ${data.fname}</div>
                            <div class="data">שם משפחה : ${data.lname}</div>
                            <div class="data">${data.phoneNumber} :טלפון</div>
                            <div class="data"></div>
                        </div>
                    </div>`);
    
                    icon.removeClass("bi bi-chevron-down").addClass("bi bi-chevron-up");
                });
            }
            else {
                $(`#user-data-${id}`).remove();
                icon.removeClass("bi bi-chevron-up").addClass("bi bi-chevron-down");
            }
        });

        usersList.append(newElement);
    }

    const renderUsers = (data) => {
        data.forEach(user => {
            appendUserLi(user);
        });
    }

    const appendOrderLi = (order) => {
        const newElement = $(`<li id="${order._id}">
        <div class="order-Section"> 
            <span class="numberOfOrder">${order.orderNumber}</span>

            <div type="button" class="orderInfoButton" data-order-id="${order._id}">
                <i class="bi bi-chevron-down" id="iconToClick-${order._id}"></i>
            </div>
        </div>
        </li>`);

        ordersList.append(newElement);
    }

    const renderOrders = (data) => {
        data.forEach(order => {
            appendOrderLi(order);
        });
    }

    $.ajax({
        url:"/api/user",
        method: "GET",
        success: (data) => {
            renderUsers(data);
        },
        error: (error) => {
            console.log(error);
        }
    });

    $.ajax({
        url:"/api/order",
        method: "GET",
        success: (data) => {
            renderOrders(data);
        },
        error: (error) => {
            console.log(error);
        }
    });

    usersBtn.on('click', function() {
        if (usersData.hasClass('hide')) {
            usersData.removeClass('hide').addClass('nohide');
            ordersBtn.removeClass('nohide').addClass('hide');
        }
    });

    ordersBtn.on('click', function() {
        if (ordersBtn.hasClass('hide')) {
            ordersBtn.removeClass('hide').addClass('nohide');
            usersData.removeClass('nohide').addClass('hide');
        }
    });
});