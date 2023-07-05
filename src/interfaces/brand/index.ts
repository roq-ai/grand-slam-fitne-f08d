import { EquipmentInterface } from 'interfaces/equipment';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface BrandInterface {
  id?: string;
  name: string;
  organization_id?: string;
  created_at?: any;
  updated_at?: any;
  equipment?: EquipmentInterface[];
  organization?: OrganizationInterface;
  _count?: {
    equipment?: number;
  };
}

export interface BrandGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  organization_id?: string;
}
