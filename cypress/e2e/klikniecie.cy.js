/// <reference types="cypress" />

describe("Kliknięcie w element na stronie", () => {
    it("klikniecie w zakładkę Contakt us", () => {
        cy.visit("/");
        cy.get('a[title="Contact us"]').click();
 

    })
})
