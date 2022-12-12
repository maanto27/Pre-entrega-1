export class HomePage {
    constructor () {
        this.onlineshop = '#onlineshoplink'
    };

    DarleClickAlBotonOnlineShop() {
        cy.get(this.onlineshop).click();
    };
    
};