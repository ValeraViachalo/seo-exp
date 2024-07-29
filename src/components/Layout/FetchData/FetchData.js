import config from "../../../../config"; // імпорт конфігурації

export const fetchData = async (file) => {
  const response = await fetch(`${config.BASE_URL}${file}`);
  const data = await response.json();
  return data;
};
