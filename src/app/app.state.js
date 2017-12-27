const INITIAL_STATE = {
    counter: 0,
    currentProduct: {
        item: null,
        error: null,
        isFetching: false
    },
    products: {
        items: [],
        error: null,
        isFetching: false
    }
}

export default INITIAL_STATE
