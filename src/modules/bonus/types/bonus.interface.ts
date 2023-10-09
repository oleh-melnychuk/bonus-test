export abstract class IBonusService {
  abstract getAvailableBonusesPerUser(userId: number): Promise<number[]>;
}
