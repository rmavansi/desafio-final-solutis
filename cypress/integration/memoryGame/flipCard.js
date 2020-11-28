// Regra-01: É possível mostrar a imagem de uma carta ao clicar sobre ela
When('uma carta é clicada', () => {
  cy.get('div[class="card-0-2-3"]').first().click();
});

Then('a carta é virada', () => {
  cy.get('div[class="card-0-2-3 selected-0-2-4"]').should('exist');

  cy.screenshot();
});
