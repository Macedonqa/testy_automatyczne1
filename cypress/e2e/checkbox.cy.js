/// <reference types="cypress" />

import Home from "../pages/Home";
import base from "../pages/base";
import Women from '../pages/Women';



describe("test związany z zaznaczaniem checkboxa", ()=>{
    it("Kliknięcie w zakładkę Women", () => {
        base.openHomePage();
        Home.clikOnWomenTab();
        cy.url().should("include", "id_category=3&controller=category")

    })


    it("zaznaczenie checkbox w zakładce women", () => {
        Women.chceckTops();
        cy.get("#layered_category_4").should("be.checked");        
        Women.checkDresses();
        Women.checkSize();

    })
})