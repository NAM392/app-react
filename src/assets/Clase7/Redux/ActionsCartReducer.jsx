export const AGREGAR_PRODUCTO = (Id) => ({
    type: 'AGREGAR_PRODUCTO',
    payload: Id
});

export const ELIMINAR_PRODUCTO = (Id) => ({
    type: 'ELIMINAR_PRODUCTO',
    payload: Id
});

export const VACIAR_CARRITO = {
    type: 'VACIAR_CARRITO'
};