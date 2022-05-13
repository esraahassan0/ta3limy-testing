export class HomePage {

    navigate(){
        cy.visit('https://ta3limy.com/')
    }

    clickAboutIcon(){
        cy.get('#help-menu > svg').click()
    }
    selectFaqs(){
        cy.get('[data-cy="faq-menuItem"]').click()
    }
}