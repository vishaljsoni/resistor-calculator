/**
 * Custom type definitions to fix TypeScript errors in third-party libraries
 */

// Fix for @angular/flex-layout errors
declare module '@angular/flex-layout/extended/typings/style/style' {
  export const DEFAULT_STYLES_KEY: any;
  export interface StyleDefinition {
    [key: string]: any;
  }
  export function buildMapFromSet(set: any, valueTransform?: any): any;
  export function buildMapFromList(list: any, keyTransform?: any): any;
  export interface StyleUtils {
    [key: string]: any;
  }
}

// Fix for rxjs/internal/types errors
declare module 'rxjs/internal/types' {
  export interface UnaryFunction<T, R> {
    (source: T): R;
  }
  export interface OperatorFunction<T, R> extends UnaryFunction<any, any> {
  }
}