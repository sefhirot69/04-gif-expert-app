import {shallow} from "enzyme";
import AddCategory from "../../components/AddCategory";

describe('Pruebas sobre AddCategory', () => {

    const setCategories = () => {
    };
    const wrapper = shallow(<AddCategory setCategories={setCategories}/>)

    test('Debe mostrar el componente AddCategory', () => {

        expect(wrapper).toMatchSnapshot();
    });

    test('Debe cambiar el input de categoria', () => {

        const input = wrapper.find('input');
        const value = 'Hola mundo';

        input.simulate('change', {target: {value}});
    });
});