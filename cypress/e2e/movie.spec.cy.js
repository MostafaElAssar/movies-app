describe('movie spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/movies/action/941520');
  });

  it('contains a header', () => {
    cy.get('header').should('have.class', 'ant-layout-header');
  });

  it('contains image within a column', () => {
    cy.get('div.ant-col > div.ant-image');
  });

  it('redirects to home page upon clicking on the home button', () => {
    cy.get('header.ant-layout-header > button.ant-btn')
      .contains('Home')
      .click();
    cy.location('pathname').should('not.include', 'movies');
  });
});
