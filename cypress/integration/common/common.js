// Memory Game
Given('que todas as cartas estão viradas para baixo', () => {
  cy.visit('https://kaz-yamada.github.io/Card-Match-Game/');

  cy.get('div[class="card-0-2-3 selected-0-2-4"]').should('not.exist');
  cy.get('div[class="card-0-2-3 matched-0-2-6"]').should('not.exist');
});

// Requisito opcional: src
When('seleciono todos os pares iguais', () => {
  for (let i = 0; i < 7; i++) {
    cy.get('img[src="https://picsum.photos/150/250?random=' + i + '"]')
      .eq(0)
      .parent()
      .parent()
      .click();

    cy.get('img[src="https://picsum.photos/150/250?random=' + i + '"]')
      .eq(1)
      .parent()
      .parent()
      .click();

    cy.wait(1000);
  }
});

// Carousel
Given('que haja itens no carrossel', () => {
  cy.visit('https://sag1v.github.io/react-elastic-carousel/');
});
