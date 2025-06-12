describe("API Tests", () => {
    const randomEmail = `teste${Cypress._.random(1000, 9999)}@qa.com.br`;
    it("Criar Usuario", () => {
        cy.request({
            method: "POST",
            url: "https://serverest.dev/usuarios",
            body: {
                "nome": "Teste QA",
                "email": randomEmail,
                "password": "teste",
                "administrador": "true"
            }
        })
        .then((response) => {
            expect(response.status).to.eq(201);
            expect(response.body.message).to.eq("Cadastro realizado com sucesso");
            Cypress.env('id', response.body._id);
        });
    });

    it("Busca Usuario Lista", () => {
        cy.request({
            method: "GET",
            url: "https://serverest.dev/usuarios",
        })
        .then((response) => {
            expect(response.status).to.eq(200);
        });
    });

    it("Busca Usuario por ID", () => {
        cy.request({
            method: "GET",
            url: `https://serverest.dev/usuarios/${Cypress.env('id')}`,
        })
        .then((response) => {
            expect(response.status).to.eq(200);
        });
    });

    it("Atualizar Usuario", () => {
        cy.request({
            method: "PUT",
            url: `https://serverest.dev/usuarios/${Cypress.env('id')}`,
            body: {
                "nome": "Teste QA Atualização",
                "email": randomEmail,
                "password": "teste",
                "administrador": "true"
            }
        })
        .then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.message).to.eq("Registro alterado com sucesso");
        });
    });

    it("Deletar Usuario", () => {
        cy.request({
            method: "DELETE",
            url: `https://serverest.dev/usuarios/${Cypress.env('id')}`,
        })
        .then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.message).to.eq("Registro excluído com sucesso");
        });
    });
    
})