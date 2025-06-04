import { getToken } from "@clerk/clerk-react";

export async function authorizedFetch(
    url,
    options = {}
) {
    try {
        // Get Clerk token
        const token = await getToken();

        // Set Authorization header with Bearer token
        const headers = {
            ...options.headers,
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        };

        // Make the fetch call with the updated headers
        const response = await fetch(url, {
            ...options,
            headers,
        });

        if (!response.ok) {
            // Extract error message if possible
            const errorData = await response
                .json()
                .catch(() => null);
            const errorMsg =
                errorData?.error || response.statusText;
            throw new Error(`API error: ${errorMsg}`);
        }

        // Return parsed JSON data
        return await response.json();
    } catch (error) {
        console.error("Fetch error:", error);
        throw error;
    }
}
