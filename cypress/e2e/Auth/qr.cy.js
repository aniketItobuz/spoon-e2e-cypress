/// <reference types= "cypress" />

import { login } from "../../support/utils";
import 'cypress-xpath';
import { jsQR } from "jsqr";
import { BrowserMultiFormatReader } from '@zxing/browser';

describe('QR Check', () => {
    it('Valid Login', () => {
      const { ADMIN_Email, ADMIN_Password } = Cypress.env();
  
      // Visit the page and login
      cy.visit('https://spoon-admin.x-studio.io/');
      login(ADMIN_Email, ADMIN_Password);
  
      // Navigate to the QR code section
      cy.get('img[alt="User icon"]').click();
      cy.xpath('//p[normalize-space()="Delivery Partner QR"]').click();
  
      // Wait for the QR code to be generated
      cy.wait(3000);
  
      // Get the canvas containing the QR code
      cy.get('canvas[height="800"]').then(($canvas) => {
        // Extract the image data from the canvas
        const imageData = $canvas[0].toDataURL('image/png');
  
        // Decode the QR code using jsQR
        const decodedQR = jsQR(imageData);
  
        // Assert the decoded result
        expect(decodedQR.data).to.equal("https://spoon-core.x-studio.io/");
      });
    });
  });




