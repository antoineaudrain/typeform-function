exports.handler = async (event) => {
  // let { name, gender, smell } = JSON.parse(event.body).payload.data;
  console.log(JSON.parse(event.body))

  return {
    statusCode: 200,
    body: `wewe`,
  };
};