const notFound = (req, res) => {
  const { id: taskId } = req.params;
  return res.status(404).send(`Task with id: ${taskId} is not found`);
};

export { notFound };
