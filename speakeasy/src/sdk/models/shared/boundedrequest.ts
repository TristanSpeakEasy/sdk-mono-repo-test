/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { RequestMetadata } from "./requestmetadata";
import { Expose, Transform, Type } from "class-transformer";

/**
 * A BoundedRequest is a request that has been logged by the Speakeasy without the contents of the request.
 */
export class BoundedRequest extends SpeakeasyBase {
    /**
     * The ID of the ApiEndpoint this request was made to.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "api_endpoint_id" })
    apiEndpointId: string;

    /**
     * The ID of the Api this request was made to.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "api_id" })
    apiId: string;

    /**
     * Creation timestamp.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "created_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    createdAt: Date;

    /**
     * The ID of the customer that made this request.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "customer_id" })
    customerId: string;

    /**
     * The latency of the request.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "latency" })
    latency: number;

    /**
     * Metadata associated with this request
     */
    @SpeakeasyMetadata({ elemType: RequestMetadata })
    @Expose({ name: "metadata" })
    @Type(() => RequestMetadata)
    metadata?: RequestMetadata[];

    /**
     * HTTP verb.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "method" })
    method: string;

    /**
     * The path of the request.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "path" })
    path: string;

    /**
     * The time the request finished.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "request_finish_time" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    requestFinishTime: Date;

    /**
     * The ID of this request.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "request_id" })
    requestId: string;

    /**
     * The time the request was made.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "request_start_time" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    requestStartTime: Date;

    /**
     * The status code of the request.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status: number;

    /**
     * The version ID of the Api this request was made to.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "version_id" })
    versionId: string;

    /**
     * The workspace ID this request was made to.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "workspace_id" })
    workspaceId: string;
}