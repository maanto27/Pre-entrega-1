export class ShoppingCartPage {
    constructor () {
        this.ShowTotalPriceButton = 'button[class="chakra-button css-15tuzzq"]'
    }

    VerificarProducto(productos) {
        return cy.contains(productos);
    };

    ClickShowTotalPriceButton() {
        cy.get(this.ShowTotalPriceButton).click();
    };

    VerificarPrecioDeProductos() {
        return cy.get('#price')
    }
};