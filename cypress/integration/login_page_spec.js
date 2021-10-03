/// <reference types="cypress" />

import { fillLogin, validateFields } from '../support/pages/login';

describe('Página de login', () => {

  it('E-mail inválido', () => {
    fillLogin('blip-teste@mail', '12345678');
    validateFields();
  });

  it('Campo de E-mail e Senha obrigatórios', () => {
    fillLogin(' ', ' ');
    validateFields();
  });

});