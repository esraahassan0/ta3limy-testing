
///<reference types="cypress"/>

import {HomePage} from "../pages/home_page.js";
import {Validation} from '../utils/validation';
import {View} from '../utils/view';
describe('Loading the selectors that used on the registration cycle ', function() {})
    before(function(){
        cy.fixture('registeration_selectors').then(function(data){
          this.selectors = data
        })
        cy.fixture('user').then(function(data){
            this.user = data
          })
      })




 let homePage = new HomePage()
 let view = new View()

 it('test scenario for registeration as a parent',function(){
     homePage.navigate()
     view.clickButton(this.selectors.create_account)
     view.clickCheckBox(this.selectors.parent_check_box)
     view.clickCheckBox(this.selectors.less_than_25_checkbox)
     view.clickCheckBox(this.selectors.yes_check_box)
     view.clickButton(this.selectors.submit)
     /**
      * navigating to create account screen
      */
     view.clickButton(this.selectors.using_phone_number)

    view.typeOnEditFeild(this.selectors.firstName,this.user.firstName)
    view.typeOnEditFeild(this.selectors.secondName,this.user.secondName)
    view.typeOnEditFeild(this.selectors.phoneNumber,this.user.number)
    view.typeOnEditFeild(this.selectors.password,this.user.password)
    if(this.user.gender == "male"){
        view.clickButton(this.selectors.maleCheckBox)
    }else{
        view.clickButton(this.selectors.femaleCheckBox)
    }
    view.typeOnEditFeild(this.selectors.passwordConfirmation,this.user.password)
    view.clickButton(this.selectors.agreeOn)
    view.clickButton(this.selectors.createAccount)
 }
 )