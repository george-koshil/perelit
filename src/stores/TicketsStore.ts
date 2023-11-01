import { action, observable, makeObservable } from "mobx";
import mockTickets from "../services/tickets-service/mockTickets.json";

type Filter = {
  transfers: 0 | 1 | 2 | 3 | null;
  transfersDuration: number | null;
  baggageIncluded: boolean;
  travelTime: number | null;
  price: number | null;
  airlines: string[] | null;
  agencies: string[] | null;
};

class TicketsStore {
  ticketsList = mockTickets;

  filter: Filter = {
    transfers: null,
    transfersDuration: null,
    baggageIncluded: false,
    travelTime: null,
    price: null,
    airlines: null,
    agencies: null,
  };

  constructor() {
    makeObservable(this, {
      filter: observable,
      ticketsList: observable,
      updateFilter: action,
    });
  }

  updateFilter<T extends keyof Filter>(value: Filter[T], filterType: T) {
    if (filterType in this.filter) {
      this.filter[filterType] = value;
    } else {
      console.error(`Invalid filter type: ${filterType}`);
    }
  }
}

export default TicketsStore;
