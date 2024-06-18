/// <reference types="cypress" />

import {login, passwd} from "../fixtures/loginDate.json";

describe ("Custom Commands", () => {
    it("logowanie do strony", ()=> {
        cy.login(login, passwd);
               
    })

})