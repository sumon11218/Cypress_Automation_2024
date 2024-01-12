    
    it('Navigates to google search and search for a specific car and then get search number from result page',() =>{
        let cars = [];
        cars.push('BMW');
        cars.push('Mercedes');
        cars.push('Audi');

        for (let i = 0; i < cars.length; i++) {
        cy.visit('https://www.google.com');
        cy.xpath('//*[@name="q"]',{timeout:7000}).type(cars[i]);
        cy.xpath('//*[@name="q"]',{timeout:7000}).type("{enter}");
        cy.xpath('//div[@id="result-stats"]').then(($searchResult) => {
            const text = $searchResult.text();
            //cy.log("Search result is " + text);
            const arrayResult = text.split(' ');
            cy.log("Search number for " + cars[i] + " is " + arrayResult[1]);
        })//end of then
        }//end of loop
    })//end of it

  
  