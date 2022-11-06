import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=foo" })
  foo: string;
}


export class GetRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetQueryParams;
}


export class Get200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=args" })
  args?: Map<string, unknown>;

  @Metadata({ data: "json, name=headers" })
  headers?: Map<string, unknown>;

  @Metadata({ data: "json, name=origin" })
  origin?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}


export class GetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  get200ApplicationJsonObject?: Get200ApplicationJson;
}
