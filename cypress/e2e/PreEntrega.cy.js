import { LoginPage } from '../support/pages/loginPage'
import { RegisterPage } from '../support/pages/registerPage'
import { HomePage } from '../support/pages/homePage'
import { ProductsPage } from '../support/pages/productsPage'
import { ShoppingCartPage } from '../support/pages/shoppingCartPage'

describe('PreEntrega', () => {
    let loginData;
    let productosData;
    const timeout = 10000;
    const loginPage = new LoginPage ();
    const registerPage = new RegisterPage ();
    const homePage = new HomePage ();
    const productsPage = new ProductsPage ();
    const shoppingCartPage = new ShoppingCartPage();
        
    before('Before', () =>{ 
      cy.fixture('login').then(data => {
        loginData = data
      });
      cy.fixture('productos').then(data => {
        productosData = data
      });
    });

    it('Verificar nombre, precio y el precio acumulado de los 2 productos' , () => {
      cy.visit('');
      registerPage.clickIniciaSesionButton();
      loginPage.escribirUsuario(loginData.login.username);
      loginPage.escribirContraseña(loginData.login.password);
      loginPage.clickLoginButton();
      homePage.DarleClickAlBotonOnlineShop();
      productsPage.AgregarProducto(productosData.productos.producto1.name);
      productsPage.CerrarVentanaEmergente();
      productsPage.AgregarProducto(productosData.productos.producto2.name);
      productsPage.CerrarVentanaEmergente();
      productsPage.CarritoDeCompraButton();
      shoppingCartPage.VerificarProducto(productosData.productos.producto1.name).should('have.text' , 'Pink Sweater');
      shoppingCartPage.VerificarProducto(productosData.productos.producto2.name).should('have.text' , 'White Shoes');
      shoppingCartPage.VerificarProducto(productosData.productos.producto1.precio).should('have.text' , '$18');
      shoppingCartPage.VerificarProducto(productosData.productos.producto2.precio).should('have.text' , '$30');
      shoppingCartPage.ClickShowTotalPriceButton();
      shoppingCartPage.VerificarPrecioDeProductos(productosData.productos.producto1.precio + productosData.productos.producto2.precio).should('have.text', '48');
    });

  });