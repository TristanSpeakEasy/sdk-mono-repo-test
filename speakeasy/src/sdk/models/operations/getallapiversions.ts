/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

/**
 * Configuration for filter operations
 */
export class GetAllApiVersionsOp extends SpeakeasyBase {
    /**
     * Whether to AND or OR the filters
     */
    @SpeakeasyMetadata({ data: "queryParam, name=and" })
    and: boolean;
}

export class GetAllApiVersionsRequest extends SpeakeasyBase {
    /**
     * The ID of the Api to retrieve.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=apiID" })
    apiID: string;

    /**
     * Metadata to filter Apis on
     */
    @SpeakeasyMetadata({ data: "queryParam, style=deepObject;explode=true;name=metadata" })
    metadata?: Record<string, string[]>;

    /**
     * Configuration for filter operations
     */
    @SpeakeasyMetadata({ data: "queryParam, style=deepObject;explode=true;name=op" })
    op?: GetAllApiVersionsOp;
}

export class GetAllApiVersionsResponse extends SpeakeasyBase {
    /**
     * OK
     */
    @SpeakeasyMetadata({ elemType: shared.Api })
    apis?: shared.Api[];

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
