// Regra-03: É possível navegar pelos bullets points (paginação)
When('tento mudar os itens pela paginação', () => {
  cy.get('div[class="sc-Axmtr hvJMgY rec rec-pagination"]')
    .children()
    .eq(5)
    .click();
});

Then('item do carrossel é alterado', () => {
  cy.get('div[tabindex="0"]').contains('6');

  cy.get('div[data-testid="playground"]').screenshot();
});
