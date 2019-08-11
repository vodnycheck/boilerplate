const serverUrl = 'https://dog.ceo/api/',
    optsGET = {
        'method': 'get',
        'headers': new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }),
    };

export const getRandomDog = async () => {
    try {
        let response = await fetch(`${serverUrl}breeds/image/random`);
        let data = await response.json()
        return data;
    } catch(err) {
        const errorMessage = getErrorMessage(err);
        return(errorMessage);
    }
};

function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

function getErrorMessage(err) {
    return err.message ? err.message : "Check your Internet connection!";
}