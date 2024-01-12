it('Purchase Nike Dunk at Nike Website',() =>{
    let timeLimit = 10000
    cy.visit('https://www.nike.com')
    cy.xpath('//*[@aria-label="New & Featured"]').click({timeout: timeLimit})
    cy.xpath('//*[@aria-label="Category for Shoes"]').eq(0).click({timeout: timeLimit})
    cy.xpath('//*[contains(@alt,"Nike Dunk Low Men")]').click({timeout: timeLimit})
    cy.scrollTo(0,500)

})//end of test
