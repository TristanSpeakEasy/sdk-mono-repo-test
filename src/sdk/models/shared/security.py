from dataclasses import dataclass, field



@dataclass
class SchemeAPIKey:
    api_key: str = field(metadata={'security': { 'field_name': 'x-api-key' }})
    

@dataclass
class Security:
    api_key: SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    
