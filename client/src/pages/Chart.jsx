import TradingViewWidget, { Themes } from "react-tradingview-widget";
import { PageWrapper } from "../components/global.styles";

const Chart = () => {
  return (
    <PageWrapper>
      <TradingViewWidget
        symbol="BINANCE:BTCUSDT"
        theme={Themes.DARK}
        height={1000}
        width={1400}
      />
    </PageWrapper>
  );
};

export default Chart;
