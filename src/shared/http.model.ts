export interface Headers{
    'Authorization':string;
}

export interface Body{
    "query":string;
}
export interface HttpParams{
    method:HTTP_VERB,
    body:Body | JSON,
    headers:Headers
}

enum HTTP_VERB{
    POST = "POST",
    GET = "GET"
}