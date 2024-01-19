beforeEach(() => {
    // Visit the initial domain or web application
    cy.visit("https://www.usps.com")
});
it('Find a USPS store near your location',() =>{
    let timeLimit = 10000
    cy.xpath("//*[text()='Quick Tools']",{timeout:timeLimit}).type("{enter}")
    cy.xpath("//*[text()='Find USPS Locations']",{timeout: timeLimit}).eq(0).click()    
    cy.xpath("//*[@id='city-state-input']",{timeout:timeLimit}).type("10001")
    cy.xpath("//*[@id='searchLocations']",{timeout: timeLimit}).click()    
    cy.wait(2800)
})//end of test
