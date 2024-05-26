export class SettingsStorage {
  private static readonly _basicWorkSessionTime = 45;
  private static readonly _basicRestSessionTime = 15;
  private static readonly _basicSessionsPerDay = 10;
  private static readonly _basicCompletedSessions = 0;
  private static readonly _sumRestAndWorkTime = 60;

  public static getWorkSessionTime(): number {
    const workSessionTime: number = Number(this._getData('workSessionTime'));

    if (Number.isNaN(workSessionTime) || workSessionTime === 0) {
      this._setData('workSessionTime', this._basicWorkSessionTime);
      return this._basicWorkSessionTime;
    }

    return workSessionTime;
  }

  public static getRestSessionTime(): number {
    const restSessionTime: number = Number(this._getData('restSessionTime'));

    if (Number.isNaN(restSessionTime) || restSessionTime === 0) {
      this._setData('restSessionTime', this._basicRestSessionTime);
      return this._basicRestSessionTime;
    }

    return restSessionTime;
  }

  public static getSessionPerDay(): number {
    const sessionPerDay: number = Number(this._getData('sessionPerDay'));

    if (Number.isNaN(sessionPerDay) || sessionPerDay === 0) {
      this._setData('sessionPerDay', this._basicSessionsPerDay);
      return this._basicSessionsPerDay;
    }

    return sessionPerDay;
  }

  public static getCompletedSessions(): number {
    const completedSessions: number = Number(this._getData('completedSessions'));

    if (!completedSessions) {
      this._setData('completedSessions', this._basicCompletedSessions);
      return this._basicCompletedSessions;
    }

    return completedSessions;
  }

  public static setWorkSessionTime(value: number) {
    this._setData('workSessionTime', value);
    this._setData('restSessionTime', this._sumRestAndWorkTime - value);
  }

  public static setRestSessionTime(value: number) {
    this._setData('restSessionTime', value);
    this._setData('workSessionTime', this._sumRestAndWorkTime - value);
  }

  public static setSessionPerDay(value: number) {
    this._setData('sessionPerDay', value);
  }

  public static setCompletedSessions(value: number) {
    this._setData('completedSessions', value);
  }

  private static _setData(key: string, value: number | boolean) {
    const stringValue = this._stringifyData(value);
    window.localStorage.setItem(key, stringValue);
  }

  private static _getData(key: string): string {
    return window.localStorage.getItem(key);
  }

  private static _stringifyData(value: number | boolean): string {
    return `${value}`;
  }
}
