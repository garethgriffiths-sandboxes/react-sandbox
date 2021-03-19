import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme } from '@material-ui/core/styles';
import App from './App';

const Main = () => {

  const createTheme = () => {
    return createMuiTheme({
      palette: {
        background: {
          default: "#FFFFFF"
        },
        primary: {
          main: '#0074F0',
        },
        secondary: {
          main: '#6200EE',
          contrastText: '#FFFFFF',
        },
      },
      typography: {
        fontFamily: `"Poppins", "Helvetica", "Arial", sans-serif`,
        useNextVariants: true
      },
    });
  };

  return (
    <MuiThemeProvider theme={createTheme()}>
      <CssBaseline />
      <App />
    </MuiThemeProvider>
  );
};

export default Main;
