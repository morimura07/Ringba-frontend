const DEFAULT_HEADERS = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

/**
 * Lightweight API client for future server and client integrations.
 */
export async function apiClient(path, options = {}) {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || "";
  const response = await fetch(`${baseUrl}${path}`, {
    ...options,
    headers: {
      ...DEFAULT_HEADERS,
      ...options.headers,
    },
  });

  if (!response.ok) {
    throw new Error(`API request failed with status ${response.status}`);
  }

  if (response.status === 204) {
    return null;
  }

  return response.json();
}
