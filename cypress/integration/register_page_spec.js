/// <reference types="cypress" />

import { fillRegister, validateRegister } from '../support/pages/register';

describe('Página de cadastrado de usuário', () => {

  it('Cadastro efetivado com sucesso', () => {
    fillRegister('Teste 01', '1199999999', 'www.teste.com.br');
    validateRegister();
  });

});