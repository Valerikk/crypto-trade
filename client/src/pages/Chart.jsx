import { useParams } from "react-router-dom";
import TradingViewWidget, { Themes } from "react-tradingview-widget";
import { PageWrapper } from "../components/global.styles";

const Chart = () => {
  const params = useParams();

  return (
    <PageWrapper>
      <TradingViewWidget
        symbol={`BINANCE:${params.id}USDT`}
        theme={Themes.DARK}
        height={1000}
        width={1400}
      />
    </PageWrapper>
  );
};

export default Chart;
