
document.addEventListener('DOMContentLoaded', ()=> {
    const toggleMenu_btn = document.getElementById('toggleMenu-btn');
    
    let sidebar = document.querySelector('.sidebar');
    let span = document.querySelectorAll('.span');
    let users = document.querySelector('.users');
    let data_user_setting = document.querySelector('[data-user-setting]')
    let data_menu_open = document.querySelector('[data-menu-open]')
    let data_close = document.querySelector('[data-close]')
    let toggleCheck = false;
    // console.log(span)
    toggleMenu_btn.addEventListener('click', ()=> {
        if (toggleCheck == false) {
            toggleCheck = true;
            sidebar.style.width ='13vw';
            users.style.display ='block';
            data_menu_open.style.display = 'none';
            data_close.style.display = 'block'
            span.forEach(element => {
                element.style.display = 'block'
            });
            setTimeout(()=> {
                data_user_setting.style.display = 'block'
            }, 200);

        } else if (toggleCheck == true) {
            toggleCheck = false
            sidebar.style.width ='3.9%';
            data_close.style.display = 'none';
            data_menu_open.style.display = 'block';
            users.style.display = 'block';
            span.forEach(element => {
                element.style.display = 'none';
            })
            data_user_setting.style.display = 'none'
        }

    })

    let cart_sidebar_btn = document.getElementById('cart-sidebar-btn');

    cart_sidebar_btn.addEventListener('click', () => {
        // Redirect with a query parameter
        window.location.href = "/Shop/?toggle_sidebar=true";
    });

// Function to get URL parameters
    function getQueryParam(param) {
        let params = new URLSearchParams(window.location.search);
        return params.get(param);
    }

    let Shop_div_container = document.querySelector('.Shop-div-container');
    let itemDetails = document.querySelector('.itemDetails');
    let shop_header = document.querySelector('.shop-header');

    // Check if "toggle_sidebar" is true in the URL
    if (getQueryParam("toggle_sidebar") === "true") {
        shop_header.style.display = "none";
        Shop_div_container.style.display = "none";
        itemDetails.style.display = "grid";
    }



})