interface Item {
    id: string;
    price: number;
    quantity: number;
}

const createShoppingCart = () => {
    let item: Item[] = [];

    const addItemToCart = (id: string, price: number, quantity: number) => {
        item = [...item, { id, price, quantity }];
    };

    const calculateTotal = () => {
        return item.reduce((total, item) => {
            let subTotal = item.price * item.quantity;
            if (item.quantity > 10) {
                subTotal *= 0.9;
            }
            return total + subTotal;
        }, 0);
    };

    return {
        addItemToCart,
        calculateTotal,
    };
};

export { createShoppingCart };
