/// <reference types= "cypress" />

import { login } from "../../support/utils";
import { food } from '../Pages/foodM.js';
import 'cypress-xpath'

describe('Food Menu', () => {

  const f = new food()

  beforeEach(() => {
    const { Base_URL, ADMIN_Email, ADMIN_Password } = Cypress.env();
    cy.visit(Base_URL);
    login(ADMIN_Email, ADMIN_Password);
    cy.wait(2000);
  });

  it('Add Category', () => {
    cy.xpath("//span[normalize-space()='Food Menu']").click()
    f.addCategory()
  });

  it('Edit Category', () => {
    cy.xpath("//span[normalize-space()='Food Menu']").click()
    f.deleteCategory()
  })
})