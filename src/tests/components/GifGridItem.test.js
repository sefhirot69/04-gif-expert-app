import {shallow} from "enzyme";
import GifGridItem from "../../components/GifGridItem";

describe('Pruebas sobre el componente GidGridItem', () => {

    const args = {
        id : '1',
        img : 'https://google.es',
        title : 'titulo'
    };

    const wrapper = shallow(<GifGridItem {...args}/>);

    test('debe mostrar el componente correctamente', () => {
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').text().trim()).toBe(args.title);
    });

    test('debe de tener un parrafo con el titulo', () => {

        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(args.title);
    });

    test('debe de tener la imagen igual al url y alt de los props', () => {

        const img = wrapper.find('img');
        expect(img.prop('src')).toBe(args.img);
        expect(img.prop('alt')).toBe(args.title);
    });

    test('debe de tener animate__fadeIn', () => {

        const div = wrapper.find('div');
        expect(div.hasClass('animate__fadeIn')).toBe(true);

    });
});