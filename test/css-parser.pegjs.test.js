import cssParser from '../src/css-parser.pegjs';
import {assert} from 'chai';

describe('cssParser', function() {
  describe('Return Structure', function () {
    [
      { input: ' #aa.bb.bb', expect: ' #aa.bb.bb' },
      { input: '> #aa.bb > .bb, .bb .bb#aa', expect: '>#aa.bb>.bb, .bb .bb#aa' },
      { input: '#aa.bb .bb,>.bb .bb#aa, .bb>.bb#aa', expect: ' #aa.bb .bb,>.bb .bb#aa, .bb>.bb#aa' },
      { input: '#aa.bb:method .bb', expect: ' #aa.bb:method .bb' },
      { input: '#aa.bb .bb:method(123)', expect: ' #aa.bb .bb:method(123)' },
      { input: '#aa.bb:method .bb:method( 123 , 456 )', expect: ' #aa.bb:method .bb:method(123,456)' }
    ].forEach(function (testCase) {
      it(`should return ${JSON.stringify(testCase.expect)} when the value is ${JSON.stringify(testCase.input)}`, function () {
        var val = cssParser.parse(testCase.input);
        val = val.join();
        assert.equal(val, testCase.expect);
      });
    });
  });
  describe('Class Selector', function () {
    describe('item link', function () {
      [
        { input: ' #aa.bb.bb', expect: ['#aa.bb.bb'] },
        { input: '> #aa.bb > .bb, .bb .bb#aa', expect: ['.bb', '.bb#aa'] },
        { input: '#aa.bb .bb,>.bb .bb#aa, .bb>.bb#aa', expect: ['.bb', '.bb#aa', '.bb#aa'] },
        { input: '#aa.bb .bb >.bb .bb#aa .bb>.bb#aa', expect: ['.bb#aa'] }
      ].forEach(function (testCase) {
        it(`should return ${JSON.stringify(testCase.expect)} when the value is ${JSON.stringify(testCase.input)}`, function () {
          cssParser.parse(testCase.input).forEach(function (selector, index) {
            var result = selector[0];
            for (var tmp = result; tmp = tmp.next ; result = tmp);
            assert.equal(result, testCase.expect[index]);
          });
        });
      });
    });
  });
  describe('Rule Prop', function () {
    describe('Token String1(double quote)', function () {
      [
        {input: '"123"', expect: '123'},
        {input: '"\\"123\\""', expect: '"123"'},
        {input: '"123\\n456"', expect: '123\n456'}
      ].forEach(function (testCase) {
        it(`should ident is ${JSON.stringify(testCase.expect)} when the value is ${JSON.stringify(testCase.input)}`, function () {
          var ident = cssParser.parse(testCase.input)[0][1][0].ident;
          assert.equal(ident, testCase.expect);
        });
      });
    });
    describe('Token String2(single quote)', function () {
      [
        {input:"'123'", expect: "123"},
        {input:"'\\'123\\''", expect: "'123'"},
        {input:"'123\\n456'", expect: "123\n456"}
      ].forEach(function (testCase) {
        it(`should ident is ${JSON.stringify(testCase.expect)} when the value is ${JSON.stringify(testCase.input)}`, function () {
          var ident = cssParser.parse(testCase.input)[0][1][0].ident;
          assert.equal(ident, testCase.expect);
        });
      });
    });
    describe('Token IDENT', function () {
      [
        {input: 'abc', expect: 'abc'},
        {input: '$123', expect: '$123'},
        {input: '_sad', expect: '_sad'}
      ].forEach(function (testCase) {
        it(`should ident is ${JSON.stringify(testCase.expect)} when the value is ${JSON.stringify(testCase.input)}`, function () {
          var ident = cssParser.parse(testCase.input)[0][1][0].ident;
          assert.equal(ident, testCase.expect);
        });
      });
    });
    // describe('Token Regex', function () {
    //   [
    //     {input:"/abc/g", expect:/abc/g},
    //     {input:"/abc/gm", expect:/abc/gm},
    //     {input:"/\\n\\/\\//", expect:/\n\/\//},
    //     {input:"/\\n\\/\\/abc/", expect:/\n\/\/abc/},
    //     {input:"/[^-a]/", expect:/[^-a]/}
    //   ].forEach(function (testCase) {
    //     it(`should ident is ${testCase.expect.toString()} when the value is ${testCase.input.toString()}`, function () {
    //       var ident = cssParser.parse(testCase.input)[0][1][0].ident;
    //       assert.equal(ident.toString(), testCase.expect.toString());
    //     });
    //   });
    // });
  });
  describe('Rule pseudo_class', function () {
    describe('Token Float', function () {
      [
        {input: ':method(.1e1)', expect: 1},
        {input: ':method(.123)', expect: 0.123}
      ].forEach(function(testCase) {
        it(`should val is ${testCase.expect.toString()} when the value is ${testCase.input.toString()}`, function () {
          var value = cssParser.parse(testCase.input)[0][1][0].args[0];
          assert.equal(value, testCase.expect);
        });
      });
    });
    describe('Token Decimal', function () {
      [
        {input: ':method(1.1e1)', expect: 11},
        {input: ':method(1.123)', expect: 1.123},
        {input: ':method(1123)', expect: 1123}
      ].forEach(function(testCase) {
        it(`should val is ${testCase.expect.toString()} when the value is ${testCase.input.toString()}`, function () {
          var value = cssParser.parse(testCase.input)[0][1][0].args[0];
          assert.equal(value, testCase.expect);
        });
      });
    });
    describe('Token Hexadecimal', function () {
      [
        {input: ':method(0X1F)', expect: 31},
        {input: ':method(0x2F)', expect: 47}
      ].forEach(function(testCase) {
        it(`should val is ${testCase.expect.toString()} when the value is ${testCase.input.toString()}`, function () {
          var value = cssParser.parse(testCase.input)[0][1][0].args[0];
          assert.equal(value, testCase.expect);
        });
      });
    });
    describe('Token Octal', function () {
      [
        {input: ':method(0O10)', expect: 8},
        {input: ':method(0o20)', expect: 16}
      ].forEach(function(testCase) {
        it(`should val is ${testCase.expect.toString()} when the value is ${testCase.input.toString()}`, function () {
          var value = cssParser.parse(testCase.input)[0][1][0].args[0];
          assert.equal(value, testCase.expect);
        });
      });
    });
    describe('Token Binary', function () {
      [
        {input: ':method(0B11)', expect: 3},
        {input: ':method(0b111)', expect: 7}
      ].forEach(function(testCase) {
        it(`should val is ${testCase.expect.toString()} when the value is ${testCase.input.toString()}`, function () {
          var value = cssParser.parse(testCase.input)[0][1][0].args[0];
          assert.equal(value, testCase.expect);
        });
      });
    });
    describe('Token Otcal-vs-decimal', function () {
      [
        {input: ':method(008)', expect: 8},
        {input: ':method(017)', expect: 15}
      ].forEach(function(testCase) {
        it(`should val is ${testCase.expect.toString()} when the value is ${testCase.input.toString()}`, function () {
          var value = cssParser.parse(testCase.input)[0][1][0].args[0];
          assert.equal(value, testCase.expect);
        });
      });
    });
    describe('Token Number', function () {
      [
        {input: ':method(+.1e1)', expect: 1},
        {input: ':method(-.123)', expect: -0.123},
        {input: ':method(+1.1e1)', expect: 11},
        {input: ':method(-1.1e-1)', expect: -0.11},
        {input: ':method(+1.123)', expect: 1.123},
        {input: ':method(-1123)', expect: -1123},
        {input: ':method(+0X1F)', expect: 31},
        {input: ':method(-0x2F)', expect: -47},
        {input: ':method(+0O10)', expect: 8},
        {input: ':method(-0o20)', expect: -16},
        {input: ':method(+0B11)', expect: 3},
        {input: ':method(-0b111)', expect: -7},
        {input: ':method(+008)', expect: 8},
        {input: ':method(-017)', expect: -15}
      ].forEach(function(testCase) {
        it(`should val is ${testCase.expect.toString()} when the value is ${testCase.input.toString()}`, function () {
          var value = cssParser.parse(testCase.input)[0][1][0].args[0];
          assert.equal(value, testCase.expect);
        });
      });
    });
    describe('Arguments', function () {
      [
        {input: ':method(+.1e1)', expect: [+.1e1]},
        {input: ':method(  +.1e1, +.1e1 )', expect: [+.1e1, +.1e1]},
        {input: ':method(+.1e1, +.1e1 , "123" )', expect: [+.1e1, +.1e1, "123"]}
      ].forEach(function(testCase) {
        it(`should val is ${testCase.expect.toString()} when the value is ${testCase.input.toString()}`, function () {
          var args = cssParser.parse(testCase.input)[0][1][0].args;
          assert.equal(args.join(), testCase.expect.join());
        });
      });
    });
  });
});
