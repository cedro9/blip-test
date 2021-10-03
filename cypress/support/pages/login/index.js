const el = require('./elements').ELEMENTS;
const msg = require('./messages').MESSAGES;

import { accessPage } from '../commons'

export function fillLogin(email, password) {
    accessPage(Cypress.env('pgLogin'));
    cy.get(el.email).type(email);
    cy.get(el.password).type(password);
};

export function validateFields() {
    cy.get(el.error).should('be.visible');
};