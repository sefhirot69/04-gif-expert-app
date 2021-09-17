import {shallow} from "enzyme";
import GifGridItem from "../../components/GifGridItem";

describe('Pruebas sobre el componente GidGridItem', () => {

    test('debe mostrar el componente correctamente', () => {

        const args = {
            id : 1,
            img : 'https://google.es',
            title : 'titulo'
        };

        const wrapper = shallow(<GifGridItem {...args}/>);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').text().trim()).toBe(args.title);
    });
});