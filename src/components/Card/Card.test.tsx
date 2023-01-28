import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Card from './Card';

test('renders Character name - Luna', () => {
    render(
        <MemoryRouter>
            <Card id={3} img={"https://images92.fotosik.pl/634/ba88b64387a4d385med.jpg"} characterName={'Luna'} information={'info character'} game={'xxx'} death={true} />
        </MemoryRouter>
    );

    const character = screen.getByText(/LUNA/i);

    expect(character).toBeInTheDocument();
});


it('renders  image Character Luna', () => {
    render(
        <MemoryRouter>
            <Card id={3} img={"https://images92.fotosik.pl/634/ba88b64387a4d385med.jpg"} characterName={'Luna'} information={'info character'} game={'xxx'} death={true} />
        </MemoryRouter>
    );

    const image = screen.getByAltText("Luna");

    expect(image).toHaveAttribute("src", "https://images92.fotosik.pl/634/ba88b64387a4d385med.jpg");
});

it('renders snapshot', () => {
    const tree = render(
        <MemoryRouter>
            <Card id={3} img={"https://images92.fotosik.pl/634/ba88b64387a4d385med.jpg"} characterName={'Luna'} information={'info character'} game={'xxx'} death={true} />
        </MemoryRouter>
    );

    expect(tree.baseElement).toMatchSnapshot();
});

it('renders snapshot when character in dnd', () => {
    const tree = render(
        <MemoryRouter>
            <Card id={3} img={"https://images92.fotosik.pl/634/ba88b64387a4d385med.jpg"} characterName={'Luna'} information={'info character'} game={'dnd'} death={true} />
        </MemoryRouter>
    );

    expect(tree.baseElement).toMatchSnapshot();
});

it('renders snapshot when character in cthulhu', () => {
    const tree = render(
        <MemoryRouter>
            <Card id={3} img={"https://images92.fotosik.pl/634/ba88b64387a4d385med.jpg"} characterName={'Luna'} information={'info character'} game={'cthulhu'} death={true} />
        </MemoryRouter>
    );

    expect(tree.baseElement).toMatchSnapshot();
});

it('renders snapshot when character in  living', () => {
    const tree = render(
        <MemoryRouter>
            <Card id={3} img={"https://images92.fotosik.pl/634/ba88b64387a4d385med.jpg"} characterName={'Luna'} information={'info character'} game={'dnd'} death={false} />
        </MemoryRouter>
    );

    expect(tree.baseElement).toMatchSnapshot();
});

it('renders image when not img character', () => {
    render(
        <MemoryRouter>
            <Card id={3} characterName={'Luna'} information={'info character'} game={'xxx'} death={true} />
        </MemoryRouter>
    );

    const image = screen.getByAltText("Luna");

    expect(image).toHaveAttribute("src", "https://ogrod.ukw.edu.pl/img/no-image-person.png");
});
