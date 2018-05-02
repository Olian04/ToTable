//@ts-check

import { expect } from 'chai';
import jsdom from 'mocha-jsdom';

import ToTable, { ToTableRaw } from './ToTable';

describe('Happy paths', () => {
    jsdom(); // Sets up document, window & other globals in order to simulates a browser

    function base(tableNode) {
        document.body.innerHTML = '';
        document.body.appendChild(tableNode);

        expect(
            document.body.getElementsByTagName('table').length,
            'couldn\'t find exactly one table node'
        ).to.equal(1);
        const table = document.body.getElementsByTagName('table')[0];

        const thead = table.children[0];
        expect(
            thead.nodeName, 
            'couldn\'t find thead node'
        ).to.equal('THEAD');

        const tbody = table.children[1];
        expect(
            tbody.nodeName, 
            'couldn\'t find tbody node'
        ).to.equal('TBODY');
    }

    it('ToTableRaw( object[] )', () => {
        const table = ToTableRaw([
            { firstname: 'Oliver', lastname: 'Twist', age: 14 },
            { firstname: 'Charles', lastname: 'Darwin', age: 78 },
            { firstname: 'Steven', lastname: 'Hawken', age: 50 }
        ]);
        base(table);
        const columns = document.querySelectorAll('th');
        expect(columns[0].innerHTML).equal('Firstname');
        expect(columns[1].innerHTML).equal('Lastname');
        expect(columns[2].innerHTML).equal('Age');

        const rows = document.querySelectorAll('td');
        expect(rows[0].innerHTML).equal('Oliver');
        expect(rows[1].innerHTML).equal('Twist');
        expect(rows[2].innerHTML).equal('14');
        expect(rows[3].innerHTML).equal('Charles');
        expect(rows[4].innerHTML).equal('Darwin');
        expect(rows[5].innerHTML).equal('78');
        expect(rows[6].innerHTML).equal('Steven');
        expect(rows[7].innerHTML).equal('Hawken');
        expect(rows[8].innerHTML).equal('50');
    });

    it('ToTableRaw( string[], object[] )', () => {
        const table = ToTableRaw(['firstname', 'age'], [
            { firstname: 'Oliver', lastname: 'Twist', age: 14 },
            { firstname: 'Charles', lastname: 'Darwin', age: 78 },
            { firstname: 'Steven', lastname: 'Hawken', age: 50 }
        ]);
        base(table);
        const columns = document.querySelectorAll('th');
        expect(columns[0].innerHTML).equal('Firstname');
        expect(columns[1].innerHTML).equal('Age');

        const rows = document.querySelectorAll('td');
        expect(rows[0].innerHTML).equal('Oliver');
        expect(rows[1].innerHTML).equal('14');
        expect(rows[2].innerHTML).equal('Charles');
        expect(rows[3].innerHTML).equal('78');
        expect(rows[4].innerHTML).equal('Steven');
        expect(rows[5].innerHTML).equal('50');
    });

    it('ToTableRaw( object, object[] )', () => {
        const table =   ToTableRaw({
            firstname: 'name',
            age: 'age'
        }, [
            { firstname: 'Oliver', lastname: 'Twist', age: 14 },
            { firstname: 'Charles', lastname: 'Darwin', age: 78 },
            { firstname: 'Steven', lastname: 'Hawken', age: 50 }
        ])
        base(table);
        const columns = document.querySelectorAll('th');
        expect(columns[0].innerHTML).equal('name');
        expect(columns[1].innerHTML).equal('age');

        const rows = document.querySelectorAll('td');
        expect(rows[0].innerHTML).equal('Oliver');
        expect(rows[1].innerHTML).equal('14');
        expect(rows[2].innerHTML).equal('Charles');
        expect(rows[3].innerHTML).equal('78');
        expect(rows[4].innerHTML).equal('Steven');
        expect(rows[5].innerHTML).equal('50');
    });
});