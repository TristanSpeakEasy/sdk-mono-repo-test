/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class GetEmbedAccessTokenRequest extends SpeakeasyBase {
    /**
     * The description of the embed access token.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=description" })
    description?: string;

    /**
     * The duration (in minutes) of the embed access token.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=duration" })
    duration?: number;

    /**
     * The filter to apply to the query.
     */
    @SpeakeasyMetadata({ data: "queryParam, serialization=json;name=filters" })
    filters?: shared.Filters;
}

export class GetEmbedAccessTokenResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * OK
     */
    @SpeakeasyMetadata()
    embedAccessTokenResponse?: shared.EmbedAccessTokenResponse;

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
