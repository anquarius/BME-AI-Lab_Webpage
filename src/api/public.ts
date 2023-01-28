const api_path = {
    // beta testing API
    prod: "http://localhost:3000/api.bmeailab.io/anquav1.0/",
    // prod: "",
};


const api = {

    webpage: {
        getAllPeople: (params: any) => {
            const request = {
                method: "public/webpage",
                params: params,
                query: "?action=people",
              };
              return get(request);
        },
    },

    // BME1D02
    bme1d02: {
        getStepsCountBySid: (params: any) => {
            const request = {
                method: "public/webpage",
                params: params,
                query: "?action=steps_count" + "&sid=" + params.sid,
              };
              return get(request);
        },

        getActivityBySid: (params: any) => {
            const request = {
                method: "public/bme1d02",
                params: params,
                query: "?action=activity" + "&sid=" + params.sid,
              };
              return get(request);
        },

        getHeartrateBySid: (params: any) => {
            const request = {
                method: "public/bme1d02",
                params: params,
                query: "?action=heartrate" + "&sid=" + params.sid,
              };
              return get(request);
        },

        getSleepBySid: (params: any) => {
            const request = {
                method: "public/bme1d02",
                params: params,
                query: "?action=sleep" + "&sid=" + params.sid,
              };
              return get(request);
        },
    },

};

export default api;


async function get(request: any) {

    return fetch(
        api_path.prod + request.method + request.query,
        {
            method: "GET",
        }
    ).then((response) => response.json());
}
  
async function post(request: any) {

    return fetch(
        api_path.prod + request.method + request.query,
        {
            method: "POST",
            headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
            },
            body: JSON.stringify(request.params),
        }
    ).then((response) => response.json());
}

async function put(request: any) {

    return fetch(
        api_path.prod + request.method + request.query,
        {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
        },
        body: JSON.stringify(request.params),
        }
    ).then((response) => response.json());
}