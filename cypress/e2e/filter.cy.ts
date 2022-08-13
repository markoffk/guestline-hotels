describe('filters component', () => {
  it('correctly displays default filter', () => {
    cy.visit('/hotels');
    cy.get('button[data-filter-star=3]').should('be.disabled');
    cy.get('button[data-filter-adults="decrease"]').should('be.disabled');
    cy.get('button[data-filter-adults="increase"]').should('not.be.disabled');
    cy.get('[data-filter-adults-current=1]').should('exist');
    cy.get('button[data-filter-children="decrease"]').should('be.disabled');
    cy.get('button[data-filter-children="increase"]').should('not.be.disabled');
    cy.get('[data-filter-children-current=0]').should('exist');
  });

  it('correctly sets stars filter', () => {
    cy.visit('/hotels');

    for (let i = 1; i <= 5; i++) {
      cy.get(`button[data-filter-star=${i}]`).click();
      cy.wait(100);
      cy.get(`[data-filter-star=${i}]`).should('be.disabled');
    }
  });

  it('correctly sets adults filter', () => {
    cy.visit('/hotels');

    cy.get('button[data-filter-adults="decrease"]').should('be.disabled');
    cy.get('button[data-filter-adults="increase"]').click();
    cy.get('button[data-filter-adults="decrease"]').should('not.be.disabled');
    cy.get('button[data-filter-adults="decrease"]').click();
    cy.get('button[data-filter-adults="decrease"]').should('be.disabled');
  });

  it('correctly sets children filter', () => {
    cy.visit('/hotels');

    cy.get('button[data-filter-children="decrease"]').should('be.disabled');
    cy.get('button[data-filter-children="increase"]').click();
    cy.get('button[data-filter-children="decrease"]').should('not.be.disabled');
    cy.get('button[data-filter-children="decrease"]').click();
    cy.get('button[data-filter-children="decrease"]').should('be.disabled');
  });
});
