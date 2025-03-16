import {createShoppingCart} from "../components/ShoppingCart.tsx";


describe("ShoppingCart", () => {
    it("가격 계산", () => {
        const shoppingCart = createShoppingCart();
        shoppingCart.addItemToCart("apple", 2.0, 2);
        shoppingCart.addItemToCart("orange", 3.5, 1);

        const price = shoppingCart.calculateTotal();
        expect(price).toEqual(7.5);
    });

    it("할인 결제", () => {
        const shoppingCart = createShoppingCart();
        shoppingCart.addItemToCart("apple", 2.0, 11);

        const price = shoppingCart.calculateTotal();
        expect(price).toEqual(19.8);
    });
});
