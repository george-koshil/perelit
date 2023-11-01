/* eslint-disable import/no-anonymous-default-export */
import { ApiResponse } from 'apisauce';
import HttpService, { IHttpServiceParams, IRequestConfig } from '../http.service'
import { TicketsFindParams } from './types';

const baseURL = process.env.TICKETS_API_URL!;

class TicketsService extends HttpService {
  constructor(params: IHttpServiceParams) {
    super(params);
  }

  getTickets = (params: TicketsFindParams): Promise<ApiResponse<{}>> => {
    return this.get({
      url: `/flights_find/`,
    });
  };
}

export default new TicketsService({
  baseURL,
});
