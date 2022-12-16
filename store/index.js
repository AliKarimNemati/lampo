export const state = () => ({
    cart: [],
    products: [
        {
            id: 1,
            name: 'silver chandelier',
            price: 30,
            img: "chandelier1.jpg",
            type: "livingRoom",
            count: 0
        },
        {
            id: 2,
            name: 'beautiful lamp',
            price: 25,
            img: "lamp1.jpg",
            type: "livingRoom",
            count: 0
        },
        {
            id: 3,
            name: 'black chandelier',
            price: 28,
            img: "chandelier2.jpg",
            type: "livingRoom",
            count: 0
        },
        {
            id: 4,
            name: 'modern chandelier',
            price: 35,
            img: "chandelier3.jpg",
            type: "kitchen",
            count: 0
        },
        {
            id: 5,
            name: 'simple lamp',
            price: 20,
            img: "lamp2.jpg",
            type: "study",
            count: 0
        },
        {
            id: 6,
            name: 'simple lamp',
            price: 25,
            img: "lamp3.jpg",
            type: "study",
            count: 0
        },
        {
            id: 7,
            name: 'silver chandelier',
            price: 28,
            img: "chandelier4.jpg",
            type: "kitchen",
            count: 0
        },
        {
            id: 8,
            name: 'modern chandelier',
            price: 30,
            img: "chandelier5.jpg",
            type: "kitchen",
            count: 0
        },
        {
            id: 9,
            name: 'modern lantern',
            price: 30,
            img: "lamp4.jpg",
            type: "livingRoom",
            count: 0
        },
        {
            id: 10,
            name: 'orange lamp',
            price: 24,
            img: "lamp5.jpg",
            type: "livingRoom",
            count: 0
        },
        {
            id: 11,
            name: 'modern chandelier',
            price: 30,
            img: "chandelier6.jpg",
            type: "kitchen",
            count: 0
        },
        {
            id: 12,
            name: 'modern chandelier',
            price: 30,
            img: "lamp6.jpg",
            type: "kitchen",
            count: 0
        },
    ]
})

export const getters = {
    getProductById: (state) => (id) =>{
        return state.products.find(item => item.id == id)
    }
}

export const mutations = {
    addItems(state, id) {
        let items = state.products.find(product => product.id == id);
        state.cart.push(items);
    },
    removeItems(state, id) {
        state.cart = state.cart.filter(item => item.id != id);
    },
    addCartItemCount(state, id) {
        let items = state.products.find(product => product.id == id);
        items.count++;
    },
    minCartItemCount(state, id) {
        let items = state.products.find(product => product.id == id);
        items.count--;
    },
}