import {shallow} from "enzyme";
import GifGrid from "../../components/GifGrid";
import useFetchGifs from "../../hooks/useFetchGifs";

jest.mock('../../hooks/useFetchGifs');

describe('Pruebas sobre el componente GifGrid', () => {

    const category = 'Goku';

    test('debe mostrar el componente correctamente', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true,
        });
        const wrapper = shallow(<GifGrid category={category}/>);
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de mostrar items cuando se cargan imágenes con useFetchGifs', () => {

        const gifs = [
            {
                id: 'ABC',
                img: 'https://localhost/cualquier/cosa.jpg',
                title: 'Cualquier cosa',
            }, {
                id: 'ABCD',
                img: 'https://localhost/cualquier/cosa.jpg',
                title: 'Cualquier cosa',
            },
        ];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false,
        });
        const wrapper = shallow(<GifGrid category={category}/>);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length); //buscamos que existe el componente
    })
});