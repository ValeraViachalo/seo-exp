export const fetchData = async (file) => {
  const response = await fetch(`https://seo-exp.vercel.app/${file}`);
  const data = await response.json();
  return data;
};
