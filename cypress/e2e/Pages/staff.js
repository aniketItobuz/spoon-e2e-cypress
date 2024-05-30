import { faker } from '@faker-js/faker';

export class staffD {

    addStaff(){
        const name = faker.person.fullName()
        
        cy.xpath('//span[normalize-space()="Manage Staff"]').click()
        cy.xpath('//div[contains(@title,"staff/delivery partner")]').click()
        cy.xpath('//input[@name="name"]').type(name)
        //cy.xpath('//input[@name="phoneNumber"]').type(faker.phone.number())
        cy.xpath('//input[@name="phoneNumber"]').type(9876543212)
        cy.xpath('//div[@class="multi-select__input-container css-19bb58m"]').click()
        cy.get('#react-select-3-option-1').type("{enter}")
        cy.xpath('//input[@name="email"]').type(faker.internet.email())
        cy.xpath('//button[@type="submit"]').click()
        cy.contains("Staff added successfully.")
    }

    deleteStaff(){
        cy.xpath('//span[normalize-space()="Manage Staff"]').click()
        cy.get('tbody .cursor-pointer').first().click()
        cy.xpath('//button[normalize-space()="Delete"]').click()
        cy.xpath('//button[normalize-space()="Delete"]').click() 
    }

}