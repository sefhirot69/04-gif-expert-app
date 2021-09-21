import {renderHook} from "@testing-library/react-hooks";
import useFetchGifs from "../../hooks/useFetchGifs";

describe('Pruebas en el hook useFetchGifs', () => {

    test('debe de retornar el estado inicial', async () => {
        const {result, waitForNextUpdate} = renderHook(() => useFetchGifs('One Punch'));
        const {data, loading} = result.current;

        await waitForNextUpdate();

        expect( data ).toEqual([]);
        expect(loading).toBe(true);
    });

    test('debe de retornar un arreglo de imagnes y el loading en false', async () => {

        const {result, waitForNextUpdate} = renderHook(() => useFetchGifs('One Punch'));
        await waitForNextUpdate();

        const {data, loading} = result.current;

        expect( data.length ).toEqual(10);
        expect(loading).toBe(false);

    });
});