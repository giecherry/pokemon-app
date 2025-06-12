import { useState, useEffect } from "react";

export const useFetchData = (endpoint, token) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(endpoint, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (!response.ok) {
                    throw new Error(
                        `Failed to fetch data from ${endpoint}`
                    );
                }

                const result = await response.json();
                setData(result);
            } catch (err) {
                console.error(err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [endpoint, token]);

    return { data, loading, error };
};
