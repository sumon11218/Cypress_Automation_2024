
it('Navigates to bing search and search for a AUDI car and then get the search number from result page',() =>{
    cy.visit('https://www.bing.com');
    cy.xpath('//*[@name="q"]',{timeout:7000}).type("AUDI");
    cy.xpath('//*[@id="search_icon"]',{timeout:7000}).click(); 
    cy.xpath('//div[@class="sb_count"]',{timeout:7000}).then(($searchResult) => {
        const text = $searchResult.text();
        console.log("Search result for AUDI is " + text)
        cy.log("Search result for AUDI is " + text);
        const arrayResult = text.split(' ');
        cy.log("Search number for AUDI is " + arrayResult[1]);
        console.log("Search number for AUDI is " + arrayResult[1])
    })//end of then
})//end of it test

  