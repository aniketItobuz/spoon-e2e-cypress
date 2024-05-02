/// <reference types= "cypress" />

import { login } from "../../support/utils";
import { faker } from '@faker-js/faker';

describe('Login', () => {
  it('Valid Login', () => {
    const { Base_URL, ADMIN_Email, ADMIN_Password } = Cypress.env()
    cy.visit(Base_URL);
    login(ADMIN_Email,ADMIN_Password)
    cy.wait(2000)
  })
  it('Invalid Login', () => {
    let email = faker.internet.email()
    let password = faker.internet.password()
    const { Base_URL } = Cypress.env()
    cy.visit(Base_URL)
    login(email,password)
    cy.contains('Invalid credentials.').should('be.visible')
  })
})