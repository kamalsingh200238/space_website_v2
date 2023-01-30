export interface Data {
  destinations: {
    name: string;
    images: {
      png: string;
      webp: string;
    };
    description: string;
    distance: string;
    travel: string;
  }[];
  crew: {
    name: string;
    images: {
      png: string;
      webp: string;
    };
    role: string;
    bio: string;
  }[];
  technology: {
    name: string;
    images: {
      portrait: string;
      landscape: string;
    };
    description: string;
  }[];
}
