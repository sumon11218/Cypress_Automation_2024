
it('Navigates to bing search and search for NBA and then get the search number from result page',() =>{
    cy.task("log","Navigate to bing home page")
    cy.visit('https://www.bing.com');
    cy.task("log","Enter keyword 'NBA' on the search field")
    cy.xpath('//*[@name="q"]',{timeout:7000}).type("NBA");
    cy.task("log","Click on search icon")
    cy.wait(1500)
    cy.xpath('//*[@name="q"]',{timeout:7000}).type('{enter}');
    cy.task("log","Capture search results for NBA")
    cy.xpath('//*[@id="b_tween"]',{timeout:7000}).then(($searchResult) => {
        const text = $searchResult.text();
        cy.log("Search result for AUDI is " + text);
        const arrayResult = text.split(' ');
        cy.log("Search number for NBA is " + arrayResult[1]);
        cy.task("log","Search number for NBA is " + arrayResult[1])
    })//end of then method test
})//end of it test


  