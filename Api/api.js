const url = "https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole"

export function* testApi(){
    const response = yield fetch(url,{
        cache: 'no-cache', 
        headers: {
          'content-type': 'application/json'
        },
        method: 'GET'
    });
    const result = yield response.status === 200 ? JSON.parse(response._bodyText) : []
    return result;
}