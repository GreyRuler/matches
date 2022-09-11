import sortHeroByHealth from "../sortHero";

test('should sort the array with heroes by health', () => {
    const heroes = [
        {name: 'мечник', health: 10},
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
    ];

    const expected = [
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
        {name: 'мечник', health: 10},
    ];

    const result = sortHeroByHealth(heroes)

    expect(expected).toEqual(result)
})
