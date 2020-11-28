// Regra-04: É possível mostrar mensagem ao terminar o jogo
Then('mensagem de termino de jogo é mostrada', () => {
  cy.get('div[class="root-0-2-9"]').should('exist');

  cy.screenshot();
});
