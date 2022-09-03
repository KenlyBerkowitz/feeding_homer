export async function onRequest(request) {

        const options = {
            headers: {
                'content-type': 'application/json;charset=UTF-8'
              },
        };

        const data = {
            mine: "hi",
            yours: "no"
        }
        const json = JSON.stringify(data);

        return new Response(json, options);

  }