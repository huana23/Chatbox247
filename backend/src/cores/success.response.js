const { StatusCodes, ReasonPhrases } = require('../constants');

class SuccessResponse {
    constructor({ message, statusCode = StatusCodes.OK, metadata = {} }) {
        this.success = true;
        this.message = message || ReasonPhrases.OK;
        this.statusCode = statusCode;
        this.metadata = metadata;
    }

    send(res) {
        return res.status(this.statusCode).json(this);
    }
}

class OK extends SuccessResponse {
    constructor({ message, metadata }) {
        super({ message, statusCode: StatusCodes.OK, metadata });
    }
}

class Created extends SuccessResponse {
    constructor({ message, metadata }) {
        super({ message, statusCode: StatusCodes.CREATED, metadata });
    }
}

class NoContent extends SuccessResponse {
    constructor() {
        super({ statusCode: StatusCodes.NO_CONTENT, metadata: null });
    }
}

module.exports = { OK, Created, NoContent, SuccessResponse };
