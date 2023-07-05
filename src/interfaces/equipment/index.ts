import { BrandInterface } from 'interfaces/brand';
import { GetQueryInterface } from 'interfaces';

export interface EquipmentInterface {
  id?: string;
  name: string;
  brand_id?: string;
  created_at?: any;
  updated_at?: any;

  brand?: BrandInterface;
  _count?: {};
}

export interface EquipmentGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  brand_id?: string;
}
