const products = [
        {
            "id": 0,
            "category": "Cuadernos",
            "name": "Luna Azul",
            "price": 1300,
            "stock": 8,
            "description": "Cuaderno con nuestra famosa gata Luna mirando a la luna reflejarse en el agua",
            "image": "https://i.ibb.co/pJ18RjC/blueagenda.jpg",
        },
        {
            "id": 1,
            "category": "Cuadernos",
            "name": "Globos",
            "price": 1300,
            "stock": 8,
            "description": "Luna teniendo una aventura en globo",
            "image": "https://i.ibb.co/SwPVT1M/pinkagenda.jpg"
        },
        {
            "id": 2,
            "category": "Libros",
            "name": "Bitacoras",
            "price": 750,
            "stock": 5,
            "description": "Una historia para jugar, leer y colorear",
            "image": "https://i.ibb.co/kcGtW7x/bitacoras-front.jpg"
        },
        {
            "id": 3,
            "category": "Libros",
            "name": "El escritor de exitos",
            "price": 500,
            "stock": 5,
            "description": "Una recopilación de mis aventuras con el arte y la escritura",
            "image": "https://i.ibb.co/QMXdtxQ/escritor-front.jpg"
        },
        {
            "id": 4,
            "category": "Libros",
            "name": "Garabatos",
            "price": 900,
            "stock": 5,
            "description": "Una recopilación de historias, personajes, chistes y reflecciones",
            "image": "https://i.ibb.co/TYn0N4R/garabatos-front.jpg"
        },
        {
            "id": 5,
            "category": "Libros",
            "name": "Garabatos 2",
            "price": 900,
            "stock": 5,
            "description": "Segundo libro de nuestra exitosa serie, con nuevas historias y personajes",
            "image": "https://i.ibb.co/G3dLqpQ/garabatos2-front.jpg"
        },
        {
            "id": 6,
            "category": "Libros",
            "name": "Luna",
            "price": 800,
            "stock": 5,
            "description": "Mi historia con una increible gata llamada Luna",
            "image": "https://i.ibb.co/vsy4CJ3/luna-front.jpg"
        },
        {
            "id": 7,
            "category": "Agendas",
            "name": "Supercat Luna",
            "price": 700,
            "stock": 7,
            "description": "Agenda con Luna supercat en la portada",
            "image": "https://i.ibb.co/NsBNDwN/logbookfront-01.jpg"
        },
        {
            "id": 8,
            "category": "Agendas",
            "name": "Luna con fondo oscuro",
            "price": 700,
            "stock": 7,
            "description": "Agenda con caras graciosas de Luna en la portada",
            "image": "https://i.ibb.co/znB4gSy/logbookfront-02.jpg"
        },
        {
            "id": 9,
            "category": "Tazas",
            "name": "Luna con fondo oscuro",
            "price": 1200,
            "stock": 10,
            "description": "Taza con caras graciosas de Luna en la portada",
            "image":"https://i.ibb.co/7ypFzjp/mug-01.jpg"
        },
        {
            "id": 10,
            "category": "Tazas",
            "name": "101 Lunas",
            "price": 1200,
            "stock": 10,
            "description": "Las ciento una lunas en una taza",
            "image": "https://i.ibb.co/bbpbNrN/mug-02.jpg"
        },
        {
            "id": 11,
            "category": "Tazas",
            "name": "Soñando en las nubes",
            "price": 1200,
            "stock": 10,
            "description": "Taza con Luna soñando en las nubes",
            "image": "https://i.ibb.co/XjrqP1Q/mug-03.jpg"
        },
        {
            "id": 12,
            "category": "Tazas",
            "name": "Luna la curiosa",
            "price": 1200,
            "stock": 10,
            "description": "Taza con nuestra gata favorita preguntandose sobre los misterios del universo",
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