from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass
class GetQueryParams:foo: str = field(default=None, metadata={'query_param': { 'field_name': 'foo', 'style': 'form', 'explode': True }})
    

@dataclass
class GetRequest:query_params: GetQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class Get200ApplicationJSON:args: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'args' }})
    headers: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'headers' }})
    origin: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'origin' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass
class GetResponse:content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_200_application_json_object: Optional[Get200ApplicationJSON] = field(default=None)
    
