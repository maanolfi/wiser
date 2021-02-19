import GlobalStyle from '../styles/GlobalStyle'
import { wrapper } from '../store'
import CustomHead from '../components/CustomHead'

import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";


function MyApp({ Component, pageProps }) {
  const options = {
    timeout: 5000,
    position: positions.BOTTOM_CENTER
  };

  return (
    <Provider template={AlertTemplate} {...options}>
      <CustomHead>
        <GlobalStyle />
        <Component {...pageProps} />
      </CustomHead>
    </Provider>
  )
}

export default wrapper.withRedux(MyApp)