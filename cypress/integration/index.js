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

  it('display modal edit and close without edit', () => {
    cy.server()
      .route(
        'GET',
        `https://api.github.com/users/${defaultUser}/starred`
      )
      .as('getRepositories');
    cy.get('input[data-test="search-user"]').type(defaultUser);
    cy.get('button[data-test="search-submit"]').click();
    cy.wait('@getRepositories');
    cy.get('button[data-test="edit-repository-1"]').click();
    cy.get('div[data-test="modal-tags"]').should('be.visible');
    cy.get('div[data-test="modal-tags"]')
      .should('have.css', 'opacity')
      .and('match', /1/);
    cy.get('div[data-test="modal-tags"]')
      .should('have.css', 'visibility')
      .and('match', /visible/);
    cy.get('button[data-test="cancel-edit-repository"]').click();
    cy.get('div[data-test="modal-tags"]').should('not.exist');
  });

  it('display modal edit and add tags for two repositories', () => {
    cy.server()
      .route(
        'GET',
        `https://api.github.com/users/${defaultUser}/starred`
      )
      .as('getRepositories');
    cy.get('input[data-test="search-user"]').type(defaultUser);
    cy.get('button[data-test="search-submit"]').click();
    cy.wait('@getRepositories');
    cy.get('button[data-test="edit-repository-1"]').click();
    cy.get('input[data-test="edit-tag-input"]').type(
      'tag1, tag2, tag3'
    );
    cy.get('button[data-test="save-edit-repository"]').click();
    cy.get('p[data-test="tags-repository-1"]').contains(
      'tag1, tag2, tag3'
    );
    cy.get('button[data-test="edit-repository-2"]').click();
    cy.get('input[data-test="edit-tag-input"]').type(
      'HTML,CSS,Javascript'
    );
    cy.get('button[data-test="save-edit-repository"]').click();
    cy.get('p[data-test="tags-repository-2"]').contains(
      'html, css, javascript'
    );
    cy.get('p[data-test="tags-repository-1"]').should(($p) => {
      expect($p.text().trim()).equal('tag1, tag2, tag3');
    });
    cy.get('p[data-test="tags-repository-2"]').should(($p) => {
      expect($p.text().trim()).equal('html, css, javascript');
    });
  });

  it('add tags to repositories, search term and return repositories by tag', () => {
    cy.server()
      .route(
        'GET',
        `https://api.github.com/users/${defaultUser}/starred`
      )
      .as('getRepositories');
    cy.get('input[data-test="search-user"]').type(defaultUser);
    cy.get('button[data-test="search-submit"]').click();
    cy.wait('@getRepositories');

    cy.get('button[data-test="edit-repository-1"]').click();
    cy.get('input[data-test="edit-tag-input"]').type(
      'front, back, cypress'
    );
    cy.get('button[data-test="save-edit-repository"]').click();

    cy.get('button[data-test="edit-repository-2"]').click();
    cy.get('input[data-test="edit-tag-input"]').type(
      'HTML,CSS,Javascript,Cypress'
    );
    cy.get('button[data-test="save-edit-repository"]').click();

    cy.get('button[data-test="edit-repository-3"]').click();
    cy.get('input[data-test="edit-tag-input"]').type(
      'Javascript, Cypress'
    );
    cy.get('button[data-test="save-edit-repository"]').click();

    cy.get('input[data-test="search-term"]').type('javascript');
    cy.get('div[data-test="repository-item"]').should(
      'have.length',
      2
    );
    cy.get('input[data-test="search-term"]').clear().type('front');
    cy.get('div[data-test="repository-item"]').should(
      'have.length',
      1
    );
    cy.get('input[data-test="search-term"]').clear().type('cypress');
    cy.get('div[data-test="repository-item"]').should(
      'have.length',
      3
    );
  });

});
