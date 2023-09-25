export const getDonationsFromLS = () => {
  const myDonations = localStorage.getItem("myDonations");

  if (myDonations) {
    return JSON.parse(myDonations);
  } else {
    return [];
  }
};

export const addDonationsInLS = (id) => {
  const myDonations = getDonationsFromLS();

  myDonations.push(id);
  localStorage.setItem("myDonations", JSON.stringify(myDonations));
};

export const deleteDonationsFromLS = (id) => {
  const myDonations = getDonationsFromLS();
  const newMyDonations = myDonations.filter((phoneId) => phoneId !== id);
  localStorage.setItem("myDonations", JSON.stringify(newMyDonations));
  return newMyDonations;
};
