describe('search starred repositories', () => {
  const defaultUser = 'celsofabri';
  const nonexistentUser = 'weroiuwriow';
  const withoutRepositoriesUser = 'tchatchatcha';
  const baseURL = 'http://localhost:8080/';

  beforeEach(() => {
    cy.visit(baseURL);
  });

  it('trying search starred repositories of user that not exists', () => {
    cy.server()
      .route(
        'GET',
        `https://api.github.com/users/${nonexistentUser}/starred`
      )
      .as('getRepositories');
    cy.get('input[data-test="search-user"]').type(nonexistentUser);
    cy.get('button[data-test="search-submit"]').click();
    cy.wait('@getRepositories')
      .its('status')
      .then((status) => {
        expect(status).to.eq(404);
      });
    cy.get('div[data-test="nonexistent-user"]').contains(
      'Ops, ocorreu um erro!'
    );
    cy.get('div[data-test="nonexistent-user"]').should('be.visible');
  });

  it('trying search starred repositories but not exists nothing starred repository', () => {
    cy.server()
      .route(
        'GET',
        `https://api.github.com/users/${withoutRepositoriesUser}/starred`
      )
      .as('getRepositories');
    cy.get('input[data-test="search-user"]').type(
      withoutRepositoriesUser
    );
    cy.get('button[data-test="search-submit"]').click();
    cy.wait('@getRepositories')
      .its('status')
      .then((status) => {
        expect(status).to.eq(200);
      });
    cy.get('div[data-test="repositories-empty"]').contains(
      'Nada encontrado!'
    );
    cy.get('div[data-test="repositories-empty"]').contains(
      'Ops, infelizmente não existem repositórios favoritados para este usuário.'
    );
    cy.get('div[data-test="repositories-empty"]').should(
      'be.visible'
    );
  });

  it('display starred repositories', () => {
    cy.server()
      .route(
        'GET',
        `https://api.github.com/users/${defaultUser}/starred`
      )
      .as('getRepositories');
    cy.get('input[data-test="search-user"]').type(defaultUser);
    cy.get('button[data-test="search-submit"]').click();
    cy.wait('@getRepositories')
      .its('status')
      .then((status) => {
        expect(status).to.eq(200);
      });
    cy.get('div[data-test="repositories-container"]').should(
      'be.visible'
    );
  });

});
