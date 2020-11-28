// Regra-07: É possível ocultar os botões laterais
When('adiciono props de remover os botões de navegação', () => {
  cy.get('textarea[class="npm__react-simple-code-editor__textarea"]').type(
    '{movetostart}{end}{leftarrow} showArrows={{}false{}}',
  );
});

Then('os botões ficam ocultos', () => {
  cy.get(
    'button[class="sc-AxjAm oUxiw rec rec-arrow rec rec-arrow-right"]',
  ).should('not.exist');

  cy.get(
    'button[class="sc-AxjAm oUxiw rec rec-arrow rec rec-arrow-left"]',
  ).should('not.exist');

  cy.get('div[data-testid="playground"]').screenshot();
});
