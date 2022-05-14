export class View{

    clickButton(button){
        cy.get(button).click()
    }

    clickCheckBox(checkBox){
        cy.get(checkBox).check()
    }

    typeOnEditFeild(editFeild,text){
        cy.get(editFeild).type(text)
    }
}