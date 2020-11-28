// Regra-05: É possível reinicinar o jogo após o término
And('reinicio o jogo', () => {
  cy.get('button[class="button-0-2-10"]').click();
});

Then('o jogo é reiniciado', () => {
  cy.get('div[class="card-0-2-3 matched-0-2-6"]').should('not.exist');

  cy.screenshot();
});
