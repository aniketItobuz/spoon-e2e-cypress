/// <reference types= "cypress" />

import { login } from "../../support/utils";
import { faker } from '@faker-js/faker';
import { staffD } from '../Pages/staff.js';
import 'cypress-xpath'
import "cypress-localstorage-commands";

describe('Manage Staff', () => {

  const name = faker.person.fullName()

  const s = new staffD()

  beforeEach(() => {
    const { Base_URL, ADMIN_Email, ADMIN_Password } = Cypress.env();
    cy.visit(Base_URL);
    login(ADMIN_Email, ADMIN_Password);
    cy.wait(2000);
  });

  it('Add a Staff', () => {
    s.addStaff()
  })
  it('Edit Staff', () => {
    s.deleteStaff()
  })
})