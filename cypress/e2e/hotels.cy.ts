describe('hotels page', () => {
  const testStarsFilter = (stars: number) => {
    cy.get(`button[data-filter-star=${stars}]`).click();
    cy.wait(100);
    for (let i = 1; i < stars; i++) {
      cy.get(`[data-hotel-star-rating=${i}]`).should('not.exist');
    }
  };

  const testAdultsFilter = (adults: number, maxAdults: number) => {
    if (adults > maxAdults) return;

    cy.get(`[data-filter-adults-current=${adults}]`).should('exist');

    cy.ifExists('[data-room-max-adults]', () => {
      cy.get(`[data-room-max-adults]`).each((element) => {
        expect(Number(element.attr('data-room-max-adults'))).to.be.at.least(adults);
      });
    })

    cy.get(`button[data-filter-adults="increase"]`).click();

    testAdultsFilter(adults + 1, maxAdults);
  };

  const testChildrenFilter = (children: number, maxChildren: number) => {
    if (children > maxChildren) return;

    cy.get(`[data-filter-children-current=${children}]`).should('exist');

    cy.ifExists('[data-room-max-children]', () => {
      cy.get(`[data-room-max-children]`).each((element) => {
        expect(Number(element.attr('data-room-max-children'))).to.be.at.least(children);
      });
    })

    cy.get(`button[data-filter-children="increase"]`).click();

    testChildrenFilter(children + 1, maxChildren);
  };

  it('correctly filters hotels by stars', () => {
    cy.visit('/hotels');
    testStarsFilter(2);
    testStarsFilter(3);
    testStarsFilter(4);
    testStarsFilter(5);
  });

  it('correctly filters hotels by adults', () => {
    cy.visit('/hotels');
    testAdultsFilter(1, 10);
  });

  it('correctly filters hotels by children', () => {
    cy.visit('/hotels');
    testChildrenFilter(0, 10);
  });
});
