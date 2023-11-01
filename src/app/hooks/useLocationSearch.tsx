import { useState, useEffect } from "react";

type Airport = {
    city: string
    country: string
    airport: string
    iata: string
    icao: string
}

const useLocationSearch = () => {
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<Airport[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [airports, setAirports] = useState([]);

  useEffect(function fetchAirportsData() {
    const fetchAirports = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(`/api/airports`);
        const data = await response.json();

        const dataArray = data.trim().split("\n");

        const airportData = dataArray.map((line: string) => {
          const parts = line.split(",");
          return {
            city: parts[2].replace(/"/g, ""),
            country: parts[3].replace(/"/g, ""),
            airport: parts[1].replace(/"/g, ""),
            iata: parts[4].replace(/"/g, ""),
            icao: parts[5].replace(/"/g, ""),
          };
        });

        setAirports(airportData);
      } catch (error) {
        setError("Произошла ошибка при выполнении запроса.");
      } finally {
        setLoading(false);
      }
    };

    fetchAirports();
  }, []);

  useEffect(() => {
    if (airports.length > 0) {
      const filteredData = airports.filter(
        (airport: { city: string; iata: string }) => {
          return (
            airport.city.toLowerCase().startsWith(query.toLowerCase()) ||
            airport.iata.toLowerCase().startsWith(query.toLowerCase())
          );
        }
      );

      setResults(query.length > 0 ? filteredData: []);
    }
  }, [query, airports]);

  return { query, setQuery, results, loading, error };
};

export default useLocationSearch;
