// Regra-09: É possível adicionar itens ao carrossel
When('tento adicionar novo {string}', item => {
  cy.get('textarea[class="npm__react-simple-code-editor__textarea"]').type(
    '{home}  <Item>7</Item>{enter}<Item>' + item + '</Item>{enter}{backspace}',
  );
});

Then('{string} é adicionado', item => {
  cy.get('div[class="sc-AxmLO sc-fzozJi gbQVEO"]').parent().contains('8');

  cy.get('div[data-testid="playground"]').screenshot();
});
