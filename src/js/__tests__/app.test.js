import Team from '../app';
import Character from '../Character';

test('Верный ввод', () => {
  const team = new Team();
  const availableUnit = new Character('Ron', 'Bowman');
  team.add(availableUnit);
  const received = team.toArray();
  const expected = [{
    name: 'Ron',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 100,
    defence: 40,
  }];
  expect(received).toEqual(expected);
});

test('Ошибка ввод', () => {
  expect(() => {
    const received = new Team();
    const availableUnit = new Character('Ron', 'Bowman');
    received.add(availableUnit);
    received.add(availableUnit);
  }).toThrow();
});

test('Добавить все и вывод массива', () => {
  const team = new Team();
  const availableUnit1 = {
    name: 'Ron',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 100,
    defence: 40,
  };
  const availableUnit2 = {
    name: 'John',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 100,
    defence: 40,
  };
  team.addAll(availableUnit1, availableUnit2);
  const received = team.toArray();
  const expected = [
    {
      name: 'Ron',
      type: 'Bowman',
      health: 100,
      level: 1,
      attack: 100,
      defence: 40,
    },
    {
      name: 'John',
      type: 'Bowman',
      health: 100,
      level: 1,
      attack: 100,
      defence: 40,
    },
  ];
  expect(received).toEqual(expected);
});
