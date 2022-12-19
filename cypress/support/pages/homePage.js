export class HomePage {
    constructor () {
        this.onlineshop = '#onlineshoplink' , {timeout: 10000}
    };

    DarleClickAlBotonOnlineShop() {
        cy.get(this.onlineshop).click();
    };
    
};