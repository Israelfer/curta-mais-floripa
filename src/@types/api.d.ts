declare interface DataProps {
  id: number;
  name: string;
  city: string;
  neighbourhood: string;
  description: string;
  restaurantsUrl: string;
  lodgingUrl: string;
  images: DataImageProps<>[];
}
declare interface DataImageProps {
  id: number;
  url: string;
  isMainImage: boolean;
}
