export interface ActionSheetOption<T = any> {
  value: T;
  label: string;
  description?: string;
  [key: string]: any;
}

export interface ActionSheetResult<T = any> {
  value: T;
}

export interface ActionSheetData<T = any> {
  title?: string;
  options: ActionSheetOption<T>[];
}
