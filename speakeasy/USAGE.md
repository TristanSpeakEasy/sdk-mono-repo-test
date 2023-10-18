<!-- Start SDK Example Usage -->


```typescript
import { SDK } from "openapi";

(async () => {
    const sdk = new SDK({
        apiKey: "",
    });

    const res = await sdk.apis.getApis({
        metadata: {
            South: ["Southwest"],
        },
        op: {
            and: false,
        },
    });

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End SDK Example Usage -->