export interface InventoryRequest {
    type: number;
    location: string;
    pageNum: number;
    pageSize: number;
    status: string;
    stock: number;
    code: string;
    include: string[];
}