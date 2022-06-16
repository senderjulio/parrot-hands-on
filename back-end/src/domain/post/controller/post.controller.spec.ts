import supertest from "supertest";
import app from "../../../app";

describe('No controller, ao executar função', () => {

    describe('create', () => {

        test('em caso de sucesso, deve retornar 201', async () => {
            const response = await supertest(app)
            .post('/post/cadastrar')
            .send({
                texto: "teste3",                                
                userId: 1,                               
            })
    
            expect(response.status).toBe(201)
            expect(response.body).toMatchObject(
                {
                    texto: "teste3",                                
                    userId: 1, 
               })
               expect(response.body).toEqual(
                expect.objectContaining({                    
                    id: expect.any(Number),
                    texto: expect.any(String),
                    userId: expect.any(Number),                                        
                })
            ) 
        })        
    })
})