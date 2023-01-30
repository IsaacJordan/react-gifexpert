import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('Probando el componente <GifItem />', () => { 

    const title = 'Saitama';
    const url = 'https://one-punch.com/'

    test('evaluacion del snapshot', () => {
        
        const {container} = render(<GifItem title={title} url={url} />);
        expect ( container ).toMatchSnapshot();

    });

    test('debe de mostrar la imagen con el url indicado', () => {

        render( <GifItem title={title} url={url} />);
        //screen.debug();
        //expect( screen.getByRole('img').src).toBe( url );
        const {src, alt} = screen.getByRole('img');
        expect( src ).toBe( url );
        expect( alt ).toBe( alt );

    });

    test('debe de mostrar el titulo en el componente', () => {

        render( <GifItem title={ title } url={ url }/>)
        expect( screen.getByText( title )).toBeTruthy();

    });


});