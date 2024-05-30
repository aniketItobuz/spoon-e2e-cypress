import { faker } from '@faker-js/faker';

export class food {

    addCategory(){
        cy.xpath("//button[@id='add-category']").click()
        cy.xpath("//input[@placeholder='Category Name']").click().type(faker.lorem.word(5))
        cy.xpath("//button[@type='submit']").click()
        cy.contains("Category added successfully")
    }

    deleteCategory(){
        cy.xpath("//div[@id='scroll-container']/div/div[2]").click()
        cy.xpath("//button[normalize-space()='Delete']").click()
        cy.contains("Category deleted successfully.")
    }
}