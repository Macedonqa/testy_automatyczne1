/// <reference types="cypress" />

describe("mój pierwszy test automatyczny", () => {
    it("otworzenie strony google.com", () =>{
        cy.visit("https://google.com");
    })
})
