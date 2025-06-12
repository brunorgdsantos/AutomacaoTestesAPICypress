const randomEmail = `teste${Cypress._.random(1000, 9999)}@qa.com.br`;

Cypress.Commands.add('cria_user', (user) => {
    cy.api({
        method: "POST",
        url: "https://serverest.dev/usuarios",
        body: user
    })
    .then((response) => {
        expect(response.status).to.eq(201);
        expect(response.body.message).to.eq("Cadastro realizado com sucesso");
        Cypress.env('id', response.body._id);
    });
})

Cypress.Commands.add('cria_user_outra_forma', (user) => {
    cy.api({
        method: "POST",
        url: "https://serverest.dev/usuarios",
        body: user
    })
    .then((response) => { return response });
})

Cypress.Commands.add('busca_usuario_lista', () => {
    cy.api({
        method: "GET",
        url: "https://serverest.dev/usuarios",
    })
    .then((response) => {
        expect(response.status).to.eq(200);
    });
})

Cypress.Commands.add('busca_usuario_id', () => {
    cy.api({
        method: "GET",
        url: `https://serverest.dev/usuarios/${Cypress.env('id')}`,
    })
    .then((response) => {
        expect(response.status).to.eq(200);
    });
})

Cypress.Commands.add('busca_usuario_outra_forma', (id) => {
    cy.api({
        method: "GET",
        url: `https://serverest.dev/usuarios/`+id,
    })
    .then((response) => { return response });
})

Cypress.Commands.add('atualizar_usuario', () => {
    cy.api({
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
})

Cypress.Commands.add('deletar_usuario', () => {
    cy.api({
        method: "DELETE",
        url: `https://serverest.dev/usuarios/${Cypress.env('id')}`,
    })
    .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.message).to.eq("Registro excluído com sucesso");
    });
})