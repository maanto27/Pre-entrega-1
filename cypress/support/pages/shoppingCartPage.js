export class ShoppingCartPage {
    constructor () {
        this.DarleClickAlBotonShowTotalPrice = 'button[class="chakra-button css-15tuzzq"]'
    }

    VerificarProducto(productos) {
        return cy.contains(productos);
    };

    BotonShowTotalPrice() {
        cy.get(this.DarleClickAlBotonShowTotalPrice).click();
    };

    VerificarPrecioDeProductos(productos) {
        return cy.contains(productos);
    }
};