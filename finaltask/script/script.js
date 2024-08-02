 document.addEventListener('DOMContentLoaded', () => {
        const jsonData = {
            "newArrivals": {
                "title": "New arrivals",
                "textContent": {
                    "paragraph": "Check out our latest arrivals for the upcoming season",
                    "link": {
                        "text": "See the collection here",
                        "href": "#"
                    }
                },
                "products": [
                    {
                        "image": "images/arivalscap.jpg",
                        "alt": "Product Image 1",
                        "stars": 4,
                        "like": false,
                        "title": "Black and white sport cap",
                        "price": "$18.15"
                    },
                    {
                        "image": "images/arivalsglass.jpg",
                        "alt": "Product Image 2",
                        "stars": 2,
                        "like": false,
                        "title": "Metal bridge sunglasses",
                        "price": "$89.95"
                    },
                    {
                        "image": "images/arivalsbody.jpg",
                        "alt": "Product Image 3",
                        "stars": 5,
                        "like": false,
                        "title": "Green baby romper",
                        "price": "$20.40"
                    },
                    {
                        "image": "images/arivalsjeans.jpg",
                        "alt": "Product Image 4",
                        "stars": 5,
                        "like": false,
                        "title": "Mid-rise slim cropped fit jeans",
                        "price": "$40.00"
                    },
                    {
                        "image": "images/arivalsrings.jpg",
                        "alt": "Product Image 5",
                        "stars": 5,
                        "like": false,
                        "title": "Red dangle earrings",
                        "price": "$29.95"
                    }
                ]
            }
        };

        const container = document.getElementById('arrivals-container');

        // Create and append title
        const title = document.createElement('h1');
        title.textContent = jsonData.newArrivals.title;
        container.appendChild(title);

        // Create and append text content
        const textContent = document.createElement('div');
        textContent.classList.add('text-content');
        const paragraph = document.createElement('p');
        paragraph.innerHTML = `${jsonData.newArrivals.textContent.paragraph} <br> <a href="${jsonData.newArrivals.textContent.link.href}">${jsonData.newArrivals.textContent.link.text}</a>`;
        textContent.appendChild(paragraph);
        container.appendChild(textContent);

        // Create and append products
        const row = document.createElement('div');
        row.classList.add('row-arrivals');
        const col = document.createElement('div');
        col.classList.add('col-1-6');
        row.appendChild(col);

        jsonData.newArrivals.products.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('image-container');
            
            const link = document.createElement('a');
            link.href = '#'; // Could be product URL if available
            const img = document.createElement('img');
            img.classList.add('arrivals-img');
            img.src = product.image;
            img.alt = product.alt;
            link.appendChild(img);
            productDiv.appendChild(link);

            const starsDiv = document.createElement('div');
            starsDiv.classList.add('stars');
            for (let i = 0; i < 5; i++) {
                const star = document.createElement('i');
                star.classList.add('fa-regular', 'fa-star');
                if (i < product.stars) {
                    star.classList.add('filled');
                }
                star.addEventListener('click', () => {
                    star.classList.toggle('filled');
                });
                starsDiv.appendChild(star);
            }
            productDiv.appendChild(starsDiv);

            const likeDiv = document.createElement('div');
            likeDiv.classList.add('like');
            const likeIcon = document.createElement('i');
            likeIcon.classList.add('fa-regular', 'fa-heart');
            likeIcon.classList.toggle('liked', product.like);
            likeIcon.addEventListener('click', () => {
                likeIcon.classList.toggle('liked');
            });
            likeDiv.appendChild(likeIcon);
            productDiv.appendChild(likeDiv);

            const titlesDiv = document.createElement('div');
            titlesDiv.classList.add('titles');
            const subtitle = document.createElement('div');
            subtitle.classList.add('subtitle');
            subtitle.textContent = product.title;
            const price = document.createElement('div');
            price.classList.add('title');
            price.textContent = product.price;
            titlesDiv.appendChild(subtitle);
            titlesDiv.appendChild(price);
            productDiv.appendChild(titlesDiv);

            col.appendChild(productDiv);
        });

        container.appendChild(row);
    });


document.querySelectorAll('.stars i').forEach(star => {
    star.addEventListener('click', function() {
        let allStars = this.parentElement.querySelectorAll('i');
        let clickedIndex = Array.from(allStars).indexOf(this);
        
        allStars.forEach((star, index) => {
            if (index <= clickedIndex) {
                star.classList.add('filled');
            } else {
                star.classList.remove('filled');
            }
        });
    });
});


document.addEventListener('DOMContentLoaded', () => {
    // Функція для обробки натискань на лайк
    function handleLikeClick(event) {
        // Переконатися, що натиснуто саме на іконку, а не на батьківський елемент
        const likeIcon = event.target.closest('.fa-heart');
        if (likeIcon) {
            likeIcon.classList.toggle('liked');
        }
    }

    // Додаємо обробник подій до всіх іконок лайка в секціях "trending" і "sale"
    document.querySelectorAll('.like-trend .fa-heart, .like .fa-heart, .like-sale .fa-heart').forEach(likeIcon => {
        likeIcon.addEventListener('click', handleLikeClick);
    });
});


