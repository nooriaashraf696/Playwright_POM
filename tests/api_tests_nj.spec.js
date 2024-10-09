import { test, expect } from '@playwright/test';


//Delete API

test('API Delete Request', async ({ request }) => {

    const response = await request.delete('https://reqres.in/api/users/2')

    expect(response.status()).toBe(204)
})


//PUT API

test('API PUT Request', async ({ request }) => {


    const response = await request.put('https://reqres.in/api/users/2', {
        data: {
            "name": "Raghav",
            "job": "Teacher"
        }
    })

    expect(response.status()).toBe(200)

    const text = await response.text();
    expect(text).toContain('Raghav')
    
    console.log(await response.json());

})

//POST API

test('API POST Request', async ({ request }) => {


    const response = await request.post('https://reqres.in/api/users', {
        data: {
            "name": "Raghav",
            "job": "Teacher"
        }
    })

    expect(response.status()).toBe(201)

    const text = await response.text();
    expect(text).toContain('Raghav')
    
    console.log(await response.json());

})

//GET API

test('API GET Request', async ({ request }) => {

    const response = await request.get('https://reqres.in/api/users/2')

    expect(response.status()).toBe(200)

    const text = await response.text();
    expect(text).toContain('Janet')

    //write response on console
    console.log(await response.json());
})