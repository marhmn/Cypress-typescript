export class klikButtonRemove{
    removeFromcartBtn = '#remove-sauce-labs-backpack'
    addTocartBtn = '#add-to-cart-sauce-labs-backpack'
    remItem(){
        cy.get(this.removeFromcartBtn).click()
        cy.get(this.addTocartBtn).should('be.visible') 
    }
}
