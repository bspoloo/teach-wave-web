async function getData(url: string, endopint: string, token: string) {
    return await fetch(url + endopint,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token ? `Bearer ${token}` : '',
        },
    })
        .then(response => response.json())
        .then(data => data)
}

export default getData;