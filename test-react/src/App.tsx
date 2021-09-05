import theme from "./themes/theme";
import { MuiThemeProvider } from "@material-ui/core/styles";
import Persona from "./components/Persona/PersonaContainer";

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <Persona />
    </MuiThemeProvider>
  );
};

export default App;
