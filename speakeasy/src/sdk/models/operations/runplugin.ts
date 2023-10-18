/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class RunPluginRequest extends SpeakeasyBase {
    /**
     * The filter to apply to the query.
     */
    @SpeakeasyMetadata({ data: "queryParam, serialization=json;name=filters" })
    filters?: shared.Filters;

    /**
     * The ID of the plugin to run.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pluginID" })
    pluginID: string;
}

export class RunPluginResponse extends SpeakeasyBase {
    /**
     * OK
     */
    @SpeakeasyMetadata({ elemType: shared.BoundedRequest })
    boundedRequests?: shared.BoundedRequest[];

    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * Default error response
     */
    @SpeakeasyMetadata()
    error?: shared.ErrorT;

    /**
     * HTTP response status code for this operation
     */
    @SpeakeasyMetadata()
    statusCode: number;

    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}