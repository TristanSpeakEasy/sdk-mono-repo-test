package operations

type Get2QueryParams struct {
	Foo string `queryParam:"style=form,explode=true,name=foo"`
}

type Get2Request struct {
	QueryParams Get2QueryParams
}

type Get2200ApplicationJSON struct {
	Args    map[string]interface{} `json:"args,omitempty"`
	Headers map[string]interface{} `json:"headers,omitempty"`
	Origin  *string                `json:"origin,omitempty"`
	URL     *string                `json:"url,omitempty"`
}

type Get2Response struct {
	ContentType                  string
	StatusCode                   int64
	Get2200ApplicationJSONObject *Get2200ApplicationJSON
}
