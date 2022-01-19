const getFileName = (image) => {
  const regex = /((\w|\-)+)(\.\w+)/gm;
  const groups = regex.exec(image);

  return groups?.[1];
};

export default getFileName;
