export default (language, version, path) => {
  const pathWithOpt = path ? ` -f ${path}` : path;

  return `docker build -t codebattle/${language}:${version}${pathWithOpt} .`;
};
