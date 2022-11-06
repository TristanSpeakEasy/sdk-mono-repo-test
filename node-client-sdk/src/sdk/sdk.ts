import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { MatchContentType } from "../internal/utils/contenttype";
import * as utils from "../internal/utils/utils";
import * as operations from "./models/operations";
import { ParamsSerializerOptions } from "axios";
import { GetQueryParamSerializer } from "../internal/utils/queryparams";

const Servers = [
  "https://httpbin.org",
] as const;

export function WithServerURL(serverURL: string, params?: Map<string, string>): Function {
  return (sdk: SDK) => {
    if (params != null) {
      serverURL = utils.ReplaceParameters(serverURL, params);
    }
    sdk.serverURL = serverURL;
    sdk.defaultClient = axios.create({ baseURL: serverURL });
  };
}


export class SDK {
  defaultClient?: AxiosInstance;
  securityClient?: AxiosInstance;
  serverURL: string;

  constructor(...opts: Function[]) {
    opts.forEach((o) => o(this));
    if (this.serverURL == "") {
      this.serverURL = Servers[0];
    }
  }
  
  Get2(
    req: operations.Get2Request,
    config?: AxiosRequestConfig
  ): Promise<operations.Get2Response> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.Get2Request(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/get";
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.Get2Response = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, "application/json")) res.get2200ApplicationJsonObject = httpRes?.data;
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
