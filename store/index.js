export const state = () => ({
    isSignedIn: false,
    cart: [],
    products: [
        {
            id: 1,
            name: 'silver chandelier',
            price: 30,
            img: "chandelier1.jpg",
            category: 4,
            count: 0
        },
        {
            id: 2,
            name: 'beautiful lamp',
            price: 25,
            img: "lamp1.jpg",
            category: 4,
            count: 0
        },
        {
            id: 3,
            name: 'black chandelier',
            price: 28,
            img: "chandelier2.jpg",
            category: 4,
            count: 0
        },
        {
            id: 4,
            name: 'modern chandelier',
            price: 35,
            img: "chandelier3.jpg",
            category: 3,
            count: 0
        },
        {
            id: 5,
            name: 'simple lamp',
            price: 20,
            img: "lamp2.jpg",
            category: 2,
            count: 0
        },
        {
            id: 6,
            name: 'simple lamp',
            price: 25,
            img: "lamp3.jpg",
            category: 2,
            count: 0
        },
        {
            id: 7,
            name: 'silver chandelier',
            price: 28,
            img: "chandelier4.jpg",
            category: 3,
            count: 0
        },
        {
            id: 8,
            name: 'modern chandelier',
            price: 30,
            img: "chandelier5.jpg",
            category: 3,
            count: 0
        },
        {
            id: 9,
            name: 'modern lantern',
            price: 30,
            img: "lamp4.jpg",
            category: 4,
            count: 0
        },
        {
            id: 10,
            name: 'orange lamp',
            price: 24,
            img: "lamp5.jpg",
            category: 4,
            count: 0
        },
        {
            id: 11,
            name: 'modern chandelier',
            price: 30,
            img: "chandelier6.jpg",
            category: 3,
            count: 0
        },
        {
            id: 12,
            name: 'modern chandelier',
            price: 30,
            img: "lamp6.jpg",
            category: 3,
            count: 0
        },
    ],
    categories: [
        {
            id: 1,
            name: 'All Lamp',
            img: 'lamp1.jpg',

        },
        {
            id: 2,
            name: 'Study Lamp',
            img: 'study-lamp-ca.webp',
        },
        {
            id: 3,
            name: 'Kitchen Lamp',
            img: 'kitchen-lamp-ca.jpg',
        },
        {
            id: 4,
            name: 'Living Room Lamp',
            img: 'livingroom-lamp-ca.jpg',
        }
    ],
    total: {
        total: 0,
        count: 0
    }
})

export const getters = {
    getProductById: (state) => (id) => {
        return state.products.find(item => item.id == id)
    },

    getProductByCategory: (state) => (id) => {
        if (id != 1) {
            return state.products.filter(item => item.category == id)
        }
        else {
            return state.products
        }
    },

    getCategoryById: (state) => (id) => {
        return state.categories.find(item => item.id == id)
    },

    getTotal(state) {
        let total = 0

        state.cart.forEach(product => {
            total += product.count * product.price;
        });

        return total;
    },

    getItemsCount(state) {
        let count = 0

        state.cart.forEach(product => {
            count += product.count;
        });

        return count;
    },

    getItemsFromCart: (state) => (id) => {
        return state.cart.find(item => item.id == id)
    }
}

export const mutations = {
    addItems(state, id) {
        let items = state.products.find(product => product.id == id);
        state.cart.push(items);
        localStorage.setItem('cart', JSON.stringify(state.cart))
    },
    removeItems(state, id) {
        state.cart = state.cart.filter(item => item.id != id);
        localStorage.setItem('cart', JSON.stringify(state.cart))

    },
    addCartItemCount(state, id) {
        let items = state.cart.find(product => product.id == id);
        items.count++;
        localStorage.setItem('cart', JSON.stringify(state.cart))
    },
    minCartItemCount(state, id) {
        let items = state.cart.find(product => product.id == id);
        items.count--;
        localStorage.setItem('cart', JSON.stringify(state.cart))
    },
    emptyCart(state) {
        state.cart = [];
        localStorage.removeItem('cart');
        state.products.forEach(product => {
            product.count = 0;
        });
    },
    addCartToLocalStorage(state) {
        localStorage.setItem('cart', JSON.stringify(state.cart))
    },
    setCart(state) {
        state.cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
    }
}