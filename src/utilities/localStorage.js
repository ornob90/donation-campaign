export const getDonationsFromLS = () => {
  const myDonations = localStorage.getItem("myDonations");

  if (myDonations) {
    return JSON.parse(myDonations);
  } else {
    return [];
  }
};

export const addDonationsInLS = (id) => {
  const myDonations = getFavFromLS();

  myDonations.push(id);
  localStorage.setItem("myDonations", JSON.stringify(myDonations));
};

export const deleteDonationsFromLS = (id) => {
  const myDonations = getFavFromLS();
  const newMyDonations = myDonations.filter((phoneId) => phoneId !== id);
  localStorage.setItem("myDonations", JSON.stringify(newMyDonations));
  return newMyDonations;
};
