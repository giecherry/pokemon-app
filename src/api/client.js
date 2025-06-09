import { getToken } from "@clerk/clerk-react";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

export async function authorizedFetch(
    url,
    options = {}
) {
    try {
        const token = await getToken();

        const headers = {
            ...options.headers,
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        };

        const response = await fetch(
            `${BASE_URL}${url}`,
            {
                // Update base URL
                ...options,
                headers,
            }
        );

        if (!response.ok) {
            const errorData = await response
                .json()
                .catch(() => null);
            const errorMsg =
                errorData?.error || response.statusText;
            throw new Error(`API error: ${errorMsg}`);
        }

        return await response.json();
    } catch (error) {
        console.error("Fetch error:", error);
        throw error;
    }
}
