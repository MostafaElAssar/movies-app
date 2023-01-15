describe('home spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('contains a header', () => {
    cy.get('header').should('have.class', 'ant-layout-header');
  });

  it('contains 3 carousels', () => {
    cy.get('div.ant-carousel').should('have.length', 3);
  });

  it('redirects to details page upon click on image from carousel', () => {
    cy.get('div.ant-carousel').first().click();
    cy.location('pathname').should('include', 'movies');
  });

  it('redirects to details page upon click on image from wishlist', () => {
    cy.get('header.ant-layout-header > button.ant-btn')
      .contains('Wishlist')
      .click();
    cy.get('li.ant-dropdown-menu-item .ant-image').first().click();
    cy.location('pathname').should('include', 'movies');
  });
});
