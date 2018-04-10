import { expect } from 'chai';
import { JSDOM } from 'jsdom';
import jsdom from 'mocha-jsdom';

import ToTable from './ToTable';

describe('ToTable', () => {
    jsdom();

    it('ToTable([ ... ])', () => {
        const html = ToTable([
            { firstname: 'Oliver', lastname: 'Twist', age: 14 },
            { firstname: 'Charles', lastname: 'Darwin', age: 78 },
            { firstname: 'Steven', lastname: 'Hawken', age: 50 }
        ]);
    })
});