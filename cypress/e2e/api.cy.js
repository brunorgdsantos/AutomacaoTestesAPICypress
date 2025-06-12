describe("API Tests", () => {
    const randomEmail = `teste${Cypress._.random(1000, 9999)}@qa.com.br`;
    it.only("Criar Usuario", () => {
        cy.fixture('usuario').then(function(usuario){
            const user = usuario.cria_usuario
            cy.cria_user(user);
        })
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