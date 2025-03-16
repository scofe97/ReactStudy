import {add} from "../util/testFunction1";

test('add adds numbers correctly', () => {
    expect(add(1, 2)).toBe(3);
})