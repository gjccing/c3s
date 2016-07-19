import cssParser from '../src/css-parser.pegjs';
import {assert} from 'chai';

describe('cssParser', function() {

  describe('Token', function () {
    describe('S', function () {
      it(`in pseudo_class`, function () {
        var token = cssParser.parse(":test(1 ,  1   )")[0][1][0].toString();
        assert.equal(token, ':test(1,1)');
      });
      it(`in attrib`, function () {
        var token = cssParser.parse("[attr =  ''   i    ]")[0][1][0].toString();
        assert.equal(token, '[attr="" i]');
      });
      it(`between combinator`, function () {
        var token = cssParser.parse("div > span").toString();
        assert.equal(token, ' div>span');
      });
      it(`be combinator`, function () {
        var token = cssParser.parse(" div span")[0][2].toString();
        assert.equal(token, ' ');
      });
      it(`in scope_relative_selector_list`, function () {
        var token = cssParser.parse("a,a  , a").toString();
        assert.equal(token, ' a, a, a');
      });
    });
    describe('NUMBER', function () {
      describe('SING', function () {
        it(`in INDEX`, function () {
          var token = cssParser.parse(":test(1e-1)")[0][1][0].toString();
          assert.equal(token, ':test(0.1)');
        });
        describe('at beginning of NUMBER', function () {
          
          it(`with FLOAT`, function () {
            var token = cssParser.parse(":test(+.10)")[0][1][0].toString();
            assert.equal(token, ':test(0.1)');
          });
          it(`with DECIMAL`, function () {
            var token = cssParser.parse(":test(-10)")[0][1][0].toString();
            assert.equal(token, ':test(-10)');
          });
          it(`with HEXADECIMAL`, function () {
            var token = cssParser.parse(":test(+0x10)")[0][1][0].toString();
            assert.equal(token, ':test(16)');
          });
          it(`with OCTAL`, function () {
            var token = cssParser.parse(":test(-0o10)")[0][1][0].toString();
            assert.equal(token, ':test(-8)');
          });
          it(`with BINARY`, function () {
            var token = cssParser.parse(":test(+0b10)")[0][1][0].toString();
            assert.equal(token, ':test(2)');
          });
          it(`INFINITY`, function () {
            var token = cssParser.parse(":test(-Infinity)")[0][1][0].toString();
            assert.equal(token, ':test(-Infinity)');
          });
          it(`NaN`, function () {
            var token = cssParser.parse(":test(+NaN)")[0][1][0].toString();
            assert.equal(token, ':test(NaN)');
          });
        })
      });
      describe('FLOAT', function () {
        it(`without INDEX`, function () {
          var token = cssParser.parse(":test(.0101)")[0][1][0].toString();
          assert.equal(token, ':test(0.0101)');
        });
        it(`with INDEX`, function () {
          var token = cssParser.parse(":test(.0101e2)")[0][1][0].toString();
          assert.equal(token, ':test(1.01)');
        });
      });
      describe('DECIMAL', function () {
        it(`integer`, function () {
          var token = cssParser.parse(":test(100)")[0][1][0].toString();
          assert.equal(token, ':test(100)');
        });
        it(`float`, function () {
          var token = cssParser.parse(":test(100.01)")[0][1][0].toString();
          assert.equal(token, ':test(100.01)');
        });
        it(`with INDEX`, function () {
          var token = cssParser.parse(":test(100e-2)")[0][1][0].toString();
          assert.equal(token, ':test(1)');
        });
        it(`OCTAL case, beginning with 0`, function () {
          var token = cssParser.parse(":test(010)")[0][1][0].toString();
          assert.equal(token, ':test(8)');
        });
      });
      describe('HEXADECIMAL', function () {
        it(`with "X"`, function () {
          var token = cssParser.parse(":test(0X10)")[0][1][0].toString();
          assert.equal(token, ':test(16)');
        });
        it(`with "x"`, function () {
          var token = cssParser.parse(":test(0x10)")[0][1][0].toString();
          assert.equal(token, ':test(16)');
        });
      });
      describe('OCTAL', function () {
        it(`with "O"`, function () {
          var token = cssParser.parse(":test(0X10)")[0][1][0].toString();
          assert.equal(token, ':test(16)');
        });
        it(`with "o"`, function () {
          var token = cssParser.parse(":test(0x10)")[0][1][0].toString();
          assert.equal(token, ':test(16)');
        });
      });
      describe('BINARY', function () {
        it(`with "B"`, function () {
          var token = cssParser.parse(":test(0B10)")[0][1][0].toString();
          assert.equal(token, ':test(2)');
        });
        it(`with "b"`, function () {
          var token = cssParser.parse(":test(0b10)")[0][1][0].toString();
          assert.equal(token, ':test(2)');
        });
      });
      it(`INFINITY`, function () {
        var token = cssParser.parse(":test(Infinity)")[0][1][0].toString();
        assert.equal(token, ':test(Infinity)');
      });
      it(`NaN`, function () {
        var token = cssParser.parse(":test(NaN)")[0][1][0].toString();
        assert.equal(token, ':test(NaN)');
      });
    });
    describe('String', function () {
      it(`String1`, function () {
        var token = cssParser.parse(`:test("string")`)[0][1][0].toString();
        assert.equal(token, ':test("string")');
      });
      it(`String2`, function () {
        var token = cssParser.parse(`:test('string')`)[0][1][0].toString();
        assert.equal(token, ':test("string")');
      });
      it(`with "\\."`, function () {
        var token = cssParser.parse(`:test('\\'\\\t')`)[0][1][0].toString();
        assert.equal(token, ':test("\'\t")');
      });
    });
    describe('REGEX', function () {
      it(`with "\\."`, function () {
        var token = cssParser.parse(`:test(/\\n\\s\\t/)`)[0][1][0].toString();
        assert.equal(token, ':test(/\\n\\s\\t/)');
      });
      it(`with flag`, function () {
        var token = cssParser.parse(`:test(/\\n\\s\\t/i)`)[0][1][0].toString();
        assert.equal(token, ':test(/\\n\\s\\t/i)');
      });
    });
    describe('IDENT', function () {
      it(`when value is div`, function () {
        var token = cssParser.parse(`div`)[0][1][0].toString();
        assert.equal(token, 'div');
      });
      it(`when value is _$div`, function () {
        var token = cssParser.parse(`_$div`)[0][1][0].toString();
        assert.equal(token, '_$div');
      });
      it(`when value is 中文`, function () {
        var token = cssParser.parse(`中文`)[0][1][0].toString();
        assert.equal(token, '中文');
      });
      it(`when value is 0div, should throw exception`, function () {
        try {
          var token = cssParser.parse(`0div`)[0][1][0].toString();
        } catch (e) {
          assert(true);
        }
      });
    });
    describe('PROP', function () {
      it(`when value is letter0123`, function () {
        var token = cssParser.parse(`letter0123`)[0][1][0].toString();
        assert.equal(token, 'letter0123');
      });
      it(`when value is "0001"`, function () {
        var token = cssParser.parse(`"0001"`)[0][1][0].toString();
        assert.equal(token, '0001');
      });
    });
    describe('ATTRIB_FLAGS', function () {
      it(`letters`, function () {
        var token = cssParser.parse(`[attr="A" flag]`)[0][1][0].flag.join('');
        assert.equal(token, 'flag');
      });
    });
    describe('ATTRIB_MATCH', function () {
      it(`=`, function () {
        var token = cssParser.parse(`[attr="A"]`)[0][1][0].operator;
        assert.equal(token, '=');
      });
      it(`^=`, function () {
        var token = cssParser.parse(`[attr^="A"]`)[0][1][0].operator;
        assert.equal(token, '^=');
      });
      it(`$=`, function () {
        var token = cssParser.parse(`[attr$="A"]`)[0][1][0].operator;
        assert.equal(token, '$=');
      });
      it(`*=`, function () {
        var token = cssParser.parse(`[attr*="A"]`)[0][1][0].operator;
        assert.equal(token, '*=');
      });
    });
    describe('VALUE', function () {
      it(`in attrib`, function () {
        var token = cssParser.parse(`[attr=123]`)[0][1][0].value;
        assert.equal(token, '123');
      });
      it(`in pseudo_class`, function () {
        var token = cssParser.parse(`:test(123,"str",/regexp/g)`)[0][1][0].args;
        assert.strictEqual(token[0], 123);
        assert.strictEqual(token[1], 'str');
        assert.deepEqual(token[2], /regexp/g);
      });
    });
  });
  
  describe('Statement', function () {
    describe('pseudo_class', function () {
      it(`without argument`, function () {
        var token = cssParser.parse(":test")[0][1][0];
        assert.equal(token.ident, 'test');
        assert.deepEqual(token.args, []);
      });
      it(`with arguments`, function () {
        var token = cssParser.parse(":test(1, '1', /1/)")[0][1][0];
        assert.equal(token.ident, 'test');
        assert.deepEqual(token.args, [1,'1',/1/]);
      });
    });
    describe('attrib', function () {
      it(`without value and flags`, function () {
        var token = cssParser.parse("[attr]")[0][1][0];
        assert.equal(token.ident, 'attr');
        assert.equal(token.operator, undefined);
        assert.equal(token.value, undefined);
        assert.deepEqual(token.flag, undefined);
      });
      it(`use STRING`, function () {
        var token = cssParser.parse("['attr']")[0][1][0];
        assert.equal(token.ident, 'attr');
        assert.equal(token.operator, undefined);
        assert.equal(token.value, undefined);
        assert.deepEqual(token.flag, undefined);
      });
      it(`with "=" operator`, function () {
        var token = cssParser.parse("[attr=123]")[0][1][0];
        assert.equal(token.ident, 'attr');
        assert.equal(token.operator, '=');
        assert.equal(token.value, 123);
        assert.deepEqual(token.flag, undefined);
      });
      it(`with "^=" operator`, function () {
        var token = cssParser.parse("[attr^=123]")[0][1][0];
        assert.equal(token.ident, 'attr');
        assert.equal(token.operator, '^=');
        assert.equal(token.value, 123);
        assert.deepEqual(token.flag, undefined);
      });
      it(`with "$=" operator`, function () {
        var token = cssParser.parse("[attr$=123]")[0][1][0];
        assert.equal(token.ident, 'attr');
        assert.equal(token.operator, '$=');
        assert.equal(token.value, 123);
        assert.deepEqual(token.flag, undefined);
      });
      it(`with "*=" operator`, function () {
        var token = cssParser.parse("[attr*=123]")[0][1][0];
        assert.equal(token.ident, 'attr');
        assert.equal(token.operator, '*=');
        assert.equal(token.value, 123);
        assert.deepEqual(token.flag, undefined);
      });
      it(`with flags`, function () {
        var token = cssParser.parse("[attr=123 i]")[0][1][0];
        assert.equal(token.ident, 'attr');
        assert.equal(token.operator, '=');
        assert.equal(token.value, 123);
        assert.deepEqual(token.flag, ['i']);
      });
    });
    describe('class', function () {
      it(`when value is .div`, function () {
        var token = cssParser.parse(`.div`)[0][1][0];
        assert.equal(token.ident, 'div');
      });
      it(`when value is ._$div`, function () {
        var token = cssParser.parse(`._$div`)[0][1][0];
        assert.equal(token.ident, '_$div');
      });
      it(`when value is .中文`, function () {
        var token = cssParser.parse(`.中文`)[0][1][0];
        assert.equal(token.ident, '中文');
      });
    });
    describe('id', function () {
      it(`when value is NUMBER`, function () {
        var token = cssParser.parse(`#3000`)[0][1][0];
        assert.strictEqual(token.ident, 3000);
      });
      it(`when value is STRING`, function () {
        var token = cssParser.parse(`#"EX-1"`)[0][1][0];
        assert.strictEqual(token.ident, 'EX-1');
      });
      it(`when value is IDENT`, function () {
        var token = cssParser.parse(`#test`)[0][1][0];
        assert.strictEqual(token.ident, 'test');
      });
    });
    describe('prop', function () {
      it(`when value is STRING`, function () {
        var token = cssParser.parse(`"EX-1"`)[0][1][0];
        assert.strictEqual(token.ident, 'EX-1');
      });
      it(`when value is IDENT`, function () {
        var token = cssParser.parse(`test`)[0][1][0];
        assert.strictEqual(token.ident, 'test');
      });
      it(`when value is *`, function () {
        var token = cssParser.parse(`*`)[0][1][0];
        assert.strictEqual(token.ident, '*');
      });
    });
    describe('compound_selector', function () {
      it(`pseudo_class only`, function () {
        var token = cssParser.parse(`:test1:test2(2)`)[0][1];
        assert.equal(token[0].ident, 'test1');
        assert.deepEqual(token[0].args, []);
        assert.equal(token[1].ident, 'test2');
        assert.deepEqual(token[1].args, [2]);
      });
      it(`exclude prop`, function () {
        var token = cssParser.parse(`#id.class1.class2:test1:test2(2)`)[0][1];
        assert.equal(token[0].ident, 'id');
        assert.equal(token[1].ident, 'class1');
        assert.equal(token[2].ident, 'class2');
        assert.equal(token[3].ident, 'test1');
        assert.deepEqual(token[3].args, []);
        assert.equal(token[4].ident, 'test2');
        assert.deepEqual(token[4].args, [2]);
      });
      it(`with all`, function () {
        var token = cssParser.parse(`prop#id.class1.class2:test1:test2(2)`)[0][1];
        assert.equal(token[0].ident, 'prop');
        assert.equal(token[1].ident, 'id');
        assert.equal(token[2].ident, 'class1');
        assert.equal(token[3].ident, 'class2');
        assert.equal(token[4].ident, 'test1');
        assert.deepEqual(token[4].args, []);
        assert.equal(token[5].ident, 'test2');
        assert.deepEqual(token[5].args, [2]);
      });
    });
    describe('combinator', function () {
      it(`" "`, function () {
        var token = cssParser.parse(`div a`)[0][2];
        assert.strictEqual(token.operator, ' ');
      });
      it(`">"`, function () {
        var token = cssParser.parse(`div>a`)[0][2];
        assert.strictEqual(token.operator, '>');
      });
      it(`"~"`, function () {
        var token = cssParser.parse(`div~a`)[0][2];
        assert.strictEqual(token.operator, '~');
      });
    });
    describe('scope_relative_selector', function () {
      it(`when statement is "div span :test1"`, function () {
        var token = cssParser.parse(`div>a`)[0].toString();
        assert.equal(token, ' div>a');
      });
      it(`when statement beginning of combinator`, function () {
        var token = cssParser.parse(`>div span`)[0].toString();
        assert.equal(token, '>div span');
      });
      it(`if statment beginning isn't combinator, insert " " combinator`, function () {
        var token = cssParser.parse(`div~a`)[0].toString();
        assert.equal(token, ' div~a');
      });
    });
    describe('scope_relative_selector_list', function () {
      it(`a relative selector`, function () {
        var token = cssParser.parse(`div~a`).toString();
        assert.equal(token, ' div~a');
      });
      it(`multi relative selectors`, function () {
        var token = cssParser.parse(`div, span,p b`).toString();
        assert.equal(token, ' div, span, p b');
      });
    });
  });
});
