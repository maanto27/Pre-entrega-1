export class LoginPage { 
    constructor () {
        this.loginbutton = '#submitForm'
    };
    
    escribirUsuario(usuario) {
        cy.get('#user').type(usuario);
    };
    escribirContraseña(contreseña) {
        cy.get('[name^="pa"]').type(contreseña);
    };
    clickLoginButton() {
        cy.get(this.loginbutton).click();
    };
};