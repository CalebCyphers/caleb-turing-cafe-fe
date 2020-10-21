export const getReservations = () => {
    return fetch('http://localhost:3001/api/v1/reservations')
      .then(response => response.json())
      .catch(err => alert("OH NOOOOOO, SOMETHING WENT WRONG WHILE TRYING TO GET RESERVATIONS!!"))
  }

  