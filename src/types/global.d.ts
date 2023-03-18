export {};

declare global {
  interface Employee {
    album: string;
    deleted: string;
    img: string;
    legion: string;
    links: { images: Array<{ url: string }> };

    name: string;
    singer: string;
    type: string;
    updatedAt: string;
    url: string;
    views: number;
  }
}
