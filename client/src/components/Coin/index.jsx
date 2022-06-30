import { useNavigate } from "react-router-dom";
import {
  Cap,
  CoinData,
  CoinWrapper,
  Icon,
  PercentGreen,
  PercentRed,
  Price,
  Row,
  Title,
  Volume,
  Wrapper,
} from "./index.styles";

const Coin = ({
  name,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange,
}) => {
  const navigate = useNavigate();
  return (
    <Wrapper onClick={() => navigate("/chart")}>
      <Row>
        <CoinWrapper>
          <Icon src={image} alt="crypto" />
          <Title>{name}</Title>
          <p className="coin-symbol">{symbol}</p>
        </CoinWrapper>
        <CoinData>
          <Price>${price}</Price>
          <Volume>${volume.toLocaleString()}</Volume>

          {priceChange < 0 ? (
            <PercentGreen>{priceChange.toFixed(2)}%</PercentGreen>
          ) : (
            <PercentRed>{priceChange.toFixed(2)}%</PercentRed>
          )}

          <Cap>Mkt Cap: ${marketcap.toLocaleString()}</Cap>
        </CoinData>
      </Row>
    </Wrapper>
  );
};

export default Coin;
