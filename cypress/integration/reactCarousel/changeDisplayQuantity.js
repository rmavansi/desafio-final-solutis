// Regra-08: É possível alterar a quantidade de itens ativos
When('tento trocar a quantidade de itens a serem mostrados', () => {
  cy.get('textarea[class="npm__react-simple-code-editor__textarea"]').type(
    '{movetostart}{end}{leftarrow}{leftarrow}{backspace}3',
  );
});

// Requisito opcional: tabindex
Then('a quantidade é alterada', () => {
  cy.get('div[tabindex="0"]').should('have.length', 3);

  cy.get('div[data-testid="playground"]').screenshot();
});
