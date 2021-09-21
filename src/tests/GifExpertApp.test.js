import {shallow} from "enzyme";
import GifExpertApp from "../GifExpertApp";

describe('Prueba de GifExpertApp', () => {

    const wrapper = shallow(<GifExpertApp/>)

    test('debe mostrar el componente correctamente', () => {

        expect(wrapper).toMatchSnapshot();
    });

    test('debe mostrar el componente correctamente con Goku como categoria', () => {

        const wrapper = shallow(<GifExpertApp defaultCategories={['Goku']}/>)
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(1);
        expect(wrapper.find('AddCategory').length).toBe(1);
    });
});