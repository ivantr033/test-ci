import { getHealthStatus } from '../health';

test.each([
    [{ name: 'Mago', health: 90 }, 'healthy'],
    [{ name: 'Guerrero', health: 40 }, 'wounded'],
    [{ name: 'Arquero', health: 10 }, 'critical'],
])('debería devolver el estado correcto para %p', (character, expected) => {
    const result = getHealthStatus(character);
    expect(result).toBe(expected);
});