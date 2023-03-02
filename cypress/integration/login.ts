import {LoginPage} from "./pages/login_pages"
import {DashboardPage} from "./pages/dashboard_pages"
import { addToCart } from "./pages/addToCart_pages"
import { klikButtonRemove } from "./pages/klikButtonRemove_pages"


let loginPage = new LoginPage()
let dashboardPage = new DashboardPage()
let addTocart = new addToCart()
let klikBtnRem = new klikButtonRemove()

const URL = 'https://www.saucedemo.com/'

it('Test LOGIN', () => {
    loginPage.login(URL,'standard_user','secret_sauce')
    loginPage.assertLogin() 
})

it('Test Sauce Demo Invalid Password', () => {
    loginPage.login(URL,'standard_user','invalidPass')
    loginPage.assertLoginFail()
})

it('Test Sauce Demo Sauce labs product backpack', () => {
    loginPage.login(URL,'standard_user','secret_sauce')
    loginPage.assertLogin()
    dashboardPage.sauceLabsBackpack() 
})

it('Test Sauce Demo Sauce labs add to cart product backpack', () => {
    loginPage.login(URL,'standard_user','secret_sauce')
    loginPage.assertLogin()
    dashboardPage.sauceLabsBackpack()
    addTocart.addItem()
})

it('Test Sauce Demo Sauce labs remove produk from cart', () => {
    loginPage.login(URL,'standard_user','secret_sauce')
    loginPage.assertLogin()
    dashboardPage.sauceLabsBackpack()
    addTocart.addItem()
    klikBtnRem.remItem()
})
