// Regra-04: É possível alterar o conteúdo dos itens

// Requisitos obrigatórios: type
When('tento alterar um item', () => {
  cy.get('textarea[class="npm__react-simple-code-editor__textarea"]').type(
    '{movetostart}{downarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{del}Primeiro item',
  );
});

// Requisito obrigatório: id e contains
Then('o item é alterado', () => {
  cy.get('div[id="0"]').contains('Primeiro item');

  cy.get('div[data-testid="playground"]').screenshot();
});
