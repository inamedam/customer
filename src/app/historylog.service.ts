import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HistorylogService {

  updateHistory: string[] = [];

  logUpdate(update: string) {
    const timestamp = new Date().toLocaleString();
    const updateMessage = `${timestamp}: ${update}`;
    this.updateHistory.push(updateMessage);
    console.log(updateMessage);
  }
}
