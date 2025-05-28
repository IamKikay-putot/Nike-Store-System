
// document.addEventListener('DOMContentLoaded', () => {
//     const searched = document.getElementById('searched');
//     const data_template_card = document.querySelector('[data-template-card]')
//     const  containerSearched = document.querySelector('.Searched_items');
//     const data_items_card_container = document.querySelector('[data-items-card-container]');

//     console.log(containerSearched)

//     data_items_card_container.innerHTML = '';
//     searched.addEventListener('input', (event) => {
//         let typed = event.target.value;
//         console.log(typed);

//         // if (typed.value == '') {
//         //     data_items_card_container.innerHTML = '';
//         // }

//         fetch(`/search/${typed}/`, {
//             method: 'GET'   
//         })
//         .then(response => response.json())
//         .then(data => {
//             if (data.status) {
//                 let results = data.found;
//                 console.log(`Number of items found: ${results.length}`);
//                 let list = []
                
//                 data_items_card_container.innerHTML = '';

//                 list = results.map(itemFound => {
//                     console.log(itemFound)
                    
//                     const item = data_template_card.content.cloneNode(true)
//                     console.log(item)
//                     // item.querySelector('[data-image]').src = itemFound.image.url;
//                     // item.querySelector('[data-product-name]').textContent = itemFound.ProductName;
//                     // item.querySelector('[data-gender]').textContent = itemFound.gender;
//                     // item.querySelector('[data-categories]').textContent = itemFound.shoes_categories
//                     const img = item.querySelector('[data-image]');
//                     img.src = `/media/${itemFound.image}`;
//                     const name = item.querySelector('[data-product-name]');
//                     name.textContent = itemFound.ProductName;
//                     const gender = item.querySelector('[data-gender]');
//                     gender.textContent = itemFound.gender;
//                     const categories = item.querySelector('[data-categories]');
//                     categories.textContent = itemFound.shoes_categories;
                    
                    
//                     // item.classList.add('show')
//                     data_items_card_container.appendChild(item);
                    
//                     return { name: itemFound.ProductName, element: item }
//                 });
//                 console.log(data_items_card_container.innerHTML);
                
//                 console.log('list:' + list)
                
//                 list.forEach(itemsCreated_toList => {
//                     console.log("from list:" +typed);
//                     console.log(itemsCreated_toList.element)
//                     const isVisible = itemsCreated_toList.name.toLowerCase().includes(typed.toLowerCase());
//                     console.log(`Processing item: ${itemsCreated_toList.name}`);
//                     console.log(`Visibility check for "${itemsCreated_toList.name}": ${isVisible}`);
//                     itemsCreated_toList.element.classList.toggle("hide", !isVisible);
//                 });
                
//             }
//         })
//     })
// })



document.addEventListener('DOMContentLoaded', () => {
    const searched = document.getElementById('searched');
    const data_template_card = document.querySelector('[data-template-card]');
    const containerSearched = document.querySelector('.Searched_items');
    const data_items_card_container = document.querySelector('[data-items-card-container]');

    console.log(containerSearched);

    data_items_card_container.innerHTML = '';
    data_items_card_container.classList.add('hide')
    
    searched.addEventListener('input', (event) => {
        let typed = event.target.value.trim();
        console.log(typed);
        
        if (!typed) {
            data_items_card_container.innerHTML = ''; // Clear container if input is empty
            data_items_card_container.classList.add('hide') 
            data_items_card_container.classList.remove('show')
            return;
        }

        fetch(`/search/${typed}/`, {
            method: 'GET'   
        })
        .then(response => response.json())
        .then(data => {
            if (data.status) {
                let results = data.found;
                console.log(`Number of items found: ${results.length}`);
                
                // Clear previous search results
                data_items_card_container.innerHTML = '';

                results.forEach(itemFound => {
                    console.log(itemFound);

                    // Clone the template
                    const item = data_template_card.content.cloneNode(true);

                    // Populate the cloned template
                    const img = item.querySelector('[data-image]');
                    img.src = `/media/${itemFound.image}`;

                    const name = item.querySelector('[data-product-name]');
                    name.textContent = itemFound.ProductName;

                    const gender = item.querySelector('[data-gender]');
                    gender.textContent = itemFound.gender;

                    const categories = item.querySelector('[data-categories]');
                    categories.textContent = itemFound.shoes_categories;

                    // Append to container
                    data_items_card_container.classList.add('show')
                    data_items_card_container.appendChild(item);
                });

                console.log(data_items_card_container.innerHTML);
            }
        })
        .catch(error => console.error("Error fetching search results:", error));
    });
});