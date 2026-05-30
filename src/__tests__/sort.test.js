import { sortHeroes } from '../sort';

test('debería ordenar los héroes por salud de forma descendente', () => {
    const input = [
        { name: 'mechnik', health: 10 },
        { name: 'mag', health: 100 },
        { name: 'luchnik', health: 80 },
    ];

    const expected = [
        { name: 'mag', health: 100 },
        { name: 'luchnik', health: 80 },
        { name: 'mechnik', health: 10 },
    ];

    const result = sortHeroes(input);

    // IMPORTANTE: Usamos toEqual para comparar el contenido de los objetos
    expect(result).toEqual(expected);
});