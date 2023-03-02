export class addToCart{
    addTocartBtn = '#add-to-cart-sauce-labs-backpack'
    badge='.shopping_cart_badge'
    addItem(){
        cy.get(this.addTocartBtn).click()
        cy.get(this.badge).should('be.visible') 
    }
}