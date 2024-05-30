/// <reference types= "cypress" />

import { login } from "../../support/utils";
import { faker } from '@faker-js/faker';
import 'cypress-xpath'

describe('All Item', () => {

  beforeEach(() => {
    const { Base_URL, ADMIN_Email, ADMIN_Password } = Cypress.env();
    cy.visit(Base_URL);
    login(ADMIN_Email, ADMIN_Password);
  });

  it('Add Item', () => {
    cy.xpath(':nth-child(3) > .text-white > .w-full').click()
    cy.get('.bg-deep-green').click()
    //span[@class='background-gradient text-active rounded-lg p-2 h-full w-full block']
    cy.xpath('//label[@for="files"]').selectFile('cypress/fixtures/user.png')
    cy.xpath('//input[@name="itemName"]').type(faker.lorem.word(7))
    cy.xpath('//*[@id="root"]/div[3]/div/div[2]/form/div/div[2]/div[1]/div[2]/div/button[1]').click()
    cy.xpath('//input[@name="price"]').type(faker.number.int({min: 200, max: 300}))
    cy.xpath('//input[@name="limit"]').type(faker.number.int({min: 2,max:6}))
    cy.xpath('//textarea[@name="description"]').type(faker.lorem.paragraph(3))
    cy.xpath('//*[@id="root"]/div[3]/div/div[2]/form/div/div[2]/div[3]/div/div/button[4]').click()
    cy.xpath('//button[@type="submit"]').click()
    cy.contains('Item added successfully')
  })
})