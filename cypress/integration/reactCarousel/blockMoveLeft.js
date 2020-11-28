// Regra-01: Não é possível mover o carrossel do primeiro para o último item pelo botão lateral

// Requisitos obrigatórios: get e click
When('tento mover o carrossel para esquerda', () => {
  cy.get(
    'button[class="sc-AxjAm oUxiw rec rec-arrow rec rec-arrow-right"]',
  ).click();

  cy.get(
    'button[class="sc-AxjAm oUxiw rec rec-arrow rec rec-arrow-left"]',
  ).click();
});

// Requisitos obrigatórios: class e should
Then('botão de mover está desativado', () => {
  cy.get(
    'button[class="sc-AxjAm oWWim rec rec-arrow rec rec-arrow-left"]',
  ).should('be.disabled');

  cy.get('div[data-testid="playground"]').screenshot();
});
