/// <reference types="cypress" />

describe("test związany z zaznaczaniem checkboxa", ()=>{
    it("Kliknięcie w zakładkę Women", () => {
        cy.visit ("/");
        cy.get('a[title="Women"]').click();
        cy.url().should("include", "id_category=3&controller=category")
    })
     
    it("wybranmie filtra Instock", ()=>{
        cy.get("#selectProductSort").select("In stock")
        cy.get("#selectProductSort").should("have.value", "quantity:desc")
    })

     it("wybranmie filtra product name a-z", ()=>{
          cy.get("#selectProductSort").select("Product Name: A to Z")
          cy.get("#selectProductSort").should("have.value", "name:asc")

    })

})