/// <reference types= "cypress" />

import { login } from "../../support/utils";
import { faker } from '@faker-js/faker';
import 'cypress-xpath'
import "cypress-localstorage-commands";

describe('Outlet flow', () => {

  let outlet_name = faker.word.sample()

  beforeEach(() => {
    const { Base_URL, ADMIN_Email, ADMIN_Password } = Cypress.env();
    cy.visit(Base_URL);
    login(ADMIN_Email, ADMIN_Password);
    cy.wait(2000);
    // cy.saveLocalStorage()
    // cy.getAllLocalStorage()
  });

  it('Add Outlet', () => {
    cy.xpath('//*[@id="root"]/div[2]/ul/li[8]/a').click()
    cy.wait(1000)
    cy.xpath('//div[@class="bg-deep-green add-button hover:bg-green-500"]').click()
    cy.xpath('//input[@name="outlet"]').type(outlet_name)
    cy.xpath('//input[@name="phone"]').type(faker.phone.number())
    cy.xpath('//input[@name="email"]').type(faker.internet.email())
    cy.xpath('//input[@name="address"]').type(faker.location.country())
    cy.xpath('//input[@name="address"]').click()
    cy.wait(1000)
    cy.xpath('//input[@name="address"]').type('{downArrow}').click()
    cy.wait(1000)
    cy.xpath('//input[@name="totalDeliveryRange"]').type('5')
    cy.xpath('//input[@placeholder="Closing Time"]').type('12:00 am')
    cy.xpath('//input[@placeholder="Opening Time"]').type('12:00 pm')
    cy.xpath('//input[@name="chargesPerKM"]').type('20')
    cy.get('[type="submit"]').click()
    cy.contains('Outlet has been added successfully!')
  })

  it('Delete Outlet', () => {
    cy.xpath('//*[@id="root"]/div[2]/ul/li[8]/a').click()
    cy.wait(1000)
    cy.xpath('//h3[normalize-space()]').then(($items) => {
      const itemsArray = $items.toArray();
      cy.log('Items:', itemsArray); // all array item
      itemsArray.forEach((element, index) => {
        const textContent = Cypress.$(element).text();
        if (textContent.includes(outlet_name)) {
          cy.xpath(`//*[@id="root"]/div[3]/div/div[2]/div[${index}]/div[1]/div[2]/div/button`).click();
          cy.wait(2000)
          cy.xpath('//li[normalize-space()="Delete"]').click()
          cy.wait(2000)
          cy.xpath('//button[normalize-space()="Delete"]').click()
          cy.wait(2000)
          cy.contains('Outlet has been deleted succesfully!')
        }
      })
    })
  })
})