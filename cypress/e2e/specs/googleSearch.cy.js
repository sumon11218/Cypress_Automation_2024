
it('Navigates to google search and search for a car and then get the search number from result page',() =>{
    cy.visit('https://www.google.com');
    cy.xpath('//*[@name="q"]',{timeout:7000}).type("BMW");
    cy.xpath('//*[@name="q"]',{timeout:7000}).type("{enter}"); 
    cy.xpath('//div[@id="result-stats"]',{timeout:7000}).then(($searchResult) => {
        const text = $searchResult.text();
        cy.log("Search result is " + text);
        const arrayResult = text.split(' ');
        cy.log("Search number for BMW is " + arrayResult[1]);
    })//end of then
})//end of it test

  