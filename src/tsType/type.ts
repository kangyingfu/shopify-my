// 声明变量 type
type str = string;
type num = number;
type bool = boolean;
type und = undefined;
type nul = null;
type fn = (a: number, b: number) => number;
type sd = number & str;
type sd1 = number | str;
type gerner = '男' | '女';
type obj =
  | sd
  | {
      name: string;
    };
// 接口 interface
interface per {
  name: string;
}
// 继承 extends
interface pp extends per {
  art: number;
}
// 枚举 enum
enum option {
  up,
  down,
  left,
  right,
}
enum options {
  up = 100,
  down,
  left,
  right,
  //   down = null,  // ×
  //   left = undefined, // ×
  //   right = {},  // ×
}
// 枚举一般用于 死值  已知有多少选项的情况下可用
// 因为 如果设置某一个值为数字，那么他下面的值在未赋值的情况下，会以上一个的值自增+1
// 枚举也可以赋值其他简单类型，且不能为null undefined {} [] 等，只能用简单类型的值设置 例如 1 "1",和下拉框有点像
// 打印结果 100，101，102，103

// 注意 num的ts类型必须是枚举类型，调用函数的时候才能用枚举对象做传参
function io(num: option) {
  console.log(num);
}
io(option.up);

// const 定义的类型是字面量类型

// any类型
const a = document.querySelector('a');
console.dir('打印元素标签', a); // 可以看到元素的属性，console.log 看不到

// 类型断言  as
// HTMLAnchorElement 这个值是同个dir控制台打印元素后找到的类型
const b = document.querySelector('a') as HTMLAnchorElement;
// 没有正确的类型断言无法使用元素自带属性
b && b.href;

// 泛型
// <T> 声明泛型
// :T 使用泛型
function fanxin<T>(a: T) {
  console.log(a);
}
//简单和复杂类型都可以
fanxin<number>(1);

// 指定更加具体的泛型类型
function fanxin1<T>(a: T[]) {
  console.log(a);
}
//简单和复杂类型都可以
fanxin1<number>([1, 2]);

// 泛型可以继承接口 interface
interface baba {
  length: number;
  say?: () => void;
}
// 函数无返回值 void
// 泛型可以继承，可以约束传入的参数有那些属性，复杂类型等
function fanxin2<T extends baba>(a: T): void {
  console.log(a.length);
}
// 这边传入的就必须满足 传入的值必须有length属性
fanxin2<number[]>([12, 35]);

// -----
//  泛型可以继承接口 interface
interface baba {
  length: number;
  say?: () => void;
}
// 函数无返回值 void
// 泛型可以继承，可以约束传入的参数有那些属性，复杂类型等
// 多个泛型约束方式
function fanxin3<T extends baba, G>(a: T, b: G): void {
  console.log(a.length, b);
}
// 这边传入的就必须满足 传入的值必须有length属性
fanxin3<number[], string>([12, 35], '123');

// 关键字 keyof
// K extends keyof O  K继承与O，且K的值必须是O有的K
function fanxin4<O, K extends keyof O>(obj: O, str: K) {
  return obj[str];
}
fanxin4({ name: '张三' }, 'name');

// keyof 限制定义某个值是否是包含在某个的key值--
type op = {
  name: string;
};
const ab: op = { name: '123' };
// const ios: keyof op = 'cccc'; // x
const ios: keyof op = 'name'; // x
const cc = ab[ios];

//泛型接口 ioue<T, G>  T,G是泛型
interface ioue<T, G> {
  id: T;
  name: string;
}
// 泛型套泛型 实验ok
interface ioue1<O, P> extends ioue<string, number> {
  age: O;
  name1: P;
}

// 声明变量
type uiy<L> = {
  name: L;
};
const qe: uiy<number> = {
  name: 123,
};
// ---

const uu: ioue<string, number> = {
  id: '123',
  name: 'str',
};
console.log(uu);
const uu1: ioue1<string, string> = {
  id: '123',
  name: 'str',
  age: 'oue',
  name1: '893',
};
console.log(uu1);

// 类型声明文件 文件后缀用 .d.ts 方便别人一眼看出
// 给老项目加ts  给原始变量设置ts类型
// 通过declare 关键字给aa定义类型
// declare const aa: number;
// declare function aa(x: number) {}; 可以不写declare 关键字
// 但是箭头函数定义类型不太一样
type acd = (n: number) => void;
declare const acd: acd;
// 老项目文件定义aa且赋值10
// const aa = 10;

// 使用pinay 导出命令最好用use开头
// never 不存在的类型或达不到期望的类型

export { str, num, bool, und, nul, fn };
