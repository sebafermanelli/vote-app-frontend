import { Inject, Injectable, InjectionToken } from '@angular/core';

export const BROWSER_STORAGE = new InjectionToken<Storage>('Browser Storage', {
  providedIn: 'root',
  factory: () => localStorage,
});

@Injectable({
  providedIn: 'root',
})
export class BrowserStorageService {
  constructor(@Inject(BROWSER_STORAGE) public storage: Storage) {}

  getUserId(): string {
    return this.storage.getItem('userId') || '';
  }

  getToken(): string {
    return this.storage.getItem('token') || '';
  }
  getAdminId(): string {
    return this.storage.getItem('adminId') || '';
  }
  getElectionId(): string {
    return this.storage.getItem('electionId') || '';
  }

  getCode(): string {
    return this.storage.getItem('code') || '';
  }

  setUser(token: string, userId: string) {
    this.storage.setItem(token, userId);
  }
  setCode(code: string): void {
    this.storage.setItem('code', code);
  }
  setAdmin(token: string, adminId: string) {
    this.storage.setItem(token, adminId);
  }

  setElectionId(electionId: string): void {
    this.storage.setItem('electionId', electionId);
  }

  remove(key: string) {
    this.storage.removeItem(key);
  }

  clear() {
    this.storage.clear();
  }
}
