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

export const DECREMENTAR_ITEM = (Id) => ({
    type: 'DECREMENTAR_ITEM',
    payload: Id
});

export const INCREMENTAR_ITEM = (Id) => ({
    type: 'INCREMENTAR_ITEM',
    payload: Id
});

export const GENERAR_ORDEN = (orden) => ({
    type: 'GENERAR_ORDEN',
    payload: orden
});