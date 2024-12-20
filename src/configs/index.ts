export const languagesAndCurrencys = {
  languages: [
    {
      name: 'English',
      code: 'en',
      national: 'United State',
    },
    {
      name: 'Spanish',
      code: 'es',
      national: 'Spain',
    },
    {
      name: 'French',
      code: 'fr',
      national: 'France',
    },
    {
      name: 'Vietnamese',
      code: 'vi',
      national: 'Vietnam',
    },
  ],
  currencys: [
    {
      name: 'USD',
      code: 'USD',
      symbol: '$',
    },
    {
      name: 'EUR',
      code: 'EUR',
      symbol: '€',
    },
    {
      name: 'VND',
      code: 'VND',
      symbol: '₫',
    },
    {
      name: 'GBP',
      code: 'GBP',
      symbol: '£',
    },
    {
      name: 'JPY',
      code: 'JPY',
      symbol: '¥',
    },
  ],
};
export enum HTTPStatus {
  // Informational responses (100–199)
  CONTINUE = 100,
  SWITCHING_PROTOCOLS = 101,
  PROCESSING = 102,

  // Successful responses (200–299)
  OK = 200,
  CREATED = 201,
  ACCEPTED = 202,
  NON_AUTHORITATIVE_INFORMATION = 203,
  NO_CONTENT = 204,
  RESET_CONTENT = 205,
  PARTIAL_CONTENT = 206,

  // Redirection messages (300–399)
  MULTIPLE_CHOICES = 300,
  MOVED_PERMANENTLY = 301,
  FOUND = 302,
  SEE_OTHER = 303,
  NOT_MODIFIED = 304,
  TEMPORARY_REDIRECT = 307,
  PERMANENT_REDIRECT = 308,

  // Client error responses (400–499)
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  PAYMENT_REQUIRED = 402,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  METHOD_NOT_ALLOWED = 405,
  NOT_ACCEPTABLE = 406,
  REQUEST_TIMEOUT = 408,
  CONFLICT = 409,
  GONE = 410,
  LENGTH_REQUIRED = 411,
  PRECONDITION_FAILED = 412,
  PAYLOAD_TOO_LARGE = 413,
  URI_TOO_LONG = 414,
  UNSUPPORTED_MEDIA_TYPE = 415,
  TOO_MANY_REQUESTS = 429,

  // Server error responses (500–599)
  INTERNAL_SERVER_ERROR = 500,
  NOT_IMPLEMENTED = 501,
  BAD_GATEWAY = 502,
  SERVICE_UNAVAILABLE = 503,
  GATEWAY_TIMEOUT = 504,
  HTTP_VERSION_NOT_SUPPORTED = 505,
}
export const API_URL = process.env.NEXT_PUBLIC_API_URL;
export const OPENSTREETMAP_API_URL =
  process.env.NEXT_PUBLIC_OPENSTREETMAP_API_URL;
export const NOTIFICATION_NOVU_APP_ID =
  process.env.NEXT_PUBLIC_NOTIFICATION_NOVU_APP_ID;
export const HOST_URL = process.env.NEXT_PUBLIC_HOST_URL;
export const NOVU_IDENTIFY = process.env.NEXT_PUBLIC_NOTIFICATION_NOVU_APP_ID;
export const NOVU_SUBSCRIBER_ID =
  process.env.NEXT_PUBLIC_NOTIFICATION_NOVU_ENV_ID;

export const childYears = Array.from({ length: 17 }, (_, index) => index + 1);
