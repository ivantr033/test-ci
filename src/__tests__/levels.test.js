import { getLevel } from '../levels';
import fetchData from '../http';

// Creamos el mock de la dependencia
jest.mock('../http');

test('debería devolver el nivel del usuario si la respuesta es ok', () => {
    fetchData.mockReturnValue({ status: 'ok', level: 5 });

    const result = getLevel(1);
    expect(result).toBe('Ваш текущий уровень: 5');
});

test('debería devolver error si la respuesta no es ok', () => {
    fetchData.mockReturnValue({ status: 'error' });

    const result = getLevel(1);
    expect(result).toBe('Информация об уровне временно недоступна');
});