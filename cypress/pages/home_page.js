export class HomePage {

     /**
     * launching the website
     */
    navigate(){
        cy.visit('https://ta3limy.com/')
    }

     /**
     * clicking the about icon 
     */
    clickAboutIcon(){
        cy.get('#help-menu > svg').click()
    }
     /**
     * selecting faqs icon from the menu
     */
    selectFaqs(){
        cy.get('[data-cy="faq-menuItem"]').click()
    }
}