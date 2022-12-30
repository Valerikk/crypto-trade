import { useEffect, useState } from "react";
import axios from "../api/axios";
import Coin from "../components/Coin";
import { CoinWrapper, PageWrapper } from "../components/global.styles";
import Header from "../components/Header";

const Home = () => {
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => setCoins(res.data));
  }, []);
  console.log(coins);
  return (
    <PageWrapper>
      <Header></Header>
      <CoinWrapper>
        {coins.map((coin) => {
          return (
            <Coin
              key={coin.id}
              name={coin.name}
              price={coin.current_price}
              symbol={coin.symbol}
              marketcap={coin.total_volume}
              volume={coin.market_cap}
              image={coin.image}
              priceChange={coin.price_change_percentage_24h}
            />
          );
        })}
      </CoinWrapper>
    </PageWrapper>
  );
};

export default Home;
