import React, { useEffect, useState } from "react";
import Icon from "../../components/Icon/Icon";
import PsychologistCard from "../../components/PsychologistsCard/PsychologistsCard";
import Filters from "../../components/Filters/Filters";
import s from "./Psychologists.module.css";
import PsychologistCardModal from "../../components/PsychologistCardModal/PsychologistCardModal";
import { useDispatch, useSelector } from "react-redux";
import { fetchPsychologists } from "../../redux/operations";

const Psychologists = () => {
  const psychologists = useSelector((state) => state.psychologists.items);

  const [filteredPsychologists, setFilteredPsychologists] = useState([]);
  const [visibleCount, setVisibleCount] = useState(3);
  const [selectedPsychologist, setSelectedPsychologist] = useState(null);
  const [favorites, setFavorites] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPsychologists());
  }, [dispatch]);

  useEffect(() => {
    console.log("REDUX STATE:", psychologists);
  }, [psychologists]);

  useEffect(() => {
    if (psychologists.length > 0) {
      setFilteredPsychologists(psychologists);
    }
  }, [psychologists]);

  const handleFilter = (filterValue) => {
    let filtered = [...psychologists];

    switch (filterValue) {
      case "a-z":
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "z-a":
        filtered.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "less-10":
        filtered = filtered.filter((p) => p.price_per_hour < 10);
        break;
      case "greater-10":
        filtered = filtered.filter((p) => p.price_per_hour >= 10);
        break;
      case "popular":
        filtered = filtered.filter((p) => p.rating >= 4);
        break;
      case "not-popular":
        filtered = filtered.filter((p) => p.rating < 4);
        break;
      case "all":
      default:
        filtered = [...psychologists];
        break;
    }

    setFilteredPsychologists(filtered);
    setVisibleCount(3);
  };

  const visiblePsychologists = filteredPsychologists.slice(0, visibleCount);
  const hasMore = visibleCount < filteredPsychologists.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
    );
  };

  return (
    <div className={s.container}>
      <Filters onSelect={handleFilter} />

      <ul className={s.list}>
        {visiblePsychologists.map((item) => (
          <PsychologistCard
            key={item.id}
            data={item}
            onReadMore={setSelectedPsychologist}
            toggleFavorite={() => toggleFavorite(item.id)}
            isFavorite={favorites.includes(item.id)}
          />
        ))}
      </ul>

      {visiblePsychologists.length === 0 && (
        <p className={s.placeholder}>
          No psychologists found matching the selected criteria.
        </p>
      )}

      {selectedPsychologist && (
        <PsychologistCardModal
          data={selectedPsychologist}
          onClose={() => setSelectedPsychologist(null)}
          toggleFavorite={toggleFavorite}
        />
      )}

      {hasMore && visiblePsychologists.length > 0 && (
        <button onClick={handleLoadMore} className={s.loadMoreButton}>
          Load more
        </button>
      )}
    </div>
  );
};

export default Psychologists;
