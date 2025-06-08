import { Box, H1, Text } from '@adminjs/design-system';
import { useEffect, useState } from 'react';
import axios from 'axios';
const Dashboard = () => {
    const [stats, setStats] = useState({ userCount: null, transactionCount: null });
    useEffect(() => {
        axios.get('/admin/api/dashboard/stats')
            .then(res => setStats(res.data))
            .catch(() => setStats({ userCount: 'Error', transactionCount: 'Error' }));
    }, []);
    return (React.createElement(Box, { variant: "grey", p: "xl" },
        React.createElement(H1, null, "\uD83D\uDC4B Welcome to Admin Dashboard"),
        React.createElement(Box, { mt: "xl", display: "flex", flexDirection: "row", gap: "xl" },
            React.createElement(Box, { variant: "white", p: "lg", flexGrow: 1, boxShadow: "card" },
                React.createElement(Text, { fontSize: "lg", fontWeight: "bold" }, "\uD83D\uDC64 Total Users"),
                React.createElement(Text, { fontSize: "xxl" }, stats.userCount !== null ? stats.userCount : 'Loading...')),
            React.createElement(Box, { variant: "white", p: "lg", flexGrow: 1, boxShadow: "card" },
                React.createElement(Text, { fontSize: "lg", fontWeight: "bold" }, "\uD83D\uDCB0 Total Transactions"),
                React.createElement(Text, { fontSize: "xxl" }, stats.transactionCount !== null ? stats.transactionCount : 'Loading...')))));
};
export default Dashboard;
