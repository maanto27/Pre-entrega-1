export class RegisterPage {
    constructor () {
        this.iniciasesion = '#registertoggle'
    };

    clickIniciaSesionButton() {
        cy.get(this.iniciasesion).dblclick();
    };
};