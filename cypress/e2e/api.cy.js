describe("API Tests", () => {
  it("Criar Usuario", () => {
    const randomEmail = `teste${Cypress._.random(1000, 9999)}@qa.com.br`;
    
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
            Cypress.env("id", response.body._id);
        });
    });


})