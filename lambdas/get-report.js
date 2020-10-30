exports.handler = async (event) => {
  if (Object.entries(event.body).length !== 0) {
    const payload = JSON.parse(event.body)
    return {
      statusCode: 200,
      body: JSON.stringify(payload),
    };
  }
  return {
    statusCode: 500,
  };
};