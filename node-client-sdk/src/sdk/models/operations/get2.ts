import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Get2QueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=foo" })
  foo: string;
}


export class Get2Request extends SpeakeasyBase {
  @Metadata()
  queryParams: Get2QueryParams;
}


export class Get2200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=args" })
  args?: Map<string, unknown>;

  @Metadata({ data: "json, name=headers" })
  headers?: Map<string, unknown>;

  @Metadata({ data: "json, name=origin" })
  origin?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}


export class Get2Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  get2200ApplicationJsonObject?: Get2200ApplicationJson;
}
