$(document).ready(async function() {

    const dishesList = $('.dishes-list');
    const mealsList = $('.meals-list');
    const categories = $('.categories');

    const appendCategoryLi = (category) => {
        const newElement = $(`<li id="${category._id}">
            <a class="nameOfCategory" data-category-id="${category._id}" href="/menu#${category.name}">${category.name}</a>
        </li>`);

        newElement.find('.nameOfCategory').on('click', async function() {
            const btn = $(this);
            const id = btn.attr('data-branch-id');


        });

        categories.append(newElement);
    }

    const renderCategories = (data) => {
        data.forEach(category => {
            appendCategoryLi(category);
        });
    }

    $.ajax({
        url:"/api/category",
        method: "GET",
        success: (data) => {
            renderCategories(data);
        },
        error: (error) => {
            console.log(error);
        }
    });
});