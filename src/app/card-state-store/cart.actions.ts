import {createAction, props} from '@ngrx/store';
import {Post} from "../shared/interfaces";

export const addProduct = createAction('Add Product', props<Post>());
export const removeProduct = createAction('Remove Product', props<Post>());
export const clearCart = createAction('Clear Cart');
