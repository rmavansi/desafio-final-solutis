// Regra-02: Não é possível mover o carrossel do último para o primeiro item pelo botão lateral

// Requisito opcional: dblclick
When('move o carrossel até o último item', () => {
  cy.get('button[class="sc-AxjAm oUxiw rec rec-arrow rec rec-arrow-right"]')
    .dblclick()
    .dblclick()
    .click();
});

// Requisito obrigatório: xpath
Then('botão de mover para direita está desativado', () => {
  cy.xpath(
    '//*[@id="gatsby-focus-wrapper"]/div/div/main/div[2]/div[3]/div[3]/div[1]/div[1]/div/div/div[1]/button[2]',
  ).should('be.disabled');

  cy.get('div[data-testid="playground"]').screenshot();
});
