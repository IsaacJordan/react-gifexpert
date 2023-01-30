import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe('Pruebas en AddCategory', () => { 

    test('debe de cambiar el valor de la caja de texto', () => {

        render( <AddCategory onNewCategory={ () => {} } />)
        //el input es 'textbox'
        const input = screen.getByRole('textbox');

        //Hay que accionar el 'onChange' para que funcione.
        fireEvent.input( input, { target: {value: 'Saitama'}} )

        //screen.debug();

        expect( input.value ).toBe( 'Saitama' );
    });

    test('debe de llamar onNewCategory si el input tiene un valor', () => {

        const inputValue = 'Saitama';
        
        //para evaluar valores esperados en una funcion en el componente
        const onNewCategory =  jest.fn();

        //levantar sujeto de pruebas
        render( <AddCategory onNewCategory = { onNewCategory } />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        //Hay que accionar el 'onChange' para que funcione.
        fireEvent.input( input, { target: {value: inputValue}} );
        fireEvent.submit( form );
        screen.debug();

        //despues del submit el valor vuelve a ser default (vacio)
        expect( input.value ).toBe('');

        expect( onNewCategory ).toHaveBeenCalled();
        expect( onNewCategory ).toHaveBeenCalledTimes(1);
        expect( onNewCategory ).toHaveBeenCalledWith( inputValue );

    });
});