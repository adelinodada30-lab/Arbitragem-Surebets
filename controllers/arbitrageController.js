import { fetchOdds } from "../services/oddsService.js";

export const getArbitrages = async (req, res) => {
  try {
    const { sport = "soccer" } = req.query;
    const oddsData = await fetchOdds(sport);

    res.json({
      success: true,
      sport,
      data: oddsData,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Erro ao buscar arbitragens",
      error: error.message,
    });
  }
};