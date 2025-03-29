const healthCheck = async (req, res) => {
  res.send("Healthy server");
};

export { healthCheck };
