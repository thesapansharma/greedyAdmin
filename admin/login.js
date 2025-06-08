import { Box, H1, Text } from '@adminjs/design-system';
import { useTranslation } from 'adminjs';
import { Login } from '@adminjs/express';
const CustomLogin = () => {
    const { translateLabel } = useTranslation();
    return (React.createElement(Box, { flex: true, flexDirection: "column", justifyContent: "center", alignItems: "center", mt: "xl" },
        React.createElement(H1, null, "Welcome to Vmost Admin"),
        React.createElement(Text, { mt: "lg" }, "Please login to access your admin panel."),
        React.createElement(Box, { mt: "xxl", width: "100%", maxWidth: "400px" },
            React.createElement(Login, null))));
};
export default CustomLogin;
