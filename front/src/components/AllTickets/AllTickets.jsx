import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Ticket from "../Ticket/Ticket";
import styles from "./AllTickets.module.css";
import { getUserTickets } from "../../redux/actions/actions";
import Filters from "../Filters/Filters";

const AllTickets = () => {
	const userName = useSelector((state) => state.userName);
	const userId = useSelector((state) => state.userId);
	const userTickets = useSelector((state) => state.userTickets);
	const userTicketsCopy = useSelector((state) => state.userTicketsCopy);

	const totalAmount = userTicketsCopy.length;
	const filteredTickets = userTickets.length;

	const dispatch = useDispatch();

	useEffect(() => {
		if (userTickets.length === 0) { // si el estado global userTickets se modifica. y solo si se modifica quiero que se despache la accion
			dispatch(getUserTickets(userId));
		}
	}, [userTickets]);


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
					Filtered tickets: {filteredTickets}
				</span>
			</div>
			<button onClick={handleRefresh} className={styles.button}>
				Refresh status
			</button>

			<section className={styles.container}>
				{userTickets?.map((ticket) => (
					<Ticket key={ticket.id} ticket={ticket} />
				))}
			</section>
		</div>
	);
};

export default AllTickets;
