import { MainPage } from '../Pages/main-page/main-page';

type AppProps = {
  offersCount: number;
}

function App(props: AppProps) {
  return <MainPage offersCount={props.offersCount}/>;
}

export { App };
