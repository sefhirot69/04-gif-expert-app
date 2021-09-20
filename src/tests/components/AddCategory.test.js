import {shallow} from "enzyme";
import AddCategory from "../../components/AddCategory";

describe('Pruebas sobre AddCategory', () => {

    const setCategories = jest.fn();
    let wrapper;

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories}/>);
    });

    test('Debe mostrar el componente AddCategory', () => {

        expect(wrapper).toMatchSnapshot();
    });

    test('Debe cambiar el input de categoria', () => {

        const input = wrapper.find('input');
        const value = 'Hola mundo';

        input.simulate('change', {target: {value}});
    });

    test('No debe de postear la informacion con submit', () => {

        wrapper.find('form').simulate('submit',{ preventDefault: () => {}});

        expect(setCategories).not.toHaveBeenCalled();
    });

    test('debe de llamar el setCategories y limpiar la caja de texto', () => {

        const input = wrapper.find('input');
        const value = 'Goku';

        input.simulate('change', {target: {value}});
        wrapper.find('form').simulate('submit',{ preventDefault: () => {}});

        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledTimes(1);
        //Estoy esperando que se haya llamado con cualquier tipo de función
        expect(setCategories).toHaveBeenCalledWith( expect.any(Function));
        expect(input.prop('value')).toBe('');


    });


});