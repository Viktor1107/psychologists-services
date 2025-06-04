import React from "react";
import { useEffect, useState } from "react";
import Icon from "../../components/Icon/Icon";

const Psychologists = () => {
  const [psychologists, setPsychologists] = useState([]);
  useEffect(() => {
    fetch("/psychologists.json")
      .then((res) => res.json())
      .then((data) => setPsychologists(data))
      .catch((error) => console.error("Error loading data:", error));
  }, []);

  return (
    <div>
      {/* <h1>Our Psychologists</h1> */}
      <ul>
        {psychologists.map((item) => (
          <li key={item.id}>
            <img src={item.photo} alt={item.name} width={250} />
            <div>
              <h2>{item.name}</h2>
              <p>{item.specialty}</p>
            </div>
            <div>
              <p>Price / 1 hour: {item.price_per_hour}$</p>
              <p>
                <Icon name="icon-star" width={16} height={15} fill=" #ffc531" />
                Rating: {item.rating}
              </p>
            </div>

            <p>{item.experience}</p>
            <p>{item.license}</p>
            <p>{item.specialization}</p>
            <p>{item.initial_consultation}</p>
            <p>{item.about}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Psychologists;
