module.exports.handler = (event, context, callback) => {
  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'text/plain'
    },
    body: 'Hello world! Custom message: ' + process.env.CUSTOM_MESSAGE + ' Event body: ' + (event ? event.body : null)
  };
  callback(null, response);
}