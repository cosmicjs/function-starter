module.exports.handler = (event, context, callback) => {
  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    body: 'Hello world! Custom message: ' + process.env.CUSTOM_MESSAGE + ' Event body: ' + JSON.stringify(event.body)
  };
  callback(null, response);
}