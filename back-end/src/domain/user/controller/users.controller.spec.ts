import supertest from "supertest";
import app from "../../../app";

describe('No controller, ao executar função', () => {

    describe('create', () => {

        test('em caso de sucesso, deve retornar 201', async () => {
            const response = await supertest(app)
            .post('/user/cadastro')
            .send({
                name: "teste5",
                email: "teste5@gmail.com",                
                apartment: 75,
                password: "123",                
            })
    
            expect(response.status).toBe(201)
        })

        test('em caso de sucesso, retornar response do request', async () => {
            const response = await supertest(app)
            .post('/user/cadastro')
            .send({
                name: "teste6",
                email: "teste6@gmail.com",                
                apartment: 75,
                password: "123",
            })
    
            expect(response.body).toEqual(
                expect.objectContaining({                    
                    id: expect.any(Number),
                    name: expect.any(String),
                    email: expect.any(String),
                    password: expect.any(String),
                    apartment: expect.any(Number),                    
                })
            ) 
            expect(response.body).toMatchObject(
                {
                   name: "teste6",
                   email: "teste6@gmail.com", 
               })                    
        })
    })
})