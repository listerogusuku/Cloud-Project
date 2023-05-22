exports.handler = async (event) => {
    console.log('Event: ', event);
    let responseMessage = 'Olá, Avelino!';

    if (event.queryStringParameters && event.queryStringParameters['Name']) {
        responseMessage = 'Olá, ' + event.queryStringParameters['Name'] + '!';
    }

    if (event.httpMethod === 'POST') {
        const body = JSON.parse(event.body);
        responseMessage = 'Olá, ' + body.name + '!';
    }

    const response = {
        statusCode: 200,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            message: responseMessage
        }),
    };

    return response;
};
