import {shallow} from "enzyme";
import AddCategory from "../../components/AddCategory";

describe('Pruebas sobre AddCategory', () => {

    const setCategories = () => {};
    const wrapper = shallow(<AddCategory setCategories={setCategories}/>)

    test('Debe mostrar el componente AddCategory', () => {

        expect(wrapper).toMatchSnapshot();
    });
});