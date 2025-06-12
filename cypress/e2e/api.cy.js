describe("API Tests", () => {
    const randomEmail = `teste${Cypress._.random(1000, 9999)}@qa.com.br`;
    it("Criar Usuario", () => {
        cy.cria_user();
    });

    it("Busca Usuario Lista", () => {
        cy.busca_usuario_lista();
    });

    it("Busca Usuario por ID", () => {
        cy.busca_usuario_id();
    });

    it("Atualizar Usuario", () => {
        cy.atualizar_usuario();
    });

    it("deletar_usuario", () => {
        cy.deletar_usuario();
    });
    
})