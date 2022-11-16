export interface InventoryModel {
  id: null;
  sku: string;
  code: string;
  type: null;
  model: Model;
  status: null;
  stock: null;
  account: Account;
  service: Service;
}

export interface Model {
  equipmentModelCode: string;
  equipmentTypeCode: string;
}

export interface Account {
  customerId: null;
  dealerCode: null;
  dealerFullName: null;
}

export interface Service {
  tariffPlanCode: null;
  tariffPlanName: null;
  phone: null;
}
