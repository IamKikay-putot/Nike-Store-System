

document.addEventListener('DOMContentLoaded', () => {

    const Dashboard_Main = document.getElementById('Dashboard-Main');
    const Add_Products_Main = document.getElementById('Add-Products-Main');
    document.getElementById('Add-Product-btn').addEventListener('click', () => {
        // alert('button was clicked');
        if (Add_Products_Main.style.display === 'none') {
            Dashboard_Main.style.display = 'none';
            Add_Products_Main.style.display = 'block';
        }
        // return Add_Products_Main.style.display = '';
    })

    const add_product = document.querySelector('#add_product');
    // console.log(add_product);
    add_product.addEventListener('submit', (e) => {
        e.preventDefault()
        const formdata = new FormData(add_product);

        fetch('/add-product_conf/', {
            method: 'POST',
            body: formdata
        })
        .then(response => response.json())
        .then(data => {
            // if (data.status === true) {
            //     add_product.reset();
            //     alert(data.message);
            // } else {
            //     alert(data.messge);
            // }
            //     add_product.reset();
            data.status ? (alert(data.message), add_product.reset()) : alert(data.message);
        })
    })

    let OrderDetails_button = document.querySelectorAll('#OrderDetails-button');
    let orderdetails = document.querySelector('#orderdetails');
    OrderDetails_button.forEach(order => {
        let parent = order.closest('.orderDetails');
        // let span_order_id = document.querySelector('.span-order-id');
        let FullnameOD = document.querySelector('.Fullname-od');
        let emailOD = document.querySelector('.email-od');
        let contactNumberOD = document.querySelector('.contactNumber-od');
        let shippingaddressOD = document.querySelector('.shippingaddress-od');
        let provinceOD = document.querySelector('.province-od');
        let statusOD = document.querySelector('.status-od');
        let cityOD = document.querySelector('.city-od');
        let postal = document.querySelector('.post-od');
        let barangay = document.querySelector('.barangay-od');
        // let totalprice = parent.querySelector('[data-totalprice]')
        let image = document.querySelector('[data-imagecontain]');
        let totalprice = 0;
        let list = []
        // data_subtotal.textContent = parent.dataset.totalprice;

        console.log(`ordersDetails: ${parent.dataset.fullname}`)
        let odBackbutton = document.querySelector('.od-backbutton');
        order.addEventListener('click', () => {
            Dashboard_Main.style.display = 'none';
            orderdetails.style.display = 'block';
            console.log(`ordersDetails one clicked: ${parent.dataset.email}`)
            
            odBackbutton.addEventListener('click', () => {
                Dashboard_Main.style.display = 'block';
                orderdetails.style.display = 'none';

            })

            // span_order_id.textContent = parent.dataset.orderid;
            FullnameOD.textContent = parent.dataset.fullname;
            emailOD.textContent = parent.dataset.email;
            contactNumberOD.textContent = parent.dataset.contactnumber;
            shippingaddressOD.textContent = parent.dataset.shippingaddress;
            provinceOD.textContent = parent.dataset.province;
            statusOD.textContent = parent.dataset.status;
            cityOD.textContent = parent.dataset.city;
            postal.textContent = parent.dataset.postal;
            barangay.textContent = parent.dataset.barangay;

            
            fetch(`/orderDetails/${emailOD.innerText}/`, {
                method: 'GET'
            })
            .then(response =>  response.json())
            .then(theitems => {
                if (theitems.status) {
                    theitems.itemsOrdered.forEach(itemsOrderedByUser => {
                        let item_osi_container = document.querySelector('.item-osi-container');
                        let data_template_item_osi = document.querySelector('[data-template-item-osi]');
                        const clonedItemOsi = data_template_item_osi.content.cloneNode(true)

                        let image = clonedItemOsi.querySelector('[data-imagecontain]');
                        fetch(`/getImage/${itemsOrderedByUser.item_ID}/`, {
                            method: 'GET'
                        })
                        .then(res => res.json())
                        .then(imageFETCHED => {
                            if (imageFETCHED.status) {
                                image.src = imageFETCHED.image;
                            }
                        })
                        let productName = clonedItemOsi.querySelectorAll('p')[0];
                        let Category = clonedItemOsi.querySelectorAll('p')[1];
                        let gender = clonedItemOsi.querySelectorAll('p')[2];
                        let size = clonedItemOsi.querySelectorAll('p')[3];
                        let quantity = clonedItemOsi.querySelector('[data-quantity]');
                        let price = clonedItemOsi.querySelector('[data-price]');

                        let data_paymentMeth = document.querySelector('[data-paymentMeth]')
                        let data_subtotal = document.querySelector('[data-subtotal]');
                        let data_total = document.querySelector('[data-total]')


                        productName.textContent = itemsOrderedByUser.item_Name;
                        Category.textContent = itemsOrderedByUser.item_category;
                        gender.textContent = itemsOrderedByUser.item_gender;
                        size.textContent = itemsOrderedByUser.item_size;
                        quantity.textContent = itemsOrderedByUser.item_quantity;
                        price.textContent = `₱ ${itemsOrderedByUser.item_Price}`;

                        
                        item_osi_container.appendChild(clonedItemOsi);

                        // totalprice = itemsOrderedByUser.item_totalprice

                        // list.push(parseFloat(itemsOrderedByUser.item_Price))
                        list.push((parseFloat(itemsOrderedByUser.item_Price) * parseFloat(itemsOrderedByUser.item_quantity)))


                        let insideCount = 0;
                        data_paymentMeth.textContent = itemsOrderedByUser.Payment_Method;
                        list.forEach(count => {
                            insideCount += parseInt(count);
                            data_subtotal.textContent = `₱ ${insideCount.toFixed(2)}`; 
                        })
                        data_total.textContent = `₱ ${itemsOrderedByUser.total_payments}`;
                        
                    })
                    // totalprice += totalprice

                }
            })


        })
    })

})