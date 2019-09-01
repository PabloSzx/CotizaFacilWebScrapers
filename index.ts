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

  /** ESTE ES LA DATA QUE SE OBTIENE DEL CÓDIGO ANTERIOR
   * <p class="name jq-name">
            <a itemprop="url" href="/sodimac-cl/product/3354075/Rotomartillo-SDS-Plus-720w-26mm/3354075">
                <span itemprop="name">Rotomartillo SDS Plus 720w 26mm</span>
                </a>
        </p>
<p class="name jq-name">
            <a itemprop="url" href="/sodimac-cl/product/90029X/Martillo-carpintero-20-Oz-acero/90029X">
                <span itemprop="name">Martillo carpintero 20 Oz acero</span>
                </a>
        </p>
<p class="name jq-name">
            <a itemprop="url" href="/sodimac-cl/product/1513125/Martillo-soldador-metal/1513125">
                <span itemprop="name">Martillo soldador metal</span>
                </a>
        </p>
<p class="name jq-name">
            <a itemprop="url" href="/sodimac-cl/product/267783/Martillo-carpintero-8-Oz-acero/267783">
                <span itemprop="name">Martillo carpintero 8 Oz acero</span>
                </a>
        </p>
<p class="name jq-name">
            <a itemprop="url" href="/sodimac-cl/product/3873226/Martillo-demoledor-HEX-28,6-mm-AVT/3873226">
                <span itemprop="name">Martillo demoledor HEX 28,6 mm AVT</span>
                </a>
        </p>
<p class="name jq-name">
            <a itemprop="url" href="/sodimac-cl/product/1371584/Martillo-tapicero-5-Oz-acero/1371584">
                <span itemprop="name">Martillo tapicero 5 Oz acero</span>
                </a>
        </p>
<p class="name jq-name">
            <a itemprop="url" href="/sodimac-cl/product/3349519/Martillo-carpintero-20-Oz/3349519">
                <span itemprop="name">Martillo carpintero 20 Oz</span>
                </a>
        </p>
<p class="name jq-name">
            <a itemprop="url" href="/sodimac-cl/product/1890824/Martillo-carpintero-24-Oz-acero/1890824">
                <span itemprop="name">Martillo carpintero 24 Oz acero</span>
                </a>
        </p>
<p class="name jq-name">
            <a itemprop="url" href="/sodimac-cl/product/2106655/Martillo-ligero-780-W-acero-inoxidable/2106655">
                <span itemprop="name">Martillo ligero 780 W acero inoxidable</span>
                </a>
        </p>
<p class="name jq-name">
            <a itemprop="url" href="/sodimac-cl/product/337548X/Martillo-cincelador-electrico-1010W/337548X">
                <span itemprop="name">Martillo cincelador el&#xFFFD;ctrico 1010W</span>
                </a>
        </p>
<p class="name jq-name">
            <a itemprop="url" href="/sodimac-cl/product/2127571/Martillo-perforador-850-W/2127571">
                <span itemprop="name">Martillo perforador 850 W</span>
                </a>
        </p>
<p class="name jq-name">
            <a itemprop="url" href="/sodimac-cl/product/4185129/Martillo-de-pena-1000-gr-semi-profesional/4185129">
                <span itemprop="name">Martillo de pe&#xFFFD;a 1000 gr semi-profesional</span>
                </a>
        </p>
<p class="name jq-name">
            <a itemprop="url" href="/sodimac-cl/product/2286262/Martillo-carpintero-12-Oz-acero/2286262">
                <span itemprop="name">Martillo carpintero 12 Oz acero</span>
                </a>
        </p>
<p class="name jq-name">
            <a itemprop="url" href="/sodimac-cl/product/216194X/Rompepavimentos-2000-W/216194X">
                <span itemprop="name">Rompepavimentos 2000 W</span>
                </a>
        </p>
<p class="name jq-name">
            <a itemprop="url" href="/sodimac-cl/product/4225082/Pack-camping-estaca-pala-martillo/4225082">
                <span itemprop="name">Pack camping estaca pala martillo</span>
                </a>
        </p>
<p class="name jq-name">
            <a itemprop="url" href="/sodimac-cl/product/1906852/Martillo-rotatorio-1500-W-acero/1906852">
                <span itemprop="name">Martillo rotatorio 1500 W acero</span>
                </a>
        </p>

   */
};

main();
