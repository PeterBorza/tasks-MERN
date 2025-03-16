const convert = <T extends { _id: string }>({ _id: id, ...rest }: T) => ({
  id,
  ...rest,
});

export { convert };
