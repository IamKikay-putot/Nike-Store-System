

document.addEventListener('DOMContentLoaded', () => {
    let filter_btn = document.getElementById('filter-btn');
    let Filter = document.querySelector('.Filter');
    let OpenText = document.getElementById('OpenText');
    let HideText = document.getElementById('HideText');
    let filterToggle;
    filter_btn.addEventListener('click', () => {
        // Check the computed style of the element
        // const status = window.getComputedStyle()
        if (filterToggle == null) {
            filterToggle = true
            OpenText.style.display = 'none';
            HideText.style.display = 'block';
            HideText.style.display = 'inline';
            Filter.style.display = 'flex';
            // Filter.style.width = '22rem';
            // Filter.style.position = 'sticky'; 
            // Filter.style.top = '15px'; 
            
            Filter.style.flexDirection = 'column';
            Filter.style.transition = 'all 0.3s ease';
        } else if (filterToggle == true) {
            filterToggle = null;
            OpenText.style.display = 'block';
            OpenText.style.display = 'inline';
            HideText.style.display = 'none';
            Filter.style.display = 'none'; // Hide the filter
            // Filter.style.width = '22rem';
        }
    });
    
    let Gender_div = document.querySelector('.Gender-div');
    let Gender_dropDown = document.querySelector('.Gender-dropDown');
    let data_arrow_down = document.querySelector('[data-arrow-down]');
    let genderDropdown_Toggle;
    Gender_dropDown.addEventListener('click', () => {
        if (genderDropdown_Toggle == null) {
            genderDropdown_Toggle= true;
            Gender_div.style.display = 'block';
            data_arrow_down.style.transform = 'rotate(180deg)';
            data_arrow_down.style.transition = 'all 0.3s ease';
            Gender_div.style.opacity = '0';
            setTimeout(() => {
                Gender_div.style.opacity = '1';
                Gender_div.style.transition = 'all 0.3s ease';
            })
        } else if (genderDropdown_Toggle == true) {
            genderDropdown_Toggle = null;
            data_arrow_down.style.transform = 'rotate(0deg)';
            data_arrow_down.style.transition = 'all 0.3s ease';
            Gender_div.style.display = 'none';
            Gender_div.style.transition = 'all 0.3s ease';
            return
        }
    })


    

    let checkboxes = document.querySelectorAll("input[type='checkbox']");
    let FilterGender = document.querySelectorAll('.FilterGender');
    let Shoes_categories = document.querySelectorAll('.Shoes-categories')

    let Filter_Lifestyle = document.getElementById('Filter-Lifestyle');

    checkboxes.forEach(element => {
        // console.log(element.value)

            element.addEventListener('change', (event) => {
                // let touch = event.target;

                const allChecked = Array.from(checkboxes).every(checkbox => checkbox.checked);
                const NoChecked = Array.from(checkboxes).every(uncheckbox => !uncheckbox.checked)
                const checkMen = Array.from(checkboxes).some(checkforMen => checkforMen.value == 'Men' && checkforMen.checked) //checks for Men value in checkbox
                const checkWomen = Array.from(checkboxes).some(checkforWomen => checkforWomen.value == 'Women' && checkforWomen.checked) //checks for Women value in checkbox
                const checkKids = Array.from(checkboxes).some(checkforKids => checkforKids.value == "Kid's" && checkforKids.checked) //checks for Kid's value in checkbox
                
                let filterGender_text = document.querySelector('.filterGender-text');

                filterGender_text.innerHTML = '';
                FilterGender.forEach(genderFilter => {
                    // filterCat_text.innerHTML = '';
                    genderFilter.style.display = 'none';
                    if (NoChecked){
                        genderFilter.style.display = 'block';
                    } 
                    
                    if (checkMen) {
                        // genderFilter.style.display = 'none'
                        if (genderFilter.classList.contains('Men')) {
                            genderFilter.style.display = 'block'
                            filterGender_text.innerHTML = "Men's";
                        }
                    }
                    
                    // if (checkMen && checkWomen) {
                    //     if (genderFilter.classList.contains('Men') || genderFilter.classList.contains('Women')) {
                    //         filterGender_text.innerHTML = "Men & Women";
                    //     }
                    // }

                    // if (checkMen && checkKids) {
                    //     if (genderFilter.classList.contains('Men') || genderFilter.classList.contains("Kid's")) {
                    //         filterGender_text.innerHTML = "Men & Kid's";
                    //     }
                    // }
                    
                    if (checkWomen) {
                        // genderFilter.style.display = 'none';
                        if (genderFilter.classList.contains('Women')) {
                            genderFilter.style.display = 'block';
                            filterGender_text.innerHTML = "Women's";
                        }
                    }

                    if (checkKids) {
                        if (genderFilter.classList.contains("Kid's")) {
                            genderFilter.style.display = 'block'
                            filterGender_text.innerHTML = "Kid's";
                        }
                    }
                    
                    if (checkKids && checkWomen) {
                        if (genderFilter.classList.contains('Women') || genderFilter.classList.contains("Kid's")) {
                            filterGender_text.innerHTML = "Women & Kid's";
                        }
                    }

                    // if (allChecked) {
                    //     if (genderFilter.classList.contains('AllProducts')) {
                    //         genderFilter.style.display = 'block';
                    //     }
                    // }
                })
            })


            //FILTER Categories START
            let FilterCategory = document.querySelectorAll('.FilterCategories');

            let filterCat_text = document.querySelector('.filterCat-text'); //For Lifestyle button in Filter
            // console.log(FilterCategory);
            Filter_Lifestyle.addEventListener('click', () => {
                FilterCategory.forEach(categories => {
                    if (categories.classList.contains('Lifestyle')) {
                        categories.style.display = 'flex';
                        filterCat_text.innerHTML = 'Lifestyle';
                        
                    } else {
                        categories.style.display = 'none'
                    }
                    
                })
            })
            

            let Filter_Jordan = document.getElementById('Filter-Jordan'); //For Jordan button in Filter
            Filter_Jordan.addEventListener('click', () => {
                FilterCategory.forEach(element => {
                    if (element.classList.contains('Jordan')) {
                        element.style.display = 'block';
                        filterCat_text.innerHTML = 'Jordan';
                    } else {
                        element.style.display = 'none';
                    }
                })
            })
            
            let Filter_Running = document.getElementById('Filter-Running'); //For Running button in Filter
            Filter_Running.addEventListener('click', () => {
                FilterCategory.forEach(element => {
                    if (element.classList.contains('Running')) {
                        element.style.display = 'block';
                        filterCat_text.innerHTML = 'Running';
                    } else {
                        element.style.display = 'none';
                    }
                })
            })
            
            let Filter_Football = document.getElementById('Filter-Football'); //For Football button in Filter
            Filter_Football.addEventListener('click', () => {
                FilterCategory.forEach(element => {
                    if (element.classList.contains('Football')) {
                        element.style.display = 'flex';
                        filterCat_text.innerHTML = 'Football';
                    } else {
                        element.style.display = 'none';
                    }
                })
            })
            
            let Filter_Basketball = document.getElementById('Filter-Basketball'); //For Basketball button in Filter
            Filter_Basketball.addEventListener('click', () => {
                FilterCategory.forEach(element => {
                    if (element.classList.contains('Basketball')) {
                        element.style.display = 'block';
                        filterCat_text.innerHTML = 'Basketball';
                    } else {
                        element.style.display = 'none';
                    }
                })
            })
            
            let Filter_Gym_And_Training = document.getElementById('Filter-Gym_And_Training');
            Filter_Gym_And_Training.addEventListener('click', () => {
                FilterCategory.forEach(element => {
                    if (element.classList.contains('GymAndTraining')) {
                        element.style.display = 'block';
                        filterCat_text.innerHTML = 'Gym and Training';
                    } else {
                        element.style.display = 'none';
                    }
                })
            })

    });



    // FOR PRODUCT IMAGES SHOW
    let main_image = document.querySelector('.main-image');

    let first_image = document.querySelector('.first-image');
    first_image.addEventListener('mouseover', () => {
        main_image.src =first_image.src;
    })

    let second_image = document.querySelector('.second-image');
    second_image.addEventListener('mouseover', () => {
        main_image.src = second_image.src;
    })

    let third_image = document.querySelector('.third-image');
    third_image.addEventListener('mouseover', () => {
        main_image.src = third_image.src;
    })

    let fourth_image = document.querySelector('.fourth-image');
    fourth_image.addEventListener('mouseover', () => {
        main_image.src = fourth_image.src;
    })

    let fifth_image = document.querySelector('.fifth-image');
    fifth_image.addEventListener('mouseover', () => {
        main_image.src = fifth_image.src;
    })


    let shop_header = document.querySelector('.shop-header');

    let user; //FOR STORING USER 


    let product = document.querySelectorAll('.product');
    let product_showCase = document.querySelector('.product-showCase');
    let id_of_item = null;
    product.forEach(element => {
        element.addEventListener('click', (event) => {
            event.preventDefault()
            // alert('was clicked');
            Filter.style.display = 'none';  
            // Shop_div_container.style.display = 'none';
            let details = event.target.closest('.product');
            id_of_item = details.dataset.id;
            // alert(id_of_item)
            let Main_Shoes = document.querySelector('.Main-Shoes');
            fetch(`/productDetails/${id_of_item}/`, {
                method: 'GET'
            })
            .then(result => result.json())
            .then(response => {
                // alert('works perfectly fine, well done!11')
                if (response) {
                    console.log(product_showCase)
                    if (!product_showCase) {
                        console.error("Element '.product-showCase' not found.");
                        return;
                    }
                    Main_Shoes.style.display = 'none';
                    shop_header.style.display = 'none';
                    product_showCase.querySelector('.main-image').src = response.image 
                    product_showCase.querySelector('.first-image').src = response.image1
                    product_showCase.querySelector('.second-image').src = response.image2
                    product_showCase.querySelector('.third-image').src = response.image3
                    product_showCase.querySelector('.fourth-image').src = response.image4
                    product_showCase.querySelector('.fifth-image').src = response.image5
                    
                    product_showCase.querySelector('strong').textContent = response.ProductName ?? 'product unavailable'
                    product_showCase.querySelectorAll('p')[0].textContent = response.gender ?? 'No gender Available'
                    product_showCase.querySelectorAll('p')[1].textContent = response.shoes_categories ?? 'Categories unavailable'
                    product_showCase.querySelectorAll('p')[2].textContent = `₱ ${response.price}` ?? 'Price unavailable'

                    product_showCase.dataset.id = id_of_item;
                    console.log(`From showcase: ${product_showCase.dataset.id}`) //check if id was stored successfully

                    user = product_showCase.dataset.user;

                    console.log(`user: ${user}`)

                    let description = product_showCase.querySelector('.description');
                    description.querySelector('p').textContent = response.description
                    // alert('works perfectly fine, well done!')
                    // product_showCase.scrollIntoView({ behavior: "smooth", block: "center" });
                    // product_showCase.removeAttribute("style");
                    // product_showCase.style.display = ""; // Or "block", depending on your layout
                    // product_showCase.style.setProperty("display", "grid", "important");
                    product_showCase.style.display ='grid';
                    
                } else {
                    console.log('From Shop.js: Something went wrong in response')
                }
            })
            .catch(err =>  {
                console.error(`Something went wrong while fetching ${err.message}`)
            }) 
        })
    })


    // =========================================================== Add to Cart =======================================================
    
    let size_rBtn = document.querySelectorAll("input[type='radio']");

    let AddToCart_btn = document.getElementById('AddToCart-btn');

    let getValue = AddToCart_btn.dataset.loggedIn;

    let size_value_selected;

    let size_container = document.querySelector('.size-container')
    const labels = size_container.querySelectorAll('label');

    const promt_selectSize = document.querySelector('.promt-selectSize');

    // console.log(size_rBtn)
    size_rBtn.forEach(radiobutton => {
        console.log(`radio values: ${radiobutton.value}`)
        radiobutton.addEventListener('change', (radioVal) => {
            size_value_selected = radioVal.target.value;
            // console.log(val) 
            console.log(`Current value: ${size_value_selected}`)
            
            labels.forEach(Size_labels => {
                Size_labels.style.border = '1px solid grey';
                promt_selectSize.style.display = 'none';
                promt_selectSize.style.color = 'black';
            })
            
        })
    })


    AddToCart_btn.addEventListener('click', () => {
        if (getValue == 'notLoggedIn') {
            alert("you're currently not log in!")
            window.location.href = '/login/';
            return
        }
        // product_showCase.style.display = 'none';

        if (size_value_selected == null) {
            
            labels.forEach(Size_labels => {
                Size_labels.style.border = '1px solid red';
                promt_selectSize.style.display = 'block';
                promt_selectSize.style.color = 'red';
            })
            return
        }
        // console.log(`value of size: ${size_value_selected}`)
        // console.log(`current id of selected item: ${product_showCase.dataset.id}`) //check if we get the id of the item
        // const container_poppup = document.querySelector('.container-poppup');
        // const containerOF_poppup = document.getElementById('poppup');

        
        // console.log(containerOF_poppup)

        
        // console.log("from clone:" + clonePoppup.children[0]); 
        
        let itemToadd_toCart = product_showCase.dataset.id;
        let userAS_fk = user;
        console.log(`Size inside button: ${size_value_selected}`)
        console.log(`from add to cart button: ${user}`)
        // console.log(`current id of selected item: ${itemToadd_toCart}`)  //check if we get the id of the item
        
        fetch(`/populate_details_Add_to_cart/${itemToadd_toCart}/`, {
            method: 'GET'
        })
        .then(res => res.json())
        .then(data => {
            try {
                if (data.status) {
                    let user_cart = userAS_fk;
                    let product_id = itemToadd_toCart;
                    let product_name = data.item.product_name;
                    let product_gender = data.item.product_gender;
                    let product_category = data.item.product_category;
                    let product_price = data.item.product_price;
                    let product_image = data.item.product_image;
                    console.log(`Size inside fetch: ${size_value_selected}`)
                    // console.log(`AFTER FETCHING: ${product_name}`);
                    // console.log(`AFTER FETCHING: ${product_gender}`);
                    
                    fetch('/cart/', {
                        method: 'POST',
                        headers: {
                            'Content-Type':'application/json'
                        },
                        body: JSON.stringify({
                            'user_cart': user_cart,
                            'product_id': product_id,
                            'product_name': product_name,
                            'product_gender': product_gender,
                            'product_category': product_category,
                            'product_price': product_price,
                            'size': size_value_selected,
                            'product_image': product_image

                        })
                    })
                    .then(res => res.json())
                    .then(data => {
                        try {
                            if (data.status) {
                                alert(data.message)
                                
                                // console.log(`user inside: ${user_cart}`);
                                // console.log(`user inside from PS: ${product_showCase.dataset.user}`);
                                dynamic_Cart()
                            }
                        } catch(error) { 
                            console.error(`Something went wrong with the response, ${error.message}`)
                        }
                    })
                    .catch(error => {
                        console.error(`from "Shop.js" Something went wrong while fetching the populated informations! ${error,message}`)
                    })

                }
            } catch (error) {
                console.error(`Something went wrong while populating details: ${error.message}`);
            }
        })
        .catch(error => {
            console.error(`Something went wrong while fetching item details ${error.message}`)
        })

    })
    // console.log(`from addtocart button: ${getValue}`)

    // console.log(`this user value: ${user}`)

    // ==============================================================Side bar=========================================================================
    let user_cartOwner = product_showCase.dataset.user;

    
    function dynamic_Cart() {

        // let checkboxes;


        fetch(`/adaptCart/${user_cartOwner}/`, {
            method: 'GET',
        })
        .then(res => res.json())
        .then(addedItems =>{
            try {
                if (addedItems.status) {
                    // let items = addedItems.items;
                    let cart = document.querySelector('.cart')
                    let template = document.querySelector('[data-template]');
    
                    addedItems.items.forEach(itemsAddedToCart => {
                        console.log("items added to cart:", itemsAddedToCart);  // This prints the full object
    
                        // console.log("cart: ", cart)
    
    
                        const cloned = template.content.cloneNode(true);
                        // console.log("from cloned: ", cloned)
                        
                        let checkboxes = cloned.querySelector('.item-checkbox');
                        checkboxes.value = itemsAddedToCart.user;
                        checkboxes.dataset.price = itemsAddedToCart.product_price;
                        checkboxes.dataset.quantity = itemsAddedToCart.product_quantity
                        checkboxes.dataset.item = itemsAddedToCart.product_id_fk
    
                        let data_image = cloned.querySelector('[data-image]');
                        data_image.src = itemsAddedToCart.product_image
    
                        let product_name = cloned.querySelector('strong');
                        product_name.textContent = itemsAddedToCart.product_name
    
                        let product_category = cloned.querySelectorAll('p')[0];
                        product_category.textContent = itemsAddedToCart.product_category
    
                        let product_gender = cloned.querySelectorAll('p')[1];
                        product_gender.textContent = itemsAddedToCart.product_gender

                        let product_size = cloned.querySelectorAll('p')[2];
                        product_size.textContent = itemsAddedToCart.product_size

                        let product_price = cloned.querySelectorAll('p')[3];
                        product_price.textContent = `₱ ${itemsAddedToCart.product_price}`
    
                        let quantity = cloned.querySelector('input[type="number"]')
                        quantity.value = itemsAddedToCart.product_quantity
                        
                        cart.appendChild(cloned)
                        console.log("from cloned checker: ", checkboxes)
                                
                    })


                    document.querySelectorAll('.item-checkbox').forEach(box => {
                        box.addEventListener('change', updateSubtotal);
                    });

                    document.querySelectorAll('[data-add-button]').forEach(addButton => {
                        addButton.addEventListener('click', (event) => {
                            let parent = event.target.closest('[data-items-added]');
                            let quantityInput = parent.querySelector('.quantity-input');
                            let checkbox = parent.querySelector('.item-checkbox');

                            let newQuantity = parseFloat(quantityInput.value) + 1;
                            quantityInput.value = newQuantity;
                            checkbox.dataset.quantity = newQuantity;

                            updateSubtotal();
                        });
                    });

                    document.querySelectorAll('[data-minus-button]').forEach(minusButton => {
                        minusButton.addEventListener('click', (event) => {
                            let parent = event.target.closest('[data-items-added]');
                            let quantityInput = parent.querySelector('.quantity-input');
                            let checkbox = parent.querySelector('.item-checkbox');

                            let newQuantity = Math.max(1, parseFloat(quantityInput.value) - 1);
                            quantityInput.value = newQuantity;
                            checkbox.dataset.quantity = newQuantity;

                            updateSubtotal();
                        });
                    });
                    let itemExisting;
                    let list_items = [];
                    let itemSummary;
                    let datatotal;
                    function updateSubtotal() {
                        let itemsSummary = document.querySelector('.itemsSummary');
                        let sum = 0;

                        document.querySelectorAll('.item-checkbox').forEach(checkbox => {
                            let parent = checkbox.closest('.item');
                            let get_item = checkbox.dataset.item;
                            let get_product_name = parent.querySelector('strong').innerText;
                            let get_category = parent.querySelectorAll('p')[0].innerText;
                            let get_gender = parent.querySelectorAll('p')[1].innerText;
                            let get_size = parent.querySelectorAll('p')[2].innerText;
                            let get_image = parent.querySelector('[data-image]').src;

                            if (checkbox.checked) {
                                let quantity = parseFloat(checkbox.dataset.quantity) || 1;
                                let price = parseFloat(checkbox.dataset.price);
                                sum += price * quantity;

                                let existingSummaryItem = itemsSummary.querySelector(`[data-id="${get_item}"]`);
                                if (!existingSummaryItem) {
                                    let data_template_summary = document.querySelector('[data-template-summary]');
                                    const templateSummary = data_template_summary.content.cloneNode(true);

                                    itemSummary = templateSummary.querySelector('.item-summary');
                                    itemSummary.dataset.id = get_item;
                                    itemSummary.dataset.user = checkbox.value;
                                    itemSummary.dataset.itemName = get_product_name;
                                    itemSummary.dataset.price = price;
                                    itemSummary.dataset.quantity = quantity;
                                    itemSummary.dataset.gender = get_gender;
                                    itemSummary.dataset.category = get_category;
                                    itemSummary.dataset.size = get_size;
                                    itemSummary.dataset.itemImage = get_image;

                                    let detailsobject = {
                                        item_id: get_item,
                                        member: checkbox.value,
                                        item_name: get_product_name,
                                        item_price: price,
                                        item_quantity: quantity,
                                        item_totalprice: sum,
                                        gender: get_gender,
                                        category: get_category,
                                        size: get_size,
                                        item_image: get_image 
                                    };

                                    list_items.push(detailsobject); // Push only when item doesn't exist

                                    // Populate UI
                                    templateSummary.querySelector('[data-image-summary]').src = parent.querySelector('[data-image]').src;
                                    templateSummary.querySelector('[data-product-name-summary]').textContent = get_product_name;
                                    templateSummary.querySelectorAll('p')[0].innerText = get_category;
                                    templateSummary.querySelectorAll('p')[1].innerText = get_gender;
                                    templateSummary.querySelectorAll('p')[2].innerText = get_size;
                                    templateSummary.querySelector('.info-summary-price').textContent = parent.querySelectorAll('p')[3].innerText;
                                    templateSummary.querySelector('.info-summary-quantity').textContent = `Quantity: ${quantity}`;

                                    itemsSummary.appendChild(templateSummary);
                                    itemExisting = true;
                                } else {
                                    // Update quantity if item already exists
                                    existingSummaryItem.querySelector('.info-summary-quantity').textContent = `Quantity: ${quantity}`;

                                    let itemIndex = list_items.findIndex(item => item.item_id === get_item);
                                    if (itemIndex !== -1) {
                                        list_items[itemIndex].item_quantity = quantity; //  Update quantity instead of adding duplicate
                                    }
                                }
                            } else {
                                // Remove unchecked item
                                let existingSummaryItem = itemsSummary.querySelector(`[data-id="${get_item}"]`);
                                if (existingSummaryItem) {
                                    existingSummaryItem.remove();
                                    list_items = list_items.filter(item => item.item_id !== get_item); // Remove from list_items
                                }
                            }
                        });

                        // Update subtotal
                        let subtotal = document.querySelector('[data-subtotal]');
                        datatotal = document.querySelector('[data-total]');
                        if (subtotal) {
                            let total = sum + 240;
                            subtotal.innerHTML = sum.toFixed(2);
                            datatotal.innerHTML = total.toFixed(2);
                        }

                        console.log("Updated list_items:\n", JSON.stringify(list_items, null, 2))
                    }

                    // Attach function to checkbox change event 
                    document.querySelectorAll('.item-checkbox').forEach(checkbox => {
                        checkbox.addEventListener('change', updateSubtotal);
                    });

                    // succes animation text
                    let successAnimation = document.querySelector('.bg-loading')
                    let txtPO = document.querySelector('.txtPO')


                    // Checkout Logic
                    let paymentMethod;
                    let COD_paymentMethod = document.getElementById('COD-paymentMethod');
                    let COD_paymentInfo = document.querySelector('.COD-paymentInfo');
                    let OrderForm = document.querySelector('#OrderForm');
                    let inputs = OrderForm.querySelectorAll('input');
                    let txtArea = OrderForm.querySelector('textarea')
                    COD_paymentMethod.addEventListener('click', (event) => {
                        event.preventDefault()
                        if (event.target == COD_paymentMethod) {
                            paymentMethod = "Cash On Delivery";
                            COD_paymentInfo.style.display = 'block';
                            
                            inputs.forEach(element => {
                                let labelPartner = element.closest('label')
                                // let txtarea = element.closest('textarea')
                                if (element.value.length <= 0) {
                                    labelPartner.style.color = 'red';
                                    element.style.border = '2px solid red';
                                    txtArea.style.border = '2px solid red';
                                    COD_paymentInfo.style.display = 'none';
                                } else if (element.value.length >= 0) {
                                    labelPartner.style.color = 'navy';
                                    txtArea.style.border = '2px solid black';
                                    element.style.border = '2px solid black';
                                }
                            })

                        }
                        if (txtArea.value.length <= 0) {
                            txtArea.style.border= "2px solid red";
                        } else {
                            txtArea.style.border = "2px solid black";
                        }

                    })


                    document.querySelector('.checkout-btn').addEventListener('click', () => {
                        if (list_items.length === 0) {
                            alert('No items added');
                            return;
                        }

                        let cart = document.querySelector('.cart');
                        let user_informations_order = document.querySelector('.user-informations-order');
                        let uio_back_button = document.querySelector('.uio-back-button');
                        let user_inputs_order = document.querySelector('.user-inputs-order');

                        cart.style.display = 'none';
                        user_informations_order.style.display = 'block';

                        uio_back_button.addEventListener('click', () => {
                            user_informations_order.style.display = 'none';
                            cart.style.display = 'block';
                            paymentMethod = "";
                            COD_paymentInfo.style.display = 'none';
                        });

                        console.log(`Checkout Details:\n${JSON.stringify(list_items, null, 2)}`);

                        let itemsJSON = JSON.stringify(list_items);
                        let item = JSON.parse(itemsJSON);

                        let Fullname = OrderForm.querySelector("input[name='Fullname']");
                        let email = OrderForm.querySelector("input[name='email']");
                        let contactNumber = OrderForm.querySelector("input[name='ContactNumber']");
                        let ShippingAddress = OrderForm.querySelector("textarea[name='ShippingAddress']");
                        let province = OrderForm.querySelector("input[name='province']");
                        let city = OrderForm.querySelector('input[name="City"]');
                        let postalorCode = OrderForm.querySelector('input[name="Postal/ZIP"]');
                        let barangay = OrderForm.querySelector('input[name="Barangay/District"]');

                        console.log(`customer pre-details: ${Fullname.value}`);
                        console.log(`customer pre-details: ${email.value}`);
                        console.log(`customer pre-details: ${contactNumber.value}`);
                        console.log(`customer pre-details: ${ShippingAddress.value}`);
                        console.log(`customer pre-details: ${province.value}`);
                        console.log(`customer pre-details: ${city.value}`);
                        console.log(`customer pre-details: ${postalorCode.value}`);
                        console.log(`customer pre-details: ${barangay.value}`);

                        // alert("Items existing, proceeding to checkout!");
                        let passThrough = false;
                        if (paymentMethod === "Cash On Delivery") {
                            passThrough = true;
                            item.forEach(details => {
                                // console.log(`from json array: ${details.item_name}`) //continue for getting the checked items for oder populate....
                                // console.log(`from json array: ${details.item_image}`) //continue for getting the checked items for oder populate....
                                user_inputs_order.dataset.itemId = details.item_id;
                                user_inputs_order.dataset.member = details.member;
                                user_inputs_order.dataset.itemName = details.item_name;
                                user_inputs_order.dataset.itemPrice = details.item_price;
                                user_inputs_order.dataset.quantity = details.item_quantity;
                                user_inputs_order.dataset.totalprice = details.item_totalprice;
                                user_inputs_order.dataset.gender = details.gender;
                                user_inputs_order.dataset.category = details.category;
                                user_inputs_order.dataset.size = details.size;
                                user_inputs_order.dataset.itemImage = details.item_image;

                                console.log(`customer post-details: ${Fullname.value}`)
                                console.log(`customer post-details: ${email.value}`)
                                console.log(`customer post-details: ${contactNumber.value}`)
                                console.log(`customer post-details: ${ShippingAddress.value}`)
                                console.log(`customer post-details: ${province.value}`)
                                console.log(`customer post-details: ${paymentMethod}`)

                                console.log(`from user inputs item id: ${user_inputs_order.dataset.itemId}`)
                                console.log(`from user inputs member: ${user_inputs_order.dataset.member}`)
                                console.log(`from user inputs item name: ${user_inputs_order.dataset.itemName}`)
                                console.log(`from user inputs item price: ${user_inputs_order.dataset.itemPrice}`)
                                console.log(`from user inputs item quantity: ${user_inputs_order.dataset.quantity}`)
                                console.log(`from user inputs item total price: ${user_inputs_order.dataset.totalprice}`)
                                console.log(`from user inputs item gender: ${user_inputs_order.dataset.gender}`)
                                console.log(`from user inputs item category: ${user_inputs_order.dataset.category}`)
                                console.log(`from user inputs item size: ${user_inputs_order.dataset.size}`)
                                console.log(`from user inputs item image: ${user_inputs_order.dataset.itemImage}`)

                                if (!user_inputs_order.dataset.itemId) { console.log('missing on item id')}
                                if (!user_inputs_order.dataset.member) { console.log('missing on member')}
                                if (!user_inputs_order.dataset.itemName) { console.log('missing on item name')}
                                if (!user_inputs_order.dataset.itemPrice) { console.log('missing on item price')}
                                if (!user_inputs_order.dataset.quantity) { console.log('missing on item quantity')}
                                if (!user_inputs_order.dataset.totalprice) { console.log('missing on item total price')}
                                if (!user_inputs_order.dataset.gender) { console.log('missing on item gender')}
                                if (!user_inputs_order.dataset.category) { console.log('missing on item category')}
                                if (!user_inputs_order.dataset.size) { console.log('missing on item size')}
                                if (!user_inputs_order.dataset.itemImage) { console.log('missing on item image')}
                                if (!paymentMethod) { console.log('missing on item paymentMethod')}
                                let date = new Date();
                                let formattedDate = date.toDateString();
                                let order_id = Math.floor(Math.random() * 10000) + 1;
                                // console.log(order_id)
                                
                                if (passThrough === true) {
                                    fetch('/Orders/', {
                                        method: 'POST',
                                        headers: {
                                            'Content-Type': 'application/json'
                                        },
                                        body: JSON.stringify({
                                            'sjs_Fullname': Fullname.value,
                                            'sjs_email':email.value,
                                            'sjs_contactNumber':contactNumber.value,
                                            'sjs_ShippingAddress':ShippingAddress.value,
                                            'sjs_province':province.value,
                                            'sjs_paymentMethod': paymentMethod,
                                            'sjs_totalPayments': datatotal.innerText,
                                            'sjs_order_id': order_id,
                                            'sjs_member': user_inputs_order.dataset.member,
                                            'sjs_itemID': user_inputs_order.dataset.itemId,
                                            'sjs_itemName': user_inputs_order.dataset.itemName,
                                            'sjs_itemPrice': user_inputs_order.dataset.itemPrice,
                                            'sjs_itemQuantity': user_inputs_order.dataset.quantity,
                                            'sjs_totalPrice': user_inputs_order.dataset.totalprice,
                                            'sjs_gender': user_inputs_order.dataset.gender,
                                            'sjs_category': user_inputs_order.dataset.category,
                                            'sjs_itemSize': user_inputs_order.dataset.size,
                                            'sjs_orderCreatedAt': formattedDate,
                                            'sjs_itemImage': user_inputs_order.dataset.itemImage,
                                            'sjs_city': city.value,
                                            'sjs_postal': postalorCode.value,
                                            'sjs_barangay' : barangay.value

                                        })
                                    })
                                    .then(response => response.json())
                                    .then(result => {
                                        if(result.status == true) {
                                            // alert('Placed Order!')
                                            OrderForm.reset()
                                            successAnimation.style.display = 'flex';
                                            setTimeout(()=> {
                                                txtPO.style.display ='block';
                                            },400)
                                            setTimeout(()=>{
                                                successAnimation.style.display = 'none';
                                                txtPO.style.display ='none';
                                            },3200)
                                        }
                                    })
                                    .catch(error => {
                                        console.error(`From sjs: Something went wrong while fetching ${error.message}`)
                                    })
                                }
                            })
                            console.log(`from total with delivery fee: ${datatotal.innerText}`)
                            
                        }
                        
                    });

    
                } else {
                    console.log('something went wrong while getting the result')
                }
    
            } catch(error) {
                console.error(`error at ${error.message}`)
            }
        })
        .catch(err => {
            console.log(`from shop.js: ${err.message}`)
        })

    }


    let cart_sidebar_btn = document.getElementById('cart-sidebar-btn');
    let Shop_div_container = document.querySelector('.Shop-div-container')
    let itemDetails = document.querySelector('.itemDetails')
    let toggle_side_bar;
    cart_sidebar_btn.addEventListener('click', () => {

        if (toggle_side_bar == null) {
            toggle_side_bar = true;
            shop_header.style.display = 'none';
            Shop_div_container.style.display ='none';
            
            itemDetails.style.display = 'grid';
        } 
        // else if (toggle_side_bar == true) {
        //     toggle_side_bar = null;
        //     itemDetails.style.display = 'none';

        //     Shop_div_container.style.display ='grid';
        //     Shop_div_container.style.gridAutoFlow ='column';
        //     shop_header.style.display = 'flex';
        // }
        // alert('working naman')
    })




    dynamic_Cart()
    // checkboxesAC()
});