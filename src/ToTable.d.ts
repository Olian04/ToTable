export function ToTable(data: object[]): HTMLTableElement;
export function ToTable(columns: string[], data: object[]): HTMLTableElement;
export function ToTable(columnMap: object, data: object[]): HTMLTableElement;

export function ToTableRaw(data: object[]): HTMLTableElement;
export function ToTableRaw(columns: string[], data: object[]): HTMLTableElement;
export function ToTableRaw(columnMap: object, data: object[]): HTMLTableElement;

export default ToTable;