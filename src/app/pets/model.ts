export type EntityStatus = 'available' | 'pending' | 'sold';

export interface Pet {
  id: number;
  name: string;
  photoUrls: string[];
  tags: Tag[];
  status: EntityStatus;
}

export interface Tag {
  id: number;
  name: string;
}
