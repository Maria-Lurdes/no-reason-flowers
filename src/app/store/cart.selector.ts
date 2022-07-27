import {createFeatureSelector, createSelector} from '@ngrx/store';
import {Post} from "../shared/interfaces";

export interface ProductGroup {
  product: Post;
  count: number;
}

export const selectCountProducts = createSelector(
  createFeatureSelector('cartEntries'),
  (state: Post[]) => {
    return state.length;
  }
);


export const selectTotalPrice = createSelector(
  createFeatureSelector('cartEntries'),
  (state: Post[]) => {
    let totalPrice = 0;
    state.forEach(p => totalPrice += p.price);
    return totalPrice;
  }
)

export const selectGroupedCartEntries = createSelector(
  createFeatureSelector('cartEntries'),
  (state: Post[]) => {
    let map: Map<number, ProductGroup> = new Map;

    state.forEach(p => {
      if (map.get(Number(p.id))) {
        (map.get(Number(p.id)) as ProductGroup).count++;
      } else {
        map.set(Number(p.id), {product: p, count: 1});
      }
    })

    const sortedMap = new Map([...map.entries()].sort());
    return Array.from(sortedMap.values());
  }
)
