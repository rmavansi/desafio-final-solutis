// Regra-06: Não é possível ver o carrossel quando não houver itens

// Requisitos obrigatórios: clear e type
When('tento apagar todos os itens do carrossel', () => {
  cy.get('textarea[class="npm__react-simple-code-editor__textarea"]').clear();
  cy.get('textarea[class="npm__react-simple-code-editor__textarea"]').type(
    '<Carousel itemsToShow={{}1{}}></Carousel>',
  );
});

Then('o carrossel não é mostrado', () => {
  cy.get('div[id="0"]').should('not.exist');

  cy.get('div[data-testid="playground"]').screenshot();
});
