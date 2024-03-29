# ApiEndpoints
(*apiEndpoints*)

## Overview

REST APIs for managing ApiEndpoint entities

### Available Operations

* [deleteApiEndpoint](#deleteapiendpoint) - Delete an ApiEndpoint.
* [findApiEndpoint](#findapiendpoint) - Find an ApiEndpoint via its displayName.
* [generateOpenApiSpecForApiEndpoint](#generateopenapispecforapiendpoint) - Generate an OpenAPI specification for a particular ApiEndpoint.
* [generatePostmanCollectionForApiEndpoint](#generatepostmancollectionforapiendpoint) - Generate a Postman collection for a particular ApiEndpoint.
* [getAllApiEndpoints](#getallapiendpoints) - Get all Api endpoints for a particular apiID.
* [getAllForVersionApiEndpoints](#getallforversionapiendpoints) - Get all ApiEndpoints for a particular apiID and versionID.
* [getApiEndpoint](#getapiendpoint) - Get an ApiEndpoint.
* [upsertApiEndpoint](#upsertapiendpoint) - Upsert an ApiEndpoint.

## deleteApiEndpoint

Delete an ApiEndpoint. This will also delete all associated Request Logs (if using a Postgres datastore).

### Example Usage

```typescript
import { SDK } from "openapi";

(async() => {
  const sdk = new SDK({
    apiKey: "",
  });

  const res = await sdk.apiEndpoints.deleteApiEndpoint({
    apiEndpointID: "blue",
    apiID: "Gasoline",
    versionID: "Southwest",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.DeleteApiEndpointRequest](../../models/operations/deleteapiendpointrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.DeleteApiEndpointResponse](../../models/operations/deleteapiendpointresponse.md)>**


## findApiEndpoint

Find an ApiEndpoint via its displayName (set by operationId from a registered OpenAPI schema).
This is useful for finding the ID of an ApiEndpoint to use in the /v1/apis/{apiID}/version/{versionID}/api_endpoints/{apiEndpointID} endpoints.

### Example Usage

```typescript
import { SDK } from "openapi";

(async() => {
  const sdk = new SDK({
    apiKey: "",
  });

  const res = await sdk.apiEndpoints.findApiEndpoint({
    apiID: "Cotton",
    displayName: "Chief",
    versionID: "Wooden",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.FindApiEndpointRequest](../../models/operations/findapiendpointrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.FindApiEndpointResponse](../../models/operations/findapiendpointresponse.md)>**


## generateOpenApiSpecForApiEndpoint

This endpoint will generate a new operation in any registered OpenAPI document if the operation does not already exist in the document.
Returns the original document and the newly generated document allowing a diff to be performed to see what has changed.

### Example Usage

```typescript
import { SDK } from "openapi";

(async() => {
  const sdk = new SDK({
    apiKey: "",
  });

  const res = await sdk.apiEndpoints.generateOpenApiSpecForApiEndpoint({
    apiEndpointID: "Mazda",
    apiID: "web",
    versionID: "explicabo",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                  | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                  | [operations.GenerateOpenApiSpecForApiEndpointRequest](../../models/operations/generateopenapispecforapiendpointrequest.md) | :heavy_check_mark:                                                                                                         | The request object to use for the request.                                                                                 |
| `config`                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                               | :heavy_minus_sign:                                                                                                         | Available config options for making requests.                                                                              |


### Response

**Promise<[operations.GenerateOpenApiSpecForApiEndpointResponse](../../models/operations/generateopenapispecforapiendpointresponse.md)>**


## generatePostmanCollectionForApiEndpoint

Generates a postman collection that allows the endpoint to be called from postman variables produced for any path/query/header parameters included in the OpenAPI document.

### Example Usage

```typescript
import { SDK } from "openapi";

(async() => {
  const sdk = new SDK({
    apiKey: "",
  });

  const res = await sdk.apiEndpoints.generatePostmanCollectionForApiEndpoint({
    apiEndpointID: "indigo",
    apiID: "barring",
    versionID: "Senior",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                              | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                              | [operations.GeneratePostmanCollectionForApiEndpointRequest](../../models/operations/generatepostmancollectionforapiendpointrequest.md) | :heavy_check_mark:                                                                                                                     | The request object to use for the request.                                                                                             |
| `config`                                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                           | :heavy_minus_sign:                                                                                                                     | Available config options for making requests.                                                                                          |


### Response

**Promise<[operations.GeneratePostmanCollectionForApiEndpointResponse](../../models/operations/generatepostmancollectionforapiendpointresponse.md)>**


## getAllApiEndpoints

Get all Api endpoints for a particular apiID.

### Example Usage

```typescript
import { SDK } from "openapi";

(async() => {
  const sdk = new SDK({
    apiKey: "",
  });

  const res = await sdk.apiEndpoints.getAllApiEndpoints({
    apiID: "unless",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.GetAllApiEndpointsRequest](../../models/operations/getallapiendpointsrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.GetAllApiEndpointsResponse](../../models/operations/getallapiendpointsresponse.md)>**


## getAllForVersionApiEndpoints

Get all ApiEndpoints for a particular apiID and versionID.

### Example Usage

```typescript
import { SDK } from "openapi";

(async() => {
  const sdk = new SDK({
    apiKey: "",
  });

  const res = await sdk.apiEndpoints.getAllForVersionApiEndpoints({
    apiID: "now",
    versionID: "Diesel",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                        | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                        | [operations.GetAllForVersionApiEndpointsRequest](../../models/operations/getallforversionapiendpointsrequest.md) | :heavy_check_mark:                                                                                               | The request object to use for the request.                                                                       |
| `config`                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                     | :heavy_minus_sign:                                                                                               | Available config options for making requests.                                                                    |


### Response

**Promise<[operations.GetAllForVersionApiEndpointsResponse](../../models/operations/getallforversionapiendpointsresponse.md)>**


## getApiEndpoint

Get an ApiEndpoint.

### Example Usage

```typescript
import { SDK } from "openapi";

(async() => {
  const sdk = new SDK({
    apiKey: "",
  });

  const res = await sdk.apiEndpoints.getApiEndpoint({
    apiEndpointID: "flog",
    apiID: "synthesize",
    versionID: "Barium",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.GetApiEndpointRequest](../../models/operations/getapiendpointrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.GetApiEndpointResponse](../../models/operations/getapiendpointresponse.md)>**


## upsertApiEndpoint

Upsert an ApiEndpoint. If the ApiEndpoint does not exist it will be created, otherwise it will be updated.

### Example Usage

```typescript
import { SDK } from "openapi";

(async() => {
  const sdk = new SDK({
    apiKey: "",
  });

  const res = await sdk.apiEndpoints.upsertApiEndpoint({
    apiEndpointInput: {
      apiEndpointId: "Facilitator",
      description: "Cross-group bottom-line productivity",
      displayName: "nor",
      method: "Northwest",
      path: "/private",
      versionId: "what",
    },
    apiEndpointID: "Trans",
    apiID: "Kia",
    versionID: "Electronic",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.UpsertApiEndpointRequest](../../models/operations/upsertapiendpointrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.UpsertApiEndpointResponse](../../models/operations/upsertapiendpointresponse.md)>**

