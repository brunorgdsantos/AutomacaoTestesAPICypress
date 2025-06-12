describe("API Tests Create Products", () => {

    before(() => {
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

    it("Cadastro de Produtos", () => {
        cy.fixture('produtos').then(function(produtos){
            const prod = produtos.criar_produtos
            cy.cria_produto(prod)
            .then((response) => {
                expect(response.status).to.eq(201);
                expect(response.body.message).to.eq("Cadastro realizado com sucesso");
                Cypress.env('id_produto', response.body._id);
            });
        })
    });

    it("Listar Produtos", () => {
        const id = '';
        cy.busca_produto(id)
        .then((response) => {
            expect(response.status).to.eq(200);
        });
    });
    
    it("Busca Produtos por ID", () => {
        const id = Cypress.env('id_produto');
        cy.busca_produto(id)
        .then((response) => {
            expect(response.status).to.eq(200);
        });
    });
    
})