// Regra-03: É possível manter as imagens das cartas visíveis ao encontrar o par

// Requisito opcional: src
When('selecionar duas cartas iguais', () => {
  cy.get('img[src="https://picsum.photos/150/250?random=0"]')
    .eq(0)
    .parent()
    .parent()
    .click();

  cy.get('img[src="https://picsum.photos/150/250?random=0"]')
    .eq(1)
    .parent()
    .parent()
    .click();
});

Then('as cartas são mantidas com as imagens visíveis', () => {
  cy.get('div[class="card-0-2-3 matched-0-2-6"]').should('exist');

  cy.screenshot();
});
