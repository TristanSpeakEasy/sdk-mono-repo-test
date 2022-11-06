package operations

type GetQueryParams struct {
	Foo string `queryParam:"style=form,explode=true,name=foo"`
}

type GetRequest struct {
	QueryParams GetQueryParams
}

type Get200ApplicationJSON struct {
	Args    map[string]interface{} `json:"args,omitempty"`
	Headers map[string]interface{} `json:"headers,omitempty"`
	Origin  *string                `json:"origin,omitempty"`
	URL     *string                `json:"url,omitempty"`
}

type GetResponse struct {
	ContentType                 string
	StatusCode                  int64
	Get200ApplicationJSONObject *Get200ApplicationJSON
}
