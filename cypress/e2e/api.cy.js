describe("API Tests", () => {
    const randomEmail = `teste${Cypress._.random(1000, 9999)}@qa.com.br`;
    it("Criar Usuario", () => {
        cy.fixture('usuario').then(function(usuario){
            const user = usuario.cria_usuario
            cy.cria_user(user);
        })
    });

    it("Criar Usuario - Outra Forma", () => {
        cy.fixture('usuario').then(function(usuario){
            const user = usuario.cria_usuario
            cy.cria_user_outra_forma(user);
        }).then((response) => {
            expect(response.status).to.eq(201);
            expect(response.body.message).to.eq("Cadastro realizado com sucesso");
            Cypress.env('id', response.body._id);
        });
    });

    it("Busca Usuario Lista", () => {
        cy.busca_usuario_lista();
    });

    it("Busca Usuario por ID", () => {
        cy.busca_usuario_id();
    });

    it("Busca Usuario Lista - Outra Forma", () => {
        const id = '';
        cy.busca_usuario_outra_forma(id)
        .then((response) => {
            expect(response.status).to.eq(200);
        });
    });

    it("Busca Usuario por ID - Outra Forma", () => {
        const id = Cypress.env('id');
        cy.busca_usuario_outra_forma(id)
        .then((response) => {
            expect(response.status).to.eq(200);
        });
    });

    it("Atualizar Usuario", () => {
        cy.atualizar_usuario();
    });

    it("Atualizar Usuario - Outra Forma", () => {
        cy.fixture('usuario').then(function(usuario){
            const user = usuario.atualizar_usuario
            cy.atualizar_usuario_outra_forma(user);
        })
        .then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.message).to.eq("Registro alterado com sucesso");
        });
    });

    it.only("Realizar Login no Sistema", () => {
        cy.fixture('usuario').then(function(usuario){
            const email = usuario.cria_usuario.email
            const senha = usuario.cria_usuario.password
            cy.login(email, senha)
        })
        .then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.message).to.eq("Login realizado com sucesso");
            Cypress.env('token', response.body.authorization);
        });
    });

    it("Deletar Usuario", () => {
        cy.deletar_usuario();
    });
    
})