const mapping: Record<string, string> = {
  brands: 'brand',
  customers: 'customer',
  equipment: 'equipment',
  organizations: 'organization',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
