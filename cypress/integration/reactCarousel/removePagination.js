// Regra-05: É possível remover a paginação do carrossel
When('tento remover a paginação do carrossel', () => {
  cy.get('textarea[class="npm__react-simple-code-editor__textarea"]').type(
    '{movetostart}{end}{leftarrow} pagination={{}false{}}',
  );
});

Then('a paginação é escondida', () => {
  cy.get('div[class="sc-Axmtr hvJMgY rec rec-pagination"]').should('not.exist');

  cy.get('div[data-testid="playground"]').screenshot();
});
