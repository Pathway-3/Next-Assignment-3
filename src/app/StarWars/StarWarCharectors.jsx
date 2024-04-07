"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";

export default function StarWarCharectors() {
  const [starWarCharector1, setStarWarCharectors1] = useState([]);
  const [starWarCharector2, setStarWarCharectors2] = useState([]);
  const [starWarCharector3, setStarWarCharectors3] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    getData(1, setStarWarCharectors1);
    getData(2, setStarWarCharectors2);
    getData(3, setStarWarCharectors3);
    setLoading(false);
  }

  // Fetch data from API
  useEffect(() => {
    setLoading(true);
    // Fetch data for character 1 - Luke Skywalker
    async function getData(num, setData) {
      try {
        const res = await axios.get(`https://swapi.dev/api/people/${num}/`);
        setData(res.data.name);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    getData(1, setStarWarCharectors1);
    getData(2, setStarWarCharectors2);
    getData(3, setStarWarCharectors3);
  }, []);
  




  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (loading) {
    return <div>Loading...</div>;
  } else {
    return <div>{starWarCharector1}</div>;
  }
}
