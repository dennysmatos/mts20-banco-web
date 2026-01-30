describe('Login', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Quando digitar credenciais válidas, Então a página secreta deve ser exibida', () => {
    cy.get('#username').type('usuario'); // ajuste conforme usuário válido
    cy.get('#senha').type('senha'); // ajuste conforme senha válida
    cy.contains('Entrar').click();
    cy.get('#app-section').should('not.have.class', 'hidden');
    cy.get('#login-section').should('have.class', 'hidden');
  });

  it('Quando não digitar o usuário, Então deve exibir mensagem de erro', () => {
    cy.get('#senha').type('senha');
    cy.contains('Entrar').click();
    cy.get('#login-error').should('contain', ''); // ajuste conforme mensagem de erro esperada
    cy.get('#app-section').should('have.class', 'hidden');
  });

  it('Quando não digitar a senha, Então deve exibir mensagem de erro', () => {
    cy.get('#username').type('usuario');
    cy.contains('Entrar').click();
    cy.get('#login-error').should('contain', ''); // ajuste conforme mensagem de erro esperada
    cy.get('#app-section').should('have.class', 'hidden');
  });

  it('Quando não digitar usuário e senha, Então deve exibir mensagem de erro', () => {
    cy.contains('Entrar').click();
    cy.get('#login-error').should('contain', ''); // ajuste conforme mensagem de erro esperada
    cy.get('#app-section').should('have.class', 'hidden');
  });
}); 