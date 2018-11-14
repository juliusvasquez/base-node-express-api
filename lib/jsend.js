function formatError (body, req, res) {
  const isClientError = res.statusCode >= 400 && res.statusCode < 500;
  let response;
  if (isClientError) {
    response = {
      status: 'error',
      message: body.message,
      code: body.code || body.statusCode,
      path: req.path
    };
  } else {
    const inDebugMode = process.env.APP_ENV === 'development';
    response = {
      status: 'error',
      message: inDebugMode ? body.message : 'Internal Server Error',
      code: inDebugMode ? body.code || body.statusCode : 'INTERNAL_SERVER_ERROR',
      data: inDebugMode ? body.stack : undefined,
      path: req.path
    };
  }
  return response;
}

function formatSuccess (body) {
  let response;
  if (body.data && body.pagination) {
    response = {
      status: 'success',
      data: body.data,
      pagination: body.pagination
    };
  } else {
    response = {
      status: 'success',
      data: body
    };
  }
  return response;
}


export default (body, req, res) => {
  let response;
  if (body instanceof Error) {
    response = formatError(body, req, res);
  } else {
    response = formatSuccess(body);
  }
  return response;
};
