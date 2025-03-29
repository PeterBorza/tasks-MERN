const healthCheck = async (req, res) => {
  res.send(
    "<h1>Healthy server</h1><a href='http://localhost:8080/api-docs'>Go to docs</a>"
  );
};

export { healthCheck };
