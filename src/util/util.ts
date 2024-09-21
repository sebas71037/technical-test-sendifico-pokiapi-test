export class UtilService {
  public static getLastSegment(url): string {
    const regex = /\/([^\/]+)\/?$/;
    const match = url.match(regex);
    return match ? match[1] : null;
  }
}
