
it('Navigates to bing search and search for NBA and then get the search number from result page',() =>{
    console.log("Navigate to bing home page")
    cy.visit('https://www.bing.com');
    console.log("Enter keyword 'NBA' on the search field")
    cy.xpath('//*[@name="q"]',{timeout:7000}).type("NBA");
    console.log("Click on search icon")
    cy.wait(1500)
    cy.xpath('//*[@name="q"]',{timeout:7000}).type('{enter}');
    console.log("Capture search results for NBA")
    cy.xpath('//*[@id="b_tween"]',{timeout:7000}).then(($searchResult) => {
        const text = $searchResult.text();
        console.log("Search result for AUDI is " + text)
        cy.log("Search result for AUDI is " + text);
        const arrayResult = text.split(' ');
        cy.log("Search number for NBA is " + arrayResult[1]);
        console.log("Search number for NBA is " + arrayResult[1])
    })//end of then
})//end of it test

  