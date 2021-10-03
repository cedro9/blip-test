const el = require('./elements').ELEMENTS;
const msg = require('./messages').MESSAGES;

import { accessPage } from '../commons'
import { generateEmail, generatePassword } from '../scripts/generates'

export function fillRegister(name, phone, site) {
    var email = generateEmail();
    var password = generatePassword();
    accessPage(Cypress.env('pgRegister'));
    cy.get(el.fullName).type(name);
    cy.get(el.email).type(email);
    cy.get(el.password).type(password);
    cy.get(el.phoneNumber).type(phone);
    cy.get(el.companySite).type(site);
    cy.get(el.checkbox).click();
    cy.get(el.submitButton).click();
};

export function validateRegister() {
    cy.contains(msg.validateRegister).should('be.visible');
};