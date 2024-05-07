/// <reference types= "cypress" />

import { login } from "../../support/utils";
import { faker } from '@faker-js/faker';
import 'cypress-xpath'
import "cypress-localstorage-commands";

describe('Manage Staff', () => {

  const name = faker.person.fullName()

  beforeEach(() => {
    const { Base_URL, ADMIN_Email, ADMIN_Password } = Cypress.env();
    cy.visit(Base_URL);
    login(ADMIN_Email, ADMIN_Password);
    cy.wait(2000);
    // cy.saveLocalStorage()
    // cy.getAllLocalStorage()
  });

  it('Add a staff', () => {
    cy.xpath('//span[normalize-space()="Manage Staff"]').click()
    cy.xpath('//div[contains(@title,"staff/delivery partner")]').click()
    cy.xpath('//input[@name="name"]').type(name)
    cy.xpath('//input[@name="phoneNumber"]').type(faker.phone.number())
    cy.xpath('//div[@class="multi-select__input-container css-19bb58m"]').click()
    cy.get('#react-select-3-option-1').type("{enter}")
    cy.xpath('//input[@name="email"]').type(faker.internet.email())
    cy.xpath('//button[@type="submit"]').click()
    cy.contains("Staff added successfully.")
  })

  it('Add a staff', () => {
    cy.xpath('//span[normalize-space()="Manage Staff"]').click()
    cy.reload()
    cy.xpath('//input[@placeholder="Search Items"]').type(name)
    cy.wait(2000)
    cy.contains(name)
  })
})