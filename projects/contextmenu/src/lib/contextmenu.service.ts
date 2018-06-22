import { Injectable, EventEmitter } from '@angular/core';

export interface ContextmenuEvent {
  mousex: number,
  mousey: number,
  data: any
}

export type ContextmenuCallback = (data: ContextmenuEvent) => void;

@Injectable({
  providedIn: 'root'
})
export class ContextmenuService {

  private event: EventEmitter<ContextmenuEvent> = new EventEmitter();

  constructor() { }

  emitContextmenu(data: ContextmenuEvent) {
    this.event.emit(data);
  }

  onContextmenu(callback: ContextmenuCallback) {
    this.event.subscribe(callback);
  }

}
