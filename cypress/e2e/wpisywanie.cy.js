/// <reference types="cypress" />

import base from "../pages/base";
import Search from "../pages/Search";
import ResultPage from "../pages/ResultPage";
import { searchPhrase, notFaundProduct } from "../fixtures/searchDate.json"

describe("wpisywanie tekstu w wyszukiwarkę",()=> {
    it ("wpisywanie tekstu", () => {
        base.openHomePage();
        Search.typeSearchPhrase(searchPhrase);
        Search.searchBox.should("have.value", searchPhrase)
        cy.wait(3000)
        Search.clearSearchPhrase();
        cy.wait(3000)
        Search.searchBox.type(`Przykładowa treść{enter}`);
        ResultPage.searchAlert.should("be.visible").and ("include.text", "No results")        
        Search.searchBox.should("have.class", "search_query")
        Search.searchBox.should("have.css", "margin-right", "1px")



    })

})