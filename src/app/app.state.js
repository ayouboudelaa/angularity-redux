const INITIAL_STATE = {
    counter: 0,
    currentProduct: {
        item: null,
        error: null,
        isFetching: false
    },
    productsList: {
        items: [],
        error: null,
        isFetching: false
    }
}

export default INITIAL_STATE
