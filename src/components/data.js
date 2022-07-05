const products = [
        {
            "id": 0,
            "category": "Cuadernos",
            "name": "Blue Moon",
            "price": 1300,
            "stock": 8,
            "description": "2022 diary with our famous cat Luna, seeing the moon reflected in the water",
            "image": "https://i.ibb.co/pJ18RjC/blueagenda.jpg",
        },
        {
            "id": 1,
            "category": "Cuadernos",
            "name": "Ballons",
            "price": 1300,
            "stock": 8,
            "description": "2022 diary with Luna having a balloon adventure",
            "image": "https://i.ibb.co/SwPVT1M/pinkagenda.jpg"
        },
        {
            "id": 2,
            "category": "Libros",
            "name": "Bitacoras",
            "price": 750,
            "stock": 5,
            "description": "A story to play, read and color",
            "image": "https://i.ibb.co/kcGtW7x/bitacoras-front.jpg"
        },
        {
            "id": 3,
            "category": "Libros",
            "name": "El escritor de exitos",
            "price": 500,
            "stock": 5,
            "description": "Compilation of my adventures with art and drawing",
            "image": "https://i.ibb.co/QMXdtxQ/escritor-front.jpg"
        },
        {
            "id": 4,
            "category": "Libros",
            "name": "Garabatos",
            "price": 900,
            "stock": 5,
            "description": "Compilation of stories, characters, jokes and reflections",
            "image": "https://i.ibb.co/TYn0N4R/garabatos-front.jpg"
        },
        {
            "id": 5,
            "category": "Libros",
            "name": "Garabatos 2",
            "price": 900,
            "stock": 5,
            "description": "Second installment of our successful book, with new stories and characters",
            "image": "https://i.ibb.co/G3dLqpQ/garabatos2-front.jpg"
        },
        {
            "id": 6,
            "category": "Libros",
            "name": "Luna",
            "price": 800,
            "stock": 5,
            "description": "My story with an amazing kitty named Luna",
            "image": "https://i.ibb.co/vsy4CJ3/luna-front.jpg"
        },
        {
            "id": 7,
            "category": "Agendas",
            "name": "Supercat Luna",
            "price": 700,
            "stock": 7,
            "description": "Logbook with Luna dressing like a superhero",
            "image": "https://i.ibb.co/NsBNDwN/logbookfront-01.jpg"
        },
        {
            "id": 8,
            "category": "Agendas",
            "name": "Luna with dark background",
            "price": 700,
            "stock": 7,
            "description": "Logbook with Luna making funny faces",
            "image": "https://i.ibb.co/znB4gSy/logbookfront-02.jpg"
        },
        {
            "id": 9,
            "category": "Tazas",
            "name": "Luna with dark background",
            "price": 1200,
            "stock": 10,
            "description": "Mug with Luna making funny faces",
            "image":"https://i.ibb.co/7ypFzjp/mug-01.jpg"
        },
        {
            "id": 10,
            "category": "Tazas",
            "name": "101 Lunas",
            "price": 1200,
            "stock": 10,
            "description": "The one hundred and one Lunas mug",
            "image": "https://i.ibb.co/bbpbNrN/mug-02.jpg"
        },
        {
            "id": 11,
            "category": "Tazas",
            "name": "Dreaming in the clouds",
            "price": 1200,
            "stock": 10,
            "description": "Mug with Luna dreaming in the clouds",
            "image": "https://i.ibb.co/XjrqP1Q/mug-03.jpg"
        },
        {
            "id": 12,
            "category": "Tazas",
            "name": "Curious Luna",
            "price": 1200,
            "stock": 10,
            "description": "Mug with our favourite kitten wondering about the misteries of the universe",
            "image": "https://i.ibb.co/yywpcK7/mug-04.jpg"
        },
    ]

    export const getProds = (categoryId) => {
        return new Promise((resolve, reject) => {
            const filteredProducts = products.filter(
                (prod) => prod.category === categoryId
            );
            setTimeout(() => {
                categoryId ? resolve(filteredProducts) : resolve(products);
            }, 1000);
            console.log(categoryId);
        });
    };
    
    export const getProd = (id) => {
        return new Promise((resolve, reject) => {
            const productFound = products.find(
                (prod) => prod.id === Number(id)
            );
            setTimeout(() => {
                resolve(productFound);
            }, 1000);
        });
    };