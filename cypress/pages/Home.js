class Home {
    get womenTab() {
        return cy.get('a[title ="Women"]')
    }
    clikOnWomenTab() {
        this.womenTab.click();
    }
}

export default new Home();