import { render, screen } from "@testing-library/react"
import { GifItem } from "../../components";


describe('Prueba de GiftItem', () => { 

  const title = 'Saitama';
  const url = 'http://one-puns.lskd.com/'
    test('debe hacer match con el snapshot', () => { 
      const {container} = render(<GifItem title={title} url={url}/>)
      expect(container).toMatchSnapshot();

     })

     test('debe mostrar la imagen con el url y el alt indicado', () => { 
      render(<GifItem title={title} url={url}/>);
      //expect(screen.getByRole('img').src).toBe(url);

      const { src , alt} = screen.getByRole('img');
      expect(src).toBe(url);
      expect(alt).toBe(alt);
      
     })

     test('debe mostrar el titulo en el componente', () => { 
      render(<GifItem title={title} url={url}/>);
      expect(screen.getByText(title)).toBeTruthy;

      
     })
 })