export const handler = async (event, context) => {
  if (Object.entries(event.body).length !== 0) {
    const payload = JSON.parse(event.body)
    console.log(payload)
    return {
      statusCode: 200,
      body: `Get-Report: ${JSON.stringify(payload)}`,
    };
  }
  return {
    statusCode: 500,
  };
}