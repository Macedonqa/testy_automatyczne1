import { searchPhrase } from "../fixtures/searchDate.json"

class Search {
    get searchBox() {
        return cy.get("#search_query_top")
    }
    typeSearchPhrase() {
        this.searchBox.type(searchPhrase)
    }
    
    clearSearchPhrase() {
        this.searchBox.clear();
    }
}

export default new Search();