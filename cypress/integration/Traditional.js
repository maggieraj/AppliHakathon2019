//Appli Hakathon 5 steps
//1st Login Page UI Elements Test to test for the "https://demo.applitools.com/hackathon.html"
//Launched the link, got the login form
//Entered the username/password and clicked the log-in button
describe('Ist Login Page UI Elements Test', function() {
    it('UI Elements', function() {
      cy.visit('https://demo.applitools.com/hackathonV2.html');
      cy.get('.logo-w').should('be.visible');
      cy.get('.auth-header').should('contain','Login Form');
      })
})
//2nd Data Driven Test to test for the web object on the login page
//Test data for Username, password and no data to the page.
//enter only Username no password
//enter only Password and no username
//No username and password ,just click on login
describe('IInd Test Data Driven', function() {
    it('Only Username', function() {
      cy.get('#username').type('maggi'); // Only User name given
      cy.get('#log-in').click(); 
      cy.contains('Password must be present').should('be.visible'); 
    })
    it('Only Password', function() {
        cy.get('#username').clear(); 
        cy.get('#password').type('test');// Only Password
        cy.get('#log-in').click(); 
        cy.contains('Username must be present').should('be.visible');  
      })
      it('No Username & Password', function() {
        cy.get('#password').clear(); //No username and password, just clicking the login button.
        cy.get('#log-in').click();  
        cy.contains('Both Username and Password must be present').should('be.visible');  
      })
      it('Postive - Valid username & Password', function() {
        cy.get('#username').type('maggie'); //Valid username & Password to login to screen
        cy.get('#password').type('test')
        cy.get('#log-in').click();  
        cy.get('#showExpensesChart').should('be.visible');
      })
})
describe('3rd  Table sort Test', function() {
    it('Click on amount on the table', function() {
        cy.get('#amount').click(); //Able to click on the amount and do the sorting
//verify that the column is in ascending order and that each row’s data stayed in tact after the sorting. 
//Sorting Algorithms :
    //Selection Sort.
    //Bubble Sort.
    //Recursive Bubble Sort.
    //Insertion Sort.
    //Recursive Insertion Sort.
    //Merge Sort.
    //Iterative Merge Sort.
    //Quick Sort.
//It requires a huge amount of code or to use any SORTING AGORITHMS in the tradational coding.
//Cypress does not provide any sort standard methods too and we need to code it manually.
      })
})
// 4th Canvas Chart Test
//To click on the compare expenses
//To click on the 2017 chart
//to click on the 2018 chart
//Validate the data of 2017 and 2018 chart.
describe('4th Convas Chart Test', function() {
    it('compare 2017 & 2018 convas', function() {
    cy.get('#showExpensesChart').click();
    cy.get('#container').should('be.visible');
    // On this page of the canvas chart, tradational code can max click and view the chart is present.
    // Now to compare the 2017 & 2018 or to click on the 2017/2018/2019 is not possible. Limitation of the cypress too.
     })
    it('compare 2017 & 2018 & 2019 convas', function() {
        cy.get('#addDataset').click(); // To fetch the next year data can be clicked
     // Now to compare the 2017 & 2018 or to click on the 2017/2018/2019 is not possible. Limitation of the cypress too.     
     cy.get('#container').should('be.visible');
    })
})  

//5th Dynamic Content Test
//Test for the existence of a display ad that’s dynamic and at times might go missing by using this URL:
//To validate any flash/gif.
describe('5th Dynamic Content Test', function() {
    it('Different URL', function() {
      cy.visit('https://demo.applitools.com/hackathonV2.html?showAd=true');
      cy.get('#username').type('maggie'); //Valid username & Password to login to screen
      cy.get('#password').type('test')
      cy.get('#log-in').click();  
      cy.get('#flashSale > img').should('be.visible');
      cy.get('#flashSale2 > img').should('be.visible');
// Cypress provides the intellgence to get right selector based on the object type. Faster to to code
//cypress provides easy keyword defenition while choosing the function name, Ex: cy.get() or cy.contain.
      })
})


