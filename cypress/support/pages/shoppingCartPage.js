export class ShoppingCartPage {
    constructor () {
        this.ShowTotalPriceButton = 'button[class="chakra-button css-15tuzzq"]'
    }

    VerificarNombre(productos) {
        return cy.contains(productos).siblings('#productName');
    };

    VerificarPrecio(productos) {
        return cy.contains(productos).siblings('#productPrice');
    };

    ClickShowTotalPriceButton() {
        cy.get(this.ShowTotalPriceButton).click();
    };

    VerificarPrecioDeProductos() {
        return cy.get('#price')
    }
};