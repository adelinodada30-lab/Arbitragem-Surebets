import axios from "axios";

const API_KEY = process.env.ODDS_API_KEY;
const BASE_URL = "https://api.the-odds-api.com/v4/sports";

export const fetchOdds = async (sport = "soccer") => {
  try {
    const response = await axios.get(
      `${BASE_URL}/${sport}/odds`,
      {
        params: {
          apiKey: API_KEY,
          regions: "eu,us",
          markets: "h2h,spreads,totals,both_teams_to_score",
          oddsFormat: "decimal",
        },
      }
    );

    return response.data;
  } catch (error) {
    throw new Error("Erro ao buscar odds da API");
  }
};