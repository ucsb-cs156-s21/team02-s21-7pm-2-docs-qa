const swaggerFixtures = {
  example: {
    swagger: "2.0",
    info: {
      description: "Api Documentation",
      version: "1.0",
      title: "Api Documentation",
      termsOfService: "urn:tos",
      contact: {},
      license: {
        name: "Apache 2.0",
        url: "http://www.apache.org/licenses/LICENSE-2.0",
      },
    },
    host: "staff-team02-dev.herokuapp.com",
    basePath: "/",
    tags: [
      {
        name: "college-subreddits-controller",
        description:
          "College Subreddits from https://github.com/karlding/college-subreddits/",
      },
      {
        name: "country-code-controller",
        description: "Country Code info from https://restcountries.eu",
      },
      {
        name: "earthquakes-controller",
        description: "Earthquake info from USGS",
      },
      {
        name: "home-controller",
        description: "Home Page with links to documentation",
      },
      {
        name: "location-controller",
        description: "Location info from Open Street Map project",
      },
      {
        name: "public-holidays-controller",
        description: "Public Holiday Info from https://date.nager.at/Api",
      },
      {
        name: "react-controller",
        description: "React Controller",
      },
      {
        name: "reddit-controller",
        description: "Info from Reddit.com",
      },
      {
        name: "tides-controller",
        description:
          "Tide Information from NOAA https://api.tidesandcurrents.noaa.gov/api/prod/",
      },
      {
        name: "university-controller",
        description:
          "University information from https://github.com/Hipo/university-domains-list",
      },
      {
        name: "zip-code-controller",
        description: "Zip Code Information from http://www.zippopotam.us/",
      },
    ],
    paths: {
      "/": {
        get: {
          tags: ["react-controller"],
          summary: "getIndex",
          operationId: "getIndexUsingGET",
          produces: ["*/*"],
          responses: {
            200: {
              description: "OK",
              schema: {
                type: "string",
              },
            },
            401: {
              description: "Unauthorized",
            },
            403: {
              description: "Forbidden",
            },
            404: {
              description: "Not Found",
            },
          },
        },
        head: {
          tags: ["react-controller"],
          summary: "getIndex",
          operationId: "getIndexUsingHEAD",
          consumes: ["application/json"],
          produces: ["*/*"],
          responses: {
            200: {
              description: "OK",
              schema: {
                type: "string",
              },
            },
            204: {
              description: "No Content",
            },
            401: {
              description: "Unauthorized",
            },
            403: {
              description: "Forbidden",
            },
          },
        },
        post: {
          tags: ["react-controller"],
          summary: "getIndex",
          operationId: "getIndexUsingPOST",
          consumes: ["application/json"],
          produces: ["*/*"],
          responses: {
            200: {
              description: "OK",
              schema: {
                type: "string",
              },
            },
            201: {
              description: "Created",
            },
            401: {
              description: "Unauthorized",
            },
            403: {
              description: "Forbidden",
            },
            404: {
              description: "Not Found",
            },
          },
        },
        put: {
          tags: ["react-controller"],
          summary: "getIndex",
          operationId: "getIndexUsingPUT",
          consumes: ["application/json"],
          produces: ["*/*"],
          responses: {
            200: {
              description: "OK",
              schema: {
                type: "string",
              },
            },
            201: {
              description: "Created",
            },
            401: {
              description: "Unauthorized",
            },
            403: {
              description: "Forbidden",
            },
            404: {
              description: "Not Found",
            },
          },
        },
        delete: {
          tags: ["react-controller"],
          summary: "getIndex",
          operationId: "getIndexUsingDELETE",
          produces: ["*/*"],
          responses: {
            200: {
              description: "OK",
              schema: {
                type: "string",
              },
            },
            204: {
              description: "No Content",
            },
            401: {
              description: "Unauthorized",
            },
            403: {
              description: "Forbidden",
            },
          },
        },
        options: {
          tags: ["react-controller"],
          summary: "getIndex",
          operationId: "getIndexUsingOPTIONS",
          consumes: ["application/json"],
          produces: ["*/*"],
          responses: {
            200: {
              description: "OK",
              schema: {
                type: "string",
              },
            },
            204: {
              description: "No Content",
            },
            401: {
              description: "Unauthorized",
            },
            403: {
              description: "Forbidden",
            },
          },
        },
        patch: {
          tags: ["react-controller"],
          summary: "getIndex",
          operationId: "getIndexUsingPATCH",
          consumes: ["application/json"],
          produces: ["*/*"],
          responses: {
            200: {
              description: "OK",
              schema: {
                type: "string",
              },
            },
            204: {
              description: "No Content",
            },
            401: {
              description: "Unauthorized",
            },
            403: {
              description: "Forbidden",
            },
          },
        },
      },
      "/api": {
        get: {
          tags: ["home-controller"],
          summary:
            "Get general info about the server, including link to api documentation",
          operationId: "getHomeUsingGET",
          produces: ["*/*"],
          responses: {
            200: {
              description: "OK",
              schema: {
                type: "string",
              },
            },
            401: {
              description: "Unauthorized",
            },
            403: {
              description: "Forbidden",
            },
            404: {
              description: "Not Found",
            },
          },
        },
      },
      "/api/": {
        get: {
          tags: ["home-controller"],
          summary:
            "Get general info about the server, including link to api documentation",
          operationId: "getHomeUsingGET_1",
          produces: ["*/*"],
          responses: {
            200: {
              description: "OK",
              schema: {
                type: "string",
              },
            },
            401: {
              description: "Unauthorized",
            },
            403: {
              description: "Forbidden",
            },
            404: {
              description: "Not Found",
            },
          },
        },
      },
      "/api/collegesubreddits/get": {
        get: {
          tags: ["college-subreddits-controller"],
          summary: "Get a list of college subreddits",
          operationId: "getSubredditsUsingGET",
          produces: ["*/*"],
          responses: {
            200: {
              description: "OK",
              schema: {
                type: "string",
              },
            },
            401: {
              description: "Unauthorized",
            },
            403: {
              description: "Forbidden",
            },
            404: {
              description: "Not Found",
            },
          },
        },
      },
      "/api/countrycodes/get": {
        get: {
          tags: ["country-code-controller"],
          summary: "Get a list of CountryCodes",
          operationId: "getCountryCodesUsingGET",
          produces: ["*/*"],
          responses: {
            200: {
              description: "OK",
              schema: {
                type: "string",
              },
            },
            401: {
              description: "Unauthorized",
            },
            403: {
              description: "Forbidden",
            },
            404: {
              description: "Not Found",
            },
          },
        },
      },
      "/api/earthquakes/get": {
        get: {
          tags: ["earthquakes-controller"],
          summary:
            "Get earthquakes a certain distance from UCSB's Storke Tower",
          description:
            "JSON return format documented here: https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php",
          operationId: "getEarthquakesUsingGET",
          produces: ["*/*"],
          parameters: [
            {
              name: "distance",
              in: "query",
              description: "distance in km, e.g. 100",
              required: true,
              type: "string",
            },
            {
              name: "minMag",
              in: "query",
              description: "minimum magnitude, e.g. 2.5",
              required: true,
              type: "string",
            },
          ],
          responses: {
            200: {
              description: "OK",
              schema: {
                type: "string",
              },
            },
            401: {
              description: "Unauthorized",
            },
            403: {
              description: "Forbidden",
            },
            404: {
              description: "Not Found",
            },
          },
        },
      },
      "/api/locations/get": {
        get: {
          tags: ["location-controller"],
          summary: "Get list of locations that match a given location name",
          description:
            "Uses API documented here: https://nominatim.org/release-docs/develop/api/Search/",
          operationId: "getLocationsUsingGET",
          produces: ["*/*"],
          parameters: [
            {
              name: "location",
              in: "query",
              description:
                "name to search, e.g. 'Isla Vista' or 'Eiffel Tower'",
              required: true,
              type: "string",
            },
          ],
          responses: {
            200: {
              description: "OK",
              schema: {
                type: "string",
              },
            },
            401: {
              description: "Unauthorized",
            },
            403: {
              description: "Forbidden",
            },
            404: {
              description: "Not Found",
            },
          },
        },
      },
      "/api/publicholidays/get": {
        get: {
          tags: ["public-holidays-controller"],
          summary: "Get public holidays for a given year and country",
          operationId: "getEarthquakesUsingGET_1",
          produces: ["*/*"],
          parameters: [
            {
              name: "countryCode",
              in: "query",
              description: "2 letter country code, e.g. US, MX, CN ",
              required: true,
              type: "string",
            },
            {
              name: "year",
              in: "query",
              description: "year, e.g. 2012",
              required: true,
              type: "string",
            },
          ],
          responses: {
            200: {
              description: "OK",
              schema: {
                type: "string",
              },
            },
            401: {
              description: "Unauthorized",
            },
            403: {
              description: "Forbidden",
            },
            404: {
              description: "Not Found",
            },
          },
        },
      },
      "/api/reddit/get": {
        get: {
          tags: ["reddit-controller"],
          summary: "Get posts from a subreddit of Reddit.com",
          operationId: "getRedditPostsUsingGET",
          produces: ["*/*"],
          parameters: [
            {
              name: "subreddit",
              in: "query",
              description: "subreddit, e.g. UCSantaBarbara",
              required: true,
              type: "string",
            },
          ],
          responses: {
            200: {
              description: "OK",
              schema: {
                type: "string",
              },
            },
            401: {
              description: "Unauthorized",
            },
            403: {
              description: "Forbidden",
            },
            404: {
              description: "Not Found",
            },
          },
        },
      },
      "/api/tides/get": {
        get: {
          tags: ["tides-controller"],
          summary: "Get water level for date range, in local time.",
          description:
            "For station id, see: https://tidesandcurrents.noaa.gov/tide_predictions.html?gid=1393 ",
          operationId: "getTidesUsingGET",
          produces: ["*/*"],
          parameters: [
            {
              name: "endDate",
              in: "query",
              description: "endDate in format yyyymmdd",
              required: true,
              type: "string",
            },
            {
              name: "startDate",
              in: "query",
              description: "startDate in format yyyymmdd",
              required: true,
              type: "string",
            },
            {
              name: "station",
              in: "query",
              description: "station, e.g. 9411340 for Santa Barbara",
              required: true,
              type: "string",
            },
          ],
          responses: {
            200: {
              description: "OK",
              schema: {
                type: "string",
              },
            },
            401: {
              description: "Unauthorized",
            },
            403: {
              description: "Forbidden",
            },
            404: {
              description: "Not Found",
            },
          },
        },
      },
      "/api/university/get": {
        get: {
          tags: ["university-controller"],
          summary:
            "Get information about universities with name matching a substring",
          operationId: "getUniversitiesUsingGET",
          produces: ["*/*"],
          parameters: [
            {
              name: "name",
              in: "query",
              description: "any portion of name, e.g. 'Stanf'",
              required: true,
              type: "string",
            },
          ],
          responses: {
            200: {
              description: "OK",
              schema: {
                type: "string",
              },
            },
            401: {
              description: "Unauthorized",
            },
            403: {
              description: "Forbidden",
            },
            404: {
              description: "Not Found",
            },
          },
        },
      },
      "/api/zipcode/get": {
        get: {
          tags: ["zip-code-controller"],
          summary: "Get information about a us zipcode",
          operationId: "getZipInfoUsingGET",
          produces: ["*/*"],
          parameters: [
            {
              name: "zipcode",
              in: "query",
              description: "US zipcode, e.g. 93106",
              required: true,
              type: "string",
            },
          ],
          responses: {
            200: {
              description: "OK",
              schema: {
                type: "string",
              },
            },
            401: {
              description: "Unauthorized",
            },
            403: {
              description: "Forbidden",
            },
            404: {
              description: "Not Found",
            },
          },
        },
      },
      "/{x:^(?!v2/api-docs$)[\\w\\-]+}": {
        get: {
          tags: ["react-controller"],
          summary: "getIndex",
          operationId: "getIndexUsingGET_2",
          produces: ["*/*"],
          responses: {
            200: {
              description: "OK",
              schema: {
                type: "string",
              },
            },
            401: {
              description: "Unauthorized",
            },
            403: {
              description: "Forbidden",
            },
            404: {
              description: "Not Found",
            },
          },
        },
        head: {
          tags: ["react-controller"],
          summary: "getIndex",
          operationId: "getIndexUsingHEAD_2",
          consumes: ["application/json"],
          produces: ["*/*"],
          responses: {
            200: {
              description: "OK",
              schema: {
                type: "string",
              },
            },
            204: {
              description: "No Content",
            },
            401: {
              description: "Unauthorized",
            },
            403: {
              description: "Forbidden",
            },
          },
        },
        post: {
          tags: ["react-controller"],
          summary: "getIndex",
          operationId: "getIndexUsingPOST_2",
          consumes: ["application/json"],
          produces: ["*/*"],
          responses: {
            200: {
              description: "OK",
              schema: {
                type: "string",
              },
            },
            201: {
              description: "Created",
            },
            401: {
              description: "Unauthorized",
            },
            403: {
              description: "Forbidden",
            },
            404: {
              description: "Not Found",
            },
          },
        },
        put: {
          tags: ["react-controller"],
          summary: "getIndex",
          operationId: "getIndexUsingPUT_2",
          consumes: ["application/json"],
          produces: ["*/*"],
          responses: {
            200: {
              description: "OK",
              schema: {
                type: "string",
              },
            },
            201: {
              description: "Created",
            },
            401: {
              description: "Unauthorized",
            },
            403: {
              description: "Forbidden",
            },
            404: {
              description: "Not Found",
            },
          },
        },
        delete: {
          tags: ["react-controller"],
          summary: "getIndex",
          operationId: "getIndexUsingDELETE_2",
          produces: ["*/*"],
          responses: {
            200: {
              description: "OK",
              schema: {
                type: "string",
              },
            },
            204: {
              description: "No Content",
            },
            401: {
              description: "Unauthorized",
            },
            403: {
              description: "Forbidden",
            },
          },
        },
        options: {
          tags: ["react-controller"],
          summary: "getIndex",
          operationId: "getIndexUsingOPTIONS_2",
          consumes: ["application/json"],
          produces: ["*/*"],
          responses: {
            200: {
              description: "OK",
              schema: {
                type: "string",
              },
            },
            204: {
              description: "No Content",
            },
            401: {
              description: "Unauthorized",
            },
            403: {
              description: "Forbidden",
            },
          },
        },
        patch: {
          tags: ["react-controller"],
          summary: "getIndex",
          operationId: "getIndexUsingPATCH_2",
          consumes: ["application/json"],
          produces: ["*/*"],
          responses: {
            200: {
              description: "OK",
              schema: {
                type: "string",
              },
            },
            204: {
              description: "No Content",
            },
            401: {
              description: "Unauthorized",
            },
            403: {
              description: "Forbidden",
            },
          },
        },
      },
      "/{x}/**/{y}": {
        get: {
          tags: ["react-controller"],
          summary: "getIndex",
          operationId: "getIndexUsingGET_1",
          produces: ["*/*"],
          responses: {
            200: {
              description: "OK",
              schema: {
                type: "string",
              },
            },
            401: {
              description: "Unauthorized",
            },
            403: {
              description: "Forbidden",
            },
            404: {
              description: "Not Found",
            },
          },
        },
        head: {
          tags: ["react-controller"],
          summary: "getIndex",
          operationId: "getIndexUsingHEAD_1",
          consumes: ["application/json"],
          produces: ["*/*"],
          responses: {
            200: {
              description: "OK",
              schema: {
                type: "string",
              },
            },
            204: {
              description: "No Content",
            },
            401: {
              description: "Unauthorized",
            },
            403: {
              description: "Forbidden",
            },
          },
        },
        post: {
          tags: ["react-controller"],
          summary: "getIndex",
          operationId: "getIndexUsingPOST_1",
          consumes: ["application/json"],
          produces: ["*/*"],
          responses: {
            200: {
              description: "OK",
              schema: {
                type: "string",
              },
            },
            201: {
              description: "Created",
            },
            401: {
              description: "Unauthorized",
            },
            403: {
              description: "Forbidden",
            },
            404: {
              description: "Not Found",
            },
          },
        },
        put: {
          tags: ["react-controller"],
          summary: "getIndex",
          operationId: "getIndexUsingPUT_1",
          consumes: ["application/json"],
          produces: ["*/*"],
          responses: {
            200: {
              description: "OK",
              schema: {
                type: "string",
              },
            },
            201: {
              description: "Created",
            },
            401: {
              description: "Unauthorized",
            },
            403: {
              description: "Forbidden",
            },
            404: {
              description: "Not Found",
            },
          },
        },
        delete: {
          tags: ["react-controller"],
          summary: "getIndex",
          operationId: "getIndexUsingDELETE_1",
          produces: ["*/*"],
          responses: {
            200: {
              description: "OK",
              schema: {
                type: "string",
              },
            },
            204: {
              description: "No Content",
            },
            401: {
              description: "Unauthorized",
            },
            403: {
              description: "Forbidden",
            },
          },
        },
        options: {
          tags: ["react-controller"],
          summary: "getIndex",
          operationId: "getIndexUsingOPTIONS_1",
          consumes: ["application/json"],
          produces: ["*/*"],
          responses: {
            200: {
              description: "OK",
              schema: {
                type: "string",
              },
            },
            204: {
              description: "No Content",
            },
            401: {
              description: "Unauthorized",
            },
            403: {
              description: "Forbidden",
            },
          },
        },
        patch: {
          tags: ["react-controller"],
          summary: "getIndex",
          operationId: "getIndexUsingPATCH_1",
          consumes: ["application/json"],
          produces: ["*/*"],
          responses: {
            200: {
              description: "OK",
              schema: {
                type: "string",
              },
            },
            204: {
              description: "No Content",
            },
            401: {
              description: "Unauthorized",
            },
            403: {
              description: "Forbidden",
            },
          },
        },
      },
    },
  },
};

export default swaggerFixtures;
