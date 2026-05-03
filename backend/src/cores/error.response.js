const { StatusCodes, ReasonPhrases } = require('../constants');

class ErrorResponse extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
    }
}

class ConflictRequestError extends ErrorResponse {
    constructor(message = ReasonPhrases.CONFLICT, statusCode = StatusCodes.CONFLICT) {
        super(message, statusCode);
    }
}

class BadRequestError extends ErrorResponse {
    constructor(message = ReasonPhrases.BAD_REQUEST, statusCode = StatusCodes.BAD_REQUEST) {
        super(message, statusCode);
    }
}

class AuthFailureError extends ErrorResponse {
    constructor(message = ReasonPhrases.UNAUTHORIZED, statusCode = StatusCodes.UNAUTHORIZED) {
        super(message, statusCode);
    }
}

class NotFoundError extends ErrorResponse {
    constructor(message = ReasonPhrases.NOT_FOUND, statusCode = StatusCodes.NOT_FOUND) {
        super(message, statusCode);
    }
}

class ForbiddenError extends ErrorResponse {
    constructor(message = ReasonPhrases.FORBIDDEN, statusCode = StatusCodes.FORBIDDEN) {
        super(message, statusCode);
    }
}

class InternalServerError extends ErrorResponse {
    constructor(message = ReasonPhrases.INTERNAL_SERVER_ERROR, statusCode = StatusCodes.INTERNAL_SERVER_ERROR) {
        super(message, statusCode);
    }
}

class BadGatewayError extends ErrorResponse {
    constructor(message = ReasonPhrases.BAD_GATEWAY, statusCode = StatusCodes.BAD_GATEWAY) {
        super(message, statusCode);
    }
}

class ServiceUnavailableError extends ErrorResponse {
    constructor(message = ReasonPhrases.SERVICE_UNAVAILABLE, statusCode = StatusCodes.SERVICE_UNAVAILABLE) {
        super(message, statusCode);
    }
}

class UnprocessableEntityError extends ErrorResponse {
    constructor(message = ReasonPhrases.UNPROCESSABLE_ENTITY, statusCode = StatusCodes.UNPROCESSABLE_ENTITY) {
        super(message, statusCode);
    }
}

class TooManyRequestsError extends ErrorResponse {
    constructor(message = ReasonPhrases.TOO_MANY_REQUESTS, statusCode = StatusCodes.TOO_MANY_REQUESTS) {
        super(message, statusCode);
    }
}

module.exports = {
    ErrorResponse,
    ConflictRequestError,
    BadRequestError,
    AuthFailureError,
    NotFoundError,
    ForbiddenError,
    InternalServerError,
    BadGatewayError,
    ServiceUnavailableError,
    UnprocessableEntityError,
    TooManyRequestsError,
};
