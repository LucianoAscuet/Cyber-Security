import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Ticket from "../Ticket/Ticket";
import styles from "./AllTickets.module.css";
import { applyCombinedFilters, getUserTickets } from "../../redux/actions/actions"; // Importa la acción applyCombinedFilters
import Filters from "../Filters/Filters";

const AllTickets = () => {
  const userName = useSelector((state) => state.userName);
  const userId = useSelector((state) => state.userId);

  const userTicketsCopy = useSelector((state) => state.userTicketsCopy);
  const filteredTickets = useSelector((state) => state.filteredTickets); // Nuevo estado para los tickets filtrados

  const totalAmount = userTicketsCopy.length;
  const totalFilteredTickets = filteredTickets.length; // Usamos el estado de los tickets filtrados
	
  const dispatch = useDispatch();

  useEffect(() => {
    if (userTicketsCopy.length === 0) {
      dispatch(getUserTickets(userId));
    } else {
      // Cuando userTicketsCopy se actualiza, también actualizamos filteredTickets
      dispatch(applyCombinedFilters("All", "All", "A")); // Aplica los filtros iniciales
    }
  }, [userTicketsCopy, dispatch]);

  const handleRefresh = () => {
    dispatch(getUserTickets(userId));
  };

  return (
    <div>
      <h5 className={styles.title}>Hi {userName}</h5>

      <Filters />
      <div className={styles.spanContainer}>
        <span className={styles.spanInfo}>
          All your tickets: {totalAmount}{" "}
        </span>
        <span className={styles.spanInfo}>||</span>
        <span className={styles.spanInfo}>
          Filtered tickets: {totalFilteredTickets} {/* Usamos el estado de los tickets filtrados */}
        </span>
      </div>
      <button onClick={handleRefresh} className={styles.button}>
        Refresh status
      </button>

      <section className={styles.container}>
      {filteredTickets?.length > 0 ? (
          filteredTickets.map((ticket) => (
            <Ticket key={ticket.id} ticket={ticket} />
          ))
        ) : (
          <h2 className={styles.title}>No se encontraron tickets</h2>
        )}
      </section>
    </div>
  );
};

export default AllTickets;
