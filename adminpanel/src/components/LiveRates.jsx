import React, { useEffect, useState } from "react";

const LiveRates = () => {
  const [rates, setRates] = useState({ gold: null, silver: null });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRates = async () => {
      const myHeaders = new Headers();
      myHeaders.append("x-access-token", "goldapi-1mluasm1wi5cog-io");
      myHeaders.append("Content-Type", "application/json");

      const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };

      try {
        const response = await fetch(
          "https://api.metalpriceapi.com/v1/latest?api_key=3035cb73ac1d05802b748824be430dad&base=INR&currencies=XAU",
          requestOptions
        );
        const responseS = await fetch(
          "https://api.metalpriceapi.com/v1/latest?api_key=3035cb73ac1d05802b748824be430dad&base=INR&currencies=XAG",
          requestOptions
        );
        const result = await response.json();
        const resultS = await responseS.json();

        // Extract gold rate
        const goldRateInOunces = result.rates.XAU;
        const goldRateInGrams = goldRateInOunces / 31.1035 + 700; // Convert to grams

        // Extract silver rate
        const silverRateInOunces = resultS.rates.XAG;
        const silverRateInGrams = silverRateInOunces / 31.1035 + 10; // Convert to grams

        setRates({
          gold: goldRateInGrams.toFixed(2), // Round to 2 decimal places
          silver: silverRateInGrams.toFixed(2), // Round to 2 decimal places
        });
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchRates();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching rates: {error.message}</p>;

  return (
    <div>
      <p className="text-gray-600">Gold: {rates.gold} INR/g</p>
      <p className="text-gray-600">
        Silver: {rates.silver ? `${rates.silver} INR/g` : "N/A"}
      </p>
    </div>
  );
};

export default LiveRates;
