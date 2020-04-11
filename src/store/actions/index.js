import API_KEY from "../../config/currencyApi";
import api from "../../config/api";

export const CONVERTE_MOEDAS = "@CONVERTE_MOEDAS";

export const converteMoedas = async ({ from, to, amount }) => {
  const url = "/convert";

  const params = {
    access_key: API_KEY,
    from,
    to,
    amount,
    format: 1,
  };

  try {
    const response = await api.get(url, { params });

    if (response && response.data && response.data.error) {
      throw response.data.error.info;
    }

    return {
      type: CONVERTE_MOEDAS,
      payload: response,
    };
  } catch (err) {
    alert(`Erro ao buscar cotação > ${err}`);
  }
};
