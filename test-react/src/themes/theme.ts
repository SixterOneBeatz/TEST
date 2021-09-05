import { createTheme } from '@material-ui/core/styles'
import { esES } from '@material-ui/core/locale';
const theme = createTheme({
    palette:{
        primary: {
            light: '#543b8d',
            main:'#24135f',
            dark: '#020035',
            contrastText: '#ffffff',
        },
        secondary: {
            light: '#77a1a0',
            main:'#4a7272',
            dark: '#1e4647',
            contrastText: '#ffffff',
        }
    },
    typography: {
        fontSize: 11
    }
}, esES);

export default theme;