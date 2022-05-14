
///<reference types="cypress"/>

import {HomePage} from "../pages/home_page.js";
import {Validation} from '../utils/validation';
describe('Loading the faqs questions and ansers from faqs.json to data ', function() {})
    before(function(){
        cy.fixture('faqs').then(function(data){
          this.data = data
        })
      })




 let homePage = new HomePage()
 let validation = new Validation()
 describe('Validating the common questions & answers are displayed properly by navigating to the faqs screen and fetch all the questions and answers and compare them with the faqs file ', function() {
  it('validation_faqs',function(){
    homePage.navigate()
    homePage.clickAboutIcon()
    homePage.selectFaqs()

     /**
     * this is a loop that iterate over the faqs file to compare it's items with the website's items 
     */
    for (let counter = 0; counter < this.data.length; counter++) {
     
         /**
         Collapsible is the class that contains the question(<P) and answer(<P)
         */
      cy.get('[class^="Collapsible"]').then(($ell) => {

          /**
           * here we get access to the span to be able to get their children
           */
        const $divs = $ell.find('[class^="Collapsible__trigger is-closed"]')
        cy.log($divs.children().eq(counter).text())
        /**
         * Here we compare the <p text with the faq question of the current index 
         */
        validation.validateText($divs.children().eq(counter).text(),this.data[counter].Question)

          /**
           * here we get access to the div to be able to get their children
           */
       const $divs2 = $ell.find('[class^="Collapsible__contentOuter"]')
          cy.log($divs2.children().eq(counter).text())
               /**
         * Here we compare the <p text with the faq answer of the current index 
         */
          validation.validateText($divs2.children().eq(counter).text(),this.data[counter].Answer)
          
        });
    }   
})
})
