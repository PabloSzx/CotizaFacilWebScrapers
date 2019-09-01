import axios from "axios";
import cheerio from "cheerio";

const parametroABuscar = "martillo";

const main = async () => {
  const { data } = await axios.get(
    `https://www.sodimac.cl/sodimac-cl/search/?Ntt=${parametroABuscar}`
  );

  const $ = cheerio.load(data);

  $(".jq-name").each((index, element) => {
    console.log(cheerio.load(element).html());
  });
};

main();
